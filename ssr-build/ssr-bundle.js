module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JxD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/iframes.css
var iframes = __webpack_require__("/JxD");
var iframes_default = /*#__PURE__*/__webpack_require__.n(iframes);

// EXTERNAL MODULE: ../node_modules/siimple/dist/siimple.css
var siimple = __webpack_require__("M0/P");
var siimple_default = /*#__PURE__*/__webpack_require__.n(siimple);

// EXTERNAL MODULE: ../node_modules/flexboxgrid/dist/flexboxgrid.css
var flexboxgrid = __webpack_require__("MOar");
var flexboxgrid_default = /*#__PURE__*/__webpack_require__.n(flexboxgrid);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/metapage/index.js
var node_modules_metapage = __webpack_require__("TdZ5");
var metapage_default = /*#__PURE__*/__webpack_require__.n(node_modules_metapage);

// CONCATENATED MODULE: ./components/header/index.js



var getMetapageName = function getMetapageName(_ref) {
	var definition = _ref.definition,
	    url = _ref.url;

	var meta = definition ? definition.meta : null;
	return meta && meta.name ? meta.name : url ? url : 'Metapage Application';
};

var header_Header = function Header(props) {
	return Object(preact_min["h"])(
		'header',
		null,
		Object(preact_min["h"])(
			'h1',
			null,
			getMetapageName(props)
		)
	);
};

/* harmony default export */ var components_header = (header_Header);
// CONCATENATED MODULE: ./components/help.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _ref = Object(preact_min["h"])(
    'div',
    { 'class': 'siimple-card-header' },
    'Documentatation'
);

var _ref2 = Object(preact_min["h"])(
    'div',
    { 'class': 'siimple-card-body' },
    Object(preact_min["h"])(
        'div',
        { 'class': 'siimple-h3' },
        'URL hash parameters'
    ),
    Object(preact_min["h"])(
        'pre',
        { 'class': 'siimple-pre' },
        'Example: someurl'
    ),
    Object(preact_min["h"])(
        'pre',
        { 'class': 'siimple-pre' },
        'url: points to the metapage JSON definition. base64: encoded string of the metapage JSON definition'
    )
);

