/**
 * Data flow:
 *  - if hash parameter "url" for a url to a metapage.json file
 * 		- if there, load it
 * 		- if an error, show the error at the top
 *  - elseif check hash parameter "definition" for an encoded metapage json blob
 * 		- if there, load it
 * 		- if an error, show the error at the top
 * 		- also show the json in the help text box
 *  - else show the help
 */
import { SetHashParamOpts, useHashParam, useHashParamJson } from '@metapages/hash-query';
import { convertMetapageDefinitionToCurrentVersion, MetapageDefinitionV1, MetapageDefinitionV3 } from '@metapages/metapage';
import objectHash from 'object-hash';
import { useEffect, useState } from 'react';


export const metapageDefinitionFromUrl: () => [
  MetapageDefinitionV3 | null,
  (
    definition: MetapageDefinitionV3 | undefined,
    opts?: SetHashParamOpts
  ) => void,
  any
] = () => {
  const [url, setUrl] = useHashParam("url", undefined as any);
  const [error, setError] = useState<any>(undefined);
  const [metapageDefinition, setMetapageDefinition] =
    useState<MetapageDefinitionV3 | null>(null);
  const [metapageDefinitionUrl, setMetapageDefinitionUrl] = useState<
    { definition: MetapageDefinitionV3; url: string } | undefined
  >(undefined);
  const [metapageDefinitionBase64, setMetapageDefinitionBase64] =
    useHashParamJson<MetapageDefinitionV3>("definition");

  // - if there is a *just* a URL hash param: https://app.metapages.org/#url=<url>
  //   - then use the url definition
  // - if there is https://app.metapages.org/#definition=<base64>
  //   - then use the base64 definition
  //   - if there is a url param also, remove it

  // url => metapageDefinitionUrl
  useEffect(() => {
    // bail early maybe, but also clean up
    if ((!url || url.length === 0) && metapageDefinitionUrl) {
      setMetapageDefinitionUrl(undefined);
    }

    if (!url || url.length === 0) {
      if (typeof url === "string") {
        setUrl(undefined as any);
      }
      return;
    }

    // if no url or we already have the definition, bail
    if (metapageDefinitionUrl?.url === url) {
      return;
    }

    // load #url=<url>
    const thisUrl = url;
    (async () => {
      try {
        const definition: MetapageDefinitionV3 | undefined =
          await getMetapageDefinitionFromUrl(thisUrl);
        if (!definition) {
          throw `No MetapageDefinition found at: ${thisUrl}`;
        }
        setMetapageDefinitionUrl({ url: thisUrl, definition });
      } catch (err: any) {
        console.error(err);
        //  setAlert({
        //    level: "error",
        //    message: `${err}`,
        //  });
        setMetapageDefinitionUrl(undefined);
      }
    })();
  }, [
    alert,
    url,
    metapageDefinitionUrl,
    setMetapageDefinitionUrl,
    setUrl,
    status,
  ]);

  // if both exist #definition=<base64> #url=<url> then remove #url=<url>
  useEffect(() => {
    if (typeof url === "string" && metapageDefinitionBase64) {
      setUrl(undefined as any);
    }
  }, [url, setUrl, metapageDefinitionBase64]);

  // choose the metapage definition or delete it
  useEffect(() => {
    // base64 always has priority (and if both, the url param will be removed)
    const newMetapageDefinition: MetapageDefinitionV3 | undefined =
      metapageDefinitionBase64 || metapageDefinitionUrl?.definition;
    if (!newMetapageDefinition) {
      if (metapageDefinition) {
        setMetapageDefinition(null);
      }
      return;
    }

    if (
      objectHash.sha1(metapageDefinition) !==
      objectHash.sha1(newMetapageDefinition)
    ) {
      setMetapageDefinition(newMetapageDefinition);
    }
  }, [
    metapageDefinitionUrl,
    metapageDefinitionBase64,
    metapageDefinition,
    setMetapageDefinition,
  ]);

  return [metapageDefinition, setMetapageDefinitionBase64, error];
};

const getMetapageDefinitionFromUrl = async (
  url: string
): Promise<MetapageDefinitionV1 | undefined> => {
  if (!url.endsWith(".json")) {
    if (!url.endsWith("/")) {
      url += "/";
    }
    url += "metapage.json";
  }
  const response = await fetch(url, {});
  let metapageDefinition: any = await response.json();
  metapageDefinition =
    await convertMetapageDefinitionToCurrentVersion(metapageDefinition);
  return metapageDefinition;
};
