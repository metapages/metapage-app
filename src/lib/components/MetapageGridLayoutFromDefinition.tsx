import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import React, {
  ComponentType,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import hash from 'object-hash';
import GridLayout, {
  Layout,
  WidthProvider,
} from 'react-grid-layout';

import {
  Metapage,
  MetapageDefinitionV3,
  MetapageEventDefinition,
  MetapageEvents,
  MetapageInstanceInputs,
  pageLoaded,
} from '@metapages/metapage';

import { MetaframeIframe } from './MetaframeIframe.js';

export const ResizingGridLayout = WidthProvider(GridLayout);
export const DEFAULT_ROW_HEIGHT = 100;

/**
 * Create a grid layout metapage from a metapage definition
 */
export const MetapageGridLayoutFromDefinition: React.FC<{
  definition?: MetapageDefinitionV3;
  inputs?: MetapageInstanceInputs;
  onOutputs?: (outputs: MetapageInstanceInputs) => void;
  onDefinition?: (e: MetapageDefinitionV3) => void;
  onMetapage?: (m: Metapage) => void;
  Wrapper?: ComponentType<any>;
  ErrorWrapper?: ComponentType<any>;
  debug?: boolean;
  disableEditing?: boolean;
}> = ({
  onMetapage,
  definition,
  inputs,
  onOutputs,
  onDefinition,
  disableEditing,
  debug,
  Wrapper,
  ErrorWrapper,
}) => {
  const definitionRef = useRef<{
    definition: MetapageDefinitionV3;
    hash?: string;
  }>();
  const [definitionInternal, setDefinitionInternal] = useState<
    MetapageDefinitionV3 | undefined
  >();
  const [metapageInternal, setMetapageInternal] = useState<
    Metapage | undefined
  >();
  const [error, setError] = useState<any | undefined>();

  // Make sure incoming definitions are not duplicates of the current definition
  useEffect(() => {
    if (!definition) {
      definitionRef.current = undefined;
      setDefinitionInternal(undefined);
      return;
    }

    if (!definitionRef.current) {
      definitionRef.current = { definition };
      // churn because the incoming might be immutable, but the metapage
      // modifies the internal definition and re-emits it
      // That might be bad but it's how its done right now
      setDefinitionInternal(JSON.parse(JSON.stringify(definition)));
    } else {
      // lazily compute hashes only once
      if (!definitionRef.current.hash) {
        definitionRef.current.hash = hash(definitionRef.current.definition);
      }
      const hashDefinition = hash(definition);
      if (hashDefinition !== definitionRef.current.hash) {
        definitionRef.current = { definition, hash: hashDefinition };
        // See comment above about churn
        setDefinitionInternal(JSON.parse(JSON.stringify(definition)));
      }
    }
  }, [definition, setDefinitionInternal, definitionRef]);

  // create the metapage and bind
  useEffect(() => {
    setError(undefined);
    if (!definitionInternal) {
      return;
    }
    let cancelled = false;
    let metapageNew:Metapage|undefined;
    (async () => {
      if (cancelled) {
        return;
      }

      // now actually create the metapage
      await pageLoaded();
      if (cancelled) {
        return;
      }
      metapageNew = new Metapage();
      metapageNew.debug = debug!!;
      try {
        metapageNew.setDefinition(definitionInternal);
      } catch (err) {
        setMetapageInternal(undefined);
        setError(err);
        return;
      }

      setMetapageInternal(metapageNew);
      onMetapage?.(metapageNew);
    })();

    return () => {
      cancelled = true;
      metapageNew?.dispose();
    };
  }, [
    onMetapage,
    definitionInternal,
    setMetapageInternal,
    setError,
    debug,
    definitionRef,
  ]);

  // listeners: metapage events
  useEffect(() => {
    if (!metapageInternal) {
      return;
    }
    const disposers: (() => void)[] = [];
    disposers.push(
      metapageInternal.addListenerReturnDisposer(MetapageEvents.Error, setError)
    );
    if (onOutputs) {
      disposers.push(
        metapageInternal.addListenerReturnDisposer(
          MetapageEvents.Outputs,
          onOutputs
        )
      );
    }
    if (onDefinition) {
      disposers.push(
        metapageInternal.addListenerReturnDisposer(
          MetapageEvents.Definition,
          (e: MetapageEventDefinition) => {
            // Update the local definitionRef that is authoritative on what
            // is actually running, so incoming updates don't unnecessarily
            // clobber (and cause ugly re-renders)
            // This update comes from internal metaframe URL updates, so there's
            // no need to trigger a re-render
            definitionRef.current = { definition: e.definition };
            onDefinition(e.definition);
          }
        )
      );

      // update our definition if a plugin sets it
      disposers.push(
        (() => {
          const listener = (definition: MetapageDefinitionV3) => {
            // if a plugin modifies the definition, update the hash param that is the source of truth
            definitionRef.current = { definition };
            onDefinition(definition);
          };
          return metapageInternal.addListenerReturnDisposer(
            MetapageEvents.DefinitionUpdateRequest,
            listener
          );
        })()
      );
    }

    return () => {
      while (disposers.length > 0) {
        const disposer = disposers.pop();
        if (disposer) {
          disposer();
        }
      }
    };
  }, [metapageInternal, onOutputs, onDefinition, setError]);

  // listeners: inputs
  useEffect(() => {
    if (metapageInternal && !metapageInternal.isDisposed() && inputs) {
      metapageInternal.setInputs(inputs);
    }
  }, [metapageInternal, inputs]);

  const defaultLayout = !metapageInternal
    ? []
    : Object.keys(metapageInternal.getMetaframes()).map((metaframeId, i) => {
        return {
          i: metaframeId,
          x: i % 2 === 0 ? 0 : 6,
          y: Math.floor(i / 2),
          w: 6,
          h: 2,
        };
      });

  const rowHeight =
    (metapageInternal &&
      definitionInternal?.meta?.layouts?.["react-grid-layout"]?.props
        ?.rowHeight) ||
    DEFAULT_ROW_HEIGHT;
  const containerPadding = (metapageInternal &&
    definitionInternal?.meta?.layouts?.["react-grid-layout"]?.props
      ?.containerPadding) || [5, 5];
  const cols =
    (metapageInternal &&
      definitionInternal?.meta?.layouts?.["react-grid-layout"]?.props?.cols) ||
    12;
  const margin = (metapageInternal &&
    definitionInternal?.meta?.layouts?.["react-grid-layout"]?.props
      ?.margin) || [10, 20];
  let layout: Layout[] =
    metapageInternal &&
    definitionInternal?.meta?.layouts?.["react-grid-layout"]?.layout
      ? [...definitionInternal?.meta?.layouts?.["react-grid-layout"]?.layout]
      : defaultLayout;

  const onLayoutChange = useCallback(
    (layout: Layout[]) => {
      if (!onDefinition || !definitionInternal) {
        return;
      }

      // The passed in definition could be immutable, so we need to clone it
      const newDefinition: MetapageDefinitionV3 = JSON.parse(
        JSON.stringify(definitionInternal)
      );
      newDefinition.meta = newDefinition.meta || {};
      newDefinition.meta.layouts = newDefinition.meta.layouts || {};

      const reactGridLayout = {
        docs: "https://www.npmjs.com/package/react-grid-layout",
        props: {
          cols,
          margin,
          rowHeight,
          containerPadding,
        },
        layout,
      };
      newDefinition.meta.layouts["react-grid-layout"] = reactGridLayout;
      onDefinition(newDefinition);
    },
    [onDefinition, definitionInternal]
  );

  if (error) {
    if (ErrorWrapper) {
      return <ErrorWrapper error={error} />;
    } else {
      return <div>Error: {`${error}`}</div>;
    }
  }

  return (
    <ResizingGridLayout
      layout={layout}
      // isBounded={grid.bounded}
      isDraggable={!disableEditing}
      isResizable={!disableEditing}
      className="layout"
      cols={cols}
      containerPadding={containerPadding}
      rowHeight={rowHeight}
      margin={margin}
      onLayoutChange={onLayoutChange}
      // onResizeStop={resizeStop}
      // onDragStop={onDragStop}
      // draggableHandle=".widget-drag-handle"
    >
      {!metapageInternal
        ? []
        : Object.keys(metapageInternal.getMetaframes()).map((metaframeId, i) =>
            Wrapper ? (
              <Wrapper key={metaframeId}>
                <MetaframeIframe
                  key={metaframeId}
                  metaframe={metapageInternal.getMetaframes()[metaframeId]}
                  height={`${
                    rowHeight * (layout.find((v) => v.i === metaframeId)?.h || 1)
                  }px`}
                />
              </Wrapper>
            ) : (
              <div key={metaframeId}>
                <MetaframeIframe
                  key={metaframeId}
                  height={`${
                    rowHeight * (layout.find((v) => v.i === metaframeId)?.h || 1)
                  }px`}
                  metaframe={metapageInternal.getMetaframes()[metaframeId]}
                />
              </div>
            )
          )}
    </ResizingGridLayout>
  );
};