var help_HelpCard = function (_Component) {
    _inherits(HelpCard, _Component);

    function HelpCard() {
        _classCallCheck(this, HelpCard);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    HelpCard.prototype.render = function render(props) {
        var examples = ['https://metapages.org/metapages/linked-molecule-viewers/metapage.json', 'https://metapages.org/metapages/dynamic-plot/metapage.json'].map(function (exampleUrl) {
            return Object(preact_min["h"])(
                'div',
                { 'class': 'siimple-btn', onClick: function onClick() {
                        props.setUrl(exampleUrl);
                    } },
                exampleUrl
            );
        });
        return Object(preact_min["h"])(
            'div',
            { 'class': 'siimple-card', style: 'max-width:600px' },
            _ref,
            _ref2,
            Object(preact_min["h"])(
                'div',
                { 'class': 'siimple-card-footer' },
                examples
            )
        );
    };

    return HelpCard;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/alert.js


function alert__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function alert__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function alert__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var alert_Alert = function (_Component) {
    alert__inherits(Alert, _Component);

    function Alert() {
        alert__classCallCheck(this, Alert);

        return alert__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Alert.prototype.render = function render(props) {
        var message = '' + props.message;
        var level = '' + props.level;
        level = level ? level : 'primary';
        var className = 'siimple-alert siimple-alert--' + level;
        return Object(preact_min["h"])(
            'div',
            { 'class': className },
            message
        );
    };

    return Alert;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/metaframe.js


function metaframe__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function metaframe__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function metaframe__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var metaframe__ref = Object(preact_min["h"])(
	"div",
	{ "class": "siimple-alert siimple-alert--error" },
	"Metaframe class is missing id prop"
);

var metaframe__ref2 = Object(preact_min["h"])(
	"div",
	{ "class": "siimple-alert siimple-alert--error" },
	"iframe is not a Node"
);

var metaframe_Metaframe = function (_Component) {
	metaframe__inherits(Metaframe, _Component);

	function Metaframe() {
		var _temp, _this, _ret;

		metaframe__classCallCheck(this, Metaframe);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = metaframe__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.shouldComponentUpdate = function () {
			return false;
		}, _temp), metaframe__possibleConstructorReturn(_this, _ret);
	}

	// ensures the metaframe iframes aren't messed with
	// tells Virtual DOM rendering/diffing algorithm that it shouldn't try to undo any external DOM mutations


	Metaframe.prototype.componentDidMount = function componentDidMount() {
		// now mounted, can freely modify the DOM:
		var iframe = this.props.iframe;
		if (iframe && iframe instanceof Node) {
			if (this.props.style && this.props.style.maxHeight) {
				iframe.style.maxHeight = this.props.style.maxHeight;
			}
			this.base.appendChild(iframe);
		}
	};

	Metaframe.prototype.render = function render(props) {
		if (!props.id) {
			return metaframe__ref;
		}
		if (!props.iframe) {
			return Object(preact_min["h"])(
				"div",
				{ "class": "siimple-alert siimple-alert--error" },
				"Missing iframe for ",
				props.id
			);
		}
		if (!(props.iframe instanceof Node)) {
			return metaframe__ref2;
		}

		// Optionally show a warning instead of the metaframe if missing required configuration
		var warning = props.iframe ? null : Object(preact_min["h"])(
			"div",
			null,
			"Missing iframe for ",
			props.id
		);
		// const style = {
		// 	maxHeight: props.maxHeight ? props.maxHeight : undefined,
		// }
		//style={style}
		var id = "iframe-container-" + props.id;
		return Object(preact_min["h"])(
			"div",
			{ "class": "iframe-container", id: id, style: props.style },
			" ",
			warning,
			" "
		);
	};

	return Metaframe;
}(preact_min["Component"]);

// export default class ViewMetaframe extends Component {
// 	render(props) {
// 		const style = props.style;
// 		// const classes = props.classes;
// 		const metaframe = <Metaframe id={props.id} iframe={props.iframe} maxHeight={props.maxHeight} />
// 		const header = props.displayName ? <div class="siimple-card-header">{props.id}</div> : undefined;
// console.log('header', header);
// console.log('props.displayName', props.displayName);
// If you return an undefined header, it still shows a stupid grey bar
// const classes = `siimple-card ${props.classes != null ? props.classes : ""}`;
// return header ?
// 	(<div class={classes} id={props.id} style={style} >
// 		{header}
// 		<div class="siimple-card-body">
// 			{metaframe}
// 		</div>
// 	</div>)
// 	:
// 	(<div class={classes} id={props.id} style={style} >
// 		<div class="siimple-card-body">
// 			{metaframe}
// 		</div>
// 	</div>);
// 	}
// }



// CONCATENATED MODULE: ./components/view_metapage.js


function view_metapage__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function view_metapage__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function view_metapage__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var getLayout = function getLayout(metapageDefinition, layoutName) {
	// console.log('getLayout metapageDefinition', metapageDefinition);
	if (metapageDefinition == null || metapageDefinition.meta == null || metapageDefinition.meta.layouts == null) {
		return null;
	}
	return metapageDefinition.meta.layouts[layoutName];
};

/**
 * If there is no layout, just dump the metaframes
 * in a simple grid, without caring about the order
 * "layouts": {
      "flexboxgrid" : {
        "version": 1,
        "docs": "http://flexboxgrid.com/",
        "layout": [
          [ {"name":"input-button", "width":"col-xs-4", "style": {"maxHeight":"400px"}}, {"url":"http://localhost:4000/metaframes/passthrough-arrow/?rotation=90", "width":"col-xs-2"}, {"name":"viewer1", "width":"col-xs-6"} ],
          [ {"name":"passthrough2", "width":"col-xs-6"}, {"name":"passthrough1", "width":"col-xs-6", "style": {"maxHeight":"100px"}} ],
          [ {"name":"viewer2", "width":"col-xs-6", "style": {"maxHeight":"400px"}} , {"name":"viewer3", "width":"col-xs-6"} ]
        ],
        "options": {
          "arrows": true
        }
      }
    }
 */
var generateDefaultLayout = function generateDefaultLayout(metapage) {
	var metaframes = metapage.metaframes();
	var metaframeIds = Object.keys(metaframes);
	var columns = 2;
	if (metaframeIds.length < 2) {
		columns = 1;
	}
	console.log('columns', columns);
	metaframeIds.sort();
	var result = [];
	var rowIndex = 0;
	var colIndex = 0;
	while (metaframeIds.length > 0) {
		if (colIndex >= columns) {
			colIndex = 0;
			rowIndex++;
		}
		if (!result[rowIndex]) {
			result[rowIndex] = [];
		}
		result[rowIndex].push({ name: metaframeIds.pop(), width: 'col-xs', style: {} });
		colIndex++;
	}
	return { layout: { layout: result }, layoutName: 'flexboxgrid' };
};

// const getCssNumber = (val, defaultVal) => {
// 	if (val) {
// 		switch(typeof(val)) {
// 			case 'number': {
// 				return val;
// 			}
// 			case 'string': {
// 				if (val.endsWith('px')) {
// 					return parseFloat(val.replace('px', ''));
// 				} else {
// 					return parseFloat(val);
// 				}
// 			}
// 		}
// 	}
// 	return defaultVal;
// }

/**
 * Generate the virtual dom of the layed out metaframes
 * @param {*} layout 
 * @param {*} metapage 
 *    "meta": {
//     "plugins": [],
//     "layouts": {
//       "flexboxgrid" : {
//         "version": 1,
//         "docs": "http://flexboxgrid.com/",
//         "layout": [
//           [ {"name":"input-button", "width":"col-xs-4", "height": "200px"}, {"name":"viewer1", "width":"col-xs-8"}  ],
//           [ {"name":"passthrough1", "width":"col-xs-6", "height": "100px"}, {"name":"viewer2", "width":"col-xs-4"} ],
//           [ {"name":"passthrough2", "width":"col-xs-4", "height": "300px"}, {"name":"viewer3", "width":"col-xs-4"} ]
//         ],
//         "options": {
//           "arrows": true
//         }
//       }
//     }
//   }
 */

var view_metapage_getFlexboxRowElementMetaframe = function getFlexboxRowElementMetaframe(params) {
	var rowElement = params.rowElement,
	    metaframes = params.metaframes,
	    defaultRowStyle = params.defaultRowStyle;

	var metaframeId = rowElement.name;
	var colClass = rowElement.width ? rowElement.width : 'col-xs';
	var itemStyle = rowElement.style ? rowElement.style : defaultRowStyle;
	var classes = 'siimple-card ' + colClass;
	var header = Object(preact_min["h"])(
		'div',
		{ 'class': 'siimple-card-header' },
		metaframeId
	);
	var id = 'siimple-card-' + metaframeId;

	itemStyle['overflowY'] = 'hidden';
	var metaframeContainer = Object(preact_min["h"])(
		'div',
		{ 'class': 'siimple-card-body siimple--mx-0 siimple--my-0 siimple--px-0 siimple--py-0', style: itemStyle },
		Object(preact_min["h"])(metaframe_Metaframe, { id: metaframeId, iframe: metaframes[metaframeId].iframe, style: itemStyle })
	);
	return header ? Object(preact_min["h"])(
		'div',
		{ 'class': classes, id: id },
		header,
		metaframeContainer
	) : Object(preact_min["h"])(
		'div',
		{ 'class': classes, id: id },
		metaframeContainer
	);
};

// This iframe is sandboxed
var view_metapage_getFlexboxRowElementUrl = function getFlexboxRowElementUrl(params) {
	var rowElement = params.rowElement,
	    defaultRowStyle = params.defaultRowStyle;
	var url = rowElement.url,
	    width = rowElement.width,
	    style = rowElement.style;

	var colClass = width ? width : 'col-xs';
	style = style ? style : defaultRowStyle;
	return Object(preact_min["h"])(
		'div',
		{ id: url, 'class': colClass },
		Object(preact_min["h"])(
			'div',
			{ 'class': 'iframe-container', style: style },
			Object(preact_min["h"])('iframe', { src: url, sandbox: 'allow-scripts' })
		)
	);
};

var getFlexboxRowElement = function getFlexboxRowElement(params) {
	if (params.rowElement.url) {
		return view_metapage_getFlexboxRowElementUrl(params);
	} else {
		return view_metapage_getFlexboxRowElementMetaframe(params);
	}
};

var view_metapage_applyLayout = function applyLayout(name, layout, metapage) {
	name = name ? name : 'flexboxgrid';
	var metaframes = metapage.metaframes();

	switch (name) {
		case 'flexboxgrid':
			// TODO process version when needed
			return layout.layout.map(function (layoutRow) {

				var defaultRowStyle = layoutRow.reduce(function (curStyle, rowElement) {
					return curStyle ? curStyle : rowElement.style;
				}, null);

				var rowElements = layoutRow.map(function (rowElement) {
					return getFlexboxRowElement({ rowElement: rowElement, metaframes: metaframes, defaultRowStyle: defaultRowStyle });
				});
				return Object(preact_min["h"])(
					'div',
					{ 'class': 'row' },
					rowElements
				);
			});
		default:
			throw 'Unknown layout: ' + name;
	}
};

var view_metapage_ViewMetapage = function (_Component) {
	view_metapage__inherits(ViewMetapage, _Component);

	function ViewMetapage() {
		view_metapage__classCallCheck(this, ViewMetapage);

		return view_metapage__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ViewMetapage.prototype.render = function render(props) {
		var metapage = props.metapage;
		var definition = props.definition;
		if (!definition) {
			console.error('NO DEFINITION IN ViewMetapage');
		}
		if (!metapage) {
			return null;
		}
		var layoutName = 'flexboxgrid';
		var layout = getLayout(definition, layoutName);
		if (!layout) {
			console.log('no layout, generating default layout="' + layoutName + '"');

			var _generateDefaultLayou = generateDefaultLayout(metapage);

			layoutName = _generateDefaultLayou.layoutName;
			layout = _generateDefaultLayou.layout;
		}

		var metaframesArranged = view_metapage_applyLayout(layoutName, layout, metapage);

		return Object(preact_min["h"])(
			'div',
			{ 'class': 'siimple-grid' },
			metaframesArranged
		);
	};

	return ViewMetapage;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// import Plugins from './plugins';


var Status = Object.freeze(['loading', 'loaded', 'empty'].reduce(function (obj, currentVal) {
	obj[currentVal] = currentVal;
	return obj;
}, {}));

var app__ref = Object(preact_min["h"])('div', { 'class': 'siimple-spinner siimple-spinner--primary' });

var app__ref2 = Object(preact_min["h"])(
	'div',
	{ 'class': 'siimple-list-item' },
	Object(preact_min["h"])(alert_Alert, { level: 'primary', message: 'No metapage definition' })
);

var app_MetapageApp = function (_Component) {
	app__inherits(MetapageApp, _Component);

	function MetapageApp() {
		var _temp, _this, _ret;

		app__classCallCheck(this, MetapageApp);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = app__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			alert: null, // {level,message}
			metapage: null,
			metapageDefinition: null,
			params: {}, // from the URL hash string
			status: null, //Status.loading,
			url: null
		}, _this.load = function () {
			return new Promise(function ($return, $error) {
				var loadState, metapageDefinition, metapage;

				if (_this.state.metapage) {
					_this.state.metapage.dispose();
				}
				_this.setState({
					alert: null,
					metapage: null,
					metapageDefinition: null,
					status: Status.loading
				});

				if (Object.keys(_this.state.params).length == 0) {
					// This will show the help
					_this.setState({ status: Status.empty });
					return $return();
				}
				var $Try_1_Post = function () {
					try {
						return $return();
					} catch ($boundEx) {
						return $error($boundEx);
					}
				};var $Try_1_Catch = function (err) {
					try {
						_this.setState({
							alert: { level: 'error', message: err },
							status: Status.loaded
						});
						return $Try_1_Post();
					} catch ($boundEx) {
						return $error($boundEx);
					}
				};try {
					return Promise.resolve(_this.getMetapageDefinitionFromParams(_this.state.params)).then(function ($await_7) {
						try {
							loadState = $await_7;
							_this.setState(loadState);

							metapageDefinition = loadState.metapageDefinition;

							metapage = null;
							if (metapageDefinition) {
								try {
									metapage = node_modules_metapage["Metapage"].from(metapageDefinition);
									//TODO later
									// document.location.hash = 'base64=' + btoa(unescape(encodeURIComponent(JSON.stringify(metapageDef))));
									_this.setState({ metapage: metapage });
								} catch (err) {
									_this.setState({
										alert: { level: 'error', message: 'Failed to load metapage object: ' + err }
									});
								}
							}

							_this.setState({
								status: Status.loaded
							});

							return $Try_1_Post();
						} catch ($boundEx) {
							return $Try_1_Catch($boundEx);
						}
					}, $Try_1_Catch);
				} catch (err) {
					$Try_1_Catch(err)
				}
			});
		}, _this.onHashChange = function () {
			// console.log('onhashchanage', window.location.hash);
			_this.setState({ params: _this.getHashParameters() });
			_this.load();
		}, _this.setHashParameter = function (key, val) {
			var hash = document.location.hash;
			if (hash.startsWith('#')) {
				hash = hash.substr(1);
			}
			var tokens = hash.split('&');
			var found = false;
			for (var i = 0; i < tokens.length; i++) {
				var token = tokens[i];
				var keyVal = token.split('=');
				if (keyVal[0] == key) {
					tokens[i] = key + '=' + val;
					found = true;
					break;
				}
			}
			if (!found) {
				tokens.push(key + '=' + val);
			}
			tokens = tokens.filter(function (token) {
				return token.length > 1;
			});
			document.location.hash = tokens.join('&');
		}, _this.removeHashParameter = function (key) {
			var hash = document.location.hash;
			if (hash.startsWith('#')) {
				hash = hash.substr(1);
			}
			var tokens = hash.split('&').filter(function (token) {
				var keyVal = token.split('=');
				return keyVal[0] != key;
			});
			document.location.hash = tokens.join('&');
		}, _this.getHashParameters = function () {
			var hash = document.location.hash;
			// console.log('hash', hash);
			if (hash.length < 3) {
				//TODO set state to mean the page is empty, and probably show the docs
				return null;
			}
			var tokens = hash.substr(1).split('&');
			var params = {};
			tokens.forEach(function (token) {
				var keyVal = token.split('=');
				params[keyVal[0]] = keyVal[1] || true;
			});
			return params;
		}, _this.setUrl = function (url) {
			_this.setHashParameter('url', url);
		}, _this.getMetapageDefinitionFromParams = function (hashParams) {
			return new Promise(function ($return, $error) {
				var result, url, response, metapageDefinition;

				result = {
					alert: null,
					metapageDefinition: null
				};
				url = hashParams['url'];
				if (url) {
					console.log('raw url', url);
					if (!url.endsWith('.json')) {
						if (!url.endsWith('/')) {
							url += '/';
						}
						url += 'metapage.json';
					}
					console.log('final url', url);
					_this.setState({
						alert: { level: 'primary', message: 'loading url: ' + url },
						url: url
					});
					// console.log(`loading ${url}`);
					response = void 0;
					var $Try_3_Post = function () {
						try {
							var $Try_4_Post = function () {
								try {
									return $If_5.call(this);
								} catch ($boundEx) {
									return $error($boundEx);
								}
							}.bind(this);var $Try_4_Catch = function (err) {
								try {
									result.alert = { level: 'error', message: 'Failed to parse metapage JSON: ' + err };
									return $Try_4_Post();
								} catch ($boundEx) {
									return $error($boundEx);
								}
							};
							try {
								if (response) {
									return Promise.resolve(response.json()).then(function ($await_8) {
										try {
											metapageDefinition = $await_8;
											result.metapageDefinition = metapageDefinition;
											return $If_6.call(this);
										} catch ($boundEx) {
											return $Try_4_Catch($boundEx);
										}
									}.bind(this), $Try_4_Catch);
								}

								function $If_6() {
									return $Try_4_Post();
								}

								return $If_6.call(this);
							} catch (err) {
								$Try_4_Catch(err)
							}
						} catch ($boundEx) {
							return $error($boundEx);
						}
					}.bind(this);var $Try_3_Catch = function (err) {
						try {
							result.alert = { level: 'error', message: 'Failed to load #url ' + err };
							return $Try_3_Post();
						} catch ($boundEx) {
							return $error($boundEx);
						}
					};try {
						return Promise.resolve(fetch(url)).then(function ($await_9) {
							try {
								response = $await_9;
								return $Try_3_Post();
							} catch ($boundEx) {
								return $Try_3_Catch($boundEx);
							}
						}, $Try_3_Catch);
					} catch (err) {
						$Try_3_Catch(err)
					}
				}

				function $If_5() {
					return $return(result);
				}

				return $If_5.call(this);
			});
		}, _this.getHelp = function () {
			return Object(preact_min["h"])(help_HelpCard, { setUrl: _this.setUrl });
		}, _this.getAlert = function () {
			return _this.state.alert ? Object(preact_min["h"])(alert_Alert, _this.state.alert) : null;
		}, _temp), app__possibleConstructorReturn(_this, _ret);
	}

	MetapageApp.prototype.componentDidMount = function componentDidMount() {
		window.onhashchange = this.onHashChange;
		this.onHashChange();
	};

	MetapageApp.prototype.componentWillUnmount = function componentWillUnmount() {
		window.onhashchange = null;
	};

	MetapageApp.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {};

	MetapageApp.prototype.render = function render() {
		switch (this.state.status) {
			case Status.loading:
				var alert = this.getAlert();
				return Object(preact_min["h"])(
					'div',
					{ 'class': 'siimple-list', style: 'max-width:600px;' },
					Object(preact_min["h"])(
						'div',
						{ 'class': 'siimple-list-item' },
						alert
					),
					app__ref
				);

			case Status.loaded:
				if (this.state.alert) {
					var _alert = this.getAlert();
					return Object(preact_min["h"])(
						'div',
						{ 'class': 'siimple-list', style: 'max-width:600px;' },
						Object(preact_min["h"])(
							'div',
							{ 'class': 'siimple-list-item' },
							_alert
						),
						Object(preact_min["h"])(
							'div',
							{ 'class': 'siimple-list-item' },
							this.getHelp()
						)
					);
				}

				var metapage = this.state.metapage;
				var metapageDefinition = this.state.metapageDefinition;
				// console.log('loaded metapage', metapage);
				// console.log('loaded metapageDefinition', metapageDefinition);
				// No data? Show the help then.
				if (!metapage) {
					return this.getHelp();
				}
				//<Plugins definition={metapageDefinition} />
				var header = this.state.params['header'] == '0' ? null : Object(preact_min["h"])(components_header, { definition: metapageDefinition, url: this.state.url });
				return Object(preact_min["h"])(
					'div',
					{ id: 'app' },
					header,
					Object(preact_min["h"])(view_metapage_ViewMetapage, { definition: metapageDefinition, metapage: metapage, setUrl: this.setUrl })
				);

			case Status.empty:
				return Object(preact_min["h"])(
					'div',
					{ 'class': 'siimple-list', style: 'max-width:600px;' },
					app__ref2,
					this.getHelp()
				);

			default:
				var _alert2 = this.getAlert();
				return Object(preact_min["h"])(
					'div',
					{ 'class': 'siimple-list', style: 'max-width:600px;' },
					Object(preact_min["h"])(
						'div',
						{ 'class': 'siimple-list-item' },
						_alert2
					),
					this.getHelp()
				);

		}
	};

	return MetapageApp;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js





/* harmony default export */ var index = __webpack_exports__["default"] = (app_MetapageApp);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    null != e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "M0/P":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MOar":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TdZ5":
/***/ (function(module, exports) {

module.exports = function (t) {
  var e = {};function n(r) {
    if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }return n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var i in t) {
      n.d(r, i, function (e) {
        return t[e];
      }.bind(null, i));
    }return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 0);
}([function (t, e, n) {
  "use strict";
  (function (e) {
    var r,
        i = t.exports,
        s = e,
        a = (s.$hx_scope = s.$hx_scope || {}, function () {
      return y.__string_rec(this, "");
    }),
        o = o || {};function u(t, e) {
      var n = Object.create(t);for (var r in e) {
        n[r] = e[r];
      }return e.toString !== Object.prototype.toString && (n.toString = e.toString), n;
    }var l = function l(t, e) {
      this.r = new RegExp(t, e.split("u").join(""));
    };l.__name__ = !0, l.prototype = { match: function match(t) {
        return this.r.global && (this.r.lastIndex = 0), this.r.m = this.r.exec(t), this.r.s = t, null != this.r.m;
      }, matched: function matched(t) {
        if (null != this.r.m && t >= 0 && t < this.r.m.length) return this.r.m[t];throw new w("EReg::matched");
      } };var c = function c() {};c.__name__ = !0, c.cca = function (t, e) {
      var n = t.charCodeAt(e);if (n == n) return n;
    }, c.substr = function (t, e, n) {
      if (null == n) n = t.length;else if (n < 0) {
        if (0 != e) return "";n = t.length + n;
      }return t.substr(e, n);
    }, c.remove = function (t, e) {
      var n = t.indexOf(e);return -1 != n && (t.splice(n, 1), !0);
    }, c.iter = function (t) {
      return { cur: 0, arr: t, hasNext: function hasNext() {
          return this.cur < this.arr.length;
        }, next: function next() {
          return this.arr[this.cur++];
        } };
    }, Math.__name__ = !0;var h = function h() {};h.__name__ = !0, h.field = function (t, e) {
      try {
        return t[e];
      } catch (t) {
        t instanceof w && t.val;return null;
      }
    }, h.fields = function (t) {
      var e = [];if (null != t) {
        var n = Object.prototype.hasOwnProperty;for (var r in t) {
          "__id__" != r && "hx__closures__" != r && n.call(t, r) && e.push(r);
        }
      }return e;
    }, h.deleteField = function (t, e) {
      return !!Object.prototype.hasOwnProperty.call(t, e) && (delete t[e], !0);
    };var f = function f() {};f.__name__ = !0, f.string = function (t) {
      return y.__string_rec(t, "");
    }, f.parseInt = function (t) {
      var e = parseInt(t, !t || "0" != t[0] || "x" != t[1] && "X" != t[1] ? 10 : 16);return isNaN(e) ? null : e;
    };var p = function p() {
      this.b = "";
    };p.__name__ = !0;var g = function g() {};g.__name__ = !0, g.startsWith = function (t, e) {
      return t.length >= e.length && c.substr(t, 0, e.length) == e;
    }, g.isSpace = function (t, e) {
      var n = c.cca(t, e);return n > 8 && n < 14 || 32 == n;
    }, g.ltrim = function (t) {
      for (var e = t.length, n = 0; n < e && g.isSpace(t, n);) {
        ++n;
      }return n > 0 ? c.substr(t, n, e - n) : t;
    }, g.rtrim = function (t) {
      for (var e = t.length, n = 0; n < e && g.isSpace(t, e - n - 1);) {
        ++n;
      }return n > 0 ? c.substr(t, 0, e - n) : t;
    }, g.trim = function (t) {
      return g.ltrim(g.rtrim(t));
    };var m = o["haxe.StackItem"] = { __ename__: !0, __constructs__: ["CFunction", "Module", "FilePos", "Method", "LocalFunction"], CFunction: { _hx_index: 0, __enum__: "haxe.StackItem", toString: a }, Module: (r = function r(t) {
        return { _hx_index: 1, m: t, __enum__: "haxe.StackItem", toString: a };
      }, r.__params__ = ["m"], r), FilePos: (r = function r(t, e, n, _r) {
        return { _hx_index: 2, s: t, file: e, line: n, column: _r, __enum__: "haxe.StackItem", toString: a };
      }, r.__params__ = ["s", "file", "line", "column"], r), Method: (r = function r(t, e) {
        return { _hx_index: 3, classname: t, method: e, __enum__: "haxe.StackItem", toString: a };
      }, r.__params__ = ["classname", "method"], r), LocalFunction: (r = function r(t) {
        return { _hx_index: 4, v: t, __enum__: "haxe.StackItem", toString: a };
      }, r.__params__ = ["v"], r) },
        d = function d() {};d.__name__ = !0, d.getStack = function (t) {
      if (null == t) return [];var e = Error.prepareStackTrace;Error.prepareStackTrace = function (t, e) {
        for (var n = [], r = 0; r < e.length;) {
          var i = e[r];++r, null != d.wrapCallSite && (i = d.wrapCallSite(i));var s = null,
              a = i.getFunctionName();if (null != a) {
            var o = a.lastIndexOf(".");if (o >= 0) {
              var u = c.substr(a, 0, o),
                  l = c.substr(a, o + 1, null);s = m.Method(u, l);
            }
          }var h = i.getFileName(),
              f = null == h ? -1 : h.indexOf("file:");null != d.wrapCallSite && f > 0 && (h = c.substr(h, f + 6, null)), n.push(m.FilePos(s, h, i.getLineNumber(), i.getColumnNumber()));
        }return n;
      };var n = d.makeStack(t.stack);return Error.prepareStackTrace = e, n;
    }, d.callStack = function () {
      try {
        throw new Error();
      } catch (e) {
        e instanceof w && e.val;var t = d.getStack(e);return t.shift(), t;
      }
    }, d.toString = function (t) {
      for (var e = new p(), n = 0; n < t.length;) {
        var r = t[n];++n, e.b += "\nCalled from ", d.itemToString(e, r);
      }return e.b;
    }, d.itemToString = function (t, e) {
      switch (e._hx_index) {case 0:
          t.b += "a C function";break;case 1:
          var n = e.m;t.b += "module ", t.b += null == n ? "null" : "" + n;break;case 2:
          var r = e.column,
              i = e.line,
              s = e.file,
              a = e.s;null != a && (d.itemToString(t, a), t.b += " ("), t.b += null == s ? "null" : "" + s, t.b += " line ", t.b += null == i ? "null" : "" + i, null != r && (t.b += " column ", t.b += null == r ? "null" : "" + r), null != a && (t.b += ")");break;case 3:
          var o = e.method,
              u = e.classname;t.b += null == u ? "null" : "" + u, t.b += ".", t.b += null == o ? "null" : "" + o;break;case 4:
          var l = e.v;t.b += "local function #", t.b += null == l ? "null" : "" + l;}
    }, d.makeStack = function (t) {
      if (null == t) return [];if ("string" == typeof t) {
        var e = t.split("\n");"Error" == e[0] && e.shift();for (var n = [], r = new l("^   at ([A-Za-z0-9_. ]+) \\(([^)]+):([0-9]+):([0-9]+)\\)$", ""), i = 0; i < e.length;) {
          var s = e[i];if (++i, r.match(s)) {
            var a = r.matched(1).split("."),
                o = a.pop(),
                u = r.matched(2),
                c = f.parseInt(r.matched(3)),
                h = f.parseInt(r.matched(4));n.push(m.FilePos("Anonymous function" == o ? m.LocalFunction() : "Global code" == o ? null : m.Method(a.join("."), o), u, c, h));
          } else n.push(m.Module(g.trim(s)));
        }return n;
      }return t;
    };var _ = function _() {};_.__name__ = !0;var v = function v() {};v.__name__ = !0, v.on = function (t) {
      return v._handlers.push(t), function () {
        c.remove(v._handlers, t);
      };
    }, v.fail = function (t, e) {
      null == t && (t = "Assert.fail"), v.throwError(new b([t], e));
    }, v.throwError = function (t) {
      for (var e = 0, n = v._handlers; e < n.length;) {
        var r = n[e];++e, r(t);
      }if (!t.recovered) throw new w(t);
    }, v.throwAssertionFailureError = function (t, e) {
      v.throwError(new b(t, e));
    };var b = function b(t, e) {
      this.recovered = !1, this._messages = t, this.position = e, this.callstack = d.callStack();
    };b.__name__ = !0, b.prototype = { toString: function toString() {
        return this._messages.join("\n");
      }, getCallStackText: function getCallStackText() {
        return null != this.callstack ? d.toString(this.callstack) : "";
      }, recovery: function recovery() {
        this.recovered = !0;
      } };var w = function w(t) {
      Error.call(this), this.val = t, Error.captureStackTrace && Error.captureStackTrace(this, w);
    };w.__name__ = !0, w.__super__ = Error, w.prototype = u(Error.prototype, {});var y = function y() {};y.__name__ = !0, y.__string_rec = function (t, e) {
      if (null == t) return "null";if (e.length >= 5) return "<...>";var n = typeof t;switch ("function" == n && (t.__name__ || t.__ename__) && (n = "object"), n) {case "function":
          return "<function>";case "object":
          if (t.__enum__) {
            var r = o[t.__enum__],
                i = r.__constructs__[t._hx_index],
                s = r[i];if (s.__params__) {
              e += "\t";for (var a = i + "(", u = [], l = 0, c = s.__params__; l < c.length;) {
                var h = c[l];++l, u.push(y.__string_rec(t[h], e));
              }return a + u.join(",") + ")";
            }return i;
          }if (t instanceof Array) {
            var f = "[";e += "\t";for (var p = 0, g = t.length; p < g;) {
              var m = p++;f += (m > 0 ? "," : "") + y.__string_rec(t[m], e);
            }return f += "]";
          }var d;try {
            d = t.toString;
          } catch (t) {
            t instanceof w && t.val;return "???";
          }if (null != d && d != Object.toString && "function" == typeof d) {
            var _ = t.toString();if ("[object Object]" != _) return _;
          }var v = null,
              b = "{\n";e += "\t";var S = null != t.hasOwnProperty;for (var v in t) {
            S && !t.hasOwnProperty(v) || "prototype" != v && "__class__" != v && "__super__" != v && "__interfaces__" != v && "__properties__" != v && (2 != b.length && (b += ", \n"), b += e + v + " : " + y.__string_rec(t[v], e));
          }return b += "\n" + (e = e.substring(1)) + "}";case "string":
          return t;default:
          return String(t);}
    };var S = function S() {
      this._events = {};
    };S.__name__ = !0, S.prototype = { on: function on(t, e) {
        return this.addEventListener(t, e);
      }, isListeners: function isListeners(t) {
        return !!Object.prototype.hasOwnProperty.call(this._events, t) && this._events[t].length > 0;
      }, addEventListener: function addEventListener(t, e) {
        Object.prototype.hasOwnProperty.call(this._events, t) || (this._events[t] = []), this._events[t].push(e);var n = O(this, this.removeEventListener),
            r = t,
            i = e;return function () {
          n(r, i);
        };
      }, once: function once(t, e) {
        var n = this,
            r = function r() {
          var i = arguments;n.removeEventListener(t, r), e.apply(null, i);
        };return this.addEventListener(t, r);
      }, removeEventListener: function removeEventListener(t, e) {
        if (t in this._events) {
          var n = this._events[t];c.remove(n, e);
        }
      }, emit: function emit(t, e, n, r, i) {
        var s = [].slice.call(arguments, 1);if (Object.prototype.hasOwnProperty.call(this._events, t)) for (var a = this._events[t].slice(0), o = 0; o < a.length;) {
          var u = a[o];++o, u.apply(null, s);
        }
      }, dispose: function dispose() {
        this._events = {};
      } };var I = i.Metapage = function (t) {
      this._inputMap = {}, this._cachedInputLookupMap = {}, this.debug = !1, this._iframes = {}, this._inputsState = {}, S.call(this), this._id = null != t && null != t.id ? t.id : M.generateMetapageId(), this.debug = M.getUrlParamDEBUG(), this._consoleBackgroundColor = null != t && null != t.color ? t.color : I.CONSOLE_BACKGROUND_COLOR_DEFAULT, window.addEventListener("message", O(this, this.onMessage)), this.log("Initialized", null, null, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 53, className: "js.metapage.client.Metapage", methodName: "new" });
    };I.__name__ = !0, I.from = function (t, e) {
      if (null == t) throw new w("Metapage definition cannot be null");if ("string" == typeof t) try {
        t = JSON.parse(t);
      } catch (e) {
        e instanceof w && e.val;throw new w("Cannot parse into JSON:\n" + f.string(t));
      }var n = t.version;switch (n) {case "0.0.1":
          return I.fromDefinitionV0_0_1(t);case "0.1.0":
          return I.fromDefinitionV0_1_0(t, e);case "0.2":
          return I.fromDefinitionV0_2(t, e);default:
          throw new w("Unknown metapage version: " + n);}
    }, I.fromDefinitionV0_0_1 = function (t) {
      var e = new I(t.options);if (null != t.iframes) for (var n = 0, r = h.fields(t.iframes); n < r.length;) {
        var i = r[n];++n;var s = t.iframes[i];e.addMetaframe(s.url, i);
      }if (null != t.pipes) for (var a = 0, o = t.pipes; a < o.length;) {
        var u = o[a];++a;var l = { metaframe: u.target.id, source: u.target.name, target: u.target.name };e.addPipe(u.target.id, l);
      }return e;
    }, I.fromDefinitionV0_1_0 = function (t, e) {
      var n = new I(t.options);if (null == e && (e = {}), null != t.iframes) for (var r = 0, i = h.fields(t.iframes); r < i.length;) {
        var s = i[r];++r;var a = t.iframes[s];n.addMetaframe(a.url, s);if (null != a.inputs) for (var o = 0, u = a.inputs; o < u.length;) {
          var l = u[o];++o, n.addPipe(s, l);
        }
      }return n;
    }, I.fromDefinitionV0_2 = function (t, e) {
      var n = new I(t.options);if (null == e && (e = {}), null != t.metaframes) for (var r = 0, i = h.fields(t.metaframes); r < i.length;) {
        var s = i[r];++r;var a = t.metaframes[s];n.addMetaframe(a.url, s);if (null != a.inputs) for (var o = 0, u = a.inputs; o < u.length;) {
          var l = u[o];++o, n.addPipe(s, l);
        }
      }return n;
    }, I.__super__ = S, I.prototype = u(S.prototype, { onInputs: function onInputs(t) {
        return this.on("inputs", t);
      }, onOutputs: function onOutputs(t) {
        return this.on("outputs", t);
      }, addPipe: function addPipe(t, e) {
        Object.prototype.hasOwnProperty.call(this._inputMap, t) || (this._inputMap[t] = []), this._inputMap[t].push(e);
      }, removeAll: function removeAll() {
        for (var t = 0, e = h.fields(this._iframes); t < e.length;) {
          var n = e[t];++t, this._iframes[n].dispose();
        }this._iframes = {}, this._cachedInputLookupMap = {}, this._inputMap = {};
      }, metaframes: function metaframes() {
        for (var t = {}, e = 0, n = h.fields(this._iframes); e < n.length;) {
          var r = n[e];++e, t[r] = this._iframes[r];
        }return t;
      }, metaframeIds: function metaframeIds() {
        for (var t = [], e = 0, n = h.fields(this._iframes); e < n.length;) {
          var r = n[e];++e, t.push(r);
        }return t;
      }, iframes: function iframes() {
        for (var t = {}, e = 0, n = h.fields(this._iframes); e < n.length;) {
          var r = n[e];++e, t[r] = this._iframes[r].iframe;
        }return t;
      }, get: function get(t) {
        return this._iframes[t];
      }, addMetaframe: function addMetaframe(t, e) {
        if (null != e && Object.prototype.hasOwnProperty.call(this._iframes, e)) throw new w("Existing metaframe for id=" + e);e = null != e ? e : M.generateMetaframeId();var n = new j(t, e, this._id, this._consoleBackgroundColor, this.debug);return n._metapage = this, this._iframes[e] = n, n;
      }, setInput: function setInput(t, e, n) {
        if ("object" == typeof t) {
          if (null != e || null != n) throw new w("bad arguments, see API docs");for (var r = t, i = 0, s = h.fields(r); i < s.length;) {
            var a = s[i];++i;var o = a,
                u = h.field(r, o);if ("object" != typeof u) throw new w("bad arguments, see API docs");var l = this._iframes[o];null != l ? l.setInputs(u) : this.logInternal("No iframe id=" + o, "f00", this._consoleBackgroundColor, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 152, className: "js.metapage.client.Metapage", methodName: "setInput" });
          }
        } else {
          if ("string" != typeof t) throw new w("bad arguments, see API docs");var c = this._iframes[t];if (null == c && this.logInternal("No iframe id=" + f.string(t), "f00", this._consoleBackgroundColor, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 158, className: "js.metapage.client.Metapage", methodName: "setInput" }), "string" == typeof e) c.setInput(e, n);else {
            if ("object" != typeof e) throw new w("bad arguments, see API docs");c.setInputs(e);
          }
        }if ("object" == typeof t) {
          if (null != e || null != n) throw new w("bad arguments");for (var p = t, g = 0, m = h.fields(p); g < m.length;) {
            var d = m[g];++g;var _ = d;this._inputsState[_] = null != this._inputsState[_] ? this._inputsState[_] : {};var v = h.field(p, _);if ("object" != typeof v) throw new w("bad arguments, see API docs");for (var b = 0, y = h.fields(v); b < y.length;) {
              var S = y[b];++b;var I = S;this._inputsState[_][I] = h.field(v, S);
            }
          }
        } else {
          if ("string" != typeof t) throw new w("bad arguments");if (this._inputsState[t] = null != this._inputsState[t] ? this._inputsState[t] : {}, "string" == typeof e) this._inputsState[t][e] = n;else {
            if ("object" != typeof e) throw new w("bad arguments");for (var j = 0, M = h.fields(e); j < M.length;) {
              var x = M[j];++j, this._inputsState[t][x] = h.field(x, x);
            }
          }
        }
      }, setInputs: function setInputs(t, e, n) {
        this.setInputs(t, e, n);
      }, dispose: function dispose() {
        S.prototype.dispose.call(this), window.removeEventListener("message", O(this, this.onMessage));for (var t = 0, e = h.fields(this._iframes); t < e.length;) {
          var n = e[t];++t, this._iframes[n].dispose();
        }this._iframes = null, this._cachedInputLookupMap = null, this._inputMap = null;
      }, log: function log(t, e, n, r) {
        this.debug && this.logInternal(t, e, n, r);
      }, error: function error(t, e) {
        this.logInternal(t, "f00", this._consoleBackgroundColor, e);
      }, getInputsFromOutput: function getInputsFromOutput(t, e) {
        if (Object.prototype.hasOwnProperty.call(this._cachedInputLookupMap, t) || (this._cachedInputLookupMap[t] = {}), !Object.prototype.hasOwnProperty.call(this._cachedInputLookupMap[t], e)) {
          var n = [];this._cachedInputLookupMap[t][e] = n;for (var r = 0, i = h.fields(this._inputMap); r < i.length;) {
            var s = i[r];if (++r, s != t) for (var a = 0, o = this._inputMap[s]; a < o.length;) {
              var u = o[a];if (++a, u.metaframe == t && I.minimatch(e, u.source)) {
                var l = u.target;(null == u.target || g.startsWith(u.target, "*") || "" == u.target) && (l = e), n.push({ metaframe: s, pipe: l });
              }
            }
          }
        }return this._cachedInputLookupMap[t][e];
      }, isValidJsonRpcMessage: function isValidJsonRpcMessage(t) {
        if ("2.0" != t.jsonrpc) return this.logInternal("message.jsonrpc != '2.0'", "f00", this._consoleBackgroundColor, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 274, className: "js.metapage.client.Metapage", methodName: "isValidJsonRpcMessage" }), !1;if ("SetupIframeClientRequest" == t.method) return !0;var e = t.iframeId;return t.parentId == this._id && Object.prototype.hasOwnProperty.call(this._iframes, e) || this.logInternal("message.parentId=" + t.parentId + " _id=" + this._id + " message.iframeId=" + e + " _iframes.exists(message.iframeId)=" + f.string(Object.prototype.hasOwnProperty.call(this._iframes, e)) + " message=" + c.substr(JSON.stringify(t), 0, 200), "f00", this._consoleBackgroundColor, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 286, className: "js.metapage.client.Metapage", methodName: "isValidJsonRpcMessage" }), t.parentId == this._id && Object.prototype.hasOwnProperty.call(this._iframes, e);
      }, setInputCache: function setInputCache(t, e, n) {
        if ("object" == typeof t) {
          if (null != e || null != n) throw new w("bad arguments");for (var r = t, i = 0, s = h.fields(r); i < s.length;) {
            var a = s[i];++i;var o = a;this._inputsState[o] = null != this._inputsState[o] ? this._inputsState[o] : {};var u = h.field(r, o);if ("object" != typeof u) throw new w("bad arguments, see API docs");for (var l = 0, c = h.fields(u); l < c.length;) {
              var f = c[l];++l;var p = f;this._inputsState[o][p] = h.field(u, f);
            }
          }
        } else {
          if ("string" != typeof t) throw new w("bad arguments");if (this._inputsState[t] = null != this._inputsState[t] ? this._inputsState[t] : {}, "string" == typeof e) this._inputsState[t][e] = n;else {
            if ("object" != typeof e) throw new w("bad arguments");for (var g = 0, m = h.fields(e); g < m.length;) {
              var d = m[g];++g, this._inputsState[t][d] = h.field(d, d);
            }
          }
        }
      }, onMessage: function onMessage(t) {
        if ("object" == typeof t.data) {
          var e = t.data;if (!this.isValidJsonRpcMessage(e)) return void this.log("invalid message " + c.substr(JSON.stringify(e), 0, 200), null, null, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 334, className: "js.metapage.client.Metapage", methodName: "onMessage" });t.origin, t.source;switch (e.method) {case "Dimensions":
              this.log(e.iframeId + " Dimensions " + c.substr(JSON.stringify(e.params), 0, 200), null, null, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 420, className: "js.metapage.client.Metapage", methodName: "onMessage" });break;case "InputsUpdate":
              var n = e.iframeId,
                  r = e.params;switch (this._iframes[n].version) {case "0.0.1":case "0.1.0":
                  if (this._iframes[n].emit("inputs", r), this.isListeners("inputs")) {
                    var i = {};i[n] = r, this.emit("inputs", i);
                  }break;case "0.2":
                  this._iframes[n].setInputs(r);}var s = n,
                  a = r;if ("object" == typeof s) {
                if (null != a) throw new w("bad arguments");for (var o = s, u = 0, l = h.fields(o); u < l.length;) {
                  var f = l[u];++u;var p = f;this._inputsState[p] = null != this._inputsState[p] ? this._inputsState[p] : {};var g = h.field(o, p);if ("object" != typeof g) throw new w("bad arguments, see API docs");for (var m = 0, d = h.fields(g); m < d.length;) {
                    var _ = d[m];++m;var v = _;this._inputsState[p][v] = h.field(g, _);
                  }
                }
              } else {
                if ("string" != typeof s) throw new w("bad arguments");if (this._inputsState[s] = null != this._inputsState[s] ? this._inputsState[s] : {}, "string" == typeof a) this._inputsState[s][a] = null;else {
                  if ("object" != typeof a) throw new w("bad arguments");for (var b = 0, y = h.fields(a); b < y.length;) {
                    var S = y[b];++b, this._inputsState[s][S] = h.field(S, S);
                  }
                }
              }break;case "OutputsUpdate":
              var I = e.iframeId,
                  j = e.params,
                  M = this._iframes[I];if (null != M) {
                M.setOutputs(j);for (var x = 0, O = h.fields(j); x < O.length;) {
                  var N = O[x];++x;var k = this.getInputsFromOutput(I, N);if (k.length > 0) for (var E = 0; E < k.length;) {
                    var R = k[E];++E;var A = {};A[R.pipe] = j[N], this._iframes[R.metaframe].setInputs(A);var L = R.metaframe,
                        P = R.pipe,
                        T = j[N];if ("object" == typeof L) {
                      if (null != P || null != T) throw new w("bad arguments");for (var C = L, U = 0, F = h.fields(C); U < F.length;) {
                        var B = F[U];++U;var D = B;this._inputsState[D] = null != this._inputsState[D] ? this._inputsState[D] : {};var J = h.field(C, D);if ("object" != typeof J) throw new w("bad arguments, see API docs");for (var $ = 0, G = h.fields(J); $ < G.length;) {
                          var V = G[$];++$;var W = V;this._inputsState[D][W] = h.field(J, V);
                        }
                      }
                    } else {
                      if ("string" != typeof L) throw new w("bad arguments");if (this._inputsState[L] = null != this._inputsState[L] ? this._inputsState[L] : {}, "string" == typeof P) this._inputsState[L][P] = T;else {
                        if ("object" != typeof P) throw new w("bad arguments");for (var z = 0, q = h.fields(P); z < q.length;) {
                          var K = q[z];++z, this._inputsState[L][K] = h.field(K, K);
                        }
                      }
                    }
                  }
                }
              } else this.logInternal("missing iframe=" + I, "f00", this._consoleBackgroundColor, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 390, className: "js.metapage.client.Metapage", methodName: "onMessage" });break;case "SetupIframeClientRequest":
              this.log("SetupIframeClientRequest from unknown, registered all metaframes", null, null, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 354, className: "js.metapage.client.Metapage", methodName: "onMessage" });for (var Z = 0, H = h.fields(this._iframes); Z < H.length;) {
                var X = H[Z];++Z, this._iframes[X].register();
              }break;case "SetupIframeServerResponseAck":
              this.log("SetupIframeServerResponseAck iframeId=" + e.iframeId + " jsonrpc.params=" + JSON.stringify(e.params, null, "  "), null, null, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 362, className: "js.metapage.client.Metapage", methodName: "onMessage" });var Y = e.params;this._iframes[e.iframeId].registered(Y.version);}this.emit("Message", e);
        }
      }, logInternal: function logInternal(t, e, n, r) {
        var i;switch (n = null != n ? n : this._consoleBackgroundColor, typeof t) {case "number":
            i = f.string(t) + "";break;case "string":
            i = t;break;default:
            i = JSON.stringify(t);}var s,
            a = i = null != this._id ? "Metapage[" + this._id + "] " + i : i,
            o = e;switch (null != (o = null != o ? o : "000") && "" == g.trim(o) && (o = null), typeof a) {case "number":
            s = f.string(a) + "";break;case "string":
            s = a;break;default:
            s = JSON.stringify(a);}if (null != o && "" != g.trim(o)) {
          var u = "color: #" + o;null != n && (u = u + "; background: #" + n), s = "%c" + s, window.console.log(s, u);
        } else window.console.log(s);
      } });var j = function j(t, e, n, r, i) {
      if (null == i && (i = !1), this._cachedEventOutputsUpdate = { iframeId: null, inputs: null }, this._cachedEventInputsUpdate = { iframeId: null, inputs: null }, this._sendInputsAfterRegistration = !1, this._onLoaded = [], this._loaded = !1, this._rpcListeners = [], this._disposables = [], this._outputs = {}, this._inputs = {}, S.call(this), !g.startsWith(t, "http")) {
        for (; g.startsWith(t, "/");) {
          t = c.substr(t, 1, null);
        }var s = window.location;t = s.protocol + "//" + s.hostname + (null != s.port && "" != s.port ? ":" + s.port : "") + "/" + t;
      }this._origin = t;var a = new URL(t);a.searchParams.set(M.URL_PARAM_METAFRAME_ID, e), i && a.searchParams.set(M.URL_PARAM_DEBUG, "1"), t = a.href, this.id = e, this.iframe = window.document.createElement("iframe"), this.iframe.src = t, this._debug = i, this._parentId = n;for (var o = this.id, u = 0, l = 0, h = o.length; l < h;) {
        var p = l++;u = c.cca(o, p) + ((u << 5) - u);
      }var m = (16777215 & u).toString(16).toUpperCase();this._color = "00000".substring(0, 6 - m.length) + f.string(m), this._consoleBackgroundColor = r;
    };j.__name__ = !0, j.__super__ = S, j.prototype = u(S.prototype, { setInput: function setInput(t, e) {
        var n = {};n[t] = e, this.setInputs(n);
      }, setInputs: function setInputs(t) {
        if (this.log({ m: "IFrameRpcClient", inputs: t }, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 582, className: "js.metapage.client.IFrameRpcClient", methodName: "setInputs" }), M.merge(this._inputs, t)) {
          if (this._loaded || (this._sendInputsAfterRegistration = !0), null != this.iframe.parentNode && this._loaded ? this.sendInputs(t) : this.log("Not setting input bc _loaded=" + f.string(this._loaded), { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 593, className: "js.metapage.client.IFrameRpcClient", methodName: "setInputs" }), this.emit("inputs", this._inputs), this._metapage.isListeners("inputs")) {
            var e = {};e[this.id] = t, this._metapage.emit("inputs", e);
          }this._cachedEventInputsUpdate.iframeId = this.id, this._cachedEventInputsUpdate.inputs = this._inputs, this._metapage.emit("InputsUpdate", this._cachedEventInputsUpdate);
        }
      }, setOutput: function setOutput(t, e) {
        var n = {};n[t] = e, this.setOutputs(n);
      }, setOutputs: function setOutputs(t) {
        if (M.merge(this._outputs, t) && (this.emit("outputs", t), this._metapage.isListeners("outputs"))) {
          var e = {};e[this.id] = this._outputs, this._metapage.emit("outputs", e);
        }
      }, onInputs: function onInputs(t) {
        return this.on("inputs", t);
      }, onInput: function onInput(t, e) {
        return this.on("inputs", function (n) {
          Object.prototype.hasOwnProperty.call(n, t) && e(n[t]);
        });
      }, onOutputs: function onOutputs(t) {
        return this.on("outputs", t);
      }, onOutput: function onOutput(t, e) {
        return this.on("outputs", function (n) {
          Object.prototype.hasOwnProperty.call(n, t) && e(n[t]);
        });
      }, dispose: function dispose() {
        for (S.prototype.dispose.call(this); null != this._disposables && this._disposables.length > 0;) {
          this._disposables.pop()();
        }this._rpcListeners = null, this._inputs = null, this._outputs = null, this._ready = null, null != this.iframe && null != this.iframe.parentNode && this.iframe.parentNode.removeChild(this.iframe), this.iframe = null, this._bufferMessages = null, null != this._bufferTimeout && (window.clearInterval(this._bufferTimeout), this._bufferTimeout = null);
      }, register: function register() {
        if (!this._loaded) {
          var t = { state: { inputs: this._inputs }, iframeId: this.id, parentId: this._parentId };this.log("register " + JSON.stringify(t), { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 698, className: "js.metapage.client.IFrameRpcClient", methodName: "register" }), this.sendRpcInternal("SetupIframeServerResponse", t);
        }
      }, registered: function registered(t) {
        if (!this._loaded) {
          for (this.version = t, null == this.version && (this.version = "0.1.0"), this._loaded = !0; null != this._onLoaded && this._onLoaded.length > 0;) {
            this._onLoaded.pop()();
          }this._sendInputsAfterRegistration && this.sendInputs(this._inputs), this.log("registered version=" + this.version, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 722, className: "js.metapage.client.IFrameRpcClient", methodName: "registered" });
        }
      }, sendInputs: function sendInputs(t) {
        this.sendRpc("InputsUpdate", { inputs: t, parentId: this._parentId });
      }, sendRpc: function sendRpc(t, e) {
        var n = this;if (null != this.iframe.parentNode && this._loaded) this.sendRpcInternal(t, e);else {
          var r = this._metapage;r.logInternal("sending rpc later", "f00", r._consoleBackgroundColor, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 735, className: "js.metapage.client.IFrameRpcClient", methodName: "sendRpc" }), this._onLoaded.push(function () {
            n.sendRpcInternal(t, e);
          });
        }
      }, log: function log(t, e) {
        this._debug && this.logInternal(t, e);
      }, logInternal: function logInternal(t, e) {
        var n;switch (typeof t) {case "number":
            n = f.string(t) + "";break;case "string":
            n = t;break;default:
            n = JSON.stringify(t);}var r,
            i = "Metapage[" + this._parentId + "] Metaframe[" + this.id + "] " + n,
            s = this._color,
            a = this._consoleBackgroundColor;switch (null != (s = null != s ? s : "000") && "" == g.trim(s) && (s = null), typeof i) {case "number":
            r = f.string(i) + "";break;case "string":
            r = i;break;default:
            r = JSON.stringify(i);}if (null != s && "" != g.trim(s)) {
          var o = "color: #" + s;null != a && (o = o + "; background: #" + a), r = "%c" + r, window.console.log(r, o);
        } else window.console.log(r);
      }, sendRpcInternal: function sendRpcInternal(t, e) {
        var n = { method: t, params: e, jsonrpc: "2.0", parentId: this._parentId, iframeId: this.id };if (null != this.iframe) this.sendOrBufferPostMessage(n);else {
          var r = this._metapage;r.logInternal("Cannot send to child iframe messageJson=" + c.substr(JSON.stringify(n), 0, 200), "f00", r._consoleBackgroundColor, { fileName: "src/haxe/js/metapage/client/Metapage.hx", lineNumber: 773, className: "js.metapage.client.IFrameRpcClient", methodName: "sendRpcInternal" });
        }
      }, sendOrBufferPostMessage: function sendOrBufferPostMessage(t) {
        var e = this;null != this.iframe.contentWindow ? this.iframe.contentWindow.postMessage(t, this._origin) : null == this._bufferMessages ? (this._bufferMessages = [t], this._bufferTimeout = window.setInterval(function () {
          if (null != e.iframe.contentWindow) {
            for (var t = 0, n = e._bufferMessages; t < n.length;) {
              var r = n[t];++t, e.iframe.contentWindow.postMessage(r, e._origin);
            }window.clearInterval(e._bufferTimeout), e._bufferTimeout = null, e._bufferMessages = null;
          }
        }, 0)) : this._bufferMessages.push(t);
      } });var M = function M() {};M.__name__ = !0, M.merge = function (t, e) {
      if (null == e) return !1;for (var n = !1, r = 0, i = h.fields(e); r < i.length;) {
        var s = i[r];++r, n = !0, void 0 === e[s] ? h.deleteField(t, s) : t[s] = e[s];
      }return n;
    }, M.getUrlParam = function (t) {
      return new URLSearchParams(window.location.search).get(t);
    }, M.getUrlParamDEBUG = function () {
      return new URLSearchParams(window.location.search).has(M.URL_PARAM_DEBUG);
    }, M.getUrlParamMF_ID = function () {
      return new URLSearchParams(window.location.search).get(M.URL_PARAM_METAFRAME_ID);
    }, M.generateMetaframeId = function (t) {
      return null == t && (t = 8), M.generateId(8);
    }, M.generateMetapageId = function (t) {
      return null == t && (t = 8), M.generateId(8);
    }, M.generateId = function (t) {
      null == t && (t = 8);for (var e = ""; t > 0;) {
        e += f.string(M.LETTERS.charAt(0 | Math.max(0, Math.random() * M.LETTERS.length - 1))), --t;
      }return e;
    }, M.log = function (t, e, n) {
      var r;switch (null != (e = null != e ? e : "000") && "" == g.trim(e) && (e = null), typeof t) {case "number":
          r = f.string(t) + "";break;case "string":
          r = t;break;default:
          r = JSON.stringify(t);}if (null != e && "" != g.trim(e)) {
        var i = "color: #" + e;null != n && (i = i + "; background: #" + n), r = "%c" + r, window.console.log(r, i);
      } else window.console.log(r);
    }, M.stringToRgb = function (t) {
      for (var e = 0, n = 0, r = t.length; n < r;) {
        var i = n++;e = c.cca(t, i) + ((e << 5) - e);
      }var s = (16777215 & e).toString(16).toUpperCase();return "00000".substring(0, 6 - s.length) + f.string(s);
    }, M.hashCode = function (t) {
      for (var e = 0, n = 0, r = t.length; n < r;) {
        var i = n++;e = c.cca(t, i) + ((e << 5) - e);
      }return e;
    }, M.intToRGB = function (t) {
      var e = (16777215 & t).toString(16).toUpperCase();return "00000".substring(0, 6 - e.length) + f.string(e);
    };var x = 0;function O(t, e) {
      return null == e ? null : (null == e.__id__ && (e.__id__ = x++), null == t.hx__closures__ ? t.hx__closures__ = {} : n = t.hx__closures__[e.__id__], null == n && (n = e.bind(t), t.hx__closures__[e.__id__] = n), n);var n;
    }String.__name__ = !0, Array.__name__ = !0, Object.defineProperty(w.prototype, "message", { get: function get() {
        return String(this.val);
      } }), y.__toStr = {}.toString, _.JSONRPC_VERSION_2 = "2.0", _.MULTIPART_JSONRPC_KEY = "jsonrpc", _.JSONRPC_NULL_ID = "_", v._handlers = [], I.INPUTS = "inputs", I.OUTPUTS = "outputs", I.CONSOLE_BACKGROUND_COLOR_DEFAULT = "bcbcbc", I.minimatch = n(2), M.URL_PARAM_DEBUG = "MP_DEBUG", M.URL_PARAM_METAFRAME_ID = "MF_ID", M.LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
  }).call(this, n(1));
}, function (t, e) {
  var n;n = function () {
    return this;
  }();try {
    n = n || new Function("return this")();
  } catch (t) {
    "object" == typeof window && (n = window);
  }t.exports = n;
}, function (t, e, n) {
  t.exports = g, g.Minimatch = m;var r = { sep: "/" };try {
    r = n(3);
  } catch (t) {}var i = g.GLOBSTAR = m.GLOBSTAR = {},
      s = n(5),
      a = { "!": { open: "(?:(?!(?:", close: "))[^/]*?)" }, "?": { open: "(?:", close: ")?" }, "+": { open: "(?:", close: ")+" }, "*": { open: "(?:", close: ")*" }, "@": { open: "(?:", close: ")" } },
      o = "[^/]",
      u = o + "*?",
      l = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",
      c = "(?:(?!(?:\\/|^)\\.).)*?",
      h = "().*{}+?[]^$\\!".split("").reduce(function (t, e) {
    return t[e] = !0, t;
  }, {});var f = /\/+/;function p(t, e) {
    t = t || {}, e = e || {};var n = {};return Object.keys(e).forEach(function (t) {
      n[t] = e[t];
    }), Object.keys(t).forEach(function (e) {
      n[e] = t[e];
    }), n;
  }function g(t, e, n) {
    if ("string" != typeof e) throw new TypeError("glob pattern string required");return n || (n = {}), !(!n.nocomment && "#" === e.charAt(0)) && ("" === e.trim() ? "" === t : new m(e, n).match(t));
  }function m(t, e) {
    if (!(this instanceof m)) return new m(t, e);if ("string" != typeof t) throw new TypeError("glob pattern string required");e || (e = {}), t = t.trim(), "/" !== r.sep && (t = t.split(r.sep).join("/")), this.options = e, this.set = [], this.pattern = t, this.regexp = null, this.negate = !1, this.comment = !1, this.empty = !1, this.make();
  }function d(t, e) {
    if (e || (e = this instanceof m ? this.options : {}), void 0 === (t = void 0 === t ? this.pattern : t)) throw new TypeError("undefined pattern");return e.nobrace || !t.match(/\{.*\}/) ? [t] : s(t);
  }g.filter = function (t, e) {
    return e = e || {}, function (n, r, i) {
      return g(n, t, e);
    };
  }, g.defaults = function (t) {
    if (!t || !Object.keys(t).length) return g;var e = g,
        n = function n(_n, r, i) {
      return e.minimatch(_n, r, p(t, i));
    };return n.Minimatch = function (n, r) {
      return new e.Minimatch(n, p(t, r));
    }, n;
  }, m.defaults = function (t) {
    return t && Object.keys(t).length ? g.defaults(t).Minimatch : m;
  }, m.prototype.debug = function () {}, m.prototype.make = function () {
    if (this._made) return;var t = this.pattern,
        e = this.options;if (!e.nocomment && "#" === t.charAt(0)) return void (this.comment = !0);if (!t) return void (this.empty = !0);this.parseNegate();var n = this.globSet = this.braceExpand();e.debug && (this.debug = console.error);this.debug(this.pattern, n), n = this.globParts = n.map(function (t) {
      return t.split(f);
    }), this.debug(this.pattern, n), n = n.map(function (t, e, n) {
      return t.map(this.parse, this);
    }, this), this.debug(this.pattern, n), n = n.filter(function (t) {
      return -1 === t.indexOf(!1);
    }), this.debug(this.pattern, n), this.set = n;
  }, m.prototype.parseNegate = function () {
    var t = this.pattern,
        e = !1,
        n = this.options,
        r = 0;if (n.nonegate) return;for (var i = 0, s = t.length; i < s && "!" === t.charAt(i); i++) {
      e = !e, r++;
    }r && (this.pattern = t.substr(r));this.negate = e;
  }, g.braceExpand = function (t, e) {
    return d(t, e);
  }, m.prototype.braceExpand = d, m.prototype.parse = function (t, e) {
    if (t.length > 65536) throw new TypeError("pattern is too long");var n = this.options;if (!n.noglobstar && "**" === t) return i;if ("" === t) return "";var r,
        s = "",
        l = !!n.nocase,
        c = !1,
        f = [],
        p = [],
        g = !1,
        m = -1,
        d = -1,
        v = "." === t.charAt(0) ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)",
        b = this;function w() {
      if (r) {
        switch (r) {case "*":
            s += u, l = !0;break;case "?":
            s += o, l = !0;break;default:
            s += "\\" + r;}b.debug("clearStateChar %j %j", r, s), r = !1;
      }
    }for (var y, S = 0, I = t.length; S < I && (y = t.charAt(S)); S++) {
      if (this.debug("%s\t%s %s %j", t, S, s, y), c && h[y]) s += "\\" + y, c = !1;else switch (y) {case "/":
          return !1;case "\\":
          w(), c = !0;continue;case "?":case "*":case "+":case "@":case "!":
          if (this.debug("%s\t%s %s %j <-- stateChar", t, S, s, y), g) {
            this.debug("  in class"), "!" === y && S === d + 1 && (y = "^"), s += y;continue;
          }b.debug("call clearStateChar %j", r), w(), r = y, n.noext && w();continue;case "(":
          if (g) {
            s += "(";continue;
          }if (!r) {
            s += "\\(";continue;
          }f.push({ type: r, start: S - 1, reStart: s.length, open: a[r].open, close: a[r].close }), s += "!" === r ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", r, s), r = !1;continue;case ")":
          if (g || !f.length) {
            s += "\\)";continue;
          }w(), l = !0;var j = f.pop();s += j.close, "!" === j.type && p.push(j), j.reEnd = s.length;continue;case "|":
          if (g || !f.length || c) {
            s += "\\|", c = !1;continue;
          }w(), s += "|";continue;case "[":
          if (w(), g) {
            s += "\\" + y;continue;
          }g = !0, d = S, m = s.length, s += y;continue;case "]":
          if (S === d + 1 || !g) {
            s += "\\" + y, c = !1;continue;
          }if (g) {
            var M = t.substring(d + 1, S);try {
              RegExp("[" + M + "]");
            } catch (t) {
              var x = this.parse(M, _);s = s.substr(0, m) + "\\[" + x[0] + "\\]", l = l || x[1], g = !1;continue;
            }
          }l = !0, g = !1, s += y;continue;default:
          w(), c ? c = !1 : !h[y] || "^" === y && g || (s += "\\"), s += y;}
    }g && (M = t.substr(d + 1), x = this.parse(M, _), s = s.substr(0, m) + "\\[" + x[0], l = l || x[1]);for (j = f.pop(); j; j = f.pop()) {
      var O = s.slice(j.reStart + j.open.length);this.debug("setting tail", s, j), O = O.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (t, e, n) {
        return n || (n = "\\"), e + e + n + "|";
      }), this.debug("tail=%j\n   %s", O, O, j, s);var N = "*" === j.type ? u : "?" === j.type ? o : "\\" + j.type;l = !0, s = s.slice(0, j.reStart) + N + "\\(" + O;
    }w(), c && (s += "\\\\");var k = !1;switch (s.charAt(0)) {case ".":case "[":case "(":
        k = !0;}for (var E = p.length - 1; E > -1; E--) {
      var R = p[E],
          A = s.slice(0, R.reStart),
          L = s.slice(R.reStart, R.reEnd - 8),
          P = s.slice(R.reEnd - 8, R.reEnd),
          T = s.slice(R.reEnd);P += T;var C = A.split("(").length - 1,
          U = T;for (S = 0; S < C; S++) {
        U = U.replace(/\)[+*?]?/, "");
      }var F = "";"" === (T = U) && e !== _ && (F = "$");var B = A + L + T + F + P;s = B;
    }"" !== s && l && (s = "(?=.)" + s);k && (s = v + s);if (e === _) return [s, l];if (!l) return t.replace(/\\(.)/g, "$1");var D = n.nocase ? "i" : "";try {
      var J = new RegExp("^" + s + "$", D);
    } catch (t) {
      return new RegExp("$.");
    }return J._glob = t, J._src = s, J;
  };var _ = {};g.makeRe = function (t, e) {
    return new m(t, e || {}).makeRe();
  }, m.prototype.makeRe = function () {
    if (this.regexp || !1 === this.regexp) return this.regexp;var t = this.set;if (!t.length) return this.regexp = !1, this.regexp;var e = this.options,
        n = e.noglobstar ? u : e.dot ? l : c,
        r = e.nocase ? "i" : "",
        s = t.map(function (t) {
      return t.map(function (t) {
        return t === i ? n : "string" == typeof t ? t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : t._src;
      }).join("\\/");
    }).join("|");s = "^(?:" + s + ")$", this.negate && (s = "^(?!" + s + ").*$");try {
      this.regexp = new RegExp(s, r);
    } catch (t) {
      this.regexp = !1;
    }return this.regexp;
  }, g.match = function (t, e, n) {
    var r = new m(e, n = n || {});return t = t.filter(function (t) {
      return r.match(t);
    }), r.options.nonull && !t.length && t.push(e), t;
  }, m.prototype.match = function (t, e) {
    if (this.debug("match", t, this.pattern), this.comment) return !1;if (this.empty) return "" === t;if ("/" === t && e) return !0;var n = this.options;"/" !== r.sep && (t = t.split(r.sep).join("/"));t = t.split(f), this.debug(this.pattern, "split", t);var i,
        s,
        a = this.set;for (this.debug(this.pattern, "set", a), s = t.length - 1; s >= 0 && !(i = t[s]); s--) {}for (s = 0; s < a.length; s++) {
      var o = a[s],
          u = t;n.matchBase && 1 === o.length && (u = [i]);var l = this.matchOne(u, o, e);if (l) return !!n.flipNegate || !this.negate;
    }return !n.flipNegate && this.negate;
  }, m.prototype.matchOne = function (t, e, n) {
    var r = this.options;this.debug("matchOne", { this: this, file: t, pattern: e }), this.debug("matchOne", t.length, e.length);for (var s = 0, a = 0, o = t.length, u = e.length; s < o && a < u; s++, a++) {
      this.debug("matchOne loop");var l,
          c = e[a],
          h = t[s];if (this.debug(e, c, h), !1 === c) return !1;if (c === i) {
        this.debug("GLOBSTAR", [e, c, h]);var f = s,
            p = a + 1;if (p === u) {
          for (this.debug("** at the end"); s < o; s++) {
            if ("." === t[s] || ".." === t[s] || !r.dot && "." === t[s].charAt(0)) return !1;
          }return !0;
        }for (; f < o;) {
          var g = t[f];if (this.debug("\nglobstar while", t, f, e, p, g), this.matchOne(t.slice(f), e.slice(p), n)) return this.debug("globstar found match!", f, o, g), !0;if ("." === g || ".." === g || !r.dot && "." === g.charAt(0)) {
            this.debug("dot detected!", t, f, e, p);break;
          }this.debug("globstar swallow a segment, and continue"), f++;
        }return !(!n || (this.debug("\n>>> no match, partial?", t, f, e, p), f !== o));
      }if ("string" == typeof c ? (l = r.nocase ? h.toLowerCase() === c.toLowerCase() : h === c, this.debug("string match", c, h, l)) : (l = h.match(c), this.debug("pattern match", c, h, l)), !l) return !1;
    }if (s === o && a === u) return !0;if (s === o) return n;if (a === u) return s === o - 1 && "" === t[s];throw new Error("wtf?");
  };
}, function (t, e, n) {
  (function (t) {
    function n(t, e) {
      for (var n = 0, r = t.length - 1; r >= 0; r--) {
        var i = t[r];"." === i ? t.splice(r, 1) : ".." === i ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--);
      }if (e) for (; n--; n) {
        t.unshift("..");
      }return t;
    }var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
        i = function i(t) {
      return r.exec(t).slice(1);
    };function s(t, e) {
      if (t.filter) return t.filter(e);for (var n = [], r = 0; r < t.length; r++) {
        e(t[r], r, t) && n.push(t[r]);
      }return n;
    }e.resolve = function () {
      for (var e = "", r = !1, i = arguments.length - 1; i >= -1 && !r; i--) {
        var a = i >= 0 ? arguments[i] : t.cwd();if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");a && (e = a + "/" + e, r = "/" === a.charAt(0));
      }return (r ? "/" : "") + (e = n(s(e.split("/"), function (t) {
        return !!t;
      }), !r).join("/")) || ".";
    }, e.normalize = function (t) {
      var r = e.isAbsolute(t),
          i = "/" === a(t, -1);return (t = n(s(t.split("/"), function (t) {
        return !!t;
      }), !r).join("/")) || r || (t = "."), t && i && (t += "/"), (r ? "/" : "") + t;
    }, e.isAbsolute = function (t) {
      return "/" === t.charAt(0);
    }, e.join = function () {
      var t = Array.prototype.slice.call(arguments, 0);return e.normalize(s(t, function (t, e) {
        if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");return t;
      }).join("/"));
    }, e.relative = function (t, n) {
      function r(t) {
        for (var e = 0; e < t.length && "" === t[e]; e++) {}for (var n = t.length - 1; n >= 0 && "" === t[n]; n--) {}return e > n ? [] : t.slice(e, n - e + 1);
      }t = e.resolve(t).substr(1), n = e.resolve(n).substr(1);for (var i = r(t.split("/")), s = r(n.split("/")), a = Math.min(i.length, s.length), o = a, u = 0; u < a; u++) {
        if (i[u] !== s[u]) {
          o = u;break;
        }
      }var l = [];for (u = o; u < i.length; u++) {
        l.push("..");
      }return (l = l.concat(s.slice(o))).join("/");
    }, e.sep = "/", e.delimiter = ":", e.dirname = function (t) {
      var e = i(t),
          n = e[0],
          r = e[1];return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
    }, e.basename = function (t, e) {
      var n = i(t)[2];return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n;
    }, e.extname = function (t) {
      return i(t)[3];
    };var a = "b" === "ab".substr(-1) ? function (t, e, n) {
      return t.substr(e, n);
    } : function (t, e, n) {
      return e < 0 && (e = t.length + e), t.substr(e, n);
    };
  }).call(this, n(4));
}, function (t, e) {
  var n,
      r,
      i = t.exports = {};function s() {
    throw new Error("setTimeout has not been defined");
  }function a() {
    throw new Error("clearTimeout has not been defined");
  }function o(t) {
    if (n === setTimeout) return setTimeout(t, 0);if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);try {
      return n(t, 0);
    } catch (e) {
      try {
        return n.call(null, t, 0);
      } catch (e) {
        return n.call(this, t, 0);
      }
    }
  }!function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : s;
    } catch (t) {
      n = s;
    }try {
      r = "function" == typeof clearTimeout ? clearTimeout : a;
    } catch (t) {
      r = a;
    }
  }();var u,
      l = [],
      c = !1,
      h = -1;function f() {
    c && u && (c = !1, u.length ? l = u.concat(l) : h = -1, l.length && p());
  }function p() {
    if (!c) {
      var t = o(f);c = !0;for (var e = l.length; e;) {
        for (u = l, l = []; ++h < e;) {
          u && u[h].run();
        }h = -1, e = l.length;
      }u = null, c = !1, function (t) {
        if (r === clearTimeout) return clearTimeout(t);if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);try {
          r(t);
        } catch (e) {
          try {
            return r.call(null, t);
          } catch (e) {
            return r.call(this, t);
          }
        }
      }(t);
    }
  }function g(t, e) {
    this.fun = t, this.array = e;
  }function m() {}i.nextTick = function (t) {
    var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }l.push(new g(t, e)), 1 !== l.length || c || o(p);
  }, g.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function (t) {
    return [];
  }, i.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, i.cwd = function () {
    return "/";
  }, i.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, i.umask = function () {
    return 0;
  };
}, function (t, e, n) {
  var r = n(6),
      i = n(7);t.exports = function (t) {
    if (!t) return [];"{}" === t.substr(0, 2) && (t = "\\{\\}" + t.substr(2));return function t(e, n) {
      var s = [];var a = i("{", "}", e);if (!a || /\$$/.test(a.pre)) return [e];var u = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body);var l = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body);var h = u || l;var d = a.body.indexOf(",") >= 0;if (!h && !d) return a.post.match(/,.*\}/) ? (e = a.pre + "{" + a.body + o + a.post, t(e)) : [e];var _;if (h) _ = a.body.split(/\.\./);else if (1 === (_ = function t(e) {
        if (!e) return [""];var n = [];var r = i("{", "}", e);if (!r) return e.split(",");var s = r.pre;var a = r.body;var o = r.post;var u = s.split(",");u[u.length - 1] += "{" + a + "}";var l = t(o);o.length && (u[u.length - 1] += l.shift(), u.push.apply(u, l));n.push.apply(n, u);return n;
      }(a.body)).length && 1 === (_ = t(_[0], !1).map(f)).length) {
        var v = a.post.length ? t(a.post, !1) : [""];return v.map(function (t) {
          return a.pre + _[0] + t;
        });
      }var b = a.pre;var v = a.post.length ? t(a.post, !1) : [""];var w;if (h) {
        var y = c(_[0]),
            S = c(_[1]),
            I = Math.max(_[0].length, _[1].length),
            j = 3 == _.length ? Math.abs(c(_[2])) : 1,
            M = g,
            x = S < y;x && (j *= -1, M = m);var O = _.some(p);w = [];for (var N = y; M(N, S); N += j) {
          var k;if (l) "\\" === (k = String.fromCharCode(N)) && (k = "");else if (k = String(N), O) {
            var E = I - k.length;if (E > 0) {
              var R = new Array(E + 1).join("0");k = N < 0 ? "-" + R + k.slice(1) : R + k;
            }
          }w.push(k);
        }
      } else w = r(_, function (e) {
        return t(e, !1);
      });for (var A = 0; A < w.length; A++) {
        for (var L = 0; L < v.length; L++) {
          var P = b + w[A] + v[L];(!n || h || P) && s.push(P);
        }
      }return s;
    }(function (t) {
      return t.split("\\\\").join(s).split("\\{").join(a).split("\\}").join(o).split("\\,").join(u).split("\\.").join(l);
    }(t), !0).map(h);
  };var s = "\0SLASH" + Math.random() + "\0",
      a = "\0OPEN" + Math.random() + "\0",
      o = "\0CLOSE" + Math.random() + "\0",
      u = "\0COMMA" + Math.random() + "\0",
      l = "\0PERIOD" + Math.random() + "\0";function c(t) {
    return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0);
  }function h(t) {
    return t.split(s).join("\\").split(a).join("{").split(o).join("}").split(u).join(",").split(l).join(".");
  }function f(t) {
    return "{" + t + "}";
  }function p(t) {
    return (/^-?0\d/.test(t)
    );
  }function g(t, e) {
    return t <= e;
  }function m(t, e) {
    return t >= e;
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var r = [], i = 0; i < t.length; i++) {
      var s = e(t[i], i);n(s) ? r.push.apply(r, s) : r.push(s);
    }return r;
  };var n = Array.isArray || function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  };
}, function (t, e, n) {
  "use strict";
  function r(t, e, n) {
    t instanceof RegExp && (t = i(t, n)), e instanceof RegExp && (e = i(e, n));var r = s(t, e, n);return r && { start: r[0], end: r[1], pre: n.slice(0, r[0]), body: n.slice(r[0] + t.length, r[1]), post: n.slice(r[1] + e.length) };
  }function i(t, e) {
    var n = e.match(t);return n ? n[0] : null;
  }function s(t, e, n) {
    var r,
        i,
        s,
        a,
        o,
        u = n.indexOf(t),
        l = n.indexOf(e, u + 1),
        c = u;if (u >= 0 && l > 0) {
      for (r = [], s = n.length; c >= 0 && !o;) {
        c == u ? (r.push(c), u = n.indexOf(t, c + 1)) : 1 == r.length ? o = [r.pop(), l] : ((i = r.pop()) < s && (s = i, a = l), l = n.indexOf(e, c + 1)), c = u < l && u >= 0 ? u : l;
      }r.length && (o = [s, a]);
    }return o;
  }t.exports = r, r.range = s;
}]);

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map