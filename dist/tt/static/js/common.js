var manifest = require('./manifest.js');
var cmldefine = manifest.cmldefine;

cmldefine('59', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.data = {};
  }

  _createClass(App, [{
    key: 'created',
    value: function created(res) {}
  }]);

  return App;
}();

exports.default = new App();
exports.default = _cmlTtRuntime2.default.createApp(exports.default).getOptions();
})
cmldefine('0', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("60");

var _index2 = require("84");

var _index3 = require("86");

exports.default = {
  createApp: _index.createApp,
  createPage: _index2.createPage,
  createComponent: _index3.createComponent
};
})
cmldefine('60', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;

var _index = require("61");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createApp(options) {
  return _index2.default.createApp(options);
}
})
cmldefine('61', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _tt = require("18");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
} // 定义模块的interface


var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'createApp',
    value: function createApp(options) {
      return new _tt.App(options);
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('18', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = require("62");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _instance.App;
  }
});
Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _instance.Page;
  }
});
Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _instance.Component;
  }
});
})
cmldefine('62', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require("63");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _app.CmlApp;
  }
});

var _page = require("82");

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _page.CmlPage;
  }
});

var _component = require("83");

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _component.CmlComponent;
  }
});
})
cmldefine('63', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CmlApp = undefined;

var _VmAdapter = require("19");

var _VmAdapter2 = _interopRequireDefault(_VmAdapter);

var _MiniRuntimeCore = require("20");

var _MiniRuntimeCore2 = _interopRequireDefault(_MiniRuntimeCore);

var _BaseCtor2 = require("21");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = require("10");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // import BaseCtor from 'chameleon-runtime/src/platform/common/proto/BaseCtor'
// import lifecycle from 'chameleon-runtime/src/platform/common/util/lifecycle'
// import MiniRuntimeCore from 'chameleon-runtime/src/platform/common/proto/MiniRuntimeCore'


var CmlApp = exports.CmlApp = function (_BaseCtor) {
  _inherits(CmlApp, _BaseCtor);

  function CmlApp(options) {
    _classCallCheck(this, CmlApp);

    var _this = _possibleConstructorReturn(this, (CmlApp.__proto__ || Object.getPrototypeOf(CmlApp)).call(this, options));

    _this.cmlType = 'tt';
    var runtimeCore = new _MiniRuntimeCore2.default({
      polyHooks: _lifecycle2.default.get('tt.app.polyHooks'),
      platform: _this.cmlType,
      options: _this.options
    });

    _this.initVmAdapter(_VmAdapter2.default, {
      type: 'app',
      runtimeMixins: {
        onLaunch: function onLaunch() {
          // 初始化
          runtimeCore.setContext(this).init().start('app-view-render');
        }
      },
      needResolveAttrs: ['methods'],
      hooks: _lifecycle2.default.get('tt.app.hooks'),
      hooksMap: _lifecycle2.default.get('tt.app.hooksMap'),
      polyHooks: _lifecycle2.default.get('tt.app.polyHooks'),
      usedHooks: _lifecycle2.default.get('tt.app.usedHooks')
    });

    App(_this.options);
    return _this;
  }

  return CmlApp;
}(_BaseCtor3.default);
})
cmldefine('19', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MiniVmAdapter2 = require("64");

var _MiniVmAdapter3 = _interopRequireDefault(_MiniVmAdapter2);

var _cmlTtMixins = require("70");

var _cmlTtMixins2 = _interopRequireDefault(_cmlTtMixins);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // import MiniVmAdapter from 'chameleon-runtime/src/platform/common/proto/MiniVmAdapter'


var VmAdapter = function (_MiniVmAdapter) {
  _inherits(VmAdapter, _MiniVmAdapter);

  function VmAdapter(config) {
    _classCallCheck(this, VmAdapter);

    var _this = _possibleConstructorReturn(this, (VmAdapter.__proto__ || Object.getPrototypeOf(VmAdapter)).call(this, config));

    _this.platform = 'tt'; // 样式、事件代理 mixins

    _this.baseMixins = _cmlTtMixins2.default.mixins;

    _this.init();

    return _this;
  }

  return VmAdapter;
}(_MiniVmAdapter3.default);

exports.default = VmAdapter;
})
cmldefine('64', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _BaseVmAdapter2 = require("65");

var _BaseVmAdapter3 = _interopRequireDefault(_BaseVmAdapter2);

var _util = require("12");

var _type = require("7");

var _resolve = require("67");

var _mobx = require("13");

var _KEY = require("32");

var _KEY2 = _interopRequireDefault(_KEY);

var _lifecycle = require("10");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _options = require("69");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // 各种小程序options transform 基类


var MiniVmAdapter = function (_BaseVmAdapter) {
  _inherits(MiniVmAdapter, _BaseVmAdapter);

  function MiniVmAdapter(config) {
    _classCallCheck(this, MiniVmAdapter); //小程序特有


    var _this = _possibleConstructorReturn(this, (MiniVmAdapter.__proto__ || Object.getPrototypeOf(MiniVmAdapter)).call(this, config));

    _this.needPropsHandler = config.needPropsHandler;
    _this.needResolveAttrs = config.needResolveAttrs;
    _this.needTransformProperties = config.needTransformProperties;
    return _this;
  }

  _createClass(MiniVmAdapter, [{
    key: 'init',
    value: function init() {
      this.propsName = this.platform ? _KEY2.default.get(this.platform + '.props') : ''; // 处理 CML hooks

      this.initHooks(this.options);
      this.initOptions(this.options); // 处理 mixins 

      this.initMixins(this.options); // 处理 生命周期多态

      this.extendPolyHooks(); // init 顺序很重要、
      // 添加各种mixins
      // this.mergeInjectedMixins()

      this.mergeBuiltinMixins(); // 处理 mixins

      this.resolveOptions(); // 添加 生命周期代理

      this.transformHooks(); // 处理 methods

      this.needResolveAttrs && this.resolveAttrs(); // 处理 props 添加监听

      this.needTransformProperties && this.transformProperties();

      if (this.platform === 'alipay') {
        delete this.options['computed'];
      }
    }
    /**
     * merge cml hooks from mixins
     * handle hooks include:
     * 1. cml hooks
     * 2. platforms hooks in resolveOptions function
     * @param {Object} options 
     */

  }, {
    key: 'initHooks',
    value: function initHooks(options) {
      if (!options.mixins) return;

      var cmlHooks = _lifecycle2.default.get('cml.hooks');

      var mixins = options.mixins;

      var _loop = function _loop(i) {
        var mix = mixins[i];
        Object.keys(mix).forEach(function (key) {
          if (cmlHooks.indexOf(key) !== -1) {
            !Array.isArray(mix[key]) && (mix[key] = [mix[key]]);

            if ((0, _util.hasOwn)(options, key)) {
              !Array.isArray(options[key]) && (options[key] = [options[key]]);
              options[key] = mix[key].concat(options[key]);
            } else {
              options[key] = mix[key];
            }

            delete mix[key];
          }
        });
      };

      for (var i = mixins.length - 1; i >= 0; i--) {
        _loop(i);
      }
    }
  }, {
    key: 'initOptions',
    value: function initOptions(options) {
      // 处理 props
      this.needPropsHandler && this.handleProps(options); // 处理 生命周期映射

      (0, _util.transferLifecycle)(options, this.hooksMap);
    }
    /**
     * 处理组件props属性
     * @param  {Object} options 组件options
     * @return {[type]}     [description]
     */

  }, {
    key: 'handleProps',
    value: function handleProps(options) {
      var _this2 = this;

      if (!options['props']) return;
      Object.getOwnPropertyNames(options['props']).forEach(function (name) {
        var prop = options['props'][name]; // Number: 0
        // Boolean: false
        // Array: false
        // String: ''
        // Object: null
        // null: null

        function make(type) {
          if (!knowType(type)) {
            return;
          }

          switch (type) {
            case Number:
              prop = options['props'][name] = {
                type: Number,
                default: 0
              };
              break;

            case Boolean:
              prop = options['props'][name] = {
                type: Boolean,
                default: false
              };
              break;

            case Array:
              prop = options['props'][name] = {
                type: Array,
                default: []
              };
              break;

            case String:
              prop = options['props'][name] = {
                type: String,
                default: ''
              };
              break;

            case Object:
              prop = options['props'][name] = {
                type: Object,
                default: null
              };
              break;

            case null:
              prop = options['props'][name] = {
                type: null,
                default: null
              };
              break;

            default:
              break;
          }
        }

        function knowType(type) {
          return type === Number || type === Boolean || type === Array || type === String || type === Object || type === null;
        } // 处理 props = { a: String, b: Boolean }


        make(prop);

        if ((0, _type.type)(prop) === 'Object') {
          if (_this2.platform === 'alipay') {
            if (!prop.hasOwnProperty('default')) {
              // alipay 处理 // 处理 props = { a: {type:String}, b: {type:Boolean} }
              make(prop.type);
            }

            options['props'][name] = prop['default'];
          } else {
            (0, _util.rename)(options['props'][name], 'default', 'value');
          }
        }
      });

      if (this.platform !== 'alipay') {
        (0, _util.rename)(options, 'props', 'properties');
      }

      function check(value, type) {
        if (typeof value === 'undefined') {
          console.error(prop + '\u9700\u8981\u4F20\u9ED8\u8BA4\u503C');
          return false;
        } // todo type 校验

      }
    }
  }, {
    key: 'initMixins',
    value: function initMixins(options) {
      var _this3 = this;

      if (!options.mixins) return;
      var mixins = options.mixins;
      mixins.forEach(function (mix) {
        _this3.initOptions(mix);
      });
    }
    /**
     * 小程序端差异化生命周期 hooks mixins
     */

  }, {
    key: 'extendPolyHooks',
    value: function extendPolyHooks() {
      var _this4 = this;

      var methods = this.options.methods;

      if (!methods) {
        return;
      }

      this.polyHooks.forEach(function (hook) {
        if ((0, _type.type)(methods[hook]) === 'Function') {
          if ((0, _type.type)(_this4.options[hook]) === 'Array') {
            _this4.options[hook].push(methods[hook]);
          } else {
            _this4.options[hook] = [methods[hook]];
          }

          delete methods[hook];
        }
      });
    }
  }, {
    key: 'mergeInjectedMixins',
    value: function mergeInjectedMixins() {
      this.options.mixins = this.options.mixins ? this.options.mixins.concat(this.injectMixins) : this.injectMixins;
    }
  }, {
    key: 'mergeBuiltinMixins',
    value: function mergeBuiltinMixins() {
      var btMixin = [this.baseMixins, this.runtimeMixins].filter(function (item) {
        return item;
      });
      this.options.mixins = this.options.mixins ? btMixin.concat(this.options.mixins) : btMixin;
    }
  }, {
    key: 'resolveOptions',
    value: function resolveOptions() {
      var self = this;

      var extractMixins = function extractMixins(mOptions, options) {
        if (options.mixins) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = options.mixins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _mix = _step.value;
              extractMixins(mOptions, _mix);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        mergeMixins(mOptions, options);
      };

      var mergeMixins = function mergeMixins(parent, child) {
        for (var key in child) {
          if (self.hooks.indexOf(key) > -1) {
            (0, _resolve.mergeHooks)(parent, child, key);
          } else if (key === 'data') {
            (0, _resolve.mergeData)(parent, child, key);
          } else if (testProps(key)) {
            (0, _resolve.mergeSimpleProps)(parent, child, key);
          } else if (key === 'watch') {
            (0, _resolve.mergeWatch)(parent, child, key);
          } else if (key !== 'mixins') {
            (0, _resolve.mergeDefault)(parent, child, key);
          }
        }
      };

      var testProps = function testProps(key) {
        var regExp = new RegExp('computed|methods|proto|' + self.propsName);
        return regExp.test(key);
      };

      var newOptions = {};
      extractMixins(newOptions, this.options);
      this.options = newOptions;
    }
  }, {
    key: 'transformHooks',
    value: function transformHooks() {
      if (!this.hooks || !this.hooks.length) return;
      var self = this;
      this.hooks.forEach(function (key) {
        var hooksArr = self.options[key];
        hooksArr && (self.options[key] = function () {
          var result = void 0;
          var asyncQuene = []; // 多态生命周期需要统一回调参数
          // if (self.polyHooks.indexOf(key) > -1) {
          //   let res = args[0]
          //   if (type(res) !== 'Object') {
          //     res = {
          //       'detail': args[0]
          //     }
          //   }
          //   args = [res]
          // }

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if ((0, _type.type)(hooksArr) === 'Function') {
            result = hooksArr.apply(this, args);
          } else if ((0, _type.type)(hooksArr) === 'Array') {
            for (var i = 0; i < hooksArr.length; i++) {
              if ((0, _type.type)(hooksArr[i]) === 'Function') {
                result = hooksArr[i].apply(this, args); // if (result && result.enableAsync) {
                //   asyncQuene = hooksArr.slice(i + 1)
                //   break
                // }
              }
            } // Promise.resolve().then(() => {
            //   asyncQuene.forEach(fn => {
            //     fn.apply(this, args)
            //   })
            // })

          }

          return result;
        });
      });
    }
  }, {
    key: 'resolveAttrs',
    value: function resolveAttrs() {
      var _this5 = this;

      if (!this.needResolveAttrs.length) return;
      var keys = this.needResolveAttrs;

      if ((0, _type.type)(keys) === 'String') {
        keys = [keys];
      }

      keys.forEach(function (key) {
        var value = _this5.options[key];
        if ((0, _type.type)(value) !== 'Object') return;
        (0, _util.extendWithIgnore)(_this5.options, value, _this5.usedHooks);
        delete _this5.options[key];
      });
    }
  }, {
    key: 'transformProperties',
    value: function transformProperties() {
      var originProperties = this.options[this.propsName];
      var newProps = {};
      (0, _util.enumerableKeys)(originProperties).forEach(function (key) {
        var rawFiled = originProperties[key];
        var rawObserver = rawFiled.observer;
        var newFiled = null;

        if (typeof rawFiled === 'function') {
          newFiled = {
            type: rawFiled
          };
        } else {
          newFiled = (0, _util.extend)({}, rawFiled);
        }

        newFiled.observer = function (value, oldValue) {
          // 小程序内部数据使用了JSON.parse(JSON.stringify(x))的方式，导致每次引用都会变化
          if (_mobx.extras.deepEqual(value, oldValue)) return;
          this[key] = value;
          typeof rawObserver === 'function' && rawObserver.call(this, value, oldValue);
        };

        newProps[key] = newFiled;
      });
      this.options[this.propsName] = newProps;
    }
  }]);

  return MiniVmAdapter;
}(_BaseVmAdapter3.default);

exports.default = MiniVmAdapter;
})
cmldefine('65', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _type = require("7");

var _warn = require("30");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
} // options transform 基类


var BaseVmAdapter = function () {
  function BaseVmAdapter(config) {
    _classCallCheck(this, BaseVmAdapter);

    this.type = config.type;
    this.options = config.options;
    this.injectMixins = config.injectMixins || [];
    this.runtimeMixins = config.runtimeMixins;
    this.hooks = config.hooks;
    this.hooksMap = config.hooksMap;
    this.polyHooks = config.polyHooks;
    this.usedHooks = config.usedHooks;
    this.platform = '';

    if ("build" !== "build") {
      var mix = this.options.mixins;
      (0, _warn.invariant)((0, _type.type)(mix) === 'Undefined' || (0, _type.type)(mix) === "Array", "mixins expects an Array");
    }
  }

  _createClass(BaseVmAdapter, [{
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }
  }]);

  return BaseVmAdapter;
}();

exports.default = BaseVmAdapter;
})
cmldefine('7', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.type = type;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;
exports.isDef = isDef;
exports.isPromise = isPromise;
var toString = Object.prototype.toString;

function type(n) {
  return toString.call(n).slice(8, -1);
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return type(obj) === 'Object';
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isPromise(v) {
  return isDef(v) && typeof v.then === 'function' && typeof v.catch === 'function';
}
})
cmldefine('30', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fail = fail;
exports.invariant = invariant;
exports.deprecated = deprecated;
var OBFUSCATED_ERROR = exports.OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";

function fail(message) {
  invariant(false, message);
  throw "X"; // unreachable
}

function invariant(check, message) {
  if (!check) throw new Error("[chameleon-runtime] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */


var deprecatedMessages = [];

function deprecated(msg, thing) {
  if ("build" === "build") return false;

  if (thing) {
    return deprecated("'" + msg + "', use '" + thing + "' instead.");
  }

  if (deprecatedMessages.indexOf(msg) !== -1) return false;
  deprecatedMessages.push(msg);
  console.error("[chameleon-runtime] Deprecated: " + msg);
  return true;
}
})
cmldefine('12', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.hasOwn = hasOwn;
exports.noop = noop;
exports.propToFn = propToFn;
exports.transferLifecycle = transferLifecycle;
exports.rename = rename;
exports.normalizeMap = normalizeMap;
exports.merge = merge;
exports.extend = extend;
exports.extendWithIgnore = extendWithIgnore;
exports.isExistAttr = isExistAttr;
exports.parsePath = parsePath;
exports.getByPath = getByPath;
exports.enumerable = enumerable;
exports.proxy = proxy;
exports.deleteProperties = deleteProperties;
exports.enumerableKeys = enumerableKeys;
exports.flatten = flatten;

var _type = require("7");

var _clone = require("66");
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {} // transfer 对象的`${name}`属性值 to function


function propToFn(obj, name) {
  if (obj && (0, _type.isObject)(obj[name])) {
    var _temp = obj[name];

    obj[name] = function () {
      return (0, _clone.deepClone)(_temp);
    };
  }
}
/**
 * 生命周期映射
 * @param  {Object} options options
 * @param  {Object} hooksMap 映射表
 * @return {Object}     修改后值
 */


function transferLifecycle(options, hooksMap) {
  if (!hooksMap) {
    return;
  }

  var _hooksTemp = [];
  var _mapTemp = {}; // 将生命周期 键名 处理成 [`$_${key}`]

  Object.keys(hooksMap).forEach(function (key) {
    var uniKey = '$_' + key;

    _hooksTemp.push(uniKey);

    _mapTemp[uniKey] = hooksMap[key];

    if (hasOwn(options, key)) {
      options[uniKey] = options[key];
      delete options[key];
    }
  });

  _hooksTemp.forEach(function (uniKey) {
    var mapKey = _mapTemp[uniKey];
    var hook = options[uniKey];
    !Array.isArray(hook) && (hook = [hook]);

    if (hasOwn(options, uniKey) && mapKey && hook) {
      if (hasOwn(options, mapKey)) {
        !Array.isArray(options[mapKey]) && (options[mapKey] = [options[mapKey]]);
        options[mapKey] = options[mapKey].concat(hook);
      } else {
        options[mapKey] = hook;
      }

      delete options[uniKey];
    }
  });
}
/**
 * 对象键名重定义
 * @param  {Object} obj     对象
 * @param  {String} oldKey    原键名
 * @param  {String} newKey 新键名
 * @return {Object}         新对象
 */


function rename(obj, oldKey, newKey) {
  Object.getOwnPropertyNames(obj).forEach(function (key) {
    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[key];
      return obj;
    }
  });
  return obj;
}

function normalizeMap(arr) {
  if ((0, _type.type)(arr) === 'Array') {
    var map = {};
    arr.forEach(function (value) {
      map[value] = value;
    });
    return map;
  }

  return arr;
}

function merge(to, from) {
  if (!from) return to;
  var key = void 0,
      toVal = void 0,
      fromVal = void 0;
  var keys = Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];

    if ((0, _type.type)(toVal) === 'Object' && (0, _type.type)(fromVal) === 'Object') {
      merge(toVal, fromVal);
    } else {
      to[key] = fromVal;
    }
  }

  return to;
}

function extend(target) {
  for (var _len = arguments.length, froms = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    froms[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = froms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var from = _step.value;

      if ((0, _type.type)(from) === 'Object') {
        // for in 能遍历原型链上的属性
        for (var key in from) {
          target[key] = from[key];
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return target;
}

function extendWithIgnore(target, from) {
  var ignore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if ((0, _type.type)(from) === 'Object') {
    // for in 能遍历原型链上的属性
    for (var key in from) {
      if (!~ignore.indexOf(key)) {
        target[key] = from[key];
      }
    }
  }

  return target;
}

function isExistAttr(obj, attr) {
  var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  var isNullOrUndefined = obj === null || obj === undefined;

  if (isNullOrUndefined) {
    return false;
  } else if (type === 'object' || type === 'function') {
    return attr in obj;
  } else {
    return obj[attr] !== undefined;
  }
}

function parsePath(path) {
  return function (obj) {
    return getByPath(obj, path);
  };
}

function getByPath(data, path, notExistOutput) {
  if (!path) return data;
  var segments = path.split('.');
  var notExist = false;
  var value = data;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = segments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;

      if (isExistAttr(value, key)) {
        value = value[key];
      } else {
        value = undefined;
        notExist = true;
        break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  if (notExistOutput) {
    return notExist ? notExistOutput : value;
  } else {
    // 小程序setData时不允许undefined数据
    return value === undefined ? '' : value;
  }
}

function enumerable(target, keys) {
  keys.forEach(function (key) {
    var descriptor = Object.getOwnPropertyDescriptor(target, key);

    if (!descriptor.enumerable) {
      descriptor.enumerable = true;
      Object.defineProperty(target, key, descriptor);
    }
  });
  return target;
}

function proxy(target, source, mapKeys, readonly) {
  if (typeof mapKeys === 'boolean') {
    readonly = mapKeys;
    mapKeys = null;
  }

  enumerableKeys(source).forEach(function (key, index) {
    var descriptor = {
      get: function get() {
        return source[key];
      },
      configurable: true,
      enumerable: true
    };
    !readonly && (descriptor.set = function (val) {
      source[key] = val;
    });
    Object.defineProperty(target, mapKeys ? mapKeys[index] : key, descriptor);
  });
  return target;
}

function deleteProperties(source) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!props.length) return source;
  var sourceKeys = Object.keys(source);
  var newData = {};
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = sourceKeys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var key = _step3.value;

      if (props.indexOf(key) < 0) {
        newData[key] = source[key];
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return newData;
}

function enumerableKeys(obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
}

function flatten() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  function check(str) {
    if (!str) {
      console.error('pathStr should not be null!');
      return false;
    }

    return true;
  }

  function flattenRe(d) {
    var pathStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if ((0, _type.type)(d) === 'Array') {
      check(pathStr);
      d.forEach(function (item, i) {
        var path = pathStr + '[' + i + ']';
        flattenRe(item, path);
      });
    } else if ((0, _type.type)(d) === 'Object') {
      Object.keys(d).forEach(function (k) {
        var v = d[k];
        var path = pathStr ? pathStr + '.' + k : k;
        flattenRe(v, path);
      });
    } else {
      check(pathStr);
      ret[pathStr] = d;
    }
  }

  var ret = {};
  flattenRe(obj);
  return ret;
}
})
cmldefine('66', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.deepClone = deepClone;

var _type = require("7");
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */


function find(list, f) {
  return list.filter(f)[0];
}
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


function deepClone(obj) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []; // just return if obj is immutable value

  if ((0, _type.type)(obj) !== 'Object' && (0, _type.type)(obj) !== 'Array') {
    return obj;
  } // if obj is hit, it is in circular structure


  var hit = find(cache, function (c) {
    return c.original === obj;
  });

  if (hit) {
    return hit.copy;
  }

  var copy = Array.isArray(obj) ? [] : {}; // put the copy into cache at first
  // because we want to refer it in recursive deepClone

  cache.push({
    original: obj,
    copy: copy
  });
  Object.keys(obj).forEach(function (key) {
    copy[key] = deepClone(obj[key], cache);
  });
  return copy;
}
})
cmldefine('67', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeDefault = mergeDefault;
exports.mergeHooks = mergeHooks;
exports.mergeSimpleProps = mergeSimpleProps;
exports.mergeData = mergeData;
exports.mergeWatch = mergeWatch;

var _util = require("12");

var _type = require("7");

function mergeDefault(parent, child, key) {
  parent[key] = child[key];
}

function mergeHooks(parent, child, key) {
  var hasKeyParent = parent.hasOwnProperty(key);
  var isArrayChild = (0, _type.type)(child[key]) === 'Array';

  if (!hasKeyParent && !isArrayChild) {
    parent[key] = [child[key]];
  } else if (!hasKeyParent && isArrayChild) {
    parent[key] = child[key];
  } else if (hasKeyParent && !isArrayChild) {
    parent[key].push(child[key]);
  } else if (hasKeyParent && isArrayChild) {
    parent[key] = parent[key].concat(child[key]);
  }
}

function mergeSimpleProps(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];

  if (!parentVal) {
    parent[key] = parentVal = {};
  }

  (0, _util.extend)(parentVal, childVal);
}

function mergeData(parent, child, key) {
  var childVal = child[key];

  if (!parent[key]) {
    parent[key] = {};
  }

  (0, _util.merge)(parent[key], childVal);
}

function mergeWatch(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];
  var ret = [];

  if (!parentVal) {
    parent[key] = parentVal = {};
  }

  Object.keys(childVal).forEach(function (key) {
    if (key in parentVal) {
      parentVal[key] = (0, _type.type)(parentVal[key]) !== 'Array' ? [parentVal[key], childVal[key]] : parentVal[key].concat([childVal[key]]);
    } else {
      parentVal[key] = childVal[key];
    }
  });
}
})
cmldefine('13', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */


var extendStatics = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (d, b) {
  d.__proto__ = b;
} || function (d, b) {
  for (var p in b) {
    if (b.hasOwnProperty(p)) d[p] = b[p];
  }
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}

var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};

function createPropertyInitializerDescriptor(prop, enumerable) {
  var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
  return cache[prop] || (cache[prop] = {
    configurable: true,
    enumerable: enumerable,
    get: function get() {
      initializeInstance(this);
      return this[prop];
    },
    set: function set(value) {
      initializeInstance(this);
      this[prop] = value;
    }
  });
}

function initializeInstance(target) {
  if (target.__mobxDidRunLazyInitializers === true) return;
  var decorators = target.__mobxDecorators;

  if (decorators) {
    addHiddenProp(target, "__mobxDidRunLazyInitializers", true);

    for (var key in decorators) {
      var d = decorators[key];
      d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
    }
  }
}

function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
  return function decoratorFactory() {
    var decoratorArguments;

    var decorator = function decorate(target, prop, descriptor, applyImmediately // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
    // as the instance to apply the decorator to equals the target
    ) {
      if (applyImmediately === true) {
        propertyCreator(target, prop, descriptor, target, decoratorArguments);
        return null;
      }

      if (process.env.NODE_ENV !== "production" && !quacksLikeADecorator(arguments)) fail$1("This function is a decorator, but it wasn't invoked like a decorator");

      if (!Object.prototype.hasOwnProperty.call(target, "__mobxDecorators")) {
        var inheritedDecorators = target.__mobxDecorators;
        addHiddenProp(target, "__mobxDecorators", __assign({}, inheritedDecorators));
      }

      target.__mobxDecorators[prop] = {
        prop: prop,
        propertyCreator: propertyCreator,
        descriptor: descriptor,
        decoratorTarget: target,
        decoratorArguments: decoratorArguments
      };
      return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
    };

    if (quacksLikeADecorator(arguments)) {
      // @decorator
      decoratorArguments = EMPTY_ARRAY;
      return decorator.apply(null, arguments);
    } else {
      // @decorator(args)
      decoratorArguments = Array.prototype.slice.call(arguments);
      return decorator;
    }
  };
}

function quacksLikeADecorator(args) {
  return (args.length === 2 || args.length === 3) && typeof args[1] === "string" || args.length === 4 && args[3] === true;
}

function isSpyEnabled() {
  return !!globalState.spyListeners.length;
}

function spyReport(event) {
  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}

function spyReportStart(event) {
  var change = __assign({}, event, {
    spyReportStart: true
  });

  spyReport(change);
}

var END_EVENT = {
  spyReportEnd: true
};

function spyReportEnd(change) {
  if (change) spyReport(__assign({}, change, {
    spyReportEnd: true
  }));else spyReport(END_EVENT);
}

function spy(listener) {
  globalState.spyListeners.push(listener);
  return once(function () {
    globalState.spyListeners = globalState.spyListeners.filter(function (l) {
      return l !== listener;
    });
  });
}

function createAction(actionName, fn) {
  if (process.env.NODE_ENV !== "production") {
    invariant(typeof fn === "function", "`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName) fail$1("actions should have valid names, got: '" + actionName + "'");
  }

  var res = function res() {
    return executeAction(actionName, fn, this, arguments);
  };

  res.isMobxAction = true;
  return res;
}

function executeAction(actionName, fn, scope, args) {
  var runInfo = startAction(actionName, fn, scope, args);

  try {
    return fn.apply(scope, args);
  } finally {
    endAction(runInfo);
  }
}

function startAction(actionName, fn, scope, args) {
  var notifySpy = isSpyEnabled() && !!actionName;
  var startTime = 0;

  if (notifySpy) {
    startTime = Date.now();
    var l = args && args.length || 0;
    var flattendArgs = new Array(l);
    if (l > 0) for (var i = 0; i < l; i++) {
      flattendArgs[i] = args[i];
    }
    spyReportStart({
      type: "action",
      name: actionName,
      object: scope,
      arguments: flattendArgs
    });
  }

  var prevDerivation = untrackedStart();
  startBatch();
  var prevAllowStateChanges = allowStateChangesStart(true);
  return {
    prevDerivation: prevDerivation,
    prevAllowStateChanges: prevAllowStateChanges,
    notifySpy: notifySpy,
    startTime: startTime
  };
}

function endAction(runInfo) {
  allowStateChangesEnd(runInfo.prevAllowStateChanges);
  endBatch();
  untrackedEnd(runInfo.prevDerivation);
  if (runInfo.notifySpy) spyReportEnd({
    time: Date.now() - runInfo.startTime
  });
}

function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);
  var res;

  try {
    res = func();
  } finally {
    allowStateChangesEnd(prev);
  }

  return res;
}

function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}

function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

function allowStateChangesInsideComputed(func) {
  var prev = globalState.computationDepth;
  globalState.computationDepth = 0;
  var res;

  try {
    res = func();
  } finally {
    globalState.computationDepth = prev;
  }

  return res;
}

function dontReassignFields() {
  fail$1(process.env.NODE_ENV !== "production" && "@action fields are not reassignable");
}

function namedActionDecorator(name) {
  return function (target, prop, descriptor) {
    if (descriptor) {
      if (process.env.NODE_ENV !== "production" && descriptor.get !== undefined) {
        return fail$1("@action cannot be used with getters");
      } // babel / typescript
      // @action method() { }


      if (descriptor.value) {
        // typescript
        return {
          value: createAction(name, descriptor.value),
          enumerable: false,
          configurable: true,
          writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)

        };
      } // babel only: @action method = () => {}


      var initializer_1 = descriptor.initializer;
      return {
        enumerable: false,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          // N.B: we can't immediately invoke initializer; this would be wrong
          return createAction(name, initializer_1.call(this));
        }
      };
    } // bound instance methods


    return actionFieldDecorator(name).apply(this, arguments);
  };
}

function actionFieldDecorator(name) {
  // Simple property that writes on first invocation to the current instance
  return function (target, prop, descriptor) {
    Object.defineProperty(target, prop, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return undefined;
      },
      set: function set(value) {
        addHiddenProp(this, prop, action(name, value));
      }
    });
  };
}

function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
  if (applyToInstance === true) {
    defineBoundAction(target, propertyName, descriptor.value);
    return null;
  }

  if (descriptor) {
    // if (descriptor.value)
    // Typescript / Babel: @action.bound method() { }
    // also: babel @action.bound method = () => {}
    return {
      configurable: true,
      enumerable: false,
      get: function get() {
        defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
        return this[propertyName];
      },
      set: dontReassignFields
    };
  } // field decorator Typescript @action.bound method = () => {}


  return {
    enumerable: false,
    configurable: true,
    set: function set(v) {
      defineBoundAction(this, propertyName, v);
    },
    get: function get() {
      return undefined;
    }
  };
}

var action = function action(arg1, arg2, arg3, arg4) {
  // action(fn() {})
  if (arguments.length === 1 && typeof arg1 === "function") return createAction(arg1.name || "<unnamed action>", arg1); // action("name", fn() {})

  if (arguments.length === 2 && typeof arg2 === "function") return createAction(arg1, arg2); // @action("name") fn() {}

  if (arguments.length === 1 && typeof arg1 === "string") return namedActionDecorator(arg1); // @action fn() {}

  if (arg4 === true) {
    // apply to instance immediately
    arg1[arg2] = createAction(arg1.name || arg2, arg3.value);
  } else {
    return namedActionDecorator(arg2).apply(null, arguments);
  }
};

action.bound = boundActionDecorator;

function runInAction(arg1, arg2) {
  // TODO: deprecate?
  var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
  var fn = typeof arg1 === "function" ? arg1 : arg2;

  if (process.env.NODE_ENV !== "production") {
    invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
    if (typeof actionName !== "string" || !actionName) fail$1("actions should have valid names, got: '" + actionName + "'");
  }

  return executeAction(actionName, fn, this, undefined);
}

function isAction(thing) {
  return typeof thing === "function" && thing.isMobxAction === true;
}

function defineBoundAction(target, propertyName, fn) {
  addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

var toString = Object.prototype.toString;

function deepEqual(a, b) {
  return eq(a, b);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.


function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = typeof a === "undefined" ? "undefined" : _typeof(a);
  if (type !== "function" && type !== "object" && (typeof b === "undefined" ? "undefined" : _typeof(b)) != "object") return false;
  return deepEq(a, b, aStack, bStack);
} // Internal recursive comparison function for `isEqual`.


function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  a = unwrap(a);
  b = unwrap(b); // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
  }

  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if ((typeof a === "undefined" ? "undefined" : _typeof(a)) != "object" || (typeof b === "undefined" ? "undefined" : _typeof(b)) != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(typeof aCtor === "function" && aCtor instanceof aCtor && typeof bCtor === "function" && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys$$1 = Object.keys(a),
        key;
    length = keys$$1.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys$$1[length];
      if (!(has$$1(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) return a.peek();
  if (isES6Map(a) || isObservableMap(a)) return iteratorToArray(a.entries());
  return a;
}

function has$$1(a, key) {
  return Object.prototype.hasOwnProperty.call(a, key);
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function defaultComparer(a, b) {
  return areBothNaN(a, b) || identityComparer(a, b);
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  default: defaultComparer
};
/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */

function autorun(view, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (process.env.NODE_ENV !== "production") {
    invariant(typeof view === "function", "Autorun expects a function as first argument");
    invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
  }

  var name = opts && opts.name || view.name || "Autorun@" + getNextId();
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError);
  } else {
    var scheduler_1 = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled_1 = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled_1) {
        isScheduled_1 = true;
        scheduler_1(function () {
          isScheduled_1 = false;
          if (!reaction.isDisposed) reaction.track(reactionRunner);
        });
      }
    }, opts.onError);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule();
  return reaction.getDisposer();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (typeof opts === "boolean") {
    opts = {
      fireImmediately: opts
    };
    deprecated("Using fireImmediately as argument is deprecated. Use '{ fireImmediately: true }' instead");
  }

  if (process.env.NODE_ENV !== "production") {
    invariant(typeof expression === "function", "First argument to reaction should be a function");
    invariant((typeof opts === "undefined" ? "undefined" : _typeof(opts)) === "object", "Third argument of reactions should be an object");
  }

  var name = opts.name || "Reaction@" + getNextId();
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer.default;
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError);

  function reactionRunner() {
    isScheduled = false; // Q: move into reaction runner?

    if (r.isDisposed) return;
    var changed = false;
    r.track(function () {
      var nextValue = expression(r);
      changed = firstTime || !equals(value, nextValue);
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, r);
    if (!firstTime && changed === true) effectAction(value, r);
    if (firstTime) firstTime = false;
  }

  r.schedule();
  return r.getDisposer();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */


var ComputedValue =
/** @class */
function () {
  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = null; // during tracking it's an array with new observed observers

    this.isBeingObserved = false;
    this.isPendingUnobservation = false;
    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.runId = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.UP_TO_DATE;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.value = new CaughtException(null);
    this.isComputing = false; // to check for cycles

    this.isRunningSetter = false;
    this.isTracing = TraceMode.NONE;
    if (process.env.NODE_ENV !== "production" && !options.get) return fail$1("missing option for computed: get");
    this.derivation = options.get;
    this.name = options.name || "ComputedValue@" + getNextId();
    if (options.set) this.setter = createAction(this.name + "-setter", options.set);
    this.equals = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer.default);
    this.scope = options.context;
    this.requiresReaction = !!options.requiresReaction;
    this.keepAlive = !!options.keepAlive;
  }

  ComputedValue.prototype.onBecomeStale = function () {
    propagateMaybeChanged(this);
  };

  ComputedValue.prototype.onBecomeUnobserved = function () {};

  ComputedValue.prototype.onBecomeObserved = function () {};
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */


  ComputedValue.prototype.get = function () {
    if (this.isComputing) fail$1("Cycle detected in computation " + this.name + ": " + this.derivation);

    if (globalState.inBatch === 0 && this.observers.length === 0 && !this.keepAlive) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead();
        startBatch(); // See perf test 'computed memoization'

        this.value = this.computeValue(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) if (this.trackAndCompute()) propagateChangeConfirmed(this);
    }

    var result = this.value;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };

  ComputedValue.prototype.peek = function () {
    var res = this.computeValue(false);
    if (isCaughtException(res)) throw res.cause;
    return res;
  };

  ComputedValue.prototype.set = function (value) {
    if (this.setter) {
      invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
      this.isRunningSetter = true;

      try {
        this.setter.call(this.scope, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else invariant(false, process.env.NODE_ENV !== "production" && "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
  };

  ComputedValue.prototype.trackAndCompute = function () {
    if (isSpyEnabled()) {
      spyReport({
        object: this.scope,
        type: "compute",
        name: this.name
      });
    }

    var oldValue = this.value;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState === IDerivationState.NOT_TRACKING;
    var newValue = this.computeValue(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals(oldValue, newValue);

    if (changed) {
      this.value = newValue;
    }

    return changed;
  };

  ComputedValue.prototype.computeValue = function (track) {
    this.isComputing = true;
    globalState.computationDepth++;
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope);
      } else {
        try {
          res = this.derivation.call(this.scope);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    globalState.computationDepth--;
    this.isComputing = false;
    return res;
  };

  ComputedValue.prototype.suspend = function () {
    if (!this.keepAlive) {
      clearObserving(this);
      this.value = undefined; // don't hold on to computed value!
    }
  };

  ComputedValue.prototype.observe = function (listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          type: "update",
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  ComputedValue.prototype.warnAboutUntrackedRead = function () {
    if (process.env.NODE_ENV === "production") return;

    if (this.requiresReaction === true) {
      fail$1("[mobx] Computed value " + this.name + " is read outside a reactive context");
    }

    if (this.isTracing !== TraceMode.NONE) {
      console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
    }

    if (globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
    }
  };

  ComputedValue.prototype.toJSON = function () {
    return this.get();
  };

  ComputedValue.prototype.toString = function () {
    return this.name + "[" + this.derivation.toString() + "]";
  };

  ComputedValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };

  return ComputedValue;
}();

ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

function hasInterceptors(interceptable) {
  return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}

function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}

function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    var interceptors = interceptable.interceptors;
    if (interceptors) for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
      if (!change) break;
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}

function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners || (listenable.changeListeners = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}

function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

declareAtom();

var ObservableValue =
/** @class */
function (_super) {
  __extends(ObservableValue, _super);

  function ObservableValue(value, enhancer, name, notifySpy) {
    if (name === void 0) {
      name = "ObservableValue@" + getNextId();
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    var _this = _super.call(this, name) || this;

    _this.enhancer = enhancer;
    _this.hasUnreportedChange = false;
    _this.value = enhancer(value, undefined, name);

    if (notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: "create",
        name: _this.name,
        newValue: "" + _this.value
      });
    }

    return _this;
  }

  ObservableValue.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableValue.prototype.set = function (newValue) {
    var oldValue = this.value;
    newValue = this.prepareNewValue(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if (notifySpy) {
        spyReportStart({
          type: "update",
          name: this.name,
          newValue: newValue,
          oldValue: oldValue
        });
      }

      this.setNewValue(newValue);
      if (notifySpy) spyReportEnd();
    }
  };

  ObservableValue.prototype.prepareNewValue = function (newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: "update",
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value, this.name);
    return this.value !== newValue ? newValue : globalState.UNCHANGED;
  };

  ObservableValue.prototype.setNewValue = function (newValue) {
    var oldValue = this.value;
    this.value = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: "update",
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  ObservableValue.prototype.get = function () {
    this.reportObserved();
    return this.dehanceValue(this.value);
  };

  ObservableValue.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableValue.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately) listener({
      object: this,
      type: "update",
      newValue: this.value,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };

  ObservableValue.prototype.toJSON = function () {
    return this.get();
  };

  ObservableValue.prototype.toString = function () {
    return this.name + "[" + this.value + "]";
  };

  ObservableValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };

  return ObservableValue;
}(Atom);

ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

var ObservableObjectAdministration =
/** @class */
function () {
  function ObservableObjectAdministration(target, name, defaultEnhancer) {
    this.target = target;
    this.name = name;
    this.defaultEnhancer = defaultEnhancer;
    this.values = {};
  }

  ObservableObjectAdministration.prototype.read = function (owner, key) {
    if (process.env.NODE_ENV === "production" && this.target !== owner) {
      this.illegalAccess(owner, key);
      if (!this.values[key]) return undefined;
    }

    return this.values[key].get();
  };

  ObservableObjectAdministration.prototype.write = function (owner, key, newValue) {
    var instance = this.target;

    if (process.env.NODE_ENV === "production" && instance !== owner) {
      this.illegalAccess(owner, key);
    }

    var observable = this.values[key];

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "update",
        object: instance,
        name: key,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var change = notify || notifySpy ? {
        type: "update",
        object: instance,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, {
        name: this.name,
        key: key
      }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    }
  };

  ObservableObjectAdministration.prototype.remove = function (key) {
    if (!this.values[key]) return;
    var target = this.target;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: target,
        name: key,
        type: "remove"
      });
      if (!change) return;
    }

    try {
      startBatch();
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var oldValue = this.values[key].get();
      if (this.keys) this.keys.remove(key);
      delete this.values[key];
      delete this.target[key];
      var change = notify || notifySpy ? {
        type: "remove",
        object: target,
        oldValue: oldValue,
        name: key
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, {
        name: this.name,
        key: key
      }));
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    } finally {
      endBatch();
    }
  };

  ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
    /**
     * This happens if a property is accessed through the prototype chain, but the property was
     * declared directly as own property on the prototype.
     *
     * E.g.:
     * class A {
     * }
     * extendObservable(A.prototype, { x: 1 })
     *
     * classB extens A {
     * }
     * console.log(new B().x)
     *
     * It is unclear whether the property should be considered 'static' or inherited.
     * Either use `console.log(A.x)`
     * or: decorate(A, { x: observable })
     *
     * When using decorate, the property will always be redeclared as own property on the actual instance
     */
    console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
    process.env.NODE_ENV !== "production" && invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };

  ObservableObjectAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableObjectAdministration.prototype.getKeys = function () {
    var _this = this;

    if (this.keys === undefined) {
      this.keys = new ObservableArray(Object.keys(this.values).filter(function (key) {
        return _this.values[key] instanceof ObservableValue;
      }), referenceEnhancer, "keys(" + this.name + ")", true);
    }

    return this.keys.slice();
  };

  return ObservableObjectAdministration;
}();

function asObservableObject(target, name, defaultEnhancer) {
  if (name === void 0) {
    name = "";
  }

  if (defaultEnhancer === void 0) {
    defaultEnhancer = deepEnhancer;
  }

  var adm = target.$mobx;
  if (adm) return adm;
  process.env.NODE_ENV !== "production" && invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
  if (!isPlainObject(target)) name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
  if (!name) name = "ObservableObject@" + getNextId();
  adm = new ObservableObjectAdministration(target, name, defaultEnhancer);
  addHiddenFinalProp(target, "$mobx", adm);
  return adm;
}

function defineObservableProperty(target, propName, newValue, enhancer) {
  var adm = asObservableObject(target);
  assertPropertyConfigurable(target, propName);

  if (hasInterceptors(adm)) {
    var change = interceptChange(adm, {
      object: target,
      name: propName,
      type: "add",
      newValue: newValue
    });
    if (!change) return;
    newValue = change.newValue;
  }

  var observable = adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false);
  newValue = observable.value; // observableValue might have changed it

  Object.defineProperty(target, propName, generateObservablePropConfig(propName));
  if (adm.keys) adm.keys.push(propName);
  notifyPropertyAddition(adm, target, propName, newValue);
}

function defineComputedProperty(target, // which objects holds the observable and provides `this` context?
propName, options) {
  var adm = asObservableObject(target);
  options.name = adm.name + "." + propName;
  options.context = target;
  adm.values[propName] = new ComputedValue(options);
  Object.defineProperty(target, propName, generateComputedPropConfig(propName));
}

var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);

function generateObservablePropConfig(propName) {
  return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
    configurable: true,
    enumerable: true,
    get: function get() {
      return this.$mobx.read(this, propName);
    },
    set: function set(v) {
      this.$mobx.write(this, propName, v);
    }
  });
}

function getAdministrationForComputedPropOwner(owner) {
  var adm = owner.$mobx;

  if (!adm) {
    // because computed props are declared on proty,
    // the current instance might not have been initialized yet
    initializeInstance(owner);
    return owner.$mobx;
  }

  return adm;
}

function generateComputedPropConfig(propName) {
  return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
    configurable: true,
    enumerable: false,
    get: function get() {
      return getAdministrationForComputedPropOwner(this).read(this, propName);
    },
    set: function set(v) {
      getAdministrationForComputedPropOwner(this).write(this, propName, v);
    }
  });
}

function notifyPropertyAddition(adm, object, key, newValue) {
  var notify = hasListeners(adm);
  var notifySpy = isSpyEnabled();
  var change = notify || notifySpy ? {
    type: "add",
    object: object,
    name: key,
    newValue: newValue
  } : null;
  if (notifySpy) spyReportStart(__assign({}, change, {
    name: adm.name,
    key: key
  }));
  if (notify) notifyListeners(adm, change);
  if (notifySpy) spyReportEnd();
}

var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

function isObservableObject(thing) {
  if (isObject(thing)) {
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    return isObservableObjectAdministration(thing.$mobx);
  }

  return false;
}

function createDecoratorForEnhancer(enhancer) {
  var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
    if (process.env.NODE_ENV !== "production") {
      invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
    }

    var initialValue = descriptor ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value : undefined;
    defineObservableProperty(target, propertyName, initialValue, enhancer);
  });
  var res = // Extra process checks, as this happens during module initialization
  typeof process !== "undefined" && process.env && process.env.NODE_ENV !== "production" ? function observableDecorator() {
    // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
    // and simply return the created prop decorator
    if (arguments.length < 2) return fail$1("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
    return decorator.apply(null, arguments);
  } : decorator;
  res.enhancer = enhancer;
  return res;
}

function _isObservable(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if (process.env.NODE_ENV !== "production" && (isObservableMap(value) || isObservableArray(value))) return fail$1("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");

    if (isObservableObject(value)) {
      var o = value.$mobx;
      return o.values && !!o.values[property];
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value.$mobx || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if (arguments.length !== 1) fail$1(process.env.NODE_ENV !== "production" && "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}

function isObservableProp(value, propName) {
  if (typeof propName !== "string") return fail$1(process.env.NODE_ENV !== "production" && "expected a property name as second argument");
  return _isObservable(value, propName);
}

function _isComputed(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value.$mobx.values[property]) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }

  return isComputedValue(value);
}

function isComputed(value) {
  if (arguments.length > 1) return fail$1(process.env.NODE_ENV !== "production" && "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isComputed(value);
}

function isComputedProp(value, propName) {
  if (typeof propName !== "string") return fail$1(process.env.NODE_ENV !== "production" && "isComputed expected a property name as second argument");
  return _isComputed(value, propName);
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
  var get = descriptor.get,
      set = descriptor.set; // initialValue is the descriptor for get / set props
  // Optimization: faster on decorator target or instance? Assuming target
  // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
  // Forcing instance now, fixes hot reloadig issues on React Native:

  var options = decoratorArgs[0] || {};
  defineComputedProperty(instance, propertyName, __assign({
    get: get,
    set: set
  }, options));
});
var computedStructDecorator = computedDecorator({
  equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2, arg3) {
  if (typeof arg2 === "string") {
    // @computed
    return computedDecorator.apply(null, arguments);
  }

  if (arg1 !== null && (typeof arg1 === "undefined" ? "undefined" : _typeof(arg1)) === "object" && arguments.length === 1) {
    // @computed({ options })
    return computedDecorator.apply(null, arguments);
  } // computed(expr, options?)


  if (process.env.NODE_ENV !== "production") {
    invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
    invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
  }

  var opts = (typeof arg2 === "undefined" ? "undefined" : _typeof(arg2)) === "object" ? arg2 : {};
  opts.get = arg1;
  opts.set = typeof arg2 === "function" ? arg2 : opts.set;
  opts.name = opts.name || arg1.name || "";
  /* for generated name */

  return new ComputedValue(opts);
};

computed.struct = computedStructDecorator;

function extendShallowObservable(target, properties, decorators) {
  deprecated("'extendShallowObservable' is deprecated, use 'extendObservable(target, props, { deep: false })' instead");
  return extendObservable(target, properties, decorators, shallowCreateObservableOptions);
}

function extendObservable(target, properties, decorators, options) {
  if (process.env.NODE_ENV !== "production") {
    invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
    invariant((typeof target === "undefined" ? "undefined" : _typeof(target)) === "object", "'extendObservable' expects an object as first argument");
    invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
    if (decorators) for (var key in decorators) {
      if (!(key in properties)) fail$1("Trying to declare a decorator for unspecified property '" + key + "'");
    }
  }

  options = asCreateObservableOptions(options);
  var defaultDecorator = options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
  initializeInstance(target);
  asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props

  startBatch();

  try {
    for (var key in properties) {
      var descriptor = Object.getOwnPropertyDescriptor(properties, key);

      if (process.env.NODE_ENV !== "production") {
        if (Object.getOwnPropertyDescriptor(target, key)) fail$1("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + key + "' already exists on '" + target + "'");
        if (isComputed(descriptor.value)) fail$1("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
      }

      var decorator = decorators && key in decorators ? decorators[key] : descriptor.get ? computedDecorator : defaultDecorator;
      if (process.env.NODE_ENV !== "production" && typeof decorator !== "function") return fail$1("Not a valid decorator for '" + key + "', got: " + decorator);
      var resultDescriptor = decorator(target, key, descriptor, true);
      if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
      ) Object.defineProperty(target, key, resultDescriptor);
    }
  } finally {
    endBatch();
  }

  return target;
} // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases


var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined
};
var shallowCreateObservableOptions = {
  deep: false,
  name: undefined,
  defaultDecorator: undefined
};
Object.freeze(defaultCreateObservableOptions);
Object.freeze(shallowCreateObservableOptions);

function assertValidOption(key) {
  if (!/^(deep|name|defaultDecorator)$/.test(key)) fail$1("invalid option for (extend)observable: " + key);
}

function asCreateObservableOptions(thing) {
  if (thing === null || thing === undefined) return defaultCreateObservableOptions;
  if (typeof thing === "string") return {
    name: thing,
    deep: true
  };

  if (process.env.NODE_ENV !== "production") {
    if ((typeof thing === "undefined" ? "undefined" : _typeof(thing)) !== "object") return fail$1("expected options object");
    Object.keys(thing).forEach(assertValidOption);
  }

  return thing;
}

function getEnhancerFromOptions(options) {
  return options.defaultDecorator ? options.defaultDecorator.enhancer : options.deep === false ? referenceEnhancer : deepEnhancer;
}

var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */

function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (typeof arguments[1] === "string") {
    return deepDecorator.apply(null, arguments);
  } // it is an observable already, done


  if (isObservable(v)) return v; // something that can be converted and mutated?

  var res = isPlainObject(v) ? observable.object(v, arg2, arg3) : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : v; // this value could be converted to a new observable data structure, return it

  if (res !== v) return res; // otherwise, just box it

  fail$1(process.env.NODE_ENV !== "production" && "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}

var observableFactories = {
  box: function box(value, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("box");
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name);
  },
  shallowBox: function shallowBox(value, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowBox");
    deprecated("observable.shallowBox", "observable.box(value, { deep: false })");
    return observable.box(value, {
      name: name,
      deep: false
    });
  },
  array: function array(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("array");
    var o = asCreateObservableOptions(options);
    return new ObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
  },
  shallowArray: function shallowArray(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowArray");
    deprecated("observable.shallowArray", "observable.array(values, { deep: false })");
    return observable.array(initialValues, {
      name: name,
      deep: false
    });
  },
  map: function map(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("map");
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  shallowMap: function shallowMap(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowMap");
    deprecated("observable.shallowMap", "observable.map(values, { deep: false })");
    return observable.map(initialValues, {
      name: name,
      deep: false
    });
  },
  object: function object(props, decorators, options) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("object");
    var o = asCreateObservableOptions(options);
    return extendObservable({}, props, decorators, o);
  },
  shallowObject: function shallowObject(props, name) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("shallowObject");
    deprecated("observable.shallowObject", "observable.object(values, {}, { deep: false })");
    return observable.object(props, {}, {
      name: name,
      deep: false
    });
  },
  ref: refDecorator,
  shallow: shallowDecorator,
  deep: deepDecorator,
  struct: refStructDecorator
};
var observable = createObservable; // weird trick to keep our typings nicely with our funcs, and still extend the observable function

Object.keys(observableFactories).forEach(function (name) {
  return observable[name] = observableFactories[name];
});

function incorrectlyUsedAsDecorator(methodName) {
  fail$1( // process.env.NODE_ENV !== "production" &&
  "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable.array(v, {
    name: name
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name
  });
  return v;
}

function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v)) return v;
  if (Array.isArray(v)) return observable.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name,
    deep: false
  });
  return fail$1(process.env.NODE_ENV !== "production" && "The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}

function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}

function refStructEnhancer(v, oldValue, name) {
  if (process.env.NODE_ENV !== "production" && isObservable(v)) throw "observable.struct should not be used with observable values";
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}

function iteratorSymbol() {
  return typeof Symbol === "function" && Symbol.iterator || "@@iterator";
}

function declareIterator(prototType, iteratorFactory) {
  addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}

function makeIterable(iterator) {
  iterator[iteratorSymbol()] = self;
  return iterator;
}

function self() {
  return this;
}
/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */


function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

var ObservableMapMarker = {};

var ObservableMap =
/** @class */
function () {
  function ObservableMap(initialData, enhancer, name) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name === void 0) {
      name = "ObservableMap@" + getNextId();
    }

    this.enhancer = enhancer;
    this.name = name;
    this.$mobx = ObservableMapMarker;
    this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);

    if (typeof Map !== "function") {
      throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
    }

    this._data = new Map();
    this._hasMap = new Map();
    this.merge(initialData);
  }

  ObservableMap.prototype._has = function (key) {
    return this._data.has(key);
  };

  ObservableMap.prototype.has = function (key) {
    if (this._hasMap.has(key)) return this._hasMap.get(key).get();
    return this._updateHasMapEntry(key, false).get();
  };

  ObservableMap.prototype.set = function (key, value) {
    var hasKey = this._has(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? "update" : "add",
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this._updateValue(key, value);
    } else {
      this._addValue(key, value);
    }

    return this;
  };

  ObservableMap.prototype.delete = function (key) {
    var _this = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "delete",
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this._has(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: this._data.get(key).value,
        name: key
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, {
        name: this.name,
        key: key
      }));
      transaction(function () {
        _this._keys.remove(key);

        _this._updateHasMapEntry(key, false);

        var observable = _this._data.get(key);

        observable.setNewValue(undefined);

        _this._data.delete(key);
      });
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
      return true;
    }

    return false;
  };

  ObservableMap.prototype._updateHasMapEntry = function (key, value) {
    // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
    var entry = this._hasMap.get(key);

    if (entry) {
      entry.setNewValue(value);
    } else {
      entry = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);

      this._hasMap.set(key, entry);
    }

    return entry;
  };

  ObservableMap.prototype._updateValue = function (key, newValue) {
    var observable = this._data.get(key);

    newValue = observable.prepareNewValue(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "update",
        object: this,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, {
        name: this.name,
        key: key
      }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    }
  };

  ObservableMap.prototype._addValue = function (key, newValue) {
    var _this = this;

    transaction(function () {
      var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + key, false);

      _this._data.set(key, observable);

      newValue = observable.value; // value might have been changed

      _this._updateHasMapEntry(key, true);

      _this._keys.push(key);
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      type: "add",
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if (notifySpy) spyReportStart(__assign({}, change, {
      name: this.name,
      key: key
    }));
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  ObservableMap.prototype.get = function (key) {
    if (this.has(key)) return this.dehanceValue(this._data.get(key).get());
    return this.dehanceValue(undefined);
  };

  ObservableMap.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  ObservableMap.prototype.keys = function () {
    return this._keys[iteratorSymbol()]();
  };

  ObservableMap.prototype.values = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        return nextIndex < self._keys.length ? {
          value: self.get(self._keys[nextIndex++]),
          done: false
        } : {
          value: undefined,
          done: true
        };
      }
    });
  };

  ObservableMap.prototype.entries = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        if (nextIndex < self._keys.length) {
          var key = self._keys[nextIndex++];
          return {
            value: [key, self.get(key)],
            done: false
          };
        }

        return {
          done: true
        };
      }
    });
  };

  ObservableMap.prototype.forEach = function (callback, thisArg) {
    var _this = this;

    this._keys.forEach(function (key) {
      return callback.call(thisArg, _this.get(key), key, _this);
    });
  };
  /** Merge another object into this object, returns this. */


  ObservableMap.prototype.merge = function (other) {
    var _this = this;

    if (isObservableMap(other)) {
      other = other.toJS();
    }

    transaction(function () {
      if (isPlainObject(other)) Object.keys(other).forEach(function (key) {
        return _this.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_a) {
        var _b = __read(_a, 2),
            key = _b[0],
            value = _b[1];

        return _this.set(key, value);
      });else if (isES6Map(other)) other.forEach(function (value, key) {
        return _this.set(key, value);
      });else if (other !== null && other !== undefined) fail$1("Cannot initialize map from " + other);
    });
    return this;
  };

  ObservableMap.prototype.clear = function () {
    var _this = this;

    transaction(function () {
      untracked(function () {
        _this._keys.slice().forEach(function (key) {
          return _this.delete(key);
        });
      });
    });
  };

  ObservableMap.prototype.replace = function (values) {
    var _this = this;

    transaction(function () {
      // grab all the keys that are present in the new map but not present in the current map
      // and delete them from the map, then merge the new map
      // this will cause reactions only on changed values
      var newKeys = getMapLikeKeys(values);
      var oldKeys = _this._keys;
      var missingKeys = oldKeys.filter(function (k) {
        return newKeys.indexOf(k) === -1;
      });
      missingKeys.forEach(function (k) {
        return _this.delete(k);
      });

      _this.merge(values);
    });
    return this;
  };

  Object.defineProperty(ObservableMap.prototype, "size", {
    get: function get() {
      return this._keys.length;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns a plain object that represents this map.
   * Note that all the keys being stringified.
   * If there are duplicating keys after converting them to strings, behaviour is undetermined.
   */

  ObservableMap.prototype.toPOJO = function () {
    var _this = this;

    var res = {};

    this._keys.forEach(function (key) {
      return res["" + key] = _this.get(key);
    });

    return res;
  };
  /**
   * Returns a shallow non observable object clone of this map.
   * Note that the values migth still be observable. For a deep clone use mobx.toJS.
   */


  ObservableMap.prototype.toJS = function () {
    var _this = this;

    var res = new Map();

    this._keys.forEach(function (key) {
      return res.set(key, _this.get(key));
    });

    return res;
  };

  ObservableMap.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toPOJO();
  };

  ObservableMap.prototype.toString = function () {
    var _this = this;

    return this.name + "[{ " + this._keys.map(function (key) {
      return key + ": " + ("" + _this.get(key));
    }).join(", ") + " }]";
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableMap.prototype.observe = function (listener, fireImmediately) {
    process.env.NODE_ENV !== "production" && invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener(this, listener);
  };

  ObservableMap.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  return ObservableMap;
}();

declareIterator(ObservableMap.prototype, function () {
  return this.entries();
});
addHiddenFinalProp(ObservableMap.prototype, typeof Symbol !== "undefined" ? Symbol.toStringTag : "@@toStringTag", "Map");
/* 'var' fixes small-build issue */

var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

function getAtom(thing, property) {
  if ((typeof thing === "undefined" ? "undefined" : _typeof(thing)) === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) fail$1(process.env.NODE_ENV !== "production" && "It is not possible to get index atoms from arrays");
      return thing.$mobx.atom;
    }

    if (isObservableMap(thing)) {
      var anyThing = thing;
      if (property === undefined) return getAtom(anyThing._keys);

      var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);

      if (!observable) fail$1(process.env.NODE_ENV !== "production" && "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
      return observable;
    } // Initializers run lazily when transpiling to babel, so make sure they are run...


    initializeInstance(thing);
    if (property && !thing.$mobx) thing[property]; // See #1072

    if (isObservableObject(thing)) {
      if (!property) return fail$1(process.env.NODE_ENV !== "production" && "please specify a property");
      var observable = thing.$mobx.values[property];
      if (!observable) fail$1(process.env.NODE_ENV !== "production" && "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
      return observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (typeof thing === "function") {
    if (isReaction(thing.$mobx)) {
      // disposer function
      return thing.$mobx;
    }
  }

  return fail$1(process.env.NODE_ENV !== "production" && "Cannot obtain atom from " + thing);
}

function getAdministration(thing, property) {
  if (!thing) fail$1("Expecting some object");
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing)) return thing; // Initializers run lazily when transpiling to babel, so make sure they are run...

  initializeInstance(thing);
  if (thing.$mobx) return thing.$mobx;
  fail$1(process.env.NODE_ENV !== "production" && "Cannot obtain administration from " + thing);
}

function getDebugName(thing, property) {
  var named;
  if (property !== undefined) named = getAtom(thing, property);else if (isObservableObject(thing) || isObservableMap(thing)) named = getAdministration(thing);else named = getAtom(thing); // valid for arrays as well

  return named.name;
}

function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook("onBecomeObserved", thing, arg2, arg3);
}

function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg2 === "string" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = typeof arg2 === "string" ? arg3 : arg2;
  var orig = atom[hook];
  if (typeof orig !== "function") return fail$1(process.env.NODE_ENV !== "production" && "Not an atom that can be (un)observed");

  atom[hook] = function () {
    orig.call(this);
    cb.call(this);
  };

  return function () {
    atom[hook] = orig;
  };
}
/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */


var Atom;
var isAtom;

function declareAtom() {
  if (Atom) return;

  Atom =
  /** @class */
  function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function AtomImpl(name) {
      if (name === void 0) {
        name = "Atom@" + getNextId();
      }

      this.name = name;
      this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

      this.isBeingObserved = false;
      this.observers = [];
      this.observersIndexes = {};
      this.diffValue = 0;
      this.lastAccessedBy = 0;
      this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }

    AtomImpl.prototype.onBecomeUnobserved = function () {// noop
    };

    AtomImpl.prototype.onBecomeObserved = function () {
      /* noop */
    };
    /**
    * Invoke this method to notify mobx that your atom has been used somehow.
    * Returns true if there is currently a reactive context.
    */


    AtomImpl.prototype.reportObserved = function () {
      return reportObserved(this);
    };
    /**
    * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
    */


    AtomImpl.prototype.reportChanged = function () {
      startBatch();
      propagateChanged(this);
      endBatch();
    };

    AtomImpl.prototype.toString = function () {
      return this.name;
    };

    return AtomImpl;
  }();

  isAtom = createInstanceofPredicate("Atom", Atom);
}

function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name);
  onBecomeObserved(atom, onBecomeObservedHandler);
  onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  return atom;
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364

var safariPrototypeSetterInheritanceBug = function () {
  var v = false;
  var p = {};
  Object.defineProperty(p, "0", {
    set: function set() {
      v = true;
    }
  });
  Object.create(p)["0"] = 1;
  return v === false;
}();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */


var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray =
/** @class */
function () {
  function StubArray() {}

  return StubArray;
}();

function inherit(ctor, proto) {
  if (typeof Object["setPrototypeOf"] !== "undefined") {
    Object["setPrototypeOf"](ctor.prototype, proto);
  } else if (typeof ctor.prototype.__proto__ !== "undefined") {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor["prototype"] = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529

if (Object.isFrozen(Array)) {
  ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function (key) {
    Object.defineProperty(StubArray.prototype, key, {
      configurable: true,
      writable: true,
      value: Array.prototype[key]
    });
  });
}

var ObservableArrayAdministration =
/** @class */
function () {
  function ObservableArrayAdministration(name, enhancer, array, owned) {
    this.array = array;
    this.owned = owned;
    this.values = [];
    this.lastKnownLength = 0;
    this.atom = new Atom(name || "ObservableArray@" + getNextId());

    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name + "[..]");
    };
  }

  ObservableArrayAdministration.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableArrayAdministration.prototype.dehanceValues = function (values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };

  ObservableArrayAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        object: this.array,
        type: "splice",
        index: 0,
        added: this.values.slice(),
        addedCount: this.values.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  ObservableArrayAdministration.prototype.getArrayLength = function () {
    this.atom.reportObserved();
    return this.values.length;
  };

  ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
    if (typeof newLength !== "number" || newLength < 0) throw new Error("[mobx.array] Out of range: " + newLength);
    var currentLength = this.values.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray(currentLength, 0, newItems);
    } else this.spliceWithArray(newLength, currentLength - newLength);
  }; // adds / removes the necessary numeric properties to this object


  ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
    if (oldLength !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
    this.lastKnownLength += delta;
    if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE) reserveArrayBuffer(oldLength + delta + 1);
  };

  ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom);
    var length = this.values.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.array,
        type: "splice",
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer(v, undefined);
    });
    var lengthDelta = newItems.length - deleteCount;
    this.updateArrayLength(length, lengthDelta); // create or remove new entries

    var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice(index, newItems, res);
    return this.dehanceValues(res);
  };

  ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
    var _a;

    if (newItems.length < MAX_SPLICE_SIZE) {
      return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
    } else {
      var res = this.values.slice(index, index + deleteCount);
      this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
      return res;
    }
  };

  ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "update",
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null;
    if (notifySpy) spyReportStart(__assign({}, change, {
      name: this.atom.name
    }));
    this.atom.reportChanged();
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "splice",
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (notifySpy) spyReportStart(__assign({}, change, {
      name: this.atom.name
    }));
    this.atom.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  return ObservableArrayAdministration;
}();

var ObservableArray =
/** @class */
function (_super) {
  __extends(ObservableArray, _super);

  function ObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = "ObservableArray@" + getNextId();
    }

    if (owned === void 0) {
      owned = false;
    }

    var _this = _super.call(this) || this;

    var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
    addHiddenFinalProp(_this, "$mobx", adm);

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);

      _this.spliceWithArray(0, 0, initialValues);

      allowStateChangesEnd(prev);
    }

    if (safariPrototypeSetterInheritanceBug) {
      // Seems that Safari won't use numeric prototype setter untill any * numeric property is
      // defined on the instance. After that it works fine, even if this property is deleted.
      Object.defineProperty(adm.array, "0", ENTRY_0);
    }

    return _this;
  }

  ObservableArray.prototype.intercept = function (handler) {
    return this.$mobx.intercept(handler);
  };

  ObservableArray.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    return this.$mobx.observe(listener, fireImmediately);
  };

  ObservableArray.prototype.clear = function () {
    return this.splice(0);
  };

  ObservableArray.prototype.concat = function () {
    var arrays = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      arrays[_i] = arguments[_i];
    }

    this.$mobx.atom.reportObserved();
    return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) {
      return isObservableArray(a) ? a.peek() : a;
    }));
  };

  ObservableArray.prototype.replace = function (newItems) {
    return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
  };
  /**
   * Converts this array back to a (shallow) javascript structure.
   * For a deep clone use mobx.toJS
   */


  ObservableArray.prototype.toJS = function () {
    return this.slice();
  };

  ObservableArray.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toJS();
  };

  ObservableArray.prototype.peek = function () {
    this.$mobx.atom.reportObserved();
    return this.$mobx.dehanceValues(this.$mobx.values);
  }; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


  ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
    if (fromIndex === void 0) {
      fromIndex = 0;
    }

    if (arguments.length === 3) deprecated("The array.find fromIndex argument to find will not be supported anymore in the next major");
    var idx = this.findIndex.apply(this, arguments);
    return idx === -1 ? undefined : this.get(idx);
  }; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex


  ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
    if (fromIndex === void 0) {
      fromIndex = 0;
    }

    if (arguments.length === 3) deprecated("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
    var items = this.peek(),
        l = items.length;

    for (var i = fromIndex; i < l; i++) {
      if (predicate.call(thisArg, items[i], i, this)) return i;
    }

    return -1;
  };
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */


  ObservableArray.prototype.splice = function (index, deleteCount) {
    var newItems = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      newItems[_i - 2] = arguments[_i];
    }

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return this.$mobx.spliceWithArray(index);

      case 2:
        return this.$mobx.spliceWithArray(index, deleteCount);
    }

    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };

  ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };

  ObservableArray.prototype.push = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this.$mobx;
    adm.spliceWithArray(adm.values.length, 0, items);
    return adm.values.length;
  };

  ObservableArray.prototype.pop = function () {
    return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
  };

  ObservableArray.prototype.shift = function () {
    return this.splice(0, 1)[0];
  };

  ObservableArray.prototype.unshift = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this.$mobx;
    adm.spliceWithArray(0, 0, items);
    return adm.values.length;
  };

  ObservableArray.prototype.reverse = function () {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    // so we deviate from the default and just make it an dervitation
    var clone = this.slice();
    return clone.reverse.apply(clone, arguments);
  };

  ObservableArray.prototype.sort = function (compareFn) {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    var clone = this.slice();
    return clone.sort.apply(clone, arguments);
  };

  ObservableArray.prototype.remove = function (value) {
    var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  };

  ObservableArray.prototype.move = function (fromIndex, toIndex) {
    deprecated("observableArray.move is deprecated, use .slice() & .replace() instead");

    function checkIndex(index) {
      if (index < 0) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
      }

      var length = this.$mobx.values.length;

      if (index >= length) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
      }
    }

    checkIndex.call(this, fromIndex);
    checkIndex.call(this, toIndex);

    if (fromIndex === toIndex) {
      return;
    }

    var oldItems = this.$mobx.values;
    var newItems;

    if (fromIndex < toIndex) {
      newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [oldItems[fromIndex]], oldItems.slice(toIndex + 1));
    } else {
      // toIndex < fromIndex
      newItems = __spread(oldItems.slice(0, toIndex), [oldItems[fromIndex]], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
    }

    this.replace(newItems);
  }; // See #734, in case property accessors are unreliable...


  ObservableArray.prototype.get = function (index) {
    var impl = this.$mobx;

    if (impl) {
      if (index < impl.values.length) {
        impl.atom.reportObserved();
        return impl.dehanceValue(impl.values[index]);
      }

      console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    }

    return undefined;
  }; // See #734, in case property accessors are unreliable...


  ObservableArray.prototype.set = function (index, newValue) {
    var adm = this.$mobx;
    var values = adm.values;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(adm.atom);
      var oldValue = values[index];

      if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
          type: "update",
          object: this,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = adm.enhancer(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        adm.notifyArrayChildUpdate(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      adm.spliceWithArray(index, 0, [newValue]);
    } else {
      // out of bounds
      throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
    }
  };

  return ObservableArray;
}(StubArray);

declareIterator(ObservableArray.prototype, function () {
  this.$mobx.atom.reportObserved();
  var self = this;
  var nextIndex = 0;
  return makeIterable({
    next: function next() {
      return nextIndex < self.length ? {
        value: self[nextIndex++],
        done: false
      } : {
        done: true,
        value: undefined
      };
    }
  });
});
Object.defineProperty(ObservableArray.prototype, "length", {
  enumerable: false,
  configurable: true,
  get: function get() {
    return this.$mobx.getArrayLength();
  },
  set: function set(newLength) {
    this.$mobx.setArrayLength(newLength);
  }
});

if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
  addHiddenProp(ObservableArray.prototype, typeof Symbol !== "undefined" ? Symbol.toStringTag : "@@toStringTag", "Array");
} // Internet Explorer on desktop doesn't support this.....
// So, let's don't do this to avoid different semantics
// See #1395
// addHiddenProp(
//     ObservableArray.prototype,
//     typeof Symbol !== "undefined" ? Symbol.isConcatSpreadable as any : "@@isConcatSpreadable",
//     {
//         enumerable: false,
//         configurable: true,
//         value: true
//     }
// )

/**
 * Wrap function from prototype
 */


["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (funcName) {
  var baseFunc = Array.prototype[funcName];
  invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
  addHiddenProp(ObservableArray.prototype, funcName, function () {
    return baseFunc.apply(this.peek(), arguments);
  });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */

makeNonEnumerable(ObservableArray.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]); // See #364

var ENTRY_0 = createArrayEntryDescriptor(0);

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: false,
    get: function get() {
      return this.get(index);
    },
    set: function set(value) {
      this.set(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++) {
    createArrayBufferItem(index);
  }

  OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}

reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);

function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);

function getGlobal() {
  return typeof window !== "undefined" ? window : global;
}

function getNextId() {
  return ++globalState.mobxGuid;
}

function fail$1(message) {
  invariant(false, message);
  throw "X"; // unreachable
}

function invariant(check, message) {
  if (!check) throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */


var deprecatedMessages = [];

function deprecated(msg, thing) {
  if (process.env.NODE_ENV === "production") return false;

  if (thing) {
    return deprecated("'" + msg + "', use '" + thing + "' instead.");
  }

  if (deprecatedMessages.indexOf(msg) !== -1) return false;
  deprecatedMessages.push(msg);
  console.error("[mobx] Deprecated: " + msg);
  return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */


function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}

var noop = function noop() {};

function unique(list) {
  var res = [];
  list.forEach(function (item) {
    if (res.indexOf(item) === -1) res.push(item);
  });
  return res;
}

function isObject(value) {
  return value !== null && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object";
}

function isPlainObject(value) {
  if (value === null || (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") return false;
  var proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function makeNonEnumerable(object, propNames) {
  for (var i = 0; i < propNames.length; i++) {
    addHiddenProp(object, propNames[i], object[propNames[i]]);
  }
}

function addHiddenProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}

function addHiddenFinalProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}

function isPropertyConfigurable(object, prop) {
  var descriptor = Object.getOwnPropertyDescriptor(object, prop);
  return !descriptor || descriptor.configurable !== false && descriptor.writable !== false;
}

function assertPropertyConfigurable(object, prop) {
  if (process.env.NODE_ENV !== "production" && !isPropertyConfigurable(object, prop)) fail$1("Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}

function createInstanceofPredicate(name, clazz) {
  var propName = "isMobX" + name;
  clazz.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}

function areBothNaN(a, b) {
  return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */


function isArrayLike(x) {
  return Array.isArray(x) || isObservableArray(x);
}

function isES6Map(thing) {
  if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map) return true;
  return false;
}

function getMapLikeKeys(map) {
  if (isPlainObject(map)) return Object.keys(map);
  if (Array.isArray(map)) return map.map(function (_a) {
    var _b = __read(_a, 1),
        key = _b[0];

    return key;
  });
  if (isES6Map(map) || isObservableMap(map)) return iteratorToArray(map.keys());
  return fail$1("Cannot get keys from '" + map + "'");
} // use Array.from in Mobx 5


function iteratorToArray(it) {
  var res = [];

  while (true) {
    var r = it.next();
    if (r.done) break;
    res.push(r.value);
  }

  return res;
}

function primitiveSymbol() {
  return typeof Symbol === "function" && Symbol.toPrimitive || "@@toPrimitive";
}

function toPrimitive(value) {
  return value === null ? null : (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" ? "" + value : value;
}
/**
 * These values will persist if global state is reset
 */


var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "disableErrorBoundaries", "runId", "UNCHANGED"];

var MobXGlobals =
/** @class */
function () {
  function MobXGlobals() {
    /**
     * MobXGlobals version.
     * MobX compatiblity with other versions loaded in memory as long as this version matches.
     * It indicates that the global state still stores similar information
     *
     * N.B: this version is unrelated to the package version of MobX, and is only the version of the
     * internal state storage of MobX, and can be the same across many different package versions
     */
    this.version = 5;
    /**
     * globally unique token to signal unchanged
     */

    this.UNCHANGED = {};
    /**
     * Currently running derivation
     */

    this.trackingDerivation = null;
    /**
     * Are we running a computation currently? (not a reaction)
     */

    this.computationDepth = 0;
    /**
     * Each time a derivation is tracked, it is assigned a unique run-id
     */

    this.runId = 0;
    /**
     * 'guid' for general purpose. Will be persisted amongst resets.
     */

    this.mobxGuid = 0;
    /**
     * Are we in a batch block? (and how many of them)
     */

    this.inBatch = 0;
    /**
     * Observables that don't have observers anymore, and are about to be
     * suspended, unless somebody else accesses it in the same batch
     *
     * @type {IObservable[]}
     */

    this.pendingUnobservations = [];
    /**
     * List of scheduled, not yet executed, reactions.
     */

    this.pendingReactions = [];
    /**
     * Are we currently processing reactions?
     */

    this.isRunningReactions = false;
    /**
     * Is it allowed to change observables at this point?
     * In general, MobX doesn't allow that when running computations and React.render.
     * To ensure that those functions stay pure.
     */

    this.allowStateChanges = true;
    /**
     * If strict mode is enabled, state changes are by default not allowed
     */

    this.enforceActions = false;
    /**
     * Spy callbacks
     */

    this.spyListeners = [];
    /**
     * Globally attached error handlers that react specifically to errors in reactions
     */

    this.globalReactionErrorHandlers = [];
    /**
     * Warn if computed values are accessed outside a reactive context
     */

    this.computedRequiresReaction = false;
    /*
     * Don't catch and rethrow exceptions. This is useful for inspecting the state of
     * the stack when an exception occurs while debugging.
     */

    this.disableErrorBoundaries = false;
  }

  return MobXGlobals;
}();

var canMergeGlobalState = true;
var isolateCalled = false;

var globalState = function () {
  var global = getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        fail$1("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = new MobXGlobals();
  }
}();

function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) fail$1("isolateGlobalState should be called before MobX is running any reactions");
  isolateCalled = true;

  if (canMergeGlobalState) {
    if (--getGlobal().__mobxInstanceCount === 0) getGlobal().__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}

function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */


function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  }

  globalState.allowStateChanges = !globalState.enforceActions;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name
  };
  if (node.observing && node.observing.length > 0) result.dependencies = unique(node.observing).map(nodeToDependencyTree);
  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name
  };
  if (hasObservers(node)) result.observers = getObservers(node).map(nodeToObserverTree);
  return result;
}

function hasObservers(observable) {
  return observable.observers && observable.observers.length > 0;
}

function getObservers(observable) {
  return observable.observers;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }


function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  var l = observable.observers.length;

  if (l) {
    // because object assignment is relatively expensive, let's not store data about index 0.
    observable.observersIndexes[node.__mapid] = l;
  }

  observable.observers[l] = node;
  if (observable.lowestObserverState > node.dependenciesState) observable.lowestObserverState = node.dependenciesState; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}

function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  if (observable.observers.length === 1) {
    // deleting last observer
    observable.observers.length = 0;
    queueForUnobservation(observable);
  } else {
    // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
    var list = observable.observers;
    var map = observable.observersIndexes;
    var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes

    if (filler !== node) {
      // otherwise node was the last element, which already got removed from array
      var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.

      if (index) {
        // map store all indexes but 0, see comment in `addObserver`
        map[filler.__mapid] = index;
      } else {
        delete map[filler.__mapid];
      }

      list[index] = filler;
    }

    delete map[node.__mapid];
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}

function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */


function startBatch() {
  globalState.inBatch++;
}

function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation = false;

      if (observable.observers.length === 0) {
        if (observable.isBeingObserved) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved = false;
          observable.onBecomeUnobserved();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}

function reportObserved(observable) {
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId !== observable.lastAccessedBy) {
      observable.lastAccessedBy = derivation.runId;
      derivation.newObserving[derivation.unboundDepsCount++] = observable;

      if (!observable.isBeingObserved) {
        observable.isBeingObserved = true;
        observable.onBecomeObserved();
      }
    }

    return true;
  } else if (observable.observers.length === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes


function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];

    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale();
    }

    d.dependenciesState = IDerivationState.STALE;
  } // invariantLOS(observable, "changed end");

} // Called by ComputedValue when it recalculate and its value changed


function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];
    if (d.dependenciesState === IDerivationState.POSSIBLY_STALE) d.dependenciesState = IDerivationState.STALE;else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) observable.lowestObserverState = IDerivationState.UP_TO_DATE;
  } // invariantLOS(observable, "confirmed end");

} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.


function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE) return;
  observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];

    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      d.dependenciesState = IDerivationState.POSSIBLY_STALE;

      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale();
    }
  } // invariantLOS(observable, "maybe end");

}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");

  if (derivation.isTracing === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var IDerivationState;

(function (IDerivationState) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (exports.IDerivationState = IDerivationState = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException =
/** @class */
function () {
  function CaughtException(cause) {
    this.cause = cause; // Empty
  }

  return CaughtException;
}();

function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */


function shouldCompute(derivation) {
  switch (derivation.dependenciesState) {
    case IDerivationState.UP_TO_DATE:
      return false;

    case IDerivationState.NOT_TRACKING:
    case IDerivationState.STALE:
      return true;

    case IDerivationState.POSSIBLY_STALE:
      {
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState === IDerivationState.STALE) {
              untrackedEnd(prevUntracked);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        return false;
      }
  }
} // function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }


function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}

function checkIfStateModificationsAreAllowed(atom) {
  var hasObservers$$1 = atom.observers.length > 0; // Should never be possible to change an observed observable from inside computed, see #798

  if (globalState.computationDepth > 0 && hasObservers$$1) fail$1(process.env.NODE_ENV !== "production" && "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name); // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers$$1 || globalState.enforceActions === "strict")) fail$1(process.env.NODE_ENV !== "production" && (globalState.enforceActions ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") + atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */


function trackDerivedFunction(derivation, f, context) {
  // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies
  changeDependenciesStateTo0(derivation);
  derivation.newObserving = new Array(derivation.observing.length + 100);
  derivation.unboundDepsCount = 0;
  derivation.runId = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing;
  var observing = derivation.observing = derivation.newObserving;
  var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState;
    }
  }

  observing.length = i0;
  derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var dep = prevObserving[l];

    if (dep.diffValue === 0) {
      removeObserver(dep, derivation);
    }

    dep.diffValue = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var dep = observing[i0];

    if (dep.diffValue === 1) {
      dep.diffValue = 0;
      addObserver(dep, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
    derivation.dependenciesState = lowestNewObservingDerivationState;
    derivation.onBecomeStale();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing;
  derivation.observing = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}

function untracked(action) {
  var prev = untrackedStart();
  var res = action();
  untrackedEnd(prev);
  return res;
}

function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}

function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */


function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState === IDerivationState.UP_TO_DATE) return;
  derivation.dependenciesState = IDerivationState.UP_TO_DATE;
  var obs = derivation.observing;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
  }
}

function trace() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var enterBreakPoint = false;
  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return fail$1(process.env.NODE_ENV !== "production" && "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
  }

  derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}

var Reaction =
/** @class */
function () {
  function Reaction(name, onInvalidate, errorHandler) {
    if (name === void 0) {
      name = "Reaction@" + getNextId();
    }

    this.name = name;
    this.onInvalidate = onInvalidate;
    this.errorHandler = errorHandler;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = [];
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.diffValue = 0;
    this.runId = 0;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.isDisposed = false;
    this._isScheduled = false;
    this._isTrackPending = false;
    this._isRunning = false;
    this.isTracing = TraceMode.NONE;
  }

  Reaction.prototype.onBecomeStale = function () {
    this.schedule();
  };

  Reaction.prototype.schedule = function () {
    if (!this._isScheduled) {
      this._isScheduled = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  Reaction.prototype.isScheduled = function () {
    return this._isScheduled;
  };
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */


  Reaction.prototype.runReaction = function () {
    if (!this.isDisposed) {
      startBatch();
      this._isScheduled = false;

      if (shouldCompute(this)) {
        this._isTrackPending = true;

        try {
          this.onInvalidate();

          if (this._isTrackPending && isSpyEnabled()) {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation(e);
        }
      }

      endBatch();
    }
  };

  Reaction.prototype.track = function (fn) {
    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if (notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name,
        type: "reaction"
      });
    }

    this._isRunning = true;
    var result = trackDerivedFunction(this, fn, undefined);
    this._isRunning = false;
    this._isTrackPending = false;

    if (this.isDisposed) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) this.reportExceptionInDerivation(result.cause);

    if (notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }

    endBatch();
  };

  Reaction.prototype.reportExceptionInDerivation = function (error) {
    var _this = this;

    if (this.errorHandler) {
      this.errorHandler(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) throw error;
    var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
    console.error(message, error);
    /** If debugging brought you here, please, read the above message :-). Tnx! */

    if (isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name,
        message: message,
        error: "" + error
      });
    }

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  Reaction.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.isDisposed = true;

      if (!this._isRunning) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  Reaction.prototype.getDisposer = function () {
    var r = this.dispose.bind(this);
    r.$mobx = this;
    return r;
  };

  Reaction.prototype.toString = function () {
    return "Reaction[" + this.name + "]";
  };

  Reaction.prototype.trace = function (enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();

function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */


var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = createInstanceofPredicate("Reaction", Reaction);

function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (typeof cbOrFire === "function") return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe(listener, fireImmediately);
}

function intercept(thing, propOrHandler, handler) {
  if (typeof handler === "function") return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept(handler);
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && (typeof arg1 === "undefined" ? "undefined" : _typeof(arg1)) === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer.$mobx.isDisposed) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }

  opts.name = opts.name || "When@" + getNextId();
  var effectAction = createAction(opts.name + "-effect", effect);
  var disposer = autorun(function (r) {
    if (predicate()) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if (process.env.NODE_ENV !== "production" && opts && opts.onError) return fail$1("the options 'onError' and 'promise' cannot be combined");
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, __assign({}, opts, {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj.$mobx.getKeys();
  }

  if (isObservableMap(obj)) {
    return obj._keys.slice();
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  return fail$1(process.env.NODE_ENV !== "production" && "'keys()' can only be used on observable objects, arrays and maps");
}

function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  return fail$1(process.env.NODE_ENV !== "production" && "'values()' can only be used on observable objects, arrays and maps");
}

function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  return fail$1(process.env.NODE_ENV !== "production" && "'entries()' can only be used on observable objects, arrays and maps");
}

function set(obj, key, value) {
  if (arguments.length === 2) {
    startBatch();
    var values_1 = key;

    try {
      for (var key_1 in values_1) {
        set(obj, key_1, values_1[key_1]);
      }
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    var adm = obj.$mobx;
    var existingObservable = adm.values[key];

    if (existingObservable) {
      adm.write(obj, key, value);
    } else {
      defineObservableProperty(obj, key, value, adm.defaultEnhancer);
    }
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else {
    return fail$1(process.env.NODE_ENV !== "production" && "'set()' can only be used on observable objects, arrays and maps");
  }
}

function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj.$mobx.remove(key);
  } else if (isObservableMap(obj)) {
    obj.delete(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    obj.splice(key, 1);
  } else {
    return fail$1(process.env.NODE_ENV !== "production" && "'remove()' can only be used on observable objects, arrays and maps");
  }
}

function has$1(obj, key) {
  if (isObservableObject(obj)) {
    // return keys(obj).indexOf(key) >= 0
    var adm = getAdministration(obj);
    adm.getKeys(); // make sure we get notified of key changes, but for performance, use the values map to look up existence

    return !!adm.values[key];
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  } else {
    return fail$1(process.env.NODE_ENV !== "production" && "'has()' can only be used on observable objects, arrays and maps");
  }
}

function get(obj, key) {
  if (!has$1(obj, key)) return undefined;

  if (isObservableObject(obj)) {
    return obj[key];
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  } else {
    return fail$1(process.env.NODE_ENV !== "production" && "'get()' can only be used on observable objects, arrays and maps");
  }
}

function decorate(thing, decorators) {
  process.env.NODE_ENV !== "production" && invariant(isPlainObject(decorators), "Decorators should be a key value map");
  var target = typeof thing === "function" ? thing.prototype : thing;

  var _loop_1 = function _loop_1(prop) {
    var propertyDecorators = decorators[prop];

    if (!Array.isArray(propertyDecorators)) {
      propertyDecorators = [propertyDecorators];
    }

    process.env.NODE_ENV !== "production" && invariant(propertyDecorators.every(function (decorator) {
      return typeof decorator === "function";
    }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
    var descriptor = Object.getOwnPropertyDescriptor(target, prop);
    var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) {
      return decorator(target, prop, accDescriptor);
    }, descriptor);
    if (newDescriptor) Object.defineProperty(target, prop, newDescriptor);
  };

  for (var prop in decorators) {
    _loop_1(prop);
  }

  return thing;
}

function configure(options) {
  var enforceActions = options.enforceActions,
      computedRequiresReaction = options.computedRequiresReaction,
      disableErrorBoundaries = options.disableErrorBoundaries,
      arrayBuffer = options.arrayBuffer,
      reactionScheduler = options.reactionScheduler;

  if (enforceActions !== undefined) {
    if (typeof enforceActions === "boolean" || enforceActions === "strict") deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
    var ea = void 0;

    switch (enforceActions) {
      case true:
      case "observed":
        ea = true;
        break;

      case false:
      case "never":
        ea = false;
        break;

      case "strict":
      case "always":
        ea = "strict";
        break;

      default:
        fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
    }

    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
  }

  if (computedRequiresReaction !== undefined) {
    globalState.computedRequiresReaction = !!computedRequiresReaction;
  }

  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  if (disableErrorBoundaries !== undefined) {
    if (disableErrorBoundaries === true) console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on.");
    globalState.disableErrorBoundaries = !!disableErrorBoundaries;
  }

  if (typeof arrayBuffer === "number") {
    reserveArrayBuffer(arrayBuffer);
  }

  if (reactionScheduler) {
    setReactionScheduler(reactionScheduler);
  }
}

var generatorId = 0;

function flow(generator) {
  if (arguments.length !== 1) fail$1(process.env.NODE_ENV && "Flow expects one 1 argument and cannot be used as decorator");
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  return function () {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var res = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (ret && typeof ret.then === "function") {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    res.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

        var res_1 = gen.return(); // eat anything that promise would do, it's cancelled!

        var yieldedPromise = Promise.resolve(res_1.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new Error("FLOW_CANCELLED"));
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return res;
  };
}

function cancelPromise(promise) {
  if (typeof promise.cancel === "function") promise.cancel();
}

var defaultOptions = {
  detectCycles: true,
  exportMapsAsObjects: true,
  recurseEverything: false
};

function cache(map, key, value, options) {
  if (options.detectCycles) map.set(key, value);
  return value;
}

function toJSHelper(source, options, __alreadySeen) {
  if (!options.recurseEverything && !isObservable(source)) return source;
  if ((typeof source === "undefined" ? "undefined" : _typeof(source)) !== "object") return source; // Directly return null if source is null

  if (source === null) return null; // Directly return the Date object itself if contained in the observable

  if (source instanceof Date) return source;
  if (isObservableValue(source)) return toJSHelper(source.get(), options, __alreadySeen); // make sure we track the keys of the object

  if (isObservable(source)) keys(source);
  var detectCycles = options.detectCycles === true;

  if (detectCycles && source !== null && __alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source) || Array.isArray(source)) {
    var res_1 = cache(__alreadySeen, source, [], options);
    var toAdd = source.map(function (value) {
      return toJSHelper(value, options, __alreadySeen);
    });
    res_1.length = toAdd.length;

    for (var i = 0, l = toAdd.length; i < l; i++) {
      res_1[i] = toAdd[i];
    }

    return res_1;
  }

  if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
    if (options.exportMapsAsObjects === false) {
      var res_2 = cache(__alreadySeen, source, new Map(), options);
      source.forEach(function (value, key) {
        res_2.set(key, toJSHelper(value, options, __alreadySeen));
      });
      return res_2;
    } else {
      var res_3 = cache(__alreadySeen, source, {}, options);
      source.forEach(function (value, key) {
        res_3[key] = toJSHelper(value, options, __alreadySeen);
      });
      return res_3;
    }
  } // Fallback to the situation that source is an ObservableObject or a plain object


  var res = cache(__alreadySeen, source, {}, options);

  for (var key in source) {
    res[key] = toJSHelper(source[key], options, __alreadySeen);
  }

  return res;
}

function toJS(source, options) {
  // backward compatibility
  if (typeof options === "boolean") options = {
    detectCycles: options
  };
  if (!options) options = defaultOptions;
  options.detectCycles = options.detectCycles === undefined ? options.recurseEverything === true : options.detectCycles === true;

  var __alreadySeen;

  if (options.detectCycles) __alreadySeen = new Map();
  return toJSHelper(source, options, __alreadySeen);
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (typeof propOrHandler !== "string") return fail$1(process.env.NODE_ENV !== "production" && "InterceptReads can only be used with a specific property, not with an object in general");
    target = getAdministration(thing, propOrHandler);
  } else {
    return fail$1(process.env.NODE_ENV !== "production" && "Expected observable map, object or array as first array");
  }

  if (target.dehancer !== undefined) return fail$1(process.env.NODE_ENV !== "production" && "An intercept reader was already established");
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}
/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */


try {
  // define process.env if needed
  // if this is not a production build in the first place
  // (in which case the expression below would be substituted with 'production')
  process.env.NODE_ENV;
} catch (e) {
  var g = typeof window !== "undefined" ? window : global;
  if (typeof process === "undefined") g.process = {};
  g.process.env = {};
} // This line should come after all the imports as well, for the same reason
// as noted above. I will file a bug with rollupjs - @rossipedia
// Devtools support


if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    }
  });
} // TODO: remove in some future build


if (process.env.NODE_ENV !== "production" && typeof module !== "undefined" && typeof module.exports !== "undefined") {
  var warnedAboutDefaultExport_1 = false;
  Object.defineProperty(module.exports, "default", {
    enumerable: false,
    get: function get() {
      if (!warnedAboutDefaultExport_1) {
        warnedAboutDefaultExport_1 = true;
        console.warn("The MobX package does not have a default export. Use 'import { thing } from \"mobx\"' (recommended) or 'import * as mobx from \"mobx\"' instead.\"");
      }

      return undefined;
    }
  });
  ["extras", "Atom", "BaseAtom", "asFlat", "asMap", "asReference", "asStructure", "autorunAsync", "createTranformer", "expr", "isModifierDescriptor", "isStrictModeEnabled", "map", "useStrict", "whyRun"].forEach(function (prop) {
    Object.defineProperty(module.exports, prop, {
      enumerable: false,
      get: function get() {
        fail$1("'" + prop + "' is no longer part of the public MobX api. Please consult the changelog to find out where this functionality went");
      },
      set: function set() {}
    });
  });
} // forward compatibility with mobx, so that packages can easily support mobx 4 & 5


var $mobx = "$mobx";
exports.$mobx = $mobx;
exports.Reaction = Reaction;
exports.untracked = untracked;
exports.IDerivationState = IDerivationState;
exports.createAtom = createAtom;
exports.spy = spy;
exports.comparer = comparer;
exports.isObservableObject = isObservableObject;
exports.isBoxedObservable = isObservableValue;
exports.isObservableArray = isObservableArray;
exports.ObservableMap = ObservableMap;
exports.isObservableMap = isObservableMap;
exports.transaction = transaction;
exports.observable = observable;
exports.computed = computed;
exports.isObservable = isObservable;
exports.isObservableProp = isObservableProp;
exports.isComputed = isComputed;
exports.isComputedProp = isComputedProp;
exports.extendObservable = extendObservable;
exports.extendShallowObservable = extendShallowObservable;
exports.observe = observe;
exports.intercept = intercept;
exports.autorun = autorun;
exports.reaction = reaction;
exports.when = when;
exports.action = action;
exports.isAction = isAction;
exports.runInAction = runInAction;
exports.keys = keys;
exports.values = values;
exports.entries = entries;
exports.set = set;
exports.remove = remove;
exports.has = has$1;
exports.get = get;
exports.decorate = decorate;
exports.configure = configure;
exports.onBecomeObserved = onBecomeObserved;
exports.onBecomeUnobserved = onBecomeUnobserved;
exports.flow = flow;
exports.toJS = toJS;
exports.trace = trace;
exports.getDependencyTree = getDependencyTree;
exports.getObserverTree = getObserverTree;
exports._resetGlobalState = resetGlobalState;
exports._getGlobalState = getGlobalState;
exports.getDebugName = getDebugName;
exports.getAtom = getAtom;
exports._getAdministration = getAdministration;
exports._allowStateChanges = allowStateChanges;
exports._allowStateChangesInsideComputed = allowStateChangesInsideComputed;
exports.isArrayLike = isArrayLike;
exports._isComputingDerivation = isComputingDerivation;
exports.onReactionError = onReactionError;
exports._interceptReads = interceptReads;
})
cmldefine('32', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("33");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var KEY = {
  tt: {
    instance: tt,
    props: 'properties'
  }
};
exports.default = new _config2.default(KEY);
})
cmldefine('33', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Config = function () {
  function Config(data) {
    _classCallCheck(this, Config);

    this.data = data;
  }

  _createClass(Config, [{
    key: 'get',
    value: function get() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var def = arguments[1];
      var result = this.data;
      path.split('.').forEach(function (key) {
        if (key && typeof result !== 'undefined') {
          result = result[key];
        }
      });

      if (typeof result !== 'undefined') {
        return result;
      } else {
        return def;
      }
    }
  }, {
    key: 'set',
    value: function set(path, value) {
      if (typeof value === 'undefined') {
        this.data = path;
      } else {
        path = String(path || '').trim();

        if (path) {
          var paths = path.split('.');
          var last = paths.pop();
          var data = this.data || {};
          paths.forEach(function (key) {
            var type = data[key];

            if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
              data = data[key];
            } else if (typeof type === 'undefined') {
              data = data[key] = {};
            } else {
              throw new Error('forbidden to set property[' + key + '] of [' + type + '] data');
            }
          });
          data[last] = value;
        }
      }
    }
  }]);

  return Config;
}();

exports.default = Config;
})
cmldefine('10', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("33");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // polyhooks 不同端差异化hooks

/**
 * hooks: all hooks
 * hooksMap: {
 *  [cmlHook]: clientHook
 * },
 * usedHooks: used by hooksMap
 * polyHooks: client hook
 */


var LIFECYCLE = {
  tt: {
    // https://developer.toutiao.com/docs/framework/startupApp.html#app
    app: {
      hooks: ["onLaunch", "onShow", "onHide", "onError", "onPageNotFound"],
      hooksMap: {
        beforeCreate: "onLaunch",
        created: "onLaunch",
        beforeMount: "onLaunch",
        mounted: "onShow",
        beforeDestroy: "onHide",
        destroyed: "onHide"
      },
      usedHooks: ["onLaunch", "onShow", "onHide"],
      polyHooks: ["onError", "onPageNotFound"]
    },
    // https://developer.toutiao.com/docs/framework/startupPage.html#%E5%90%AF%E5%8A%A8%E9%A1%B5%E9%9D%A2
    page: {
      hooks: ["onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap"],
      hooksMap: {
        beforeCreate: "onLoad",
        created: "onLoad",
        beforeMount: "onLoad",
        mounted: "onReady",
        beforeDestroy: "onUnload",
        destroyed: "onUnload",
        onShow: "onShow",
        onHide: "onHide"
      },
      usedHooks: ["onLoad", "onReady", "onShow", "onHide", "onUnload"],
      polyHooks: ["onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap"]
    },
    // https://developer.toutiao.com/docs/framework/custom_component_constructor.html
    component: {
      hooks: ["created", "attached", "ready", "detached", "moved"],
      hooksMap: {
        beforeCreate: "created",
        created: "attached",
        beforeMount: "attached",
        mounted: "ready",
        beforeDestroy: "detached",
        destroyed: "detached"
      },
      usedHooks: ["created", "attached", "ready", "detached"],
      polyHooks: ["moved"]
    }
  },
  cml: {
    hooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'onShow', 'onHide']
  }
};
exports.default = new _config2.default(LIFECYCLE);
})
cmldefine('69', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeOptions = mergeOptions;

var _util = require("12");

var _lifecycle = require("10");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = {};
/**
 * Hooks are merged as arrays.
 */

function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

_lifecycle2.default.get('cml.hooks').forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Default strategy.
 */


var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (typeof child === 'function') {
    child = child.options;
  }

  if (child.extends) {
    parent = mergeOptions(parent, child.extends, vm);
  }

  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }

  var options = {};
  var key = void 0;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!(0, _util.hasOwn)(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
})
cmldefine('70', function(require, exports, module) {
  var _methods;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

var utils = require("71");

var _ = module.exports = {};

var wxStyleHandle = require("73");

_.eventProxyName = '_cmlEventProxy';
_.modelEventProxyName = '_cmlModelEventProxy'; // c-model的事件代理

_.inlineStatementEventProxy = '_cmlInline'; // 内联语句的事件代理

_.eventEmitName = '$cmlEmit'; // 触发事件的方法

_.mergeStyleName = '$cmlMergeStyle';
_.animationProxy = '_animationCb';
_.styleParseName = '$cmlStyle';

_.isType = function (obj, type) {
  return Object.prototype.toString.call(obj).slice(8, -1) === type;
};

_.mergeStyle = function () {
  // 可以接受字符串或者对象
  function styleToObj(str) {
    var obj = {};
    str.split(';').filter(function (item) {
      return !!item.trim();
    }).forEach(function (item) {
      var _utils$getStyleKeyVal = utils.getStyleKeyValue(item),
          key = _utils$getStyleKeyVal.key,
          value = _utils$getStyleKeyVal.value;

      key = key.replace(/\s+/, '');
      value = value.replace(/\s+/, '');
      obj[key] = value;
    });
    return obj;
  }

  var arr = [];

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    if (typeof arg === 'string') {
      arr.push(styleToObj(arg));
    } else if (Object.prototype.toString.call(arg) === '[object Object]') {
      arr.push(arg);
    }
  });
  var resultObj = Object.assign.apply(Object, arr);
  var resultStr = '';
  Object.keys(resultObj).forEach(function (key) {
    resultStr += key + ':' + resultObj[key] + ';';
  });
  return resultStr;
};

_.trim = function (value) {
  return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

_.isReactive = function (value) {
  var reg = /(?:^'([^']*?)'$)/;
  return _.trim(value).match(reg);
};

_.mixins = {
  methods: (_methods = {}, _defineProperty(_methods, _.inlineStatementEventProxy, function (e) {
    var dataset = e.currentTarget.dataset;
    var eventKey = e.type.toLowerCase();
    var originFuncName = dataset && dataset['event' + eventKey] && dataset['event' + eventKey][0];
    var inlineArgs = dataset && dataset['event' + eventKey] && dataset['event' + eventKey].slice(1);
    var argsArr = []; // 由于百度对于 data-arg="" 在dataset.arg = true 值和微信端不一样所以需要重新处理下这部分逻辑

    if (inlineArgs) {
      argsArr = inlineArgs.reduce(function (result, arg, index) {
        if (arg === "$event") {
          var newEvent = utils.getNewEvent(e);
          result.push(newEvent);
        } else {
          result.push(arg);
        }

        return result;
      }, []);
    }

    if (originFuncName && this[originFuncName] && _.isType(this[originFuncName], 'Function')) {
      this[originFuncName].apply(this, _toConsumableArray(argsArr));
    } else {
      console.log('can not find method ' + originFuncName);
    }
  }), _defineProperty(_methods, _.modelEventProxyName, function (e) {
    var dataset = e.currentTarget && e.currentTarget.dataset;
    var modelKey = dataset && dataset.modelkey;

    if (modelKey) {
      this[modelKey] = e.detail.value;
    }
  }), _defineProperty(_methods, _.eventProxyName, function (e) {
    var dataset = e.currentTarget.dataset;
    var eventKey = e.type.toLowerCase();
    var originFuncName = dataset && dataset['event' + eventKey] && dataset['event' + eventKey][0];

    if (originFuncName && this[originFuncName] && _.isType(this[originFuncName], 'Function')) {
      var newEvent = utils.getNewEvent(e);
      this[originFuncName](newEvent);
    } else {
      console.log('can not find method ' + originFuncName);
    }
  }), _defineProperty(_methods, _.mergeStyleName, function () {
    return _.mergeStyle.apply(_, arguments);
  }), _defineProperty(_methods, _.animationProxy, function () {
    var animationValue = arguments.length <= 0 ? undefined : arguments[0]; // animationValue:{cbs:{0:cb0,1:cb1,length:2},index}

    var animation = this[animationValue]; // 引用值

    if (!animation) {
      return;
    }

    var cbs = animation.cbs,
        index = animation.index; // 配合 解决百度端动画bug

    if (cbs === undefined || index === undefined) {
      return;
    }

    var cb = cbs[index];

    if (cb && typeof cb === 'function') {
      cb();
    }

    delete animation.index;
    animation.index = index + 1;
  }), _defineProperty(_methods, _.eventEmitName, function (eventKey, detail) {
    this.triggerEvent(eventKey, detail);

    if (this.$__checkCmlEmit__) {
      this.$__checkCmlEmit__(eventKey, detail);
    }
  }), _defineProperty(_methods, _.styleParseName, function (content) {
    var res = '';

    if (_.isType(content, 'Object')) {
      Object.keys(content).forEach(function (key) {
        res += key + ':' + content[key] + ';';
      });
    } else if (_.isType(content, 'String')) {
      res = content;
    }

    return wxStyleHandle(res);
  }), _methods)
};
})
cmldefine('71', function(require, exports, module) {
  var _ = module.exports = {};

var _require = require("72"),
    px2cpx = _require.px2cpx;

_.getStyleKeyValue = function (declaration) {
  var colonIndex = declaration.indexOf(':');
  var key = declaration.slice(0, colonIndex);
  var value = declaration.slice(colonIndex + 1);
  return {
    key: key,
    value: value
  };
};

_.handleCompEventType = function (eventType) {
  var aliEventMap = {
    touchstart: 'touchStart',
    touchend: 'touchEnd',
    touchmove: 'touchMove'
  };

  if (Object.keys(aliEventMap).includes(eventType)) {
    return aliEventMap[eventType];
  } else {
    return eventType;
  }
};

_.getNewEvent = function (e) {
  var newEvent = {};
  ['type', 'timeStamp', 'target', 'currentTarget', 'detail', 'touches', 'changedTouches'].forEach(function (key) {
    if (e[key]) {
      if (~['target', 'currentTarget'].indexOf(key)) {
        var newTarget = {};
        newTarget = {
          id: e[key].id,
          dataset: e[key].dataset
        };
        newEvent[key] = newTarget;
      } else if (~['touches', 'changedTouches'].indexOf(key)) {
        if (key == 'touches') {
          var touches = e[key];
          newEvent.touches = [];

          for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            var ret = {};
            ret.identifier = touch.identifier;
            ret.pageX = px2cpx(parseInt(touch.pageX, 10));
            ret.pageY = px2cpx(parseInt(touch.pageY, 10));
            ret.clientX = px2cpx(parseInt(touch.clientX, 10));
            ret.clientY = px2cpx(parseInt(touch.clientY, 10));
            newEvent.touches.push(ret);
          }
        }

        if (key == 'changedTouches') {
          var changedTouches = e[key];
          newEvent.changedTouches = [];

          for (var _i = 0; _i < changedTouches.length; _i++) {
            var _touch = changedTouches[_i];
            var _ret = {};
            _ret.identifier = _touch.identifier;
            _ret.pageX = px2cpx(parseInt(_touch.pageX, 10));
            _ret.pageY = px2cpx(parseInt(_touch.pageY, 10));
            _ret.clientX = px2cpx(parseInt(_touch.clientX, 10));
            _ret.clientY = px2cpx(parseInt(_touch.clientY, 10));
            newEvent.changedTouches.push(_ret);
          }
        }
      } else {
        newEvent[key] = e[key];
      }
    }
  });
  newEvent._originEvent = e;
  return newEvent;
};
})
cmldefine('72', function(require, exports, module) {
  var _ = module.exports = {};

var viewportWidth = void 0;

_.px2cpx = function (px, platform) {
  function getViewportSize() {
    var _tt$getSystemInfoSync = tt.getSystemInfoSync(),
        windowWidth = _tt$getSystemInfoSync.windowWidth;

    return windowWidth;
  }

  viewportWidth = viewportWidth || getViewportSize();
  var cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
};
})
cmldefine('73', function(require, exports, module) {
  var utils = require("74");

var lines = require("75"); // 运行时的cpx2rpx不能使用postcss处理，因为$cmlStyle方法用到了该方法，在运行时使用postcss 会出现Cannot find module "fs"的错误


module.exports = function (content) {
  content = utils.disappearCssComment(content);
  return parse(content);

  function parse(style) {
    return style.split(';').filter(function (declaration) {
      return !!declaration.trim();
    }).map(function (declaration) {
      var _utils$getStyleKeyVal = utils.getStyleKeyValue(declaration),
          key = _utils$getStyleKeyVal.key,
          value = _utils$getStyleKeyVal.value;

      return {
        property: key,
        value: value
      };
    }).map(function (declaration) {
      if (declaration.property === 'lines') {
        return lines(declaration.value);
      }

      declaration.value = handle(declaration.value);
      return declaration.property + ':' + declaration.value;
    }).join(';');
  }

  function handle(content) {
    if (content && content.replace) {
      content = content.replace(/(\d*\.?\d+)cpx/ig, function (m, $1) {
        return $1 + 'rpx';
      });
    }

    return content;
  }
};
})
cmldefine('74', function(require, exports, module) {
  var _ = {};
module.exports = _; // 将字符串中的 单引号变成 双引号；

_.singlequot2doublequot = function (value) {
  return value.replace(/['']/g, '"');
}; // 用于将css样式值中的重复样式去掉


_.uniqueStyle = function (content) {
  var uniqueStyleKeyValue = {};
  var splitStyleKeyValue = content.split(';').filter(function (item) {
    return !!item.trim();
  });
  splitStyleKeyValue.forEach(function (declaration) {
    var _$getStyleKeyValue = _.getStyleKeyValue(declaration),
        key = _$getStyleKeyValue.key,
        value = _$getStyleKeyValue.value;

    if (!key || !value) {
      throw new Error('please check if the style that you write is correct');
    }

    uniqueStyleKeyValue[key] = value;
  });
  var result = [];
  Object.keys(uniqueStyleKeyValue).forEach(function (key) {
    result.push(key + ':' + uniqueStyleKeyValue[key]);
  });
  return result.join(';');
}; // 用于删除css样式的注释； /*width:100px;*/ ==> ''


_.disappearCssComment = function (content) {
  var commentReg = /\/\*[\s\S]*?\*\//g;
  return content.replace(commentReg, function (match) {
    return '';
  });
};

_.getStyleKeyValue = function (declaration) {
  var colonIndex = declaration.indexOf(':');
  var key = declaration.slice(0, colonIndex).trim();
  var value = declaration.slice(colonIndex + 1).trim();
  return {
    key: key,
    value: value
  };
};
})
cmldefine('75', function(require, exports, module) {
  // 静态编译和运行时 web和小程序端对lines属性特殊处理
module.exports = function (linesNumber) {
  // 作为一个属性注意最后不能添加分号
  return "display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: " + linesNumber + "; overflow: hidden";
};
})
cmldefine('20', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _mobx = require("13");

var _toJS = require("76");

var _toJS2 = _interopRequireDefault(_toJS);

var _util = require("12");

var _type = require("7");

var _lifecycle = require("10");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _KEY = require("32");

var _KEY2 = _interopRequireDefault(_KEY);

var _diff = require("78");

var _diff2 = _interopRequireDefault(_diff);

var _warn = require("30");

var _EventBus = require("79");

var _EventBus2 = _interopRequireDefault(_EventBus);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var MiniRuntimeCore = function () {
  function MiniRuntimeCore(config) {
    _classCallCheck(this, MiniRuntimeCore);

    this.platform = config.platform || '';
    this.options = config.options;
    this.polyHooks = config.polyHooks;
    this.propsName = _KEY2.default.get(this.platform + '.props');
    this.instance = _KEY2.default.get(this.platform + '.instance');
  }

  _createClass(MiniRuntimeCore, [{
    key: 'setOptions',
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: 'setContext',
    value: function setContext(context) {
      this.context = context;
      return this;
    }
  }, {
    key: 'init',
    value: function init() {
      if ("build" !== "build") {
        (0, _warn.invariant)(!!this.context, "【chameleon-runtime】runtime context should not undefined");
      }

      var context = this.context;
      this.extendContext(); // 属性

      this.initData(); // 方法

      this.initInterface(); // 数据劫持

      this.proxyHandler(); // watch 属性mobx转换

      initWatch(context, context.__cml_originOptions__.watch);
      return this;
    }
  }, {
    key: 'extendContext',
    value: function extendContext() {
      this.context['$cmlEventBus'] = _EventBus2.default;

      this.context['$set'] = function (target, propertyName, value) {// target[propertyName] = value
      };
    }
  }, {
    key: 'initData',
    value: function initData() {
      var context = this.context;
      context.__cml_originOptions__ = this.options; // 清理函数列表

      context.__cml_disposerList__ = []; // update后，回调函数收集器

      context.__cml_cbCollection__ = [];
      context['$cmlPolyHooks'] = this.polyHooks; //  effect computed

      context.__cml_computed__ = transformComputed(context);

      if (this.platform === 'alipay') {
        context.__cml_data__ = (0, _util.extend)({}, context.data, context.props, context.__cml_computed__);
      } else {
        context.__cml_data__ = (0, _util.extend)({}, context.data, context.__cml_computed__);
      }
    }
  }, {
    key: 'initInterface',
    value: function initInterface() {
      var context = this.context; // 构造 watch 能力

      context.$watch = watchFnFactory(context); // 构造 updated callback 收集能力

      context.$collect = updatedCbFactory(context); // 构造数据更新能力

      context.$setData = setDataFactory(context, this); // 构造强制更新能力

      context.$forceUpdate = forceUpdateFactory(context);
    }
  }, {
    key: 'proxyHandler',
    value: function proxyHandler() {
      var context = this.context;
      context.__cml_ob_data__ = (0, _mobx.observable)(context.__cml_data__);
      var origComputed = context.__cml_originOptions__.computed;
      var origComputedKeys = origComputed ? (0, _util.enumerableKeys)(origComputed) : [];
      /* 计算属性在mobx里面是不可枚举的，所以篡改下*/

      (0, _util.enumerable)(context.__cml_ob_data__, origComputedKeys);
      (0, _util.proxy)(context, context.__cml_ob_data__);
    }
    /**
     * 启动器
     * @param  {[type]} context [description]
     * @return {[type]}       [description]
     */

  }, {
    key: 'start',
    value: function start(name) {
      if (!this.context) return;
      var context = this.context;
      var self = this; // 渲染更新监听
      // const disposer = autorunThrottle(context.$setData, name)

      /**
       * [computed description]
       * @return {[type]} [description]
       */

      function dataExprFn() {
        var properties = context.__cml_originOptions__[self.propsName];
        var propKeys = (0, _util.enumerableKeys)(properties); // setData 的数据不包括 props

        var obData = (0, _util.deleteProperties)(context.__cml_ob_data__, propKeys);
        return (0, _toJS2.default)(obData);
      }

      var _cached = false;
      var cacheData = void 0;

      function sideEffect(curVal) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if ((0, _type.type)(r.schedule) !== 'Function') {
          return;
        } // 缓存reaction


        context.__cml_reaction__ = r;
        var diffV = void 0;

        if (_cached) {
          diffV = (0, _diff2.default)(curVal, cacheData); // emit 'beforeUpdate' hook ，第一次不触发

          emit('beforeUpdate', context, curVal, cacheData, diffV);
        } else {
          _cached = true;
          diffV = curVal;
        }

        if ((0, _type.type)(context.setData) === 'Function') {
          context.setData(diffV, walkUpdatedCb(context));
        }

        cacheData = _extends({}, curVal);
      }

      var options = {
        fireImmediately: true,
        name: name,
        onError: function onError() {
          warn('RuntimeCore start reaction error!');
        }
      };
      var disposer = (0, _mobx.reaction)(dataExprFn, sideEffect, options);

      context.__cml_disposerList__.push(disposer);
    }
    /**
     * 销毁器
     * @param  {[type]} context [description]
     * @return {[type]}       [description]
     */

  }, {
    key: 'destory',
    value: function destory() {
      if (!this.context) return;
      var context = this.context;
      disposerFactory(context.__cml_disposerList__)();
    }
  }]);

  return MiniRuntimeCore;
}();
/**
 * watch 工厂函数
 * @param  {[type]} context [description]
 * @return {function}       vm.$watch
 */


exports.default = MiniRuntimeCore;

function watchFnFactory(context) {
  return function (expr, handler) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var exprType = typeof expr === 'undefined' ? 'undefined' : _typeof(expr);
    var curVal = void 0;
    var oldVal = void 0;

    if (!/^function|string$/.test(exprType)) {
      console.warn(new Error('watch expression must be a string or function'));
      return;
    }

    if (typeof handler !== 'function') {
      console.warn(new Error('watch callback must be a function'));
      return;
    }
    /**
     * [computed description]
     * @return {[type]} [description]
     */


    function dataExprFn() {
      oldVal = curVal;
      curVal = exprType === 'string' ? (0, _util.getByPath)(context, expr) : expr.call(context);

      if (options.deep) {
        curVal = (0, _toJS2.default)(curVal);
      } else if ((0, _mobx.isObservableArray)(curVal)) {
        // 转成纯数组
        curVal = curVal.slice();
      }

      return curVal;
    }

    function sideEffect(curVal, reaction) {
      handler.call(context, curVal, oldVal);
    } // 返回清理函数


    var disposer = (0, _mobx.reaction)(dataExprFn, sideEffect, {
      fireImmediately: !!options.immediate,
      delay: options.sync ? 0 : 1
    });

    context.__cml_disposerList__.push(disposer);

    return disposerFactory(context.__cml_disposerList__, disposer);
  };
}
/**
 * 清理函数构造工厂
 * @param  {array} disposerList 清理函数列表
 * @param  {function} disposer     清理函数
 * @return {function}              清理函数包装方法
 */


function disposerFactory(disposerList, disposer) {
  return function () {
    if (disposer) {
      var index = disposerList.indexOf(disposer);
      index > -1 && disposerList.splice(index, 1);
      disposer();
    } else {
      var _disposer = void 0;

      while (_disposer = disposerList.shift()) {
        _disposer();
      }
    }
  };
}
/**
 * 更新后回调 工厂函数
 * @param  {[type]} context [description]
 * @return {[type]}       [description]
 */


function updatedCbFactory(context) {
  return function (cb) {
    context.__cml_cbCollection__.push(cb);
  };
}
/**
 * 设置数据工厂函数
 * @param {[type]} context [description]
 */


function setDataFactory(context, self) {
  var _cached = false;
  var cacheData = void 0;
  return function () {
    var reaction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if ((0, _type.type)(reaction.schedule) !== 'Function') {
      return;
    } // 缓存reaction


    context.__cml_reaction__ = reaction;
    var properties = context.__cml_originOptions__[self.propsName];
    var propKeys = (0, _util.enumerableKeys)(properties);
    var obData = (0, _util.deleteProperties)(context.__cml_ob_data__, propKeys); // setData 的数据不包括 props

    var data = (0, _toJS2.default)(obData);
    var diffV = void 0;

    if (_cached) {
      diffV = (0, _diff2.default)(data, cacheData); // emit 'beforeUpdate' hook ，第一次不触发

      emit('beforeUpdate', context, data, cacheData, diffV);
    } else {
      _cached = true;
      diffV = data;
    }

    update(diffV);
    cacheData = _extends({}, data);
  };

  function update(diff) {
    if ((0, _type.type)(context.setData) === 'Function') {
      context.setData(diff, walkUpdatedCb(context));
    }
  }
}

function emit(name, context) {
  var cmlVM = context.__cml_originOptions__;

  if (typeof cmlVM[name] === 'function') {
    for (var _len = arguments.length, data = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      data[_key - 2] = arguments[_key];
    }

    cmlVM[name].apply(context, data);
  }
}
/**
 * 执行更新后回调列表
 * @param  {[type]} context [description]
 * @return {[type]}       [description]
 */


function walkUpdatedCb(context) {
  // emit 'updated' hook
  emit('updated', context);
  var cb = void 0;

  var pendingList = context.__cml_cbCollection__.slice(0);

  context.__cml_cbCollection__.length = 0;

  while (cb = pendingList.shift()) {
    typeof cb === 'function' && cb.apply(context);
  }
}
/**
 * forceUpdate 工厂函数
 * @param  {[type]} context [description]
 * @return {[type]}       [description]
 */


function forceUpdateFactory(context) {
  return function (data, cb) {
    var dataType = (0, _type.type)(data);

    if (dataType === 'Function') {
      cb = data;
      data = null;
    } else if (dataType === 'Object') {
      (0, _util.extend)(context.__cml_ob_data__, data);
    }

    (0, _type.type)(cb) === 'Function' && context.$collect(cb);
    context.__cml_reaction__.dependenciesState = 2;

    context.__cml_reaction__.schedule();
  };
}
/**
 * computed 属性mobx转换
 * @param  {Object} computedExpr 组件实例computed集合
 * @param  {Object} context      上下文
 * @return {Object}              转换后computed
 */


function transformComputed(context) {
  var options = context.__cml_originOptions__;
  var origComputed = options.computed;
  var origComputedKeys = origComputed ? (0, _util.enumerableKeys)(origComputed) : [];
  var newComputed = {};
  origComputedKeys.forEach(function (key) {
    newComputed[key] = (0, _mobx.computed)(origComputed[key], {
      context: context
    });
  });
  return newComputed;
}
/**
 * watch 属性转换
 * @param  {Object} context 上下文
 * @return {[type]}       [description]
 */


function initWatch(vm, watch) {
  if ((0, _type.type)(watch) !== 'Object') {
    return;
  }

  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      // mobx的reaction执行是倒序的，顾为保证watch正常次序，需倒序注册
      // 这里只解决了watch = {'a':[cb1,cb2]} 的倒序问题，对于$watch方式调用还是倒序
      // 需要改成mobx.observe的方案
      for (var i = handler.length - 1; i >= 0; i--) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if ((0, _type.isPlainObject)(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}
})
cmldefine('76', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.default = toJS;

var _mobx = require("13");

var _type = require("7");

var _style = require("77");

function toJS(source) {
  var detectCycles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var __alreadySeen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var needPxTransfer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  function cache(value) {
    if (detectCycles) {
      __alreadySeen.push([source, value]);
    }

    return value;
  }

  if (detectCycles && __alreadySeen === null) {
    __alreadySeen = [];
  }

  if (detectCycles && source !== null && (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === "object") {
    for (var _i = 0, _l = __alreadySeen.length; _i < _l; _i++) {
      if (__alreadySeen[_i][0] === source) {
        return __alreadySeen[_i][1];
      }
    }
  }

  if ((0, _mobx.isObservable)(source)) {
    if ((0, _mobx.isObservableArray)(source)) {
      var res = cache([]);
      var toAdd = source.map(function (value) {
        return toJS(value, detectCycles, __alreadySeen);
      });
      res.length = toAdd.length;

      for (var i = 0, l = toAdd.length; i < l; i++) {
        res[i] = toAdd[i];
      }

      return res;
    }

    if ((0, _mobx.isObservableObject)(source)) {
      var res = cache({});

      for (var key in source) {
        res[key] = toJS(source[key], detectCycles, __alreadySeen);
      }

      return res;
    }

    if ((0, _mobx.isObservableMap)(source)) {
      var res_1 = cache({});
      source.forEach(function (value, key) {
        return res_1[key] = toJS(value, detectCycles, __alreadySeen);
      });
      return res_1;
    }

    if ((0, _mobx.isBoxedObservable)(source)) return toJS(source.get(), detectCycles, __alreadySeen);
  } else {
    if ((0, _type.type)(source) === 'Array') {
      var _res = cache([]);

      var _toAdd = source.map(function (value) {
        return toJS(value, detectCycles, __alreadySeen);
      });

      _res.length = _toAdd.length;

      for (var _i2 = 0, _l2 = _toAdd.length; _i2 < _l2; _i2++) {
        _res[_i2] = _toAdd[_i2];
      }

      return _res;
    } else if ((0, _type.type)(source) === 'Object') {
      var _res2 = cache({});

      for (var _key in source) {
        _res2[_key] = toJS(source[_key], detectCycles, __alreadySeen);
      }

      return _res2;
    } else if ((0, _type.type)(source) === 'String') {
      // cpx to rpx
      return needPxTransfer ? (0, _style.pxTransform)(source) : source;
    } else {
      return source;
    }
  }
}
})
cmldefine('77', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.styleHandle = styleHandle;
exports.pxTransform = pxTransform;

var _type = require("7");

function styleHandle(source) {
  var detectCycles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var __alreadySeen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  function cache(value) {
    if (detectCycles) {
      __alreadySeen.push([source, value]);
    }

    return value;
  }

  if (detectCycles && __alreadySeen === null) {
    __alreadySeen = [];
  }

  if (detectCycles && source !== null && (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === "object") {
    for (var i = 0, l = __alreadySeen.length; i < l; i++) {
      if (__alreadySeen[i][0] === source) {
        return __alreadySeen[i][1];
      }
    }
  }

  if ((0, _type.type)(source) === 'Array') {
    var res = cache([]);
    var toAdd = source.map(function (value) {
      return styleHandle(value, detectCycles, __alreadySeen);
    });
    res.length = toAdd.length;

    for (var _i = 0, _l = toAdd.length; _i < _l; _i++) {
      res[_i] = toAdd[_i];
    }

    return res;
  } else if ((0, _type.type)(source) === 'Object') {
    var _res = cache({});

    for (var key in source) {
      _res[key] = styleHandle(source[key], detectCycles, __alreadySeen);
    }

    return _res;
  } else if ((0, _type.type)(source) === 'String') {
    return pxTransform(source);
  } else {
    return source;
  }
}

function pxTransform(s) {
  if (!~s.indexOf('cpx')) {
    return s;
  }

  return s.replace(/(([\s:(]|^)-?)(\d*\.?\d+)cpx/ig, function (m) {
    return m.replace('cpx', 'rpx');
  });
}
})
cmldefine('78', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diff;

var _type = require("7");

var _mobx = require("13");

function diff(current, old) {
  var out = {};
  prefill(current, old);
  iDiff(current, old, '', out);

  if (Object.keys(out).length === 1 && out[''] !== undefined) {
    out = out[''];
  } // console.log('diff------:', out)


  return out;
}

function prefill(current, old) {
  if (_mobx.extras.deepEqual(current, old)) return;

  if ((0, _type.type)(current) === 'Object' && (0, _type.type)(old) === 'Object') {
    var curLength = Object.keys(current).length;
    var oldLength = Object.keys(old).length;

    if (curLength >= oldLength) {
      for (var key in old) {
        var curVal = current[key];

        if (curVal === undefined) {
          current[key] = '';
        } else {
          prefill(curVal, old[key]);
        }
      }
    }
  } else if ((0, _type.type)(current) === 'Array' && (0, _type.type)(old) === 'Array') {
    if (current.length >= old.length) {
      old.forEach(function (item, index) {
        prefill(current[index], item);
      });
    }
  }
}

function iDiff(current, old, path, result) {
  if (_mobx.extras.deepEqual(current, old)) return;

  if ((0, _type.type)(current) === 'Object' && (0, _type.type)(old) === 'Object') {
    var curLength = Object.keys(current).length;
    var oldLength = Object.keys(old).length;

    if (curLength >= oldLength) {
      for (var key in current) {
        var curVal = current[key];
        var oldVal = old[key];
        iDiff(curVal, oldVal, getPath(path, key), result);
      }
    } else {
      update(current, path, result);
    }
  } else if ((0, _type.type)(current) === 'Array' && (0, _type.type)(old) === 'Array' && current.length >= old.length) {
    current.forEach(function (item, index) {
      iDiff(item, old[index], getPath(path, index, 'array'), result);
    });
  } else {
    update(current, path, result);
  }
}

function update(item, path, collection) {
  if (item !== undefined) {
    collection[path] = item;
  }
}

function getPath(pathStr, key, type) {
  if (type === 'array') {
    return pathStr + '[' + key + ']';
  }

  return pathStr ? pathStr + '.' + key : key;
}

function isNaN(value) {
  var n = Number(value);
  return n !== n;
}

function isNum(value) {
  return !isNaN(Number(value));
}
})
cmldefine('79', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Event = require("80");

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var EventBus = new _Event2.default();
exports.default = EventBus;
})
cmldefine('80', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 *  事件管理中心，用于监听，派发事件
 */


function call(callback, args) {
  var fn = callback[0];
  var context = callback[1];
  args = callback[2].concat(args);

  try {
    return fn.apply(context, args);
  } catch (e) {
    setTimeout(function () {
      throw e;
    }, 0);
  }
}

function arrayClone(arr, len) {
  var copy = new Array(len);

  while (len--) {
    copy[len] = arr[len];
  }

  return copy;
}

function _emit(type) {
  var listenerList = this._listenerMap[type];

  if (!listenerList) {
    return true;
  }

  var len = listenerList.cbs.length;
  var cbs = arrayClone(listenerList.cbs, len);
  var ret = true;

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  for (var index = 0; index < len; index++) {
    if (!cbs[index]) {
      continue;
    }

    ret = call(cbs[index], args) !== false && ret;
  }

  return !!ret;
}

var Event = function () {
  function Event() {
    _classCallCheck(this, Event);

    this._listenerMap = {};
  }

  _createClass(Event, [{
    key: "on",
    value: function on(type, fn, context) {
      var listenerList = this._listenerMap[type];

      if (!listenerList) {
        this._listenerMap[type] = listenerList = {
          args: null,
          cbs: []
        };
      }

      for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      var callback = [fn, context, rest];
      var args = listenerList.args;

      if (args) {
        call(callback, args);
      } else {
        listenerList.cbs.push(callback);
      }
    }
  }, {
    key: "once",
    value: function once(type, fn, context) {
      for (var _len3 = arguments.length, rest = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        rest[_key3 - 3] = arguments[_key3];
      }

      var fired = false;

      function magic() {
        this.un(type, magic);

        if (!fired) {
          fired = true;

          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          fn.apply(context, args.concat(rest));
        }
      }

      this.on(type, magic, this);
    }
  }, {
    key: "un",
    value: function un(type, fn) {
      var listenerList = this._listenerMap[type];

      if (!listenerList) {
        return true;
      }

      if (arguments.length === 1) {
        listenerList.cbs = [];
      } else {
        var cbs = listenerList.cbs;
        var count = cbs.length;

        while (count--) {
          if (cbs[count] && cbs[count][0] === fn) {
            cbs.splice(count, 1);
          }
        }
      }
    }
  }, {
    key: "emit",
    value: function emit(type, args) {
      return _emit.apply(this, arguments);
    }
  }, {
    key: "done",
    value: function done(type) {
      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      var listenerList = this._listenerMap[type];

      if (!listenerList) {
        this._listenerMap[type] = listenerList = {
          args: args,
          cbs: []
        };
      }

      var cbs = listenerList.cbs;
      var count = cbs.length;

      _emit.apply(this, arguments);

      listenerList.args = args;
      listenerList.cbs = cbs.slice(count);
    }
  }, {
    key: "undo",
    value: function undo(type) {
      var listenerList = this._listenerMap[type];

      if (!listenerList) {
        return false;
      }

      listenerList.args = null;
    }
  }]);

  return Event;
}();

exports.default = Event;
})
cmldefine('21', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _proto = require("81");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var BaseCtor = function () {
  function BaseCtor(options) {
    _classCallCheck(this, BaseCtor); // 拷贝原型链上属性


    (0, _proto.copyProtoProperty)(options);
    this.options = _extends({}, options);
    this.originalOptions = options;
  }

  _createClass(BaseCtor, [{
    key: 'initVmAdapter',
    value: function initVmAdapter(VmAdapter, config) {
      var vmAdapter = new VmAdapter(_extends({
        options: this.options
      }, config));
      this.options = vmAdapter.getOptions();
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }
  }]);

  return BaseCtor;
}();

exports.default = BaseCtor;
})
cmldefine('81', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyProtoProperty = copyProtoProperty;
/**
 * 原型上的方法放到对象上
 * @param  {Object} obj   待添加属性对象
 * @param  {Object} proto 差异方法
 * @return {Object}       修改后值
 */

function copyProtoProperty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var EXPORT_OBJ = obj;
  var EXPORT_PROTO = EXPORT_OBJ.__proto__;

  if (EXPORT_PROTO.constructor !== Object) {
    Object.getOwnPropertyNames(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        //原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }

  return EXPORT_OBJ;
}
})
cmldefine('82', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CmlPage = undefined;

var _BaseCtor2 = require("21");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = require("10");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _VmAdapter = require("19");

var _VmAdapter2 = _interopRequireDefault(_VmAdapter);

var _MiniRuntimeCore = require("20");

var _MiniRuntimeCore2 = _interopRequireDefault(_MiniRuntimeCore);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CmlPage = exports.CmlPage = function (_BaseCtor) {
  _inherits(CmlPage, _BaseCtor);

  function CmlPage(options) {
    _classCallCheck(this, CmlPage);

    var _this = _possibleConstructorReturn(this, (CmlPage.__proto__ || Object.getPrototypeOf(CmlPage)).call(this, options));

    _this.cmlType = 'tt';
    var runtimeCore = new _MiniRuntimeCore2.default({
      polyHooks: _lifecycle2.default.get('tt.page.polyHooks'),
      platform: _this.cmlType,
      options: _this.options
    });

    _this.initVmAdapter(_VmAdapter2.default, {
      options: _this.options,
      type: 'page',
      runtimeMixins: {
        onLoad: function onLoad() {
          // 初始化
          runtimeCore.setContext(this).init().start('page-view-render');
        },
        onUnload: function onUnload() {
          // stop
          runtimeCore.setContext(this).destory();
        },
        onPullDownRefresh: function onPullDownRefresh() {
          var path = this.route;
          this.$cmlEventBus.emit(path + '_onPullDownRefresh', {
            path: path
          });
        },
        onReachBottom: function onReachBottom() {
          var path = this.route;
          this.$cmlEventBus.emit(path + '_onReachBottom', {
            path: path
          });
        }
      },
      needResolveAttrs: ['methods'],
      hooks: _lifecycle2.default.get('tt.page.hooks'),
      hooksMap: _lifecycle2.default.get('tt.page.hooksMap'),
      polyHooks: _lifecycle2.default.get('tt.page.polyHooks'),
      usedHooks: _lifecycle2.default.get('tt.page.usedHooks')
    });

    Page(_this.options);
    return _this;
  }

  return CmlPage;
}(_BaseCtor3.default);
})
cmldefine('83', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CmlComponent = undefined;

var _BaseCtor2 = require("21");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = require("10");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _VmAdapter = require("19");

var _VmAdapter2 = _interopRequireDefault(_VmAdapter);

var _MiniRuntimeCore = require("20");

var _MiniRuntimeCore2 = _interopRequireDefault(_MiniRuntimeCore);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CmlComponent = exports.CmlComponent = function (_BaseCtor) {
  _inherits(CmlComponent, _BaseCtor);

  function CmlComponent(options) {
    _classCallCheck(this, CmlComponent);

    var _this = _possibleConstructorReturn(this, (CmlComponent.__proto__ || Object.getPrototypeOf(CmlComponent)).call(this, options));

    _this.cmlType = 'tt';
    var runtimeCore = new _MiniRuntimeCore2.default({
      polyHooks: _lifecycle2.default.get('tt.component.polyHooks'),
      platform: _this.cmlType,
      options: _this.options
    });

    _this.initVmAdapter(_VmAdapter2.default, {
      type: 'component',
      runtimeMixins: {
        created: function created() {
          // 初始化
          runtimeCore.setContext(this).init(); // .addPageHooks()
        },
        attached: function attached() {
          runtimeCore.setContext(this).start('component-view-render');
        },
        ready: function ready() {// runtimeCore
          //   .setContext(this)
          //   .initRefs()
        },
        detached: function detached() {
          // stop
          runtimeCore.setContext(this).destory();
        }
      },
      hooks: _lifecycle2.default.get('tt.component.hooks'),
      hooksMap: _lifecycle2.default.get('tt.component.hooksMap'),
      polyHooks: _lifecycle2.default.get('tt.component.polyHooks'),
      usedHooks: _lifecycle2.default.get('tt.component.usedHooks'),
      needPropsHandler: true,
      needTransformProperties: true
    });

    _this.options['options'] = {
      multipleSlots: true // 在组件定义时的选项中启用多slot支持

    };
    Component(_this.options);
    return _this;
  }

  return CmlComponent;
}(_BaseCtor3.default);
})
cmldefine('3', function(require, exports, module) {
  module.exports = function copyProtoProperty(obj) {
  var EXPORT_OBJ = obj || {};
  var EXPORT_PROTO = Object.getPrototypeOf(EXPORT_OBJ);

  if (EXPORT_PROTO.constructor !== Object) {
    Object.getOwnPropertyNames(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        // 原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }

  return EXPORT_OBJ;
};
})
cmldefine('84', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _index = require("85");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createPage(options) {
  return _index2.default.createPage(options);
}
})
cmldefine('85', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _tt = require("18");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
} // 定义模块的interface


var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'createPage',
    value: function createPage(options) {
      return new _tt.Page(options);
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('86', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = createComponent;

var _index = require("87");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createComponent(options) {
  return _index2.default.createComponent(options);
}
})
cmldefine('87', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _tt = require("18");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
} // 定义模块的interface


var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'createComponent',
    value: function createComponent(options) {
      return new _tt.Component(options);
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('92', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Home = function Home() {
  _classCallCheck(this, Home);

  this.data = {
    pageList: [{
      icon: require("154"),
      title: '组件',
      desc: '基础内容、表单组建、导航、视图容器等',
      url: '/pages/com/com'
    }, {
      icon: require("39"),
      title: '接口',
      desc: '界面、网络、数据、weex端扩展能力',
      url: '/pages/api/api'
    }, {
      icon: require("39"),
      title: '实例',
      desc: '网易严选等更多实例',
      url: '/pages/demo/demo'
    }],
    homeLogo: require("155"),
    arrowRight: require("156")
  };
  this.methods = {
    onItemSelected: function onItemSelected(url) {
      _cmlTtApi2.default.navigateTo({
        path: url
      });
    }
  };
};

exports.default = new Home();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('1', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("93");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("95");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("97");

var _index6 = _interopRequireDefault(_index5);

var _index7 = require("99");

var _index8 = _interopRequireDefault(_index7);

var _index9 = require("101");

var _index10 = _interopRequireDefault(_index9);

var _index11 = require("103");

var _index12 = _interopRequireDefault(_index11);

var _index13 = require("105");

var _index14 = _interopRequireDefault(_index13);

var _index15 = require("107");

var _index16 = _interopRequireDefault(_index15);

var _index17 = require("109");

var _index18 = _interopRequireDefault(_index17);

var _index19 = require("111");

var _index20 = _interopRequireDefault(_index19);

var _index21 = require("113");

var _index22 = _interopRequireDefault(_index21);

var _index23 = require("115");

var _index24 = _interopRequireDefault(_index23);

var _index25 = require("117");

var _index26 = _interopRequireDefault(_index25);

var _index27 = require("119");

var _index28 = _interopRequireDefault(_index27);

var _index29 = require("120");

var _index30 = _interopRequireDefault(_index29);

var _index31 = require("121");

var _index32 = _interopRequireDefault(_index31);

var _index33 = require("123");

var _index34 = _interopRequireDefault(_index33);

var _index35 = require("125");

var _index36 = _interopRequireDefault(_index35);

var _index37 = require("127");

var _index38 = _interopRequireDefault(_index37);

var _index39 = require("129");

var _index40 = _interopRequireDefault(_index39);

var _index41 = require("131");

var _index42 = _interopRequireDefault(_index41);

var _index43 = require("133");

var _index44 = _interopRequireDefault(_index43);

var _index45 = require("135");

var _index46 = _interopRequireDefault(_index45);

var _index47 = require("136");

var _index48 = _interopRequireDefault(_index47);

var _index49 = require("137");

var _index50 = _interopRequireDefault(_index49);

var _index51 = require("140");

var _index52 = _interopRequireDefault(_index51);

var _index53 = require("142");

var _index54 = _interopRequireDefault(_index53);

var _index55 = require("22");

var _index56 = _interopRequireDefault(_index55);

var _index57 = require("146");

var _index58 = _interopRequireDefault(_index57);

var _index59 = require("147");

var _index60 = _interopRequireDefault(_index59);

var _index61 = require("148");

var _index62 = _interopRequireDefault(_index61);

var _index63 = require("152");

var _index64 = _interopRequireDefault(_index63);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = {
  alert: _index2.default,
  confirm: _index4.default,
  showToast: _index6.default,
  setTitle: _index8.default,
  requestAnimationFrame: _index10.default,
  cancelAnimationFrame: _index12.default,
  inSDK: _index14.default,
  chooseImage: _index16.default,
  close: _index18.default,
  open: _index20.default,
  setStorage: _index22.default,
  getStorage: _index24.default,
  removeStorage: _index26.default,
  getClipBoardData: _index28.default,
  setClipBoardData: _index30.default,
  reload: _index32.default,
  redirectTo: _index34.default,
  navigateTo: _index36.default,
  navigateBack: _index38.default,
  getSystemInfo: _index40.default,
  getLaunchOptionsSync: _index42.default,
  getRect: _index44.default,
  px2cpx: _index46.default,
  cpx2px: _index48.default,
  initSocket: _index50.default,
  canIUse: _index52.default,
  getLocationInfo: _index54.default,
  request: _index56.default,
  get: _index58.default,
  post: _index60.default,
  createAnimation: _index62.default,
  createInnerAudioContext: _index64.default
};
})
cmldefine('93', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = alert;

var _index = require("94");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function alert(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$confirmTitle = opt.confirmTitle,
      confirmTitle = _opt$confirmTitle === undefined ? '确定' : _opt$confirmTitle;
  return new Promise(function (resolve, reject) {
    _index2.default.alert({
      message: message,
      confirmTitle: confirmTitle
    }, function () {
      resolve();
    }, function () {
      reject();
    });
  });
}
})
cmldefine('94', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'alert',
    value: function alert(opt, successCallBack, failCallBack) {
      var message = opt.message,
          confirmTitle = opt.confirmTitle;
      tt.showModal({
        title: confirmTitle,
        content: message,
        showCancel: false,
        success: function success() {
          successCallBack(confirmTitle);
        },
        fail: function fail() {
          failCallBack(confirmTitle);
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('95', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = confirm;

var _index = require("96");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function confirm(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$confirmTitle = opt.confirmTitle,
      confirmTitle = _opt$confirmTitle === undefined ? '确定' : _opt$confirmTitle,
      _opt$cancelTitle = opt.cancelTitle,
      cancelTitle = _opt$cancelTitle === undefined ? '取消' : _opt$cancelTitle;
  return new Promise(function (resolve, reject) {
    _index2.default.confirm({
      message: message,
      confirmTitle: confirmTitle,
      cancelTitle: cancelTitle
    }, function (value) {
      resolve(value);
    }, function () {
      reject();
    });
  });
}
})
cmldefine('96', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'confirm',
    value: function confirm(opt, successCallBack, failCallBack) {
      var message = opt.message,
          confirmTitle = opt.confirmTitle,
          cancelTitle = opt.cancelTitle;
      tt.showModal({
        title: '',
        content: message,
        confirmText: confirmTitle,
        cancelText: cancelTitle,
        success: function success(res) {
          if (res.confirm) {
            successCallBack(confirmTitle);
          } else {
            successCallBack(cancelTitle);
          }
        },
        fail: function fail() {
          failCallBack();
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('97', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showToast;

var _index = require("98");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function showToast(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$duration = opt.duration,
      duration = _opt$duration === undefined ? 2000 : _opt$duration;

  _index2.default.showToast({
    message: message,
    duration: duration
  });
}
})
cmldefine('98', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'showToast',
    value: function showToast(opt) {
      var message = opt.message,
          duration = opt.duration;
      tt.showToast({
        icon: 'none',
        title: message,
        duration: duration
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('99', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTitle;

var _index = require("100");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function setTitle() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _index2.default.setTitle(title);
}
})
cmldefine('100', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'setTitle',
    value: function setTitle(title) {
      tt.setNavigationBarTitle({
        title: title
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('101', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("102");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var RequestAnimationFactory = _index2.default.init();

var animationFrame = new RequestAnimationFactory();
exports.default = animationFrame.requestAnimationFrame();
})
cmldefine('102', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _animationShim = require("34");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'init',
    value: function init() {
      return function () {
        function AnimationFrameFactory() {
          _classCallCheck(this, AnimationFrameFactory);
        }

        _createClass(AnimationFrameFactory, [{
          key: 'requestAnimationFrame',
          value: function requestAnimationFrame() {
            return _animationShim.requestAnimationFrame;
          }
        }]);

        return AnimationFrameFactory;
      }();
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('34', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
var enterPageTime = Date.now();
var TARGET_FPS = 60;
var requests = Object.create(null);
var raf_handle = 0;
var timeout_handle = -1;

function onFrameTimer() {
  var cur_requests = requests;
  requests = Object.create(null);
  timeout_handle = -1;
  Object.keys(cur_requests).forEach(function (id) {
    var request = cur_requests[id];
    request(Date.now() - enterPageTime);
  });
}

var requestAnimationFrame = exports.requestAnimationFrame = function requestAnimationFrame(callback) {
  var cb_handle = ++raf_handle;
  requests[cb_handle] = callback;

  if (timeout_handle === -1) {
    timeout_handle = setTimeout(onFrameTimer, 1000 / TARGET_FPS);
  }

  return cb_handle;
};

var cancelAnimationFrame = exports.cancelAnimationFrame = function cancelAnimationFrame(handle) {
  delete requests[handle];

  if (Object.keys(requests).length === 0) {
    clearTimeout(timeout_handle);
    timeout_handle = -1;
  }
};
})
cmldefine('103', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("104");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var CancelAnimationFactory = _index2.default.init();

var animationFrame = new CancelAnimationFactory();
exports.default = animationFrame.cancelAnimationFrame();
})
cmldefine('104', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _animationShim = require("34");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'init',
    value: function init() {
      return function () {
        function AnimationFrameFactory() {
          _classCallCheck(this, AnimationFrameFactory);
        }

        _createClass(AnimationFrameFactory, [{
          key: 'cancelAnimationFrame',
          value: function cancelAnimationFrame() {
            return _animationShim.cancelAnimationFrame;
          }
        }]);

        return AnimationFrameFactory;
      }();
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('105', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inSDK;

var _index = require("106");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function inSDK() {
  return _index2.default.inSDK();
}
})
cmldefine('106', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'inSDK',
    value: function inSDK() {
      return false;
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('107', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chooseImage;

var _index = require("108");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function chooseImage() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    type: 'choice'
  };
  return new Promise(function (resolve, reject) {
    _index2.default.chooseImage(params, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    });
  });
}
})
cmldefine('108', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'chooseImage',
    value: function chooseImage(params, callbackSuccess, callbackFail) {
      var sourceType = [];

      switch (params.type) {
        case 'camera':
          sourceType = ['camera'];
          break;

        case 'album':
          sourceType = ['album'];
          break;

        default:
          sourceType = ['album', 'camera'];
      }

      tt.chooseImage({
        count: 1,
        sizeType: ['original'],
        sourceType: sourceType,
        success: function success(res) {
          callbackSuccess({
            base64: '',
            tempFilePaths: res.tempFilePaths
          });
        },
        fail: function fail(err) {
          callbackFail(err);
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('109', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = close;

var _index = require("110");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function close() {
  _index2.default.close();
}
})
cmldefine('110', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'close',
    value: function close() {
      tt.navigateBack({
        delta: 1
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('111', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = open;

var _index = require("112");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function open() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var commonPatchParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extraOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    closeCurrent: false
  };

  _index2.default.open(url, commonPatchParams, extraOptions);
}
})
cmldefine('112', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'open',
    value: function open() {}
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('113', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.default = setStorage;

var _index = require("114");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function setStorage(key, value) {
  var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  if (valueType !== 'string') {
    value = JSON.stringify(value);
  }

  if (valueType === 'undefined') {
    console.warn('The type of storage value can not be "undefined"');
    return Promise.reject('The type of storage value cannot be "undefined"');
  }

  return new Promise(function (resolve, reject) {
    _index2.default.setStorage(key, value, function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}
})
cmldefine('114', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'setStorage',
    value: function setStorage(key, value, cb) {
      try {
        tt.setStorage({
          key: key,
          data: value,
          success: function success() {
            cb({
              errno: 0,
              errMsg: 'success',
              data: value
            });
          },
          fail: function fail() {
            cb({
              errno: -1,
              errMsg: 'fail',
              data: ''
            });
          }
        });
      } catch (e) {
        var _errMsg = void 0;

        if (typeof e !== 'string') {
          _errMsg = JSON.stringify(e);
        } else {
          _errMsg = e;
        }

        cb({
          errno: -1,
          errMsg: _errMsg,
          data: ''
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('115', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStorage;

var _index = require("116");

var _index2 = _interopRequireDefault(_index);

var _utils = require("9");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getStorage(key) {
  return new Promise(function (resolve, reject) {
    _index2.default.getStorage(key, function (res) {
      if (res.errno === 0) {
        res.data = (0, _utils.tryJsonParse)(res.data);
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}
})
cmldefine('116', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getStorage',
    value: function getStorage(key, cb) {
      try {
        var _data = tt.getStorageSync(key);

        if (typeof _data !== 'string') {
          _data = JSON.stringify(_data);
        }

        cb({
          errno: 0,
          errMsg: 'success',
          data: _data !== null ? _data : ''
        });
      } catch (e) {
        var _errMsg = void 0;

        if (typeof e !== 'string') {
          _errMsg = JSON.stringify(e);
        } else {
          _errMsg = e;
        }

        cb({
          errno: -1,
          errMsg: _errMsg,
          data: ''
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('9', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFn = isFn;
exports.isStr = isStr;
exports.isNum = isNum;
exports.isObj = isObj;
exports.isArray = isArray;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.noop = noop;
exports.parseQuery = parseQuery;
exports.queryStringify = queryStringify;
exports.buildQueryStringUrl = buildQueryStringUrl;
exports.queryParse = queryParse;
exports.isNeedApiPrefix = isNeedApiPrefix;
exports.addApiPrefix = addApiPrefix;
exports.tryJsonParse = tryJsonParse;
exports.getQueryParamsFromUrl = getQueryParamsFromUrl;
exports.getOpenObj = getOpenObj;
exports.getUrlWithConnector = getUrlWithConnector;
exports.getRefObj = getRefObj;
exports.compareVersion = compareVersion;

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}
/**
 * 基础js方法的封装
 *
 */


function typeEqual(obj, type) {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

function isFn(obj) {
  return typeEqual(obj, 'Function');
}

function isStr(obj) {
  return typeEqual(obj, 'String');
}

function isNum(obj) {
  return typeof obj === 'number';
}

function isObj(obj) {
  return typeEqual(obj, 'Object');
}

function isArray(obj) {
  return typeEqual(obj, 'Array');
}

function isUndefined(obj) {
  return typeEqual(obj, 'Undefined');
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

function noop() {}

function parseQuery(obj) {
  var str = '&';
  var keys = null;

  if (obj && Object.keys(obj).length > 0) {
    keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      str += key + '=' + encodeURIComponent(obj[key]) + '&';
    }
  }

  return str;
}

function queryStringify(obj) {
  var strArr = [];
  var keys = null;

  if (obj && Object.keys(obj).length > 0) {
    keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      strArr.push(key + '=' + encodeURIComponent(obj[key]));
    }
  }

  return strArr.join('&');
}

function buildQueryStringUrl(params) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!url) return queryStringify(params);
  var retUrl = url;

  if (queryStringify(params)) {
    retUrl = url.indexOf('?') > -1 ? url + '&' + queryStringify(params) : url + '?' + queryStringify(params);
  }

  return retUrl;
}

function queryParse() {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var arr = search.split(/(\?|&)/);
  var parmsObj = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }

  return parmsObj;
}

function isNeedApiPrefix(url) {
  return !/^(https?\:\/\/)|^(\/\/)/.test(url);
}

function addApiPrefix(url, domainkey) {
  var domainMap = process.env.domainMap; // 新版cli

  if (domainMap) {
    var prefix = domainMap[domainkey] || process.env.devApiPrefix;
    return prefix + url;
  } else {
    // 老版本配置apiPrefix
    if ("https://cmljs.org") {
      return "https://cmljs.org" + url;
    }
  }
}

function tryJsonParse(some) {
  // 这里eslint提示也先别删除\[\]
  if (isStr(some) && /[\{\[].*[\}\]]/.test(some)) {
    try {
      some = JSON.parse(some);
    } catch (err) {}
  }

  return some;
}

function getQueryParamsFromUrl(url) {
  var arr = url.split(/(\?|&)/);
  var parmsObj = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }

  return parmsObj;
}
/**
 * 获取处理后的各端打开的地址
 * @param {String} url url地址
 * @return {Object} objTreated 处理好的三端地址及对象
 */


function getOpenObj(url) {
  var webUrlWithoutQuery = url.split('?')[0];
  var queryObj = getQueryParamsFromUrl(url);

  var _queryObj$path = queryObj.path,
      path = _queryObj$path === undefined ? '' : _queryObj$path,
      _queryObj$envVersion = queryObj.envVersion,
      envVersion = _queryObj$envVersion === undefined ? '' : _queryObj$envVersion,
      _queryObj$weixin_appi = queryObj.weixin_appid,
      weixin_appid = _queryObj$weixin_appi === undefined ? '' : _queryObj$weixin_appi,
      _queryObj$weixin_path = queryObj.weixin_path,
      weixin_path = _queryObj$weixin_path === undefined ? '' : _queryObj$weixin_path,
      _queryObj$weixin_envV = queryObj.weixin_envVersion,
      weixin_envVersion = _queryObj$weixin_envV === undefined ? '' : _queryObj$weixin_envV,
      _queryObj$qq_appid = queryObj.qq_appid,
      qq_appid = _queryObj$qq_appid === undefined ? '' : _queryObj$qq_appid,
      _queryObj$qq_path = queryObj.qq_path,
      qq_path = _queryObj$qq_path === undefined ? '' : _queryObj$qq_path,
      _queryObj$qq_envVersi = queryObj.qq_envVersion,
      qq_envVersion = _queryObj$qq_envVersi === undefined ? '' : _queryObj$qq_envVersi,
      _queryObj$baidu_appid = queryObj.baidu_appid,
      baidu_appid = _queryObj$baidu_appid === undefined ? '' : _queryObj$baidu_appid,
      _queryObj$baidu_path = queryObj.baidu_path,
      baidu_path = _queryObj$baidu_path === undefined ? '' : _queryObj$baidu_path,
      _queryObj$baidu_envVe = queryObj.baidu_envVersion,
      baidu_envVersion = _queryObj$baidu_envVe === undefined ? '' : _queryObj$baidu_envVe,
      _queryObj$alipay_appi = queryObj.alipay_appid,
      alipay_appid = _queryObj$alipay_appi === undefined ? '' : _queryObj$alipay_appi,
      _queryObj$alipay_path = queryObj.alipay_path,
      alipay_path = _queryObj$alipay_path === undefined ? '' : _queryObj$alipay_path,
      _queryObj$alipay_envV = queryObj.alipay_envVersion,
      alipay_envVersion = _queryObj$alipay_envV === undefined ? '' : _queryObj$alipay_envV,
      _queryObj$weex_path = queryObj.weex_path,
      weex_path = _queryObj$weex_path === undefined ? '' : _queryObj$weex_path,
      _queryObj$cml_addr = queryObj.cml_addr,
      cml_addr = _queryObj$cml_addr === undefined ? '' : _queryObj$cml_addr,
      extraData = _objectWithoutProperties(queryObj, ['path', 'envVersion', 'weixin_appid', 'weixin_path', 'weixin_envVersion', 'qq_appid', 'qq_path', 'qq_envVersion', 'baidu_appid', 'baidu_path', 'baidu_envVersion', 'alipay_appid', 'alipay_path', 'alipay_envVersion', 'weex_path', 'cml_addr']);

  var objTreated = {
    weex: cml_addr ? webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&cml_addr=' + cml_addr : null,
    web: webUrlWithoutQuery + '?' + queryStringify(extraData),
    wx: {
      appId: weixin_appid,
      path: weixin_path || path,
      extraData: extraData,
      envVersion: weixin_envVersion || envVersion
    },
    qq: {
      appId: qq_appid,
      path: qq_path || path,
      extraData: extraData,
      envVersion: qq_envVersion || envVersion
    },
    alipay: {
      appId: alipay_appid,
      path: alipay_path || path,
      extraData: extraData,
      envVersion: alipay_envVersion || envVersion
    },
    baidu: {
      appKey: baidu_appid,
      path: baidu_path || path,
      extraData: extraData
    }
  };
  return objTreated;
} // 获得带正确连接符的url


function getUrlWithConnector(url) {
  var connector = url.includes('?') ? '&' : '?';
  return url + connector;
} // 获取ref的通用对象


function getRefObj(ref, context) {
  var refObj = {
    webDom: '',
    id: '',
    weexRef: '',
    context: context
  }; // 容错处理

  if (!ref) return refObj; // 兼容新版ref, 为字符串

  if (typeof ref == 'string') {
    refObj.id = ref;

    if ("tt" === 'weex') {
      refObj.weexRef = context.$refs && context.$refs[ref];
    } else if ("tt" === 'web') {
      refObj.webDom = context.$refs[ref] && context.$refs[ref][0] || context.$refs[ref] && context.$refs[ref].$el || context.$refs[ref];
    }

    return refObj;
  } // 向下兼容旧版ref


  if ("tt" === 'wx' || "tt" === 'qq' || "tt" === 'baidu' || "tt" === 'alipay') {
    refObj.id = ref.id;
  } else if ("tt" === 'weex') {
    refObj.weexRef = ref;
  } else if (ref.$el) {
    refObj.webDom = ref.$el;
  } else {
    refObj.webDom = ref;
  }

  return refObj;
}
/**
 * 比较版本号
 * @param {String} v1 版本号1
 * @param {String} symb 比较符
 * @param {String} v2 版本号2
 */


function compareVersion(v1, symb, v2) {
  v1 = parseVersion(v1);
  v2 = parseVersion(v2);

  if (symb.indexOf('=') !== -1 && v1 === v2) {
    return true;
  }

  if (symb.indexOf('>') !== -1 && v1 > v2) {
    return true;
  }

  if (symb.indexOf('<') !== -1 && v1 < v2) {
    return true;
  }

  return false;
}

function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  version = version.split('.');
  version.length = 4;
  var ret = [];
  version.forEach(function (n) {
    n = n * 1;

    if (n) {
      ret.push(n >= 10 ? n : '0' + n);
    } else {
      ret.push('00');
    }
  });
  return parseInt(ret.join(''), 10);
}
/**
 * 判断targetMap中的属性是否被checkMap的属性包含，不是则抛出错误
 * @param {Object || Array} checkMap 
 * @param {Object} targetMap 
 * @returns {Boolean}
 */


var checkValue = exports.checkValue = function checkValue(check, targetMap) {
  if (isObj(check) || isArray(check)) {
    var checkArray = isObj(check) ? Object.keys(check) : check;
    Object.keys(targetMap).forEach(function (key) {
      if (!checkArray.includes(key)) {
        throw Error(key + '\u503C\u4E0D\u5408\u6CD5\uFF0C\u8BF7\u68C0\u67E5\uFF01');
      }
    });
  } else {
    // redLog('请传入数组或对象')
    return false;
  }

  return true;
};
})
cmldefine('117', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStorage;

var _index = require("118");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function removeStorage(key) {
  return new Promise(function (resolve, reject) {
    _index2.default.removeStorage(key, function (res) {
      if (res.errno === 0) {
        resolve();
      } else {
        reject(res.errMsg);
      }
    });
  });
}
})
cmldefine('118', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'removeStorage',
    value: function removeStorage(key, cb) {
      try {
        tt.removeStorageSync(key);
        cb({
          errno: 0,
          errMsg: 'success',
          data: ''
        });
      } catch (e) {
        var _errMsg = void 0;

        if (typeof e !== 'string') {
          _errMsg = JSON.stringify(e);
        } else {
          _errMsg = e;
        }

        cb({
          errno: -1,
          errMsg: _errMsg,
          data: ''
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('119', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClipBoardData;

var _index = require("35");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getClipBoardData() {
  return new Promise(function (resolve, reject) {
    _index2.default.getClipBoardData(function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.msg);
      }
    });
  });
}
})
cmldefine('35', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getClipBoardData',
    value: function getClipBoardData(cb) {
      tt.getClipboardData({
        success: function success(res) {
          cb({
            errno: 0,
            errMsg: '',
            data: res.data
          });
        },
        fail: function fail(res) {
          cb({
            errno: -1,
            errMsg: 'tt.getClipboardData fail',
            data: ''
          });
        }
      });
    }
  }, {
    key: 'setClipBoardData',
    value: function setClipBoardData(text, cb) {
      tt.setClipboardData({
        data: text,
        success: function success(res) {
          cb({
            errno: 0,
            errMsg: '',
            data: text
          });
        },
        fail: function fail(res) {
          cb({
            errno: -1,
            data: '',
            errMsg: 'tt.setClipboardData fail'
          });
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('120', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setClipBoardData;

var _index = require("35");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function setClipBoardData(text) {
  return new Promise(function (resolve, reject) {
    _index2.default.setClipBoardData(text, function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}
})
cmldefine('121', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reload;

var _index = require("122");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function reload() {
  _index2.default.reload();
}
})
cmldefine('122', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'reload',
    value: function reload() {}
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('123', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = redirectTo;

var _index = require("124");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function redirectTo(opt) {
  var query = opt.query || {};
  var path = opt.path || '';
  var url = opt.url || '';

  _index2.default.redirectTo({
    path: path,
    url: url,
    query: query
  });
}
})
cmldefine('124', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _utils = require("9");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'redirectTo',
    value: function redirectTo(opt) {
      var path = opt.path,
          query = opt.query;
      path = (0, _utils.buildQueryStringUrl)(query, path);
      tt.redirectTo({
        url: path
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('125', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigateTo;

var _index = require("126");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function navigateTo(opt) {
  // 转换为字符串通过多态不支持object，需改
  var query = opt.query || {};
  var path = opt.path || '';
  var url = opt.url || ''; // 不能通过直接转换类型对opt.query重新赋值的操作, 否则会造成opt原始传入对象数据被篡改的问题

  _index2.default.navigateTo({
    path: path,
    url: url,
    query: query
  });
}
})
cmldefine('126', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _utils = require("9");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'navigateTo',
    value: function navigateTo(opt) {
      var path = opt.path,
          query = opt.query;
      path = (0, _utils.buildQueryStringUrl)(query, path);
      tt.navigateTo({
        url: path
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('127', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigateBack;

var _index = require("128");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function navigateBack() {
  var backPageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

  _index2.default.navigateBack(backPageNum);
}
})
cmldefine('128', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'navigateBack',
    value: function navigateBack(backPageNum) {
      tt.navigateBack({
        delta: Math.abs(backPageNum)
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('129', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = getSystemInfo;

var _index = require("130");

var _index2 = _interopRequireDefault(_index);

var _utils = require("9");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getSystemInfo() {
  return new Promise(function (resolve, reject) {
    _index2.default.getSystemInfo(function (res) {
      res.extraParams = (0, _utils.tryJsonParse)(res.extraParams); // px2viewpx

      var pxRpxRate = 750 / res.viewportWidth;
      var viewportHeight = (res.viewportHeight * pxRpxRate).toFixed(3);
      var viewportWidth = (res.viewportWidth * pxRpxRate).toFixed(3);

      if (res.os) {
        resolve(_extends({}, res, {
          viewportHeight: viewportHeight,
          viewportWidth: viewportWidth
        }));
      } else {
        reject(res);
      }
    });
  });
}
})
cmldefine('130', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getSystemInfo",
    value: function getSystemInfo(cb) {
      tt.getSystemInfo({
        success: function success(res) {
          var os = res.platform === "iPhone" ? "ios" : "android";
          var viewportWidth = res.windowWidth;
          var viewportHeight = res.windowHeight;
          var systemInfo = {
            os: os,
            env: 'alipay',
            viewportWidth: viewportWidth,
            viewportHeight: viewportHeight,
            extraParams: res || {}
          };
          cb(systemInfo);
        },
        fail: function fail(err) {
          var systemInfo = {
            os: '',
            env: 'alipay',
            viewportWidth: 0,
            viewportHeight: 0,
            extraParams: {}
          };
          cb(systemInfo);
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('131', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLaunchOptionsSync;

var _index = require("132");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getLaunchOptionsSync() {
  return _index2.default.getLaunchOptionsSync();
}
})
cmldefine('132', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getLaunchOptionsSync',
    value: function getLaunchOptionsSync() {
      return tt.getLaunchOptionsSync();
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('133', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRect;

var _index = require("134");

var _index2 = _interopRequireDefault(_index);

var _utils = require("9");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getRect(ref, context) {
  return new Promise(function (resolve, reject) {
    var refObj = (0, _utils.getRefObj)(ref, context);

    _index2.default.getRect(refObj, function (res) {
      resolve(res);
    });
  });
}
})
cmldefine('134', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getRect',
    value: function getRect(refObj, cb) {
      var query = tt.createSelectorQuery().in(refObj.context);
      query.select('#' + refObj.id).boundingClientRect();
      query.exec(function (res) {
        tt.getSystemInfo({
          success: function success(systemRes) {
            var windowWidth = systemRes.windowWidth;
            var scale = 750 / windowWidth;
            var rectObj = {
              width: res[0] && res[0].width * scale || 0,
              height: res[0] && res[0].height * scale || 0,
              left: res[0] && res[0].left * scale || 0,
              top: res[0] && res[0].top * scale || 0,
              right: res[0] && res[0].right * scale || 0,
              bottom: res[0] && res[0].bottom * scale || 0
            };
            cb(rectObj);
          }
        });
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('135', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = px2cpx;

var _getWidth = require("36");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function px2cpx(px) {
  if (typeof px !== 'number') {
    console.error('Parameter must be a number');
    return;
  }

  var viewportWidth = _getWidth2.default.getWidth();

  var cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
}
})
cmldefine('36', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getWidth',
    value: function getWidth() {
      var _tt$getSystemInfoSync = tt.getSystemInfoSync(),
          windowWidth = _tt$getSystemInfoSync.windowWidth;

      return windowWidth;
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('136', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cpx2px;

var _getWidth = require("36");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function cpx2px(cpx) {
  if (typeof cpx !== 'number') {
    console.error('Parameter must be a number');
    return;
  }

  var viewportWidth = _getWidth2.default.getWidth();

  var px = +(viewportWidth / 750 * cpx).toFixed(3);
  return px;
}
})
cmldefine('137', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initSocket;

var _index = require("138");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function initSocket() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var instance = _index2.default.initSocket(url);

  return instance;
}
})
cmldefine('138', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _ttSocket = require("139");

var _ttSocket2 = _interopRequireDefault(_ttSocket);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'initSocket',
    value: function initSocket(url) {
      return new _ttSocket2.default(url);
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('139', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var TtSocket = function () {
  function TtSocket(url) {
    _classCallCheck(this, TtSocket);

    this.instance = tt.connectSocket({
      url: url
    });
  }

  _createClass(TtSocket, [{
    key: "onopen",
    value: function onopen(cb) {
      this.instance.onOpen(function () {
        cb();
      });
    }
  }, {
    key: "onmessage",
    value: function onmessage(cb) {
      this.instance.onMessage(function (res) {
        cb(res);
      });
    }
  }, {
    key: "onerror",
    value: function onerror(cb) {
      this.instance.onError(function (err) {
        cb(err);
      });
    }
  }, {
    key: "onclose",
    value: function onclose(cb) {
      this.instance.onClose(function () {
        cb();
      });
    }
  }, {
    key: "send",
    value: function send(data) {
      data = JSON.stringify(data);
      this.instance.send({
        data: data
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.instance.close();
    }
  }]);

  return TtSocket;
}();

exports.default = TtSocket;
})
cmldefine('140', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canIUse;

var _index = require("141");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function canIUse(metName) {
  return new Promise(function (resolve, reject) {
    _index2.default.canIUse(metName, function (res) {
      if (res) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  });
}
})
cmldefine('141', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'canIUse',
    value: function canIUse(metName, cb) {
      cb(true);
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('142', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLocationInfo;

var _index = require("143");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getLocationInfo() {
  return new Promise(function (resolve, reject) {
    _index2.default.getLocationInfo(function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}
})
cmldefine('143', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getLocationInfo',
    value: function getLocationInfo(cb) {
      tt.getLocation({
        type: 'wgs84',
        success: function success(res) {
          var latitude = +res.latitude;
          var longitude = +res.longitude;
          cb({
            errno: 0,
            errMsg: '',
            data: {
              lat: latitude,
              lng: longitude
            }
          });
        },
        fail: function fail() {
          cb({
            errno: -1,
            errMsg: 'getLocation failed',
            data: {
              lat: 0,
              lng: 0
            }
          });
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('22', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = request;

var _index = require("144");

var _index2 = _interopRequireDefault(_index);

var _utils = require("9");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function request(_ref) {
  var domain = _ref.domain,
      url = _ref.url,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'GET' : _ref$method,
      _ref$header = _ref.header,
      header = _ref$header === undefined ? {} : _ref$header,
      _ref$contentType = _ref.contentType,
      contentType = _ref$contentType === undefined ? 'form' : _ref$contentType,
      _ref$setting = _ref.setting,
      setting = _ref$setting === undefined ? {} : _ref$setting,
      _ref$resDataType = _ref.resDataType,
      resDataType = _ref$resDataType === undefined ? 'json' : _ref$resDataType;
  method = method.toUpperCase();
  var _setting$apiPrefix = setting.apiPrefix,
      apiPrefix = _setting$apiPrefix === undefined ? (0, _utils.isNeedApiPrefix)(url) : _setting$apiPrefix,
      _setting$jsonp = setting.jsonp,
      jsonp = _setting$jsonp === undefined ? false : _setting$jsonp,
      _setting$credentials = setting.credentials,
      credentials = _setting$credentials === undefined ? 'include' : _setting$credentials;
  var media = "build"; // 如果用户配置了domain

  if (domain) {
    if (media === 'dev') {
      // dev模式对domain做分割处理
      if (~domain.indexOf('__DEV_SPLIT__')) {
        var splitArray = domain.split('__DEV_SPLIT__');
        domain = splitArray[0];
        var domainKey = splitArray[1];
        url = (0, _utils.buildQueryStringUrl)({
          domainKey: domainKey
        }, url);
      }
    }

    url = domain + url;
  } else {
    // 如果没有配置domain
    if (apiPrefix) {
      // 有apiPrefix优先
      if ("https://cmljs.org") {
        url = "https://cmljs.org" + url;
      }
    }
  }

  if (['GET', 'PUT', 'DELETE'].indexOf(method) > -1) {
    url = (0, _utils.buildQueryStringUrl)(data, url);
  }

  switch (contentType) {
    case 'form':
      if (typeof data !== 'string') {
        data = (0, _utils.buildQueryStringUrl)(data);
      }

      header = _extends({}, header, {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      break;

    case 'json':
      if (typeof data !== 'string') {
        data = JSON.stringify(data);
      }

      header = _extends({}, header, {
        'Content-Type': 'application/json'
      });
      break;
  }

  if (typeof data !== 'string') {
    data = '';
  }

  return new Promise(function (resolve, reject) {
    _index2.default.request({
      url: url,
      body: data,
      setting: {
        apiPrefix: apiPrefix,
        jsonp: jsonp,
        credentials: credentials
      },
      method: method,
      headers: header,
      cb: function cb(res) {
        var status = res.status,
            headers = res.headers,
            data = res.data;

        if (status >= 200 && status < 300) {
          if (resDataType === 'json' && typeof data == 'string') {
            try {
              data = JSON.parse(data);
            } catch (e) {
              console.warn('resDataType默认为"json", 尝试对返回内容进行JSON.parse, 但似乎出了些问题(若不希望对结果进行parse, 可传入resDataType: "text"): ', e);
            }
          }

          resolve(data);
        } else {
          if (resDataType === 'json') {
            data = (0, _utils.tryJsonParse)(data);
          }

          headers = (0, _utils.tryJsonParse)(headers);
          reject({
            data: data,
            headers: headers,
            status: status
          });
        }
      }
    });
  });
}
})
cmldefine('144', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _common = require("145");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'request',
    value: function request(params) {
      var url = params.url,
          body = params.body,
          headers = params.headers,
          method = params.method,
          cb = params.cb;
      tt.request({
        url: url,
        data: body,
        dataType: 'text',
        method: method,
        header: headers,
        success: function success(res) {
          cb({
            status: res.statusCode,
            data: res.data,
            headers: (0, _common.parseHeader)(res.header)
          });
        },
        fail: function fail(e) {
          cb({
            status: -1,
            data: 'request failed',
            headers: '{}'
          });
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('145', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHeader = parseHeader;
var defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded'
};
var defaultOptions = {
  credentials: 'same-origin'
};
var defaultType = 'form';
var contentTypeMap = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json'
}; // 处理基本的错误, 如500, 404等等

function filterStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    var error = new Error(res.statusText);
    error.res = res;
    error.type = 'http';
    throw error;
  }
} // 解析为json格式


function parseJSON(res) {
  return res.json()["catch"](function (err) {
    if (err) {
      err.type = 'json';
      err.res = res;
    }

    throw err;
  });
} // 转换成form表单形式


function toForm(body) {
  var form = new FormData();
  Object.keys(body).forEach(function (key) {
    if (body[key] !== undefined) {
      form.append(key, body[key]);
    }
  });
  return form;
}

function parseHeader(headers) {
  // fetch中的headers value为数组形式,其他端为字符串形式， 统一为字符串
  // header的key值统一为小写
  var result = {};
  Object.keys(headers).forEach(function (key) {
    var value = headers[key];

    if (value instanceof Array) {
      value = value[0];
    }

    result[key.toLowerCase()] = value;
  });
  return JSON.stringify(result);
}

exports.default = {
  defaultHeaders: defaultHeaders,
  defaultOptions: defaultOptions,
  defaultType: defaultType,
  contentTypeMap: contentTypeMap,
  filterStatus: filterStatus,
  parseJSON: parseJSON,
  toForm: toForm,
  parseHeader: parseHeader
};
})
cmldefine('146', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = post;

var _index = require("22");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function post(options) {
  options.method = "GET";
  return (0, _index2.default)(options);
}
})
cmldefine('147', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = post;

var _index = require("22");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function post(options) {
  options.method = "POST";
  return (0, _index2.default)(options);
}
})
cmldefine('148', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("23");

var _index2 = _interopRequireDefault(_index);

var _createAnimationFactory = require("151");

var _createAnimationFactory2 = _interopRequireDefault(_createAnimationFactory);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

_index2.default.initAnimation();

exports.default = function (description) {
  return new _createAnimationFactory2.default(description);
};
})
cmldefine('23', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _common = require("37");

var _tt = require("149");

var _common2 = require("150");

var _util = require("38");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var styleLoaderQueue = [_common.commonLoader, _common.cacheTransformStylesLoader, _tt.transformLoader];
var descriptionLoaderQueue = [_common2.commonLoader, _common2.cacheTransformOriginLoader];

var createAnimationFuc = function createAnimationFuc(quene) {
  var animation = tt.createAnimation();
  var cbs = {};
  quene.forEach(function (tick, i) {
    var styles = tick.styles,
        descriptions = tick.descriptions;
    cbs[i] = descriptions.cb;
    Object.keys(styles).forEach(function (key) {
      var value = styles[key];
      animation[key](value);
    });
    animation.step(descriptions);
  });
  var temp = JSON.parse(animation.export());
  temp.cbs = cbs;
  temp.index = 0;
  return temp;
};

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'initAnimation',
    value: function initAnimation() {
      this.isTTAnimation = true;
    }
  }, {
    key: 'checkNumber',
    value: function checkNumber(number) {}
  }, {
    key: 'checkString',
    value: function checkString(string) {}
  }, {
    key: 'checkObject',
    value: function checkObject(object) {}
  }, {
    key: 'getViewportWidth',
    value: function getViewportWidth() {
      var _tt$getSystemInfoSync = tt.getSystemInfoSync(),
          windowWidth = _tt$getSystemInfoSync.windowWidth;

      return windowWidth;
    }
  }, {
    key: 'exportMiddleWare',
    value: function exportMiddleWare(param) {
      return createAnimationFuc(param.updateQueue.map(function (tick) {
        return {
          styles: (0, _util.stylePipe)(tick.styles, tick.descriptions, styleLoaderQueue, param.id),
          descriptions: (0, _util.descriptionPipe)(tick.descriptions, tick.styles, descriptionLoaderQueue, param.id)
        };
      }));
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('37', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
var rotateStyles = exports.rotateStyles = ['rotate', 'rotateX', 'retateY'];
var isNumTypeStyles = exports.isNumTypeStyles = ['width', 'height', 'translateX', 'translateY'];
var transformStyles = exports.transformStyles = ['translate', 'translateX', 'translateY', 'scale', 'scaleX', 'scaleY', 'rotate', 'rotateX', 'rotateY'];
var compositeStyles = exports.compositeStyles = ['translate', 'scale'];

var commonLoader = exports.commonLoader = function commonLoader(styles) {
  var returnStyles = {};
  Object.keys(styles).forEach(function (key) {
    var value = styles[key]; //

    if (value.length === 1 && key !== 'scale') {
      returnStyles[key] = value[0];
    } else {
      if (compositeStyles.includes(key)) {
        // scale的值只传递一个的情况
        if (key === 'scale' && value.length === 1) {
          returnStyles[key + 'X'] = value[0];
          returnStyles[key + 'Y'] = value[0];
        } else {
          returnStyles[key + 'X'] = value[0];
          returnStyles[key + 'Y'] = value[1];
        } // returnStyles[`${key}Z`] = value[2];

      } else {// redLog(`${key}属性不支持传多个参数`);
        }
    }
  });
  return returnStyles;
}; // 缓存transform属性


var transformStylesMap = {};

var cacheTransformStylesLoader = exports.cacheTransformStylesLoader = function cacheTransformStylesLoader(styles, descriptions, id) {
  var returnStyles = {};

  if (!transformStylesMap[id]) {
    transformStylesMap[id] = {};
  }

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];

    if (transformStyles.includes(key)) {
      transformStylesMap[id][key] = value;
    }

    returnStyles[key] = value;
  });

  if (JSON.stringify(transformStylesMap[id]) !== '{}') {
    Object.keys(transformStylesMap[id]).forEach(function (key) {
      var value = transformStylesMap[id][key];
      returnStyles[key] = value;
    });
  }

  return returnStyles;
};
})
cmldefine('149', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformLoader = undefined;

var _util = require("38");

var _utils = require("9");

var _common = require("37");

var transformLoader = exports.transformLoader = function transformLoader(styles, description) {
  var returnStyles = {};
  Object.keys(styles).forEach(function (key) {
    var value = styles[key]; // 目前不支持自动转换，所以loader来做

    if (_common.isNumTypeStyles.includes(key)) {
      if ((0, _utils.isNum)(value)) {
        // 转换单位
        value = (0, _util.cpx2px)(value);
      } else {
        console.error('Parameter must be a number');
      }
    } // // 目前不支持转换，所以loader来做
    // if (isStr(value) && value.includes('px')) {
    //   value = value.replace('px', 'rpx');
    // }
    // 100deg -> 100


    if (_common.rotateStyles.includes(key) && (0, _utils.isStr)(value)) {
      if (value.includes('deg')) {
        value = value.split('deg')[0];
      } else {
        console.error('Parameter format error');
      }
    } // 此处使用transformMap保留transform状态。因为weex每次会初始化transform。行为会跟web，wx端不一致


    returnStyles[key] = value;
  });
  return returnStyles;
}; // import { cpx2px } from 'chameleon-api/src/interfaces/createAnimation/_util';
})
cmldefine('38', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cpx2px = exports.descriptionPipe = exports.stylePipe = undefined;

var _index = require("23");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var stylePipe = exports.stylePipe = function stylePipe(styles, descriptions, quene) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var current = styles;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, descriptions].concat(args));
  });
  return current;
};

var descriptionPipe = exports.descriptionPipe = function descriptionPipe(descriptions, styles, quene) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var current = descriptions;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, styles].concat(args));
  });
  return current;
};

var cpx2px = exports.cpx2px = function cpx2px(v) {
  return +(_index2.default.getViewportWidth() / 750 * v).toFixed(3);
};

exports.default = {};
})
cmldefine('150', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var commonLoader = exports.commonLoader = function commonLoader(descriptions) {
  return descriptions;
};

var transformOriginMap = {};

var cacheTransformOriginLoader = exports.cacheTransformOriginLoader = function cacheTransformOriginLoader(descriptions, styles, id) {
  var returnDescriptions = descriptions;
  var transformOrigin = descriptions.transformOrigin;

  if (!transformOriginMap[id]) {
    transformOriginMap[id] = {};
  }

  if (transformOrigin) {
    transformOriginMap[id].transformOrigin = transformOrigin;
  }

  returnDescriptions.transformOrigin = transformOriginMap[id].transformOrigin;
  return returnDescriptions;
};
})
cmldefine('151', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("23");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

var exportMiddleWare = _index2.default.exportMiddleWare,
    checkNumber = _index2.default.checkNumber,
    checkString = _index2.default.checkString;
var id = 0; // 可用options

var STYLES = [{
  key: 'width',
  type: 'number'
}, {
  key: 'height',
  type: 'number'
}, {
  key: 'opacity',
  type: 'number'
}, {
  key: 'backgroundColor',
  type: 'string'
}, // 16进制数值
{
  key: 'translate',
  type: 'number'
}, // web不支持
{
  key: 'translateX',
  type: 'number'
}, {
  key: 'translateY',
  type: 'number'
}, {
  key: 'scale',
  type: 'number'
}, // web不支持
{
  key: 'scaleX',
  type: 'number'
}, {
  key: 'scaleY',
  type: 'number'
}, // {key:'skew', type: 'string'}, //weex不支持
// {key:'skewX', type: 'string'},
// {key:'skewY', type: 'string'},
// 暂时不支持校验，因为cml底层不支持校验多种类型
{
  key: 'rotate',
  type: ''
}, // web不支持,
{
  key: 'rotateX',
  type: ''
}, {
  key: 'rotateY',
  type: ''
}, {
  key: 'transform',
  type: 'string'
}]; // 可用descriptions
// const DESCRIPTIONS = [
//   'duration',
//   'timingFunction',
//   'delay',
//   'transformOrigin',
//   'cb'
// ];

var utils = {
  // 将styles的值 变为原型上的方法
  enhanceAnimationPrototype: function enhanceAnimationPrototype(target, styles) {
    var transformProps = Array.isArray(styles) ? styles : Object.keys(styles);
    transformProps.forEach(function (item) {
      target[item.key] = function () {
        for (var _len = arguments.length, style = Array(_len), _key = 0; _key < _len; _key++) {
          style[_key] = arguments[_key];
        } // 校验类型


        if (item.type === 'number') {
          checkNumber(style[0]);
        } else if (item.type === 'string') {
          checkString(style[0]);
        }

        this.styles[item.key] = style;
        return this;
      };
    }, this);
  }
};

var createAnimationFactory = function createAnimationFactory() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var updateQueue = []; // let stashQueue = [];

  this.id = id;
  id = id + 1;
  this.descriptions = description;
  this.styles = {}; // 判断用户是否使用export

  this.useExport = '0';

  this.enqueue = function (param) {
    updateQueue.push(param);
  };

  this["export"] = function () {
    this.useExport = '1';
    var result = exportMiddleWare({
      id: this.id,
      useExport: this.useExport,
      updateQueue: [].concat(_toConsumableArray(updateQueue))
    }); // 清空

    updateQueue = [];
    this.useExport = '0';

    if (_index2.default && _index2.default.isTTAnimation) {
      console.log('Index', _index2.default);
      return JSON.stringify(result); //头条小程序接受的是字符串
    }

    return result;
  }; // 此操作与重新构建类重复
  // this.reset = function() {
  //   updateQueue = [];
  // }
  // 暂存
  // this.stash = function() {
  //   stashQueue = [...updateQueue];
  // };
  // this.stashExport = function() {
  //   this.useExport = '1';
  //   const result = exportMiddleWare({
  //     id: this.id,
  //     useExport: this.useExport,
  //     updateQueue: [...updateQueue]
  //   });
  //   // 清空
  //   this.useExport = '0';
  //   stashQueue = [];
  //   return result;
  // };

};

createAnimationFactory.prototype = {
  clear: function clear() {
    this.styles = {};
    this.descriptions = {};
    return this;
  },
  styles: function styles(_styles) {
    this.styles = Object.assign({}, this.styles, _styles);
    return this;
  },
  step: function step(descriptions) {
    this.enqueue({
      styles: this.styles,
      descriptions: Object.assign({
        cb: function cb() {
          return false;
        },
        duration: 400
      }, this.descriptions, descriptions)
    });
    this.clear();
    return this;
  }
};
utils.enhanceAnimationPrototype(createAnimationFactory.prototype, STYLES);
exports.default = createAnimationFactory;
})
cmldefine('152', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInnerAudioContext;

var _index = require("153");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createInnerAudioContext() {
  return _index2.default.createInnerAudioContext();
}
})
cmldefine('153', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'createInnerAudioContext',
    value: function createInnerAudioContext() {
      return tt.createInnerAudioContext();
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('154', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/home-ui_ff6eff2.png";
})
cmldefine('39', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/home-api_f4f07d0.png";
})
cmldefine('155', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/home-chameleon_4bdd159.png";
})
cmldefine('156', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/arrow-right_481e0c4.png";
})
cmldefine('160', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CPage = function () {
  function CPage() {
    _classCallCheck(this, CPage);

    this.props = {
      title: {
        required: true,
        type: String,
        default: ''
      },
      full: {
        type: Boolean,
        default: false
      }
    };
    this.watch = {
      title: function title(v) {
        this.setTitle(v);
      }
    };
    this.methods = {
      setTitle: function setTitle(v) {
        _cmlTtApi2.default.setTitle(v);
      }
    };
  }

  _createClass(CPage, [{
    key: 'created',
    value: function created() {
      this.setTitle(this.title);
    }
  }]);

  return CPage;
}();

exports.default = new CPage();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('164', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("40");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Scroller = function () {
  function Scroller() {
    _classCallCheck(this, Scroller);

    this.props = {
      cstyle: {
        type: String,
        default: ''
      },
      bottomOffset: {
        // 距底部/右边多远时（单位px），触发 scrolltolower 事件
        type: Number,
        default: 0
      },
      scrollDirection: {
        // 可选为 horizontal 或者 vertical，默认值为 vertical 。定义滚动的方向。
        type: String,
        default: 'vertical'
      },
      bounce: {
        type: Boolean,
        default: true
      },
      height: {
        type: Number,
        default: 0
      },
      width: {
        type: Number,
        default: 0
      },
      scrollTop: {
        type: Number,
        default: 0
      },
      scrollLeft: {
        type: Number,
        default: 0
      }
    };
    this.data = {
      cmtStyle: ''
    };
    this.computed = {
      wrapperStyle: function wrapperStyle() {
        if (this.scrollDirection === 'vertical') {
          if (this.height >= 0) {
            return this.cstyle + ';height:' + this.height + 'rpx;';
          }
        } else {
          if (this.width >= 0) {
            return this.cstyle + ';width:' + this.width + 'rpx;white-space:nowrap;';
          }
        } // 没有传递的情况


        return this.cmtStyle + this.cstyle;
      },
      scrollTopPx: function scrollTopPx() {
        // scroll-top仅支持px
        return _cmlTtApi2.default.cpx2px(this.scrollTop);
      },
      scrollLeftPx: function scrollLeftPx() {
        return _cmlTtApi2.default.cpx2px(this.scrollLeft);
      }
    };
    this.methods = {
      onScroll: function onScroll(e) {
        var detail = e.detail;
        detail.deltaX = detail.deltaX || 0;
        detail.deltaY = detail.deltaY || 0;
        Object.keys(detail).forEach(function (key) {
          detail[key] = _cmlTtApi2.default.px2cpx(detail[key]);
        });
        this.$cmlEmit('onscroll', detail);
        this.$cmlEmit('customscroll', detail);
      },
      onBottom: function onBottom(e) {
        this.$cmlEmit('scrolltobottom', e.detail);
      }
    };
  }

  _createClass(Scroller, [{
    key: 'mounted',
    value: function mounted() {
      var _this = this;

      setTimeout(_asyncToGenerator(
      /*#__PURE__*/
      _regenerator2.default.mark(function _callee() {
        var rectData, windowRect, height, width;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.scrollDirection === 'vertical' && !_this.height)) {
                  _context.next = 3;
                  break;
                }

                console.error('纵向滚动必须传递高度属性111');
                return _context.abrupt('return');

              case 3:
                if (!(_this.scrollDirection !== 'vertical' && !_this.width)) {
                  _context.next = 6;
                  break;
                }

                console.error('横向滚动必须传递宽度属性');
                return _context.abrupt('return');

              case 6:
                if (!(_this.height === -1 || _this.width === -1)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 9;
                return _cmlTtApi2.default.getRect('c-scroller', _this);

              case 9:
                rectData = _context.sent;
                _context.next = 12;
                return _cmlTtApi2.default.getSystemInfo();

              case 12:
                windowRect = _context.sent;

                if (_this.scrollDirection === 'vertical') {
                  height = windowRect.viewportHeight - rectData.top;
                  _this.cmtStyle = 'height:' + height + 'cpx;';
                } else {
                  width = windowRect.viewportWidth - rectData.left;
                  _this.cmtStyle = 'width:' + width + 'cpx;white-space:nowrap;';
                }

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      })), 200);
    }
  }]);

  return Scroller;
}();

exports.default = new Scroller();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('40', function(require, exports, module) {
  module.exports = require("165");
})
cmldefine('165', function(require, exports, module) {
  /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this;
}() || Function("return this")(); // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.


var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
module.exports = require("166");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}
})
cmldefine('166', function(require, exports, module) {
  /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());
})
cmldefine('171', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _routerConfig = require("41");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var routes = _routerConfig2.default.routes;
var routeObj = {};
routes.forEach(function (route) {
  routeObj[route['name']] = route;
});

var Home = function () {
  function Home() {
    _classCallCheck(this, Home);

    this.data = {
      iconApiUri: require("24"),
      cells: [{
        title: '基础内容',
        iconUri: require("42"),
        list: [{
          method: '',
          url: routeObj["text"].path,
          title: routeObj["text"].name
        }, {
          method: '',
          url: routeObj["view"].path,
          title: routeObj["view"].name
        }]
      }, {
        title: '视图容器',
        iconUri: require("43"),
        list: [{
          method: '',
          url: routeObj["list"].path,
          title: routeObj["list"].name
        }, {
          method: '',
          url: routeObj["scroller"].path,
          title: routeObj["scroller"].name
        }, {
          method: '',
          url: routeObj["carousel"].path,
          title: routeObj["carousel"].name
        }, {
          method: '',
          url: routeObj["refresh-view"].path,
          title: routeObj["refresh-view"].name
        }]
      }, {
        title: '布局容器',
        iconUri: require("43"),
        list: [{
          method: '',
          url: routeObj["row"].path,
          title: routeObj["row"].name
        }, {
          method: '',
          url: routeObj["layout"].path,
          title: routeObj["layout"].name
        }]
      }, {
        title: '表单组件',
        iconUri: require("172"),
        list: [{
          method: '',
          url: routeObj["button"].path,
          title: routeObj["button"].name
        }, {
          method: '',
          url: routeObj["input"].path,
          title: routeObj["input"].name
        }, {
          method: '',
          url: routeObj["textarea"].path,
          title: routeObj["textarea"].name
        }, {
          method: '',
          url: routeObj["switch"].path,
          title: routeObj["switch"].name
        }, {
          method: '',
          url: routeObj["radio"].path,
          title: routeObj["radio"].name
        }, {
          method: '',
          url: routeObj["checkbox"].path,
          title: routeObj["checkbox"].name
        }]
      }, {
        title: '媒体组件',
        iconUri: require("44"),
        list: [{
          method: '',
          url: routeObj["image"].path,
          title: routeObj["image"].name
        }, {
          method: '',
          url: routeObj["video"].path,
          title: routeObj["video"].name
        }]
      }, {
        title: '扩展组件',
        iconUri: require("44"),
        list: [{
          method: '',
          url: routeObj["c-dialog"].path,
          title: routeObj["c-dialog"].name
        }, {
          method: '',
          url: routeObj["c-loading"].path,
          title: routeObj["c-loading"].name
        }, {
          method: '',
          url: routeObj["c-toast"].path,
          title: routeObj["c-toast"].name
        }, {
          method: '',
          url: routeObj["c-tip"].path,
          title: routeObj["c-tip"].name
        }, {
          method: '',
          url: routeObj["c-popup"].path,
          title: routeObj["c-popup"].name
        }, {
          method: '',
          url: routeObj["c-actionsheet"].path,
          title: routeObj["c-actionsheet"].name
        }, {
          method: '',
          url: routeObj["c-picker"].path,
          title: routeObj["c-picker"].name
        }, {
          method: '',
          url: routeObj["c-tab"].path,
          title: routeObj["c-tab"].name
        }, // {
        //   method: '',
        //   url: routeObj["c-refresh"].path,
        //   title: routeObj["c-refresh"].name
        // },
        {
          method: '',
          url: routeObj["c-checkbox-group"].path,
          title: routeObj["c-checkbox-group"].name
        }, {
          method: '',
          url: routeObj["c-radio-group"].path,
          title: routeObj["c-radio-group"].name
        }]
      }]
    };
    this.methods = {
      cellItemSeleted: function cellItemSeleted(e) {
        var _e$detail = e.detail,
            method = _e$detail.method,
            extraData = _e$detail.extraData,
            url = _e$detail.url;

        if (url) {
          _cmlTtApi2.default.navigateTo({
            path: url
          });
        } else {
          this[method] && this[method](extraData);
        }
      }
    };
  }

  _createClass(Home, [{
    key: 'created',
    value: function created() {}
  }]);

  return Home;
}();

exports.default = new Home();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('41', function(require, exports, module) {
  module.exports = module.exports = {"mode":"hash","domain":"https://cmljs.org","routes":[{"url":"/","path":"/pages/index/index","name":"首页","mock":"index.php"},{"name":"com","url":"/pages/com/com","path":"/pages/com/com","mock":"index.php"},{"name":"api","url":"/pages/api/api","path":"/pages/api/api","mock":"index.php"},{"name":"demo","url":"/pages/demo/demo","path":"/pages/demo/demo","mock":"index.php"},{"name":"chooseImage","url":"/pages/api/sub-pages/chooseImage","path":"/pages/api/sub-pages/chooseImage","mock":"index.php"},{"name":"animation","url":"/pages/api/sub-pages/animation","path":"/pages/api/sub-pages/animation","mock":"index.php"},{"name":"request","url":"/pages/api/sub-pages/request","path":"/pages/api/sub-pages/request","mock":"index.php"},{"name":"webSocket","url":"/pages/api/sub-pages/webSocket","path":"/pages/api/sub-pages/webSocket","mock":"index.php"},{"name":"navigate","url":"/pages/api/sub-pages/navigate","path":"/pages/api/sub-pages/navigate","mock":"index.php"},{"name":"list","url":"/pages/com/base/list/list","path":"/pages/com/base/list/list","mock":"index.php"},{"name":"scroller","url":"/pages/com/base/scroller/scroller","path":"/pages/com/base/scroller/scroller","mock":"index.php"},{"name":"view","url":"/pages/com/base/view/view","path":"/pages/com/base/view/view","mock":"index.php"},{"name":"text","url":"/pages/com/base/text/text","path":"/pages/com/base/text/text","mock":"index.php"},{"name":"button","url":"/pages/com/base/button/button","path":"/pages/com/base/button/button","mock":"index.php"},{"name":"input","url":"/pages/com/base/input/input","path":"/pages/com/base/input/input","mock":"index.php"},{"name":"textarea","url":"/pages/com/base/textarea/textarea","path":"/pages/com/base/textarea/textarea","mock":"index.php"},{"name":"image","url":"/pages/com/base/image/image","path":"/pages/com/base/image/image","mock":"index.php"},{"name":"video","url":"/pages/com/base/video/video","path":"/pages/com/base/video/video","mock":"index.php"},{"name":"richtext","url":"/pages/com/base/richtext/richtext","path":"/pages/com/base/richtext/richtext"},{"name":"switch","url":"/pages/com/base/switch/switch","path":"/pages/com/base/switch/switch"},{"name":"radio","url":"/pages/com/base/radio/radio","path":"/pages/com/base/radio/radio"},{"name":"checkbox","url":"/pages/com/base/checkbox/checkbox","path":"/pages/com/base/checkbox/checkbox"},{"name":"carousel","url":"/pages/com/base/carousel/carousel","path":"/pages/com/base/carousel/carousel"},{"name":"row","url":"/pages/com/base/row/row","path":"/pages/com/base/row/row","mock":"index.php"},{"name":"layout","url":"/pages/com/base/layout/layout","path":"/pages/com/base/layout/layout","mock":"index.php"},{"name":"refresh-view","url":"/pages/com/base/refresh_view/refresh_view","path":"/pages/com/base/refresh_view/refresh_view","mock":"index.php"},{"name":"c-dialog","url":"/pages/com/spread/c-dialog/c-dialog","path":"/pages/com/spread/c-dialog/c-dialog","mock":"index.php"},{"name":"c-loading","url":"/pages/com/spread/c-loading/c-loading","path":"/pages/com/spread/c-loading/c-loading","mock":"index.php"},{"name":"c-toast","url":"/pages/com/spread/c-toast/c-toast","path":"/pages/com/spread/c-toast/c-toast","mock":"index.php"},{"name":"c-tip","url":"/pages/com/spread/c-tip/c-tip","path":"/pages/com/spread/c-tip/c-tip","mock":"index.php"},{"name":"c-popup","url":"/pages/com/spread/c-popup/c-popup","path":"/pages/com/spread/c-popup/c-popup","mock":"index.php"},{"name":"c-actionsheet","url":"/pages/com/spread/c-actionsheet/c-actionsheet","path":"/pages/com/spread/c-actionsheet/c-actionsheet","mock":"index.php"},{"name":"c-picker","url":"/pages/com/spread/c-picker/c-picker","path":"/pages/com/spread/c-picker/c-picker","mock":"index.php"},{"name":"c-tab","url":"/pages/com/spread/c-tab/c-tab","path":"/pages/com/spread/c-tab/c-tab","mock":"index.php"},{"name":"c-refresh","url":"/pages/com/spread/c-refresh/c-refresh","path":"/pages/com/spread/c-refresh/c-refresh","mock":"index.php"},{"name":"c-checkbox-group","url":"/pages/com/spread/c-checkbox-group/c-checkbox-group","path":"/pages/com/spread/c-checkbox-group/c-checkbox-group","mock":"index.php"},{"name":"c-radio-group","url":"/pages/com/spread/c-radio-group/c-radio-group","path":"/pages/com/spread/c-radio-group/c-radio-group","mock":"index.php"},{"url":"/cml/demo/yanxuan","path":"/pages/demo/yanxuan/pages/index/index","name":"yanxuan","mock":"index.php"},{"url":"/cml/demo/yanxuan/list","path":"/pages/demo/yanxuan/pages/list/list","name":"yanxuan_list","mock":"index.php"},{"url":"/cml/demo/yanxuan/detail","path":"/pages/demo/yanxuan/pages/detail/detail","name":"yanxuan_detail","mock":"index.php"},{"url":"/cml/demo/yanxuan/map","path":"/pages/demo/yanxuan/pages/map/map","name":"yanxuan_map","mock":"index.php"}]}
})
cmldefine('24', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/icon-api_e8d66df.png";
})
cmldefine('42', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/content_615612b.png";
})
cmldefine('43', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/view_b6fa835.png";
})
cmldefine('172', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/form_1d8d4bd.png";
})
cmldefine('44', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/media_1c79816.png";
})
cmldefine('176', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var collapseAnimation = _cmlTtApi2.default.createAnimation();

var CompCollapse = function CompCollapse() {
  _classCallCheck(this, CompCollapse);

  this.props = {
    title: {
      type: String,
      default: ''
    },
    iconUri: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: []
    }
  };
  this.data = {
    isOpen: false,
    iconUpUri: require("46"),
    iconDownUri: require("177"),
    iconRightUri: require("178"),
    listHeight: 0
  };
  this.methods = {
    toggle: function toggle(e) {
      this.isOpen = !this.isOpen;
      this.listHeight = this.isOpen ? this.list.length * 121 : 0;
    },
    onItemSelected: function onItemSelected(index, info) {
      this.$cmlEmit('itemselected', {
        url: info.url,
        method: info.method,
        extraData: this.list[index].extraData
      });
    }
  };
};

exports.default = new CompCollapse();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('46', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/icon-arrow-up_56472bc.png";
})
cmldefine('177', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/icon-arrow-down_b02079e.png";
})
cmldefine('178', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/icon-solid-arrow-right_5e159e1.png";
})
cmldefine('182', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CRow = function CRow() {
  _classCallCheck(this, CRow);

  this.props = {
    // start/end/center/space-around/space-between
    justify: {
      type: String,
      default: 'center'
    },
    // top/middle/bottom
    align: {
      type: String,
      default: 'middle'
    },
    height: {
      type: Number,
      default: 0
    },
    wrap: {
      type: Boolean,
      default: false
    },
    margin: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    rowClass: function rowClass() {
      return 'flex-row-' + this.justify + '-' + this.align;
    },
    rowStyle: function rowStyle() {
      var style = '';

      if (this.height) {
        style += 'height:' + this.height + 'cpx;';
      }

      if (this.wrap) {
        style += 'flex-wrap:wrap;';
      }

      if (this.margin) {
        style += 'margin:' + this.margin / 2 + 'cpx 0;';
      }

      return style;
    }
  };
};

exports.default = new CRow();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('187', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}(); // import bridge from 'chameleon-bridge';


var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _unsupported = require("188");

var _unsupported2 = _interopRequireDefault(_unsupported);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Home = function () {
  function Home() {
    _classCallCheck(this, Home);

    this.data = {
      iconApiUri: require("24"),
      cells: [{
        title: '启动参数',
        iconUri: require("6"),
        list: [{
          method: 'getLaunchOptionsSync',
          url: '',
          title: '获取启动参数'
        }]
      }, {
        title: 'CanIUse',
        iconUri: require("6"),
        list: [{
          method: 'canIUse',
          url: '',
          title: 'CanIUse:showToast',
          extraData: {
            apiName: 'showToast'
          }
        }, {
          method: 'canIUse',
          url: '',
          title: 'CanIUse:showAnyToast',
          extraData: {
            apiName: 'showAnyToast'
          }
        }]
      }, {
        title: '设置页面标题',
        iconUri: require("6"),
        list: [{
          title: '设置标题为: 自定义标题',
          method: 'setTitle',
          extraData: {
            title: '自定义标题'
          }
        }]
      }, {
        title: '交互反馈',
        iconUri: require("6"),
        list: [{
          title: 'toast 弹框',
          method: 'showUx',
          extraData: {
            uX: 'showToast',
            message: 'toast 弹框'
          }
        }, {
          title: 'alert 弹框',
          method: 'showUx',
          extraData: {
            uX: 'alert',
            message: 'alert 弹框'
          }
        }, {
          title: 'confirm 弹框',
          method: 'showUx',
          extraData: {
            uX: 'confirm',
            message: 'confirm 弹框'
          }
        }]
      }, {
        title: '选取照片',
        iconUri: require("6"),
        list: [{
          title: '从相机获取',
          method: 'chooseImage',
          extraData: {
            type: 'camera'
          }
        }, {
          title: '从相册获取',
          method: 'chooseImage',
          extraData: {
            type: 'album'
          }
        }, {
          title: '菜单选择',
          method: 'chooseImage',
          extraData: {
            type: 'choice'
          }
        }]
      }, {
        title: '路由导航',
        iconUri: require("6"),
        list: [{
          title: 'cml.navigateTo',
          method: 'navigateTo'
        }, {
          title: 'cml.redirectTo',
          method: 'redirectTo'
        }]
      }, {
        title: '网络请求',
        iconUri: require("6"),
        list: [{
          title: 'cml.get 请求',
          method: 'request',
          extraData: {
            method: 'get'
          }
        }, {
          title: 'cml.post 请求',
          method: 'request',
          extraData: {
            method: 'post'
          }
        }, {
          title: 'cml.request 发起 put 请求',
          method: 'request',
          extraData: {
            method: 'request'
          }
        }]
      }, {
        title: 'WebSocket',
        iconUri: require("6"),
        list: [{
          title: '查看 WebSocket 展示',
          method: 'webSocket'
        }]
      }, {
        title: '数据存储',
        iconUri: require("6"),
        list: [{
          title: '存储 name: "ironman"',
          method: 'storage',
          extraData: {
            action: 'set'
          }
        }, {
          title: '获取 name 值',
          method: 'storage',
          extraData: {
            action: 'get'
          }
        }, {
          title: '删除 name 值',
          method: 'storage',
          extraData: {
            action: 'remove'
          }
        }]
      }, {
        title: '地理位置',
        iconUri: require("6"),
        list: [{
          title: '获取地理位置',
          method: 'getGeo'
        }]
      }, {
        title: '系统信息',
        iconUri: require("6"),
        list: [{
          title: '获取系统信息',
          method: 'getSystemInfo'
        }]
      }, {
        title: '单位转换',
        iconUri: require("6"),
        list: [{
          title: 'px 转 cpx',
          method: 'px2cpx'
        }, {
          title: 'cpx 转 px',
          method: 'cpx2px'
        }]
      }, {
        title: '剪贴板',
        iconUri: require("6"),
        list: [{
          title: '设置剪贴板为 AA',
          method: 'clipBoard',
          extraData: {
            action: 'set',
            text: 'AA'
          }
        }, {
          title: '获取剪贴内容',
          method: 'clipBoard',
          extraData: {
            action: 'get'
          }
        }]
      }, {
        title: '元素属性',
        iconUri: require("6"),
        list: [{
          title: '获取页面顶部API文本的属性',
          method: 'getRect'
        }]
      }, {
        title: '动画',
        iconUri: require("6"),
        list: [{
          title: '查看动画展示',
          method: 'goAnimation'
        }]
      }]
    };
    this.methods = {
      cellItemSeleted: function cellItemSeleted(e) {
        var _e$detail = e.detail,
            method = _e$detail.method,
            extraData = _e$detail.extraData;
        this[method] && this[method](extraData);
      },
      getLaunchOptionsSync: function getLaunchOptionsSync() {
        var options = _cmlTtApi2.default.getLaunchOptionsSync();

        _cmlTtApi2.default.showToast({
          message: JSON.stringify(options)
        });
      },
      openNewBeatlesPage: function openNewBeatlesPage() {// bridge.callNative('beatlesCommunicate', 'openNativeWebPage', {
        //   close_web: false,
        //   url: 'https://cmljs.org'
        // })
      },
      callNativeLogin: function callNativeLogin() {// bridge.callNative('beatlesCommunicate', 'callNativeLogin', {}, res => {
        //   cml.showToast({
        //     message: '返回登录结果: ' + JSON.stringify(res)
        //   })
        // })
      },
      onLoginChange: function onLoginChange() {// bridge.listenNative('beatlesCommunicate', 'onLoginChange', res => {
        //   cml.showToast({
        //     message: '登录状态发生变化: ' + JSON.stringify(res)
        //   })
        // })
        // cml.showToast({
        //   message: '注册登录状态变化事件成功'
        // })
      },
      canIUse: function canIUse(_ref) {
        var _ref$apiName = _ref.apiName,
            apiName = _ref$apiName === undefined ? '' : _ref$apiName;

        _cmlTtApi2.default.canIUse(apiName).then(function (res) {
          _cmlTtApi2.default.showToast({
            message: ['当前版本支持', apiName].join(" ")
          });
        }, function (err) {
          _cmlTtApi2.default.showToast({
            message: ['当前版本不支持', apiName].join(" ")
          });
        });
      },
      setTitle: function setTitle(_ref2) {
        var _ref2$title = _ref2.title,
            title = _ref2$title === undefined ? '' : _ref2$title;

        _cmlTtApi2.default.setTitle(title);
      },
      showUx: function showUx(_ref3) {
        var _ref3$uX = _ref3.uX,
            uX = _ref3$uX === undefined ? '' : _ref3$uX,
            _ref3$message = _ref3.message,
            message = _ref3$message === undefined ? '' : _ref3$message;
        uX === 'showToast' && _cmlTtApi2.default.showToast({
          message: message
        });
        uX === 'alert' && _cmlTtApi2.default.alert({
          message: message,
          confirmTitle: '好的'
        });
        uX === 'confirm' && _cmlTtApi2.default.confirm({
          message: message
        });
      },
      chooseImage: function chooseImage(_ref4) {
        var _ref4$type = _ref4.type,
            type = _ref4$type === undefined ? '' : _ref4$type;

        _cmlTtApi2.default.navigateTo({
          path: '/pages/api/sub-pages/chooseImage',
          query: {
            type: type
          }
        });
      },
      getGeo: function getGeo() {
        _cmlTtApi2.default.getLocationInfo().then(function (res) {
          _cmlTtApi2.default.showToast({
            message: JSON.stringify(res)
          });
        }).catch(function (err) {
          _cmlTtApi2.default.showToast({
            message: err.message
          });
        });
      },
      getSystemInfo: function getSystemInfo() {
        _cmlTtApi2.default.getSystemInfo().then(function (res) {
          _cmlTtApi2.default.showToast({
            message: JSON.stringify(res),
            duration: 2000
          });
        });
      },
      px2cpx: function px2cpx() {
        _cmlTtApi2.default.showToast({
          message: ['1px 合 ', _cmlTtApi2.default.px2cpx(1), 'cpx'].join("")
        });
      },
      cpx2px: function cpx2px() {
        _cmlTtApi2.default.showToast({
          message: ['1cpx 合 ', _cmlTtApi2.default.cpx2px(1), 'px'].join("")
        });
      },
      clipBoard: function clipBoard(_ref5) {
        var _ref5$action = _ref5.action,
            action = _ref5$action === undefined ? '' : _ref5$action,
            _ref5$text = _ref5.text,
            text = _ref5$text === undefined ? '' : _ref5$text;

        if (action === 'get') {
          _cmlTtApi2.default.getClipBoardData().then(function (res) {
            _cmlTtApi2.default.showToast({
              message: JSON.stringify(res)
            });
          });
        } else {
          _cmlTtApi2.default.setClipBoardData('AA').then(function (res) {
            _cmlTtApi2.default.showToast({
              message: '剪贴板内容已设置为:AA'
            });
          });
        }
      },
      storage: function storage(_ref6) {
        var _ref6$action = _ref6.action,
            action = _ref6$action === undefined ? '' : _ref6$action;
        action === 'set' && _cmlTtApi2.default.setStorage('name', 'ironman').then(function (res) {
          _cmlTtApi2.default.showToast({
            message: 'name 已设置为 ironman'
          });
        });
        action === 'get' && _cmlTtApi2.default.getStorage('name').then(function (res) {
          _cmlTtApi2.default.showToast({
            message: res
          });
        }, function (err) {
          _cmlTtApi2.default.showToast({
            message: err.message || 'name 值已不存在'
          });
        });
        action === 'remove' && _cmlTtApi2.default.removeStorage('name').then(function (res) {
          _cmlTtApi2.default.showToast({
            message: 'name 值已删除'
          });
        });
      },
      getRect: function getRect() {
        _cmlTtApi2.default.getRect('titleText', this).then(function (res) {
          _cmlTtApi2.default.showToast({
            message: JSON.stringify(res)
          });
        });
      },
      goAnimation: function goAnimation() {
        _cmlTtApi2.default.navigateTo({
          path: '/pages/api/sub-pages/animation'
        });
      },
      request: function request(_ref7) {
        var _ref7$method = _ref7.method,
            method = _ref7$method === undefined ? '' : _ref7$method;

        _cmlTtApi2.default.navigateTo({
          path: '/pages/api/sub-pages/request',
          query: {
            method: method
          }
        });
      },
      webSocket: function webSocket() {
        _cmlTtApi2.default.navigateTo({
          path: '/pages/api/sub-pages/webSocket'
        });
      },
      navigateTo: function navigateTo() {
        _cmlTtApi2.default.navigateTo({
          path: '/pages/api/sub-pages/navigate',
          query: {
            method: 'navigateTo'
          }
        });
      },
      redirectTo: function redirectTo() {
        _cmlTtApi2.default.redirectTo({
          path: '/pages/api/sub-pages/navigate',
          query: {
            method: 'redirectTo'
          }
        });
      }
    };
  }

  _createClass(Home, [{
    key: 'created',
    value: function created() {
      var unsupportedApis = _unsupported2.default.getUnsupportApis();

      this.cells = this.cells.filter(function (cell) {
        return !~unsupportedApis.indexOf(cell.title);
      });
    }
  }]);

  return Home;
}();

exports.default = new Home();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('188', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getUnsupportApis',
    value: function getUnsupportApis() {
      // 线上版微信小程序未配置demo请求的域名为可信域名，发版时去掉'网络请求'
      // return ['网络请求', 'WebSocket'];
      return [];
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('6', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/icon-default_aeb0517.png";
})
cmldefine('193', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _routerConfig = require("41");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var routes = _routerConfig2.default.routes;
var routeObj = {};
routes.forEach(function (route) {
  routeObj[route['name']] = route;
});

var Demo = function () {
  function Demo() {
    _classCallCheck(this, Demo);

    this.data = {
      iconApiUri: require("24"),
      lists: [{
        title: '网易严选',
        iconUri: require("42"),
        path: routeObj['yanxuan'].path
      }]
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      itemTap: function itemTap(e) {
        _cmlTtApi2.default.navigateTo({
          path: e.detail.path
        });
      }
    };
  }

  _createClass(Demo, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return Demo;
}();

exports.default = new Demo();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('198', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var DemoList = function DemoList() {
  _classCallCheck(this, DemoList);

  this.props = {
    title: {
      type: String,
      default: ''
    },
    iconUri: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  };
  this.data = {
    isOpen: false,
    iconUpUri: require("46"),
    listHeight: 0
  };
  this.methods = {
    itemTap: function itemTap() {
      this.$cmlEmit('itemtap', {
        path: this.path
      });
    }
  };
};

exports.default = new DemoList();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('203', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var chooseType = 'camera';
exports.default = {
  data: {
    chooseType: 'camera',
    title: 'cml.chooseImage',
    subtitle: '选择图片',
    imgSrc: '',
    cell: {
      title: '选择图片',
      list: [{
        title: '相册',
        btnText: '点击选择'
      }]
    },
    map: {
      'camera': '从相机直接拍摄',
      'album': '从相册获取',
      'choice': '菜单选项获取'
    }
  },
  methods: {
    onBtnClicked: function onBtnClicked(e) {
      var _this = this;

      _cmlTtApi2.default.chooseImage({
        type: this.chooseType,
        quality: '100'
      }).then(function (res) {
        _this.imgSrc = res.base64 || res.tempFilePaths[0];
      });
    }
  },
  beforeCreate: function beforeCreate(res) {
    chooseType = res.type;
  },
  created: function created() {
    this.chooseType = chooseType;
    this.cell.list[0].title = this.map[this.chooseType];
  }
};
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('207', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
};
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('211', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = {
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: []
    }
  },
  methods: {
    onBtnClick: function onBtnClick(e) {
      // let index = e.currentTarget.dataset.index;
      var index = e;
      this.$cmlEmit('btnclicked', {
        extraData: this.list[index].extraData || {}
      });
    }
  }
};
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('215', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require("216");

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Button = function Button() {
  _classCallCheck(this, Button);

  this.props = {
    text: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "stretch"
    },
    width: {
      type: Number,
      default: -1
    },
    type: {
      type: String,
      default: "blue"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: String,
      default: ""
    },
    textStyle: {
      type: String,
      default: ""
    },
    textStyleDisabled: {
      type: String,
      default: ""
    },
    disabledStyle: {
      type: String,
      default: ""
    },
    btnHoverStyle: {
      type: String,
      default: ''
    },
    textHoverStyle: {
      type: String,
      default: ''
    },
    openType: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    },
    sessionFrom: {
      type: String,
      default: ""
    },
    sendMessageTitle: {
      type: String,
      default: "当前标题"
    },
    sendMessagePath: {
      type: String,
      default: "当前分享路径"
    },
    sendMessageImg: {
      type: String,
      default: "截图"
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    appParameter: {
      type: String,
      default: ""
    }
  };
  this.data = {
    hover: false
  };
  this.computed = {
    hasWidth: function hasWidth() {
      return this.width !== -1;
    },
    btnClasses: function btnClasses() {
      return (0, _util.transCls)('cml-view cml-btn', this);
    },
    textClasses: function textClasses() {
      return (0, _util.transCls)('btn-text', this);
    },
    mrBtnStyle: function mrBtnStyle() {
      var disabled = this.disabled,
          btnStyle = this.btnStyle,
          disabledStyle = this.disabledStyle,
          hover = this.hover,
          btnHoverStyle = this.btnHoverStyle,
          hasWidth = this.hasWidth,
          width = this.width;
      var style = disabled ? btnStyle + ";" + disabledStyle : hover ? btnStyle + ";" + btnHoverStyle : btnStyle;

      if (hasWidth) {
        style = "width:" + width + "cpx;" + style;
      }

      return style;
    },
    mrTextStyle: function mrTextStyle() {
      var disabled = this.disabled,
          textStyle = this.textStyle,
          textStyleDisabled = this.textStyleDisabled,
          hover = this.hover,
          textHoverStyle = this.textHoverStyle;
      return disabled ? textStyle + ";" + textStyleDisabled : hover ? textStyle + ";" + textHoverStyle : textStyle;
    }
  };
  this.methods = {
    onclick: function onclick(e) {
      var type = this.type,
          disabled = this.disabled;
      if (disabled) return;
      this.$cmlEmit('onclick', {
        type: type,
        disabled: disabled
      });
    },
    touchstart: function touchstart(e) {
      this.hover = true;
    },
    touchend: function touchend(e) {
      this.hover = false;
    },
    getuserinfo: function getuserinfo(e) {
      this.$cmlEmit('getuserinfo', e.detail);
    },
    contact: function contact(e) {
      this.$cmlEmit('contact');
    },
    getphonenumber: function getphonenumber(e) {
      this.$cmlEmit('getphonenumber', {
        errMsg: e.detail.errMsg,
        encryptedData: e.detail.encryptedData || '',
        //包括敏感数据在内的完整用户信息的加密数据
        iv: e.detail.iv || '' //加密算法的初始向量

      });
    },
    error: function error(e) {
      this.$cmlEmit('error', {
        errMsg: e.detail.errMsg
      });
    },
    opensetting: function opensetting(e) {
      this.$cmlEmit('opensetting');
    }
  };
};

exports.default = new Button();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('216', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transCls = transCls;

function transCls(base, ctx) {
  var type = ctx.type,
      disabled = ctx.disabled,
      size = ctx.size,
      hover = ctx.hover,
      hasWidth = ctx.hasWidth;
  var classList = [base];

  if (hover) {
    classList.push(base + '-active');
  }

  if (!!~'red|orange|white|green'.indexOf(type)) {
    classList.push(base + '-' + type);

    if (hover) {
      classList.push(base + '-' + type + '-active');
    }

    if (disabled) {
      classList.push(base + '-' + type + '-disable');
    }
  }

  if (!!~'full|big|medium|small|stretch|auto'.indexOf(size) && !hasWidth) {
    classList.push(base + '-' + size);
  }

  if (disabled) {
    classList.push(base + '-disable');
  }

  return classList.join(' ');
}
})
cmldefine('221', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var animation = _cmlTtApi2.default.createAnimation();

var textAnimation = _cmlTtApi2.default.createAnimation();

var Animation = function Animation() {
  _classCallCheck(this, Animation);

  this.data = {
    animationData: animation,
    animationTextData: textAnimation,
    current_rotate: 0,
    current_scale: 1,
    current_translate: 50,
    current_transform: [45, 1],
    current_color: '#F0AD4E',
    current_opacity: 1,
    current_width: 250,
    current_height: 250
  };
  this.methods = {
    rotate: function rotate() {
      var animationCreation = animation;
      this.current_rotate += 20;
      animationCreation = animationCreation.rotate(this.current_rotate).step({
        duration: 500,
        timingFunction: 'ease-in-out',
        delay: 0
      });
      this.animationData = animationCreation.export();
    },
    scale: function scale() {
      this.current_scale = this.current_scale === 2 ? 1 : 2;
      this.animationData = animation.scale(this.current_scale).step({
        duration: 500,
        timingFunction: 'linear',
        delay: 0
      }).export();
    },
    translate: function translate() {
      this.current_translate = this.current_translate === 50 ? -50 : 50;
      this.animationData = animation.translate(this.current_translate, this.current_translate).step({
        duration: 500,
        timingFunction: 'ease-in',
        delay: 0
      }).export();
    },
    transform: function transform() {
      this.current_transform = this.current_transform[0] === 0 ? [45, 1.2] : [0, 1];
      this.animationData = animation.rotate(this.current_transform[0]).scale(this.current_transform[1]).step({
        duration: 500,
        timingFunction: 'ease-out',
        delay: 0
      }).rotate("-90deg").scale(1.2).step({
        duration: 3000,
        timingFunction: 'ease-out',
        delay: 0
      }).export();
    },
    backgroundColor: function backgroundColor() {
      this.current_color = this.current_color === '#F0AD4E' ? '#D9534F' : '#F0AD4E';
      this.animationData = animation.backgroundColor(this.current_color).step({
        duration: 500,
        timingFunction: 'linear',
        delay: 0
      }).export();
    },
    opacity: function opacity() {
      this.current_opacity = this.current_opacity === 1 ? 0.1 : 1;
      this.animationData = animation.opacity(this.current_opacity).step({
        duration: 500,
        timingFunction: 'linear',
        delay: 0
      }).export();
    },
    width: function width() {
      this.current_width = this.current_width === 250 ? 125 : 250;
      this.animationData = animation.width(this.current_width).step({
        timingFunction: 'linear',
        delay: 0,
        duration: 500
      }).export();
    },
    height: function height() {
      this.current_height = this.current_height === 250 ? 125 : 250;
      this.animationData = animation.height(this.current_height).step({
        duration: 500,
        timingFunction: 'linear',
        delay: 0
      }).export();
    },
    composite: function composite() {
      this.current_transform = this.current_transform[0] === 0 ? [45, 1.5] : [0, 1];
      this.current_color = this.current_color === '#F0AD4E' ? '#D9534F' : '#F0AD4E';
      this.current_opacity = this.current_opacity === 1 ? 0.1 : 1;
      this.current_translate = this.current_translate === 50 ? -50 : 50;
      this.current_width = this.current_width === 250 ? 125 : 250;
      this.current_height = this.current_height === 250 ? 125 : 250;
      this.animationData = animation.width(this.current_width).height(this.current_height).rotate(this.current_transform[0]).scale(this.current_transform[1]).opacity(this.current_opacity).backgroundColor(this.current_color).translate(this.current_translate, this.current_translate).step({
        duration: 1000,
        timingFunction: 'ease-out',
        delay: 0
      }).export();
    }
  };
};

exports.default = new Animation();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('226', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = {
  data: {
    title: '',
    subtitle: '网络请求',
    respones: [],
    cell: {
      title: '网络请求',
      list: [{
        title: '',
        btnText: '点击发起'
      }]
    },
    map: {
      get: '以 cml.get 发起请求',
      post: '以 cml.post 发起请求',
      request: '以 cml.request 发起 put 请求'
    },
    isShowLoading: false
  },
  beforeCreate: function beforeCreate(res) {
    this.method = res.method;
    this.title = ['cml', this.method].join(".");
  },
  created: function created() {
    this.cell.list[0].title = this.map[this.method];
  },
  methods: {
    onBtnClicked: function onBtnClicked(e) {
      var _this = this;

      var method = this.method;
      this.showLoading();
      method === 'get' && _cmlTtApi2.default.get({
        url: 'https://m.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=wise&from=wise_web&sugsid=126120,100806,133335,131887,133676,120188,132909,133045,131247,132440,130762,132378,131518,118879,118866,118847,118828,118800,107318,133158,132782,133351,132553,129655,134433,132250,128968,133472,133838,133847,132551,134463,134320,134656,134213,129643,131423,133781,133009,133191,134049,134722,110085,134525,134153,127969,131296,127417,134151,133573,134351&net=&os=1&sp=null&rm_brand=0&wd=bian%27se%27lon&pwd=bian%27se%27l&lid=7765373915710683512&_=1565093019110'
      }).then(function (res) {
        _this.respones = _this.flatResponses(res);

        _this.hideLoading();
      });
      method === 'post' && _cmlTtApi2.default.post({
        url: 'https://ufosdk.baidu.com',
        data: {
          name: 'cml'
        }
      }).then(function (res) {
        _this.respones = _this.flatResponses(res);

        _this.hideLoading();
      });
      method === 'request' && _cmlTtApi2.default.request({
        url: 'https://ufosdk.baidu.com',
        data: {
          name: 'cml'
        },
        method: 'PUT'
      }).then(function (res) {
        _this.respones = _this.flatResponses(res);

        _this.hideLoading();
      });
    },
    flatResponses: function flatResponses(res) {
      var results = [];

      if (!!res) {
        // Object.keys(res).filter(key => ~['args', 'headers', 'url', 'data'].indexOf(key)).forEach((key) => {
        //   if (typeof res[key] === 'string') {
        //     results.push({
        //       name: key,
        //       value: res[key]
        //     });
        //   }
        //   if (typeof res[key] === 'object') {
        //     results.push({
        //       name: key,
        //       child: Object.entries(res[key]).map((pairs) => pairs.join(":"))
        //     });
        //   }
        // });
        results = JSON.stringify(res, null, 2);
      }

      return results;
    },
    showLoading: function showLoading() {
      this.isShowLoading = true;
    },
    hideLoading: function hideLoading() {
      this.isShowLoading = false;
    }
  }
};
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('230', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cLoadingfunc = require("231");

var _cLoadingfunc2 = _interopRequireDefault(_cLoadingfunc);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CLoading = function () {
  function CLoading() {
    _classCallCheck(this, CLoading);

    this.props = {
      tip: {
        type: String,
        default: "loading..."
      },
      prefixCls: {
        type: String,
        default: "cml-loading"
      },
      loading: {
        type: Boolean,
        default: false
      }
    };
    this.data = {
      icon: require("26"),
      rectStyle: "",
      loadingWrapStyle: "",
      containerStyle: "position: absolute; visibility: hidden",
      //由于获取位置信息在weex端为异步。so先隐藏
      loadingStyle: "visibility: hidden"
    };
    this.watch = {
      loading: function loading(v) {
        var _this = this;

        setTimeout(function () {
          _cLoadingfunc2.default.move(_this); // 解决小程序端loading先出现在顶部问题


          _this.loadingStyle = v ? "visibility: visible" : "visibility: hidden";
        }, _cLoadingfunc2.default.scheduleTime);
      }
    };
    this.computed = {
      containerClassName: function containerClassName() {
        return this.prefixCls + "-container";
      },
      loadImgClassName: function loadImgClassName() {
        return this.prefixCls + "-default";
      },
      boxClassName: function boxClassName() {
        return !!this.loading ? this.prefixCls + "-box" : "";
      },
      targetClassName: function targetClassName() {
        return this.prefixCls + "-target";
      },
      loadTextClassName: function loadTextClassName() {
        return this.prefixCls + "-text";
      },
      targetMaskClassName: function targetMaskClassName() {
        return this.prefixCls + "-target-mask";
      },
      loadingClassName: function loadingClassName() {
        return "" + this.prefixCls;
      },
      loadingWrapClassName: function loadingWrapClassName() {
        return this.prefixCls + "-wrap";
      }
    };
  }

  _createClass(CLoading, [{
    key: "beforeDestory",
    value: function beforeDestory() {
      _cLoadingfunc2.default.isDestory = true;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      setTimeout(function () {
        _cmlTtApi2.default.getRect("mask", _this2).then(function (res) {
          if (res.width > 0 && res.height > 0) {
            _this2.rectStyle = "width:" + res.width + "cpx; height: " + res.height + "cpx;";
            _this2.loadingWrapStyle = _this2.rectStyle;
            _this2.containerStyle = _this2.rectStyle + "; visibility: visible";
          } else {
            _cLoadingfunc2.default.loadingWrapStyle(function (res) {
              _this2.loadingWrapStyle = res;
            });

            _this2.containerStyle = "position: absolute; visibility: visible; top: 0; left: 0";
          }

          if (_this2.loading) {
            // 解决小程序端loading先出现在顶部问题
            setTimeout(function () {
              _this2.loadingStyle = "visibility: visible";
            }, 0);
          }

          _cLoadingfunc2.default.move(_this2);
        });
      }, _cLoadingfunc2.default.scheduleTime);
    }
  }]);

  return CLoading;
}();

exports.default = new CLoading();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('231', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);

    this.scheduleTime = 50;
  }

  _createClass(Method, [{
    key: 'move',
    value: function move(context) {}
  }, {
    key: 'loadingWrapStyle',
    value: function loadingWrapStyle(cb) {
      cb('position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 998;');
    }
  }]);

  return Method;
}();

exports.default = new Method();

var copyProtoProperty = require("3");

copyProtoProperty(exports.default);
})
cmldefine('26', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/loading_1f26c50.gif";
})
cmldefine('236', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

exports.default = {
  data: {
    title: 'cml.initSocket',
    subtitle: '演示 websocket 链接，发送，接收和关闭',
    respones: [],
    isShowLoading: false,
    msgs: {},
    ws: null,
    cell: {
      title: 'WebSocket 演示',
      list: [{
        title: '初始化一个 socket 链接',
        btnText: '点击开启',
        extraData: {
          action: 'open'
        }
      }, {
        title: '发送数据',
        btnText: '点击发送',
        extraData: {
          action: 'send'
        }
      }, {
        title: '关闭 socket 链接',
        btnText: '点击关闭',
        extraData: {
          action: 'close'
        }
      }]
    }
  },
  methods: {
    onBtnClicked: function onBtnClicked(e) {
      var _e$detail$extraData$a = e.detail.extraData.action,
          action = _e$detail$extraData$a === undefined ? 'open' : _e$detail$extraData$a;
      this[action]();
    },
    showLoading: function showLoading() {
      this.isShowLoading = true;
    },
    hideLoading: function hideLoading() {
      this.isShowLoading = false;
    },
    flushMsg: function flushMsg() {
      this.msgs = {};
      this.flatten2Responses();
    },
    flatten2Responses: function flatten2Responses() {
      this.respones = Object.entries(this.msgs).map(function (msg) {
        return {
          name: msg[0],
          value: typeof msg[1] === 'string' ? msg[1] : false,
          child: _typeof(msg[1]) === 'object' ? msg[1] : false
        };
      });
    },
    appendMsg: function appendMsg(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (name in this.msgs) {
        if (typeof this.msgs[name] === 'string') {
          this.msgs[name] = [this.msgs[name]];
        }

        if (typeof value === 'string') {
          this.msgs[name].push(value);
        } else {
          var _msgs$name;

          (_msgs$name = this.msgs[name]).push.apply(_msgs$name, _toConsumableArray(value));
        }
      } else {
        this.msgs[name] = value;
      }

      this.flatten2Responses();
    },
    open: function open() {
      var _this = this;

      var ws = this.ws = _cmlTtApi2.default.initSocket('wss://www.deskry.com:8008/');

      this.showLoading();
      this.flushMsg();
      this.appendMsg('建立链接', 'wss://www.deskry.com:8008/');
      ws.onopen(function () {
        _this.hideLoading();

        _this.appendMsg('建立链接', '链接成功');
      });
      ws.onmessage(function (res) {
        _this.hideLoading();

        _this.appendMsg('接收透传信息', res.data);
      });
      ws.onerror(function (err) {
        _this.hideLoading();

        _this.appendMsg('链接错误', err.message);
      });
      ws.onclose(function () {
        _this.hideLoading();

        _this.appendMsg('链接关闭', '关闭成功');

        _this.ws = null;
      });
    },
    send: function send() {
      if (!this.ws) {
        return this.appendMsg('错误提示', '请先开启 socket 链接');
      }

      this.showLoading();
      this.appendMsg('发送信息', ['一段文本信息: Hi, this is cml', '一个数组: 1,2,3']);
      this.ws.send({
        text: 'Hi, this is cml',
        arr: ['1', '2', '3']
      });
    },
    close: function close() {
      if (!this.ws) {
        return this.appendMsg('错误提示', '请先开启 socket 链接');
      }

      this.ws.close();
    }
  }
};
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('241', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var method = '';
exports.default = {
  data: {
    title: '路由导航展示页',
    subtitle: '',
    cell: {
      title: '路由导航返回演示',
      list: [{
        title: '点击返回上一页',
        btnText: '点击返回'
      }]
    },
    map: {
      navigateTo: '返回上一个开启的页面',
      redirectTo: '上一个开启的页面被关闭，返回上一个页面之前的页面'
    },
    method: ''
  },
  beforeCreate: function beforeCreate(res) {
    this.method = res.method;
  },
  created: function created() {
    this.subtitle = this.map[this.method];
  },
  methods: {
    onBtnClicked: function onBtnClicked() {
      _cmlTtApi2.default.navigateBack(-1);
    }
  }
};
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('246', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var LOADMORE_COUNT = 4;

var List = function () {
  function List() {
    _classCallCheck(this, List);

    this.data = {
      listStyle: "",
      bottomOffset: 20,
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      toElement: 'cell1'
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      onBottom: function onBottom(e) {
        var _this = this;

        _cmlTtApi2.default.showToast({
          message: '加载中...',
          duration: 800
        });

        setTimeout(function () {
          var length = _this.lists.length;

          for (var i = length; i < length + LOADMORE_COUNT; ++i) {
            _this.lists.push(i + 1);
          }
        }, 800);
      },
      onScroll: function onScroll(e) {// alert(scroll);
      }
    };
  }

  _createClass(List, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {
      var self = this; // ;(function polling(ms) {
      //   setTimeout(() => {
      //     self.toElement = 'cell' + Math.ceil(Math.random() * 8)
      //     polling(ms)
      //   }, ms)
      // })(3000)
    }
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return List;
}();

exports.default = new List();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('250', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Header = function () {
  function Header() {
    _classCallCheck(this, Header);

    this.props = {
      title: {
        type: String,
        default: '标题'
      },
      desc: {
        type: String,
        default: ''
      }
    };
    this.data = {};
    this.computed = {};
    this.watch = {};
    this.methods = {};
  }

  _createClass(Header, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return Header;
}();

exports.default = new Header();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('254', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("40");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var List = function () {
  function List() {
    _classCallCheck(this, List);

    this.props = {
      cstyle: {
        type: String,
        default: ''
      },
      bottomOffset: {
        // 距底部/右边多远时（单位px），触发 scrolltolower 事件
        type: Number,
        default: 0
      },
      toElement: {
        type: String,
        default: ''
      },
      bounce: {
        type: Boolean,
        default: true
      },
      height: {
        type: Number,
        default: 0
      }
    };
    this.data = {
      cmtstyle: ''
    };
    this.computed = {
      wrapperStyle: function wrapperStyle() {
        if (this.height >= 0) {
          return this.cstyle + ';height:' + this.height + 'cpx;';
        }

        return this.cmtstyle + this.cstyle;
      }
    };
    this.methods = {
      onScroll: function onScroll(e) {
        var detail = e.detail;
        detail.deltaX = detail.deltaX || 0;
        detail.deltaY = detail.deltaY || 0;
        Object.keys(detail).forEach(function (key) {
          detail[key] = _cmlTtApi2.default.px2cpx(detail[key]);
        });
        this.$cmlEmit('onscroll', detail);
        this.$cmlEmit('customscroll', detail);
      },
      onBottom: function onBottom(e) {
        this.$cmlEmit('scrolltobottom', e.detail);
      }
    };
  }

  _createClass(List, [{
    key: 'mounted',
    value: function mounted() {
      var _this = this;

      setTimeout(_asyncToGenerator(
      /*#__PURE__*/
      _regenerator2.default.mark(function _callee() {
        var rectData, windowRect, height;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.height) {
                  _context.next = 3;
                  break;
                }

                console.error('list组件必须传递高度属性');
                return _context.abrupt('return');

              case 3:
                if (!(_this.height === -1)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 6;
                return _cmlTtApi2.default.getRect('c-list', _this);

              case 6:
                rectData = _context.sent;
                _context.next = 9;
                return _cmlTtApi2.default.getSystemInfo();

              case 9:
                windowRect = _context.sent;
                height = windowRect.viewportHeight - rectData.top;
                _this.cmtstyle = 'height:' + height + 'cpx;';

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      })), 200);
    }
  }]);

  return List;
}();

exports.default = new List();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('259', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Scroller = function () {
  function Scroller() {
    _classCallCheck(this, Scroller);

    this.data = {
      /**
       * scroller 配置
       */
      bottomOffset: 20,
      scrollDirection: 'vertical',
      panels: [],
      rows: [],
      scrollTop: 0
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      change: function change(e) {
        var target = e.currentTarget;
        var dataset = target.dataset;
        var i = dataset.idx;
        var item = this.panels[i];

        if (item) {
          item.height = item.height === 200 ? 400 : 200;
          item.width = item.width === 330 ? 730 : 330;
          item.computedStyle = 'height:' + item.height + 'cpx;width:' + item.width + 'cpx;background-color:' + item.bgc + ';opacity:' + item.opacity;
        }
      },
      randomfn: function randomfn() {
        var ary = [];

        for (var i = 1; i <= 40; i++) {
          var item = {
            label: i,
            height: 200,
            width: 730,
            bgc: '#69BE96',
            opacity: 1
          };
          item.computedStyle = 'height:' + item.height + 'cpx;width:' + item.width + 'cpx;background-color:' + item.bgc + ';opacity:' + item.opacity + ';';
          ary.push(item);
        }

        return ary;
      },
      onScroll: function onScroll(e) {// console.log('scroll');
      },
      onBottom: function onBottom(e) {
        console.log('onBottom');
      }
    };
  }

  _createClass(Scroller, [{
    key: 'created',
    value: function created(res) {
      this.panels = this.randomfn();

      for (var i = 0; i < 30; i++) {
        this.rows.push('row ' + i);
      }

      console.log('demo page created:', res);
    }
  }, {
    key: 'mounted',
    value: function mounted() {// setTimeout(() => {
      //     this.scrollTop = 2000;
      // }, 2000)
    }
  }]);

  return Scroller;
}();

exports.default = new Scroller();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('264', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var View = function () {
  function View() {
    _classCallCheck(this, View);

    this.data = {};
    this.computed = {};
    this.watch = {};
    this.methods = {};
  }

  _createClass(View, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return View;
}();

exports.default = new View();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('269', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Text = function () {
  function Text() {
    _classCallCheck(this, Text);

    this.data = {
      allLine: ["chameleon的目标是 真正专注于让一套代码运行多端的开发框架，提供标准的MVVM架构开发模式统一各类终端", "chameleon主要特性: ", "1、简洁强大的构建配置", "2、语法统一、快速上手", "3、方便的数据管理方案", "4、差异化方案", "......"],
      addLine: [],
      pageHeight: 0
    };
    this.computed = {
      addTextClass: function addTextClass() {
        return this.allLine.length === this.addLine.length ? 'disable-text' : 'active-text';
      },
      removeTextClass: function removeTextClass() {
        return this.addLine.length === 0 ? 'disable-text' : 'active-text';
      }
    };
    this.watch = {};
    this.methods = {
      add: function add() {
        if (this.addLine.length >= this.allLine.length) {
          return;
        }

        this.addLine.push(this.allLine[this.addLine.length]);
      },
      remove: function remove() {
        if (this.addLine.length <= 0) {
          return;
        }

        this.addLine.pop();
      }
    };
  }

  _createClass(Text, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {
      var _this = this;

      _cmlTtApi2.default.getSystemInfo().then(function (info) {
        var height = info.viewportHeight;

        if (height) {
          _this.pageHeight = height;
        }
      });
    }
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return Text;
}();

exports.default = new Text();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('274', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Button = function () {
  function Button() {
    _classCallCheck(this, Button);

    this.data = {
      userStyle: ''
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      testclick: function testclick(e) {
        var type = e.detail.type;

        _cmlTtApi2.default.showToast({
          message: type + ' button'
        });
      }
    };
  }

  _createClass(Button, [{
    key: 'mounted',
    value: function mounted() {}
  }]);

  return Button;
}();

exports.default = new Button();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('279', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Input = function () {
  function Input() {
    _classCallCheck(this, Input);

    this.data = {
      isfocus: false,
      inputValue: '',
      eventName: '触发的事件名称',
      keywords: '',
      winHeight: 0,
      testMaxMinVal: '10'
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      inputEvent: function inputEvent(e) {
        this.inputValue = e.detail.value;
      },
      testEvent: function testEvent(e) {
        this.eventName = e.type;
      },
      bindblurevent: function bindblurevent() {
        this.isfocus = false;
      },
      testMaxMinEvent: function testMaxMinEvent(e) {
        var _this = this;

        this.testMaxMinVal = '';
        setTimeout(function () {
          _this.testMaxMinVal = e.detail.value;
        }, 300);
      }
    };
  }

  _createClass(Input, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {
      var _this2 = this;

      setTimeout(function () {
        _this2.isfocus = true;
      }, 300);
    }
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return Input;
}();

exports.default = new Input();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('284', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _utils = require("285");

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Input = function () {
  function Input() {
    _classCallCheck(this, Input);

    this.props = {
      cStyle: {
        type: String,
        default: ''
      },
      cstyle: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      //input的类型
      type: {
        type: String,
        default: 'text' //枚举值 text number password

      },
      //input的placerholder
      placeholder: {
        type: String,
        default: ''
      },
      //是否禁用input输入
      disabled: {
        type: Boolean,
        default: false
      },
      //控制input是否聚焦
      focus: {
        type: Boolean,
        default: false
      },
      //最大长度
      maxlength: {
        type: Number,
        default: 140
      },
      //右下角返回键类型
      returnKeyType: {
        //枚举值 done search next go
        type: String,
        default: 'done'
      },
      placerHolderColor: {
        type: String,
        default: '#bebebe'
      },
      maxValue: {
        //type=number 最大值
        type: Number,
        default: Infinity
      },
      minValue: {
        //type=number 最小值
        type: Number,
        default: -Infinity
      }
    };
    this.data = {
      inputValue: ""
    };
    this.computed = {
      wxPlaceHolderStyle: function wxPlaceHolderStyle() {
        return 'color: ' + this.placerHolderColor + ';';
      },
      isInputNumber: function isInputNumber() {
        return this.type === 'number';
      },
      computedStyle: function computedStyle() {
        // props 必须经过计算属性，否则没有经过 cpx 转换
        return this.cStyle || this.cstyle;
      }
    };
    this.watch = {
      focus: function focus(newVal, oldVal) {},
      value: function value(newVal, oldVal) {
        this.inputValue = newVal;
      }
    };
    this.methods = {
      inputEvent: function inputEvent(e) {
        this.handleDetail(e);
        this.$cmlEmit('input', {
          value: this.inputValue
        });
        this.$cmlEmit('inputevent', {
          value: this.inputValue
        });
      },
      blurEvent: function blurEvent(e) {
        this.handleDetail(e);
        this.$cmlEmit('blurevent', {
          value: this.inputValue
        });
        this.$cmlEmit('blur', {
          value: this.inputValue
        });
      },
      focusEvent: function focusEvent(e) {
        this.handleDetail(e);
        this.$cmlEmit('focusevent', {
          value: this.inputValue
        });
        this.$cmlEmit('focus', {
          value: this.inputValue
        });
      },
      confirmEvent: function confirmEvent(e) {
        this.handleDetail(e);
        this.$cmlEmit('confirmevent', {
          value: this.inputValue
        });
        this.$cmlEmit('confirm', {
          value: this.inputValue
        });
      },
      handleDetail: function handleDetail(e) {
        if (!e) {
          return '';
        }

        var value = e.detail.value;

        if (this.isInputNumber) {
          value = (0, _utils.getValBetweenMaxAndMin)(value, this.maxValue, this.minValue);
        }

        return this.inputValue = value || '';
      }
    };
  }

  _createClass(Input, [{
    key: 'mounted',
    value: function mounted() {
      this.inputValue = this.value;
    }
  }]);

  return Input;
}();

exports.default = new Input();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('285', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.str2obj = str2obj;
exports.pxTransform = pxTransform;
exports.cmlStyleTransfer = cmlStyleTransfer;
exports.getValBetweenMaxAndMin = getValBetweenMaxAndMin;

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function str2obj(str) {
  var styleAry = str.split(';');
  var obj = {};
  styleAry.forEach(function (element) {
    var classObj = element.split(':');
    var className = String(classObj[0]).replace(/(^\s*)|(\s*)$/g, "");
    var classValue = String(classObj[1]).replace(/(^\s*)|(\s*)$/g, "");
    obj[className] = classValue;
  });
  return obj;
}

function pxTransform(s) {
  if (!s) return '';

  if (!!~s.indexOf('cpx')) {
    return s.replace(/(-?\d*\.?\d*)cpx/ig, function (matchs, $1) {
      return _cmlTtApi2.default.cpx2px(Number($1)) + 'px';
    });
  }

  return s;
}

function cmlStyleTransfer(str) {
  if (!str) return {};
  var styleAry = str.split(';');
  var obj = {};
  styleAry.forEach(function (element) {
    var classObj = element.split(':');
    var className = String(classObj[0]).replace(/(^\s*)|(\s*)$/g, "");

    if (className) {
      var classValue = pxTransform(String(classObj[1]).replace(/(^\s*)|(\s*)$/g, ""));
      obj[className] = classValue;
    }
  });
  return obj;
}

function getValBetweenMaxAndMin(value, maxValue, minValue) {
  if (isNaN(Number(value))) {
    return '';
  }

  if (isNaN(maxValue) || isNaN(minValue)) {
    return value;
  }

  if (maxValue != Infinity && maxValue <= Number(value)) {
    value = String(maxValue);
  }

  if (minValue != -Infinity && minValue >= Number(value)) {
    value = String(minValue);
  }

  return value;
}
})
cmldefine('290', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = {};
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('295', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Textarea = function () {
  function Textarea() {
    _classCallCheck(this, Textarea);

    this.data = {
      isfocus: false,
      inputValue: '',
      eventName: '触发的事件名称'
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      inputEvent: function inputEvent(e) {
        this.inputValue = e.detail.value;
      },
      testEvent: function testEvent(e) {
        this.eventName = e.type;
      },
      bindblurevent: function bindblurevent() {
        this.isfocus = false;
      }
    };
  }

  _createClass(Textarea, [{
    key: 'mounted',
    value: function mounted() {
      var _this = this;

      setTimeout(function () {
        _this.isfocus = true;
      }, 300);
    }
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return Textarea;
}();

exports.default = new Textarea();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('300', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/*
event: cinput cblur cfocus cconfirm
*/


var Textarea = function Textarea() {
  _classCallCheck(this, Textarea);

  this.props = {
    cStyle: {
      type: String,
      default: ''
    },
    cstyle: {
      type: String,
      default: ''
    },
    //textarea的内容
    value: {
      type: String,
      default: ''
    },
    //textarea的placerholder
    placeholder: {
      type: String,
      default: ''
    },
    //是否禁用textarea输入
    disabled: {
      type: Boolean,
      default: false
    },
    //控制textarea是否聚焦
    focus: {
      type: Boolean,
      default: false
    },
    //最大长度
    maxlength: {
      type: Number,
      default: 140
    },
    //右下角返回键类型
    returnKeyType: {
      //枚举值 done search next go
      type: String,
      default: 'done'
    },
    placerHolderColor: {
      type: String,
      default: '#666'
    },
    rows: {
      type: Number,
      default: 2
    }
  };
  this.data = {};
  this.computed = {
    wxPlaceHolderStyle: function wxPlaceHolderStyle() {
      return 'color: ' + this.placerHolderColor;
    },
    computedStyle: function computedStyle() {
      // props 必须经过计算属性，否则没有经过 cpx 转换
      return this.cStyle || this.cstyle;
    }
  };
  this.watch = {
    focus: function focus(newVal, oldVal) {}
  };
  this.methods = {
    inputEvent: function inputEvent(e) {
      this.$cmlEmit('input', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('inputevent', {
        value: e.detail.value || ''
      });
    },
    blurEvent: function blurEvent(e) {
      this.$cmlEmit('blur', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('blurevent', {
        value: e.detail.value || ''
      });
    },
    focusEvent: function focusEvent(e) {
      this.$cmlEmit('focus', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('focusevent', {
        value: e.detail.value || ''
      });
    },
    confirmEvent: function confirmEvent(e) {
      this.$cmlEmit('confirm', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('confirmevent', {
        value: e.detail.value || ''
      });
    }
  };
};

exports.default = new Textarea();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('305', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Image = function Image() {
  _classCallCheck(this, Image);

  this.data = {
    imageSrc: require("306")
  };
  this.methods = {
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
  };
};

exports.default = new Image();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('306', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/chameleon_39b423e.jpg";
})
cmldefine('311', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Video = function () {
  function Video() {
    _classCallCheck(this, Video);

    this.data = {
      videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      state: '----'
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      onstart: function onstart(event) {
        this.state = 'onstart';

        _cmlTtApi2.default.showToast({
          message: this.state
        });
      },
      onpause: function onpause(event) {
        this.state = 'onpause';

        _cmlTtApi2.default.showToast({
          message: this.state
        });
      },
      onfinish: function onfinish(event) {
        this.state = 'onfinish';

        _cmlTtApi2.default.showToast({
          message: this.state
        });
      },
      onfail: function onfail(event) {
        this.state = 'onfail';

        _cmlTtApi2.default.showToast({
          message: this.state
        });
      }
    };
  }

  _createClass(Video, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return Video;
}();

exports.default = new Video();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('316', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Video = function Video() {
  _classCallCheck(this, Video);

  this.props = {
    controls: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    },
    cstyle: {
      type: String,
      default: ''
    }
  };
  this.computed = {
    computedStyle: function computedStyle() {
      // props 必须经过计算属性，否则没有经过 cpx 转换
      return this.cstyle;
    }
  };
  this.methods = {
    onstart: function onstart(e) {
      this.$cmlEmit('start');
      this.$cmlEmit('customstart');
    },
    onpause: function onpause(e) {
      this.$cmlEmit('pause');
      this.$cmlEmit('custompause');
    },
    onfinish: function onfinish(e) {
      this.$cmlEmit('finish');
      this.$cmlEmit('customfinish');
    },
    onfail: function onfail(e) {
      this.$cmlEmit('fail');
      this.$cmlEmit('customfail');
    }
  };
};

exports.default = new Video();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('321', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Richtext = function () {
  function Richtext() {
    _classCallCheck(this, Richtext);

    this.data = {
      richData: {
        message: '这是一段富文本',
        rich_message: [{
          "color": "#666666",
          "font_size": 28,
          "start": 0,
          "end": 3
        }, {
          "color": "#fc9153",
          "font_size": 28,
          "start": 4,
          "end": 6
        }]
      }
    };
    this.computed = {};
    this.watch = {};
    this.methods = {};
  }

  _createClass(Richtext, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return Richtext;
}();

exports.default = new Richtext();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('326', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _richHandle = require("327");

var _richHandle2 = _interopRequireDefault(_richHandle);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Richtext = function Richtext() {
  _classCallCheck(this, Richtext);

  this.props = {
    richData: {
      type: Object,
      default: {
        message: '',
        rich_message: [{
          color: '',
          font_size: 0,
          start: 0,
          end: 0
        }]
      }
    }
  };
  this.computed = {
    richList: function richList() {
      var richList = (0, _richHandle2.default)(this.richData);
      richList = richList.map(function (item) {
        if (item.color && item.font_size) {
          item.style = 'color:' + item.color + ';font-size:' + item.font_size + 'cpx;';
        } else {
          item.style = '';
        }

        return item;
      });
      return richList;
    }
  };
};

exports.default = new Richtext();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('327', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = richHandle;

function richHandle(richData) {
  var richConf = richData.rich_message,
      richTexts = richData.message.split(''); //切割文本

  richTexts = richTexts.map(function (item) {
    return {
      text: item,
      index: -1
    };
  }); // 过滤错误配置

  richConf = richConf.filter(function (item) {
    var start = item.start,
        end = item.end;
    start = parseInt(start, 10);
    end = parseInt(end, 10);
    return !isNaN(start) && !isNaN(end) && start <= end;
  }); // 遍历获取文本对应样式index

  richConf.forEach(function (item, index) {
    var start = item.start,
        end = item.end;
    start = parseInt(start, 10);
    end = parseInt(end, 10);
    start = start < 0 ? 0 : start;
    end = end > richTexts.length - 1 ? richTexts.length - 1 : end;

    for (var i = start; i <= end; i++) {
      richTexts[i].index = index;
    }
  });
  var start = 0,
      end = richTexts.length;
  var richList = [];

  while (start < end) {
    var i = start;
    var rIndex = richTexts[i].index;
    var conf = rIndex === -1 ? null : richConf[rIndex];
    var ri = {
      font_size: conf && conf.font_size,
      color: conf && conf.color,
      text: ''
    };

    for (; i < end; i++) {
      if (richTexts[i].index !== rIndex) {
        break;
      }

      ri.text += richTexts[i].text;
    }

    richList.push(ri);
    start = i;
  }

  return richList;
}
})
cmldefine('332', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Switch = function Switch() {
  _classCallCheck(this, Switch);

  this.data = {
    switchValue1: false,
    switchValue2: true,
    switchValue3: false,
    switchValue4: true
  };
  this.computed = {};
  this.methods = {
    switchChange1: function switchChange1(e) {
      this.switchValue1 = e.detail.value;
    },
    switchChange2: function switchChange2(e) {
      this.switchValue2 = e.detail.value;
    }
  };
};

exports.default = new Switch();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('337', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Switch = function Switch() {
  _classCallCheck(this, Switch);

  this.props = {
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    opencolor: {
      type: String,
      default: '#fc9153'
    }
  };
  this.methods = {
    switchChange: function switchChange(e) {
      this.$cmlEmit('change', {
        value: e.detail.value
      });
      this.$cmlEmit('changeevent', {
        value: e.detail.value
      });
    }
  };
};

exports.default = new Switch();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('342', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Radio = function Radio() {
  _classCallCheck(this, Radio);

  this.data = {
    radioValue1: false,
    radioValue2: true,
    radioValue3: true,
    radioValue4: false
  };
  this.methods = {
    valueChange1: function valueChange1(e) {
      this.radioValue1 = e.detail.value;
    },
    valueChange2: function valueChange2(e) {
      this.radioValue2 = e.detail.value;
    }
  };
};

exports.default = new Radio();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('346', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Radio = function () {
  function Radio() {
    _classCallCheck(this, Radio);

    this.props = {
      checked: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'left'
      },
      groupIndex: {
        type: Number,
        default: -1
      },
      color: {
        type: String,
        default: '#fc9153'
      }
    };
    this.data = {
      innerChecked: false
    };
    this.computed = {
      radioStyle: function radioStyle() {
        var style = '';

        if (this.disabled) {
          style += 'opacity:0.5;';
        }

        if (this.position == 'right') {
          style += 'position:absolute;right:0;margin-right:45cpx;';
        } else {
          style += 'margin-right:13cpx;';
        }

        return style;
      },
      radioInnerStyle: function radioInnerStyle() {
        var style = '';

        if (this.innerChecked) {
          style += 'border:10cpx solid ' + this.color + ';';
        } else {
          style += 'border:1px solid #ccc;';
        }

        return style;
      },
      radioClass: function radioClass() {
        if (this.disabled) {
          return this.innerChecked ? 'cml-radio-selected-disabled' : 'cml-radio-unselect-disabled';
        }

        return this.innerChecked ? 'cml-radio-selected' : 'cml-radio-unselect';
      }
    };
    this.watch = {
      checked: function checked(val) {
        this.innerChecked = val;
      }
    };
    this.methods = {
      changeSelect: function changeSelect() {
        if (this.disabled) return;
        this.innerChecked = !this.innerChecked;
        var value = {
          value: this.innerChecked,
          index: this.groupIndex
        };
        this.$cmlEmit('change', value);
        this.$cmlEmit('changeevent', value);
      }
    };
  }

  _createClass(Radio, [{
    key: 'mounted',
    value: function mounted() {
      this.innerChecked = this.checked;
    }
  }]);

  return Radio;
}();

exports.default = new Radio();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('351', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Checkbox = function () {
  function Checkbox() {
    _classCallCheck(this, Checkbox);

    this.data = {
      checkboxValue1: true,
      checkboxValue2: true,
      checkboxValue3: true
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      valueChange1: function valueChange1(e) {
        this.checkboxValue1 = e.detail.value;
      },
      valueChange2: function valueChange2(e) {
        this.checkboxValue2 = e.detail.value;
      }
    };
  }

  _createClass(Checkbox, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return Checkbox;
}();

exports.default = new Checkbox();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('355', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Checkbox = function () {
  function Checkbox() {
    _classCallCheck(this, Checkbox);

    this.props = {
      checked: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'left'
      },
      groupIndex: {
        type: Number,
        default: -1
      }
    };
    this.data = {
      checkedImg: require("356"),
      uncheckImg: require("357"),
      innerChecked: false
    };
    this.computed = {
      checkStyle: function checkStyle() {
        var style = '';

        if (this.disabled) {
          style += 'opacity:0.5;';
        }

        if (this.position == 'right') {
          style += 'position:absolute;right:0;margin-right:45cpx;';
        } else {
          style += 'margin-right:13cpx;';
        }

        return style;
      },
      checkImg: function checkImg() {
        return this.innerChecked ? this.checkedImg : this.uncheckImg;
      },
      checkClass: function checkClass() {
        if (this.disabled) {
          return 'cml-checkbox-disabled';
        }

        return this.innerChecked ? 'cml-checkbox-checked' : 'cml-checkbox-uncheck';
      }
    };
    this.watch = {
      checked: function checked(newChecked) {
        this.innerChecked = newChecked;
      }
    };
    this.methods = {
      changeCheck: function changeCheck() {
        if (this.disabled) return;
        this.innerChecked = !this.innerChecked;
        var value = {
          value: this.innerChecked,
          index: this.groupIndex
        };
        this.$cmlEmit('changeevent', value);
        this.$cmlEmit('change', value);
      }
    };
  }

  _createClass(Checkbox, [{
    key: 'created',
    value: function created() {
      var checked = this.checked;
      this.innerChecked = checked;
    }
  }]);

  return Checkbox;
}();

exports.default = new Checkbox();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('356', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/selected_520dcc8.png";
})
cmldefine('357', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/unselected_4e38c39.png";
})
cmldefine('362', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Carousel = function Carousel() {
  _classCallCheck(this, Carousel);
};

exports.default = new Carousel();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('365', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CCarouselItem = function CCarouselItem() {
  _classCallCheck(this, CCarouselItem);
};

exports.default = new CCarouselItem();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('369', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CCarousel = function CCarousel() {
  _classCallCheck(this, CCarousel);

  this.props = {
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 5000
    },
    current: {
      type: Number,
      default: 0
    },
    indicatorDots: {
      type: Boolean,
      default: false
    },
    indicatorColor: {
      type: String,
      default: '#cccccc'
    },
    indicatorActiveColor: {
      type: String,
      default: '#000000'
    },
    circular: {
      type: Boolean,
      default: false
    }
  };
};

exports.default = new CCarousel();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('374', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Row = function Row() {
  _classCallCheck(this, Row);
};

exports.default = new Row();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('379', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CCol = function CCol() {
  _classCallCheck(this, CCol);

  this.props = {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    margin: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    colStyle: function colStyle() {
      var style = '';

      if (this.height) {
        style = 'height:' + this.height + 'cpx;';
      }

      if (this.width) {
        style += 'width:' + this.width + 'cpx;';
      }

      if (this.backgroundColor) {
        style += 'background-color:' + this.backgroundColor + ';';
      }

      if (this.margin) {
        var mr = this.margin / 2;
        style += 'margin-right:' + mr + 'cpx;margin-left:' + mr + 'cpx;';
      }

      return style;
    }
  };
};

exports.default = new CCol();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('384', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CLayout = function () {
  function CLayout() {
    _classCallCheck(this, CLayout);

    this.data = {
      headerTitle: 'layout布局',
      headerDesc: 'layout布局',
      asideStyle: 'height:300cpx;',
      headStyle: '',
      mainStyle: 'height:300cpx',
      footStyle: ''
    };
  }

  _createClass(CLayout, [{
    key: 'mounted',
    value: function mounted() {}
  }]);

  return CLayout;
}();

exports.default = new CLayout();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('389', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CAside = function CAside() {
  _classCallCheck(this, CAside);

  this.props = {
    asideStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {
    defaultStyle: 'width:200cpx;'
  };
  this.computed = {
    mergeAsideStyle: function mergeAsideStyle() {
      return this.defaultStyle + this.asideStyle;
    }
  };
};

exports.default = new CAside();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('394', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CContainer = function CContainer() {
  _classCallCheck(this, CContainer);

  this.props = {
    direction: {
      type: String,
      default: 'row'
    }
  };
  this.computed = {
    isVertical: function isVertical() {
      if (this.direction === 'column') {
        return true;
      } else if (this.direction === 'row') {
        return false;
      }
    },
    containerStyle: function containerStyle() {
      var finalStyle = '';

      if (this.isVertical) {
        finalStyle = "flex-direction:column";
      }

      return finalStyle;
    }
  };
};

exports.default = new CContainer();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('399', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CFoot = function CFoot() {
  _classCallCheck(this, CFoot);

  this.props = {
    footStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {
    defaultStyle: 'height:80cpx;'
  };
  this.computed = {
    mergeFootStyle: function mergeFootStyle() {
      return this.defaultStyle + this.footStyle;
    }
  };
};

exports.default = new CFoot();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('404', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CHead = function CHead() {
  _classCallCheck(this, CHead);

  this.props = {
    headStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {
    defaultStyle: 'height:80cpx;'
  };
  this.computed = {
    mergeHeadStyle: function mergeHeadStyle() {
      return this.defaultStyle + this.headStyle;
    }
  };
};

exports.default = new CHead();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('409', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CMain = function CMain() {
  _classCallCheck(this, CMain);

  this.props = {
    mainStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {};
  this.computed = {
    mergeMainStyle: function mergeMainStyle() {
      return this.mainStyle;
    }
  };
};

exports.default = new CMain();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('414', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Refresh_view = function Refresh_view() {
  _classCallCheck(this, Refresh_view);

  this.data = {
    imgGif: require("415"),
    texts: [0, 1, 2, 3, 4, 5, 6],
    pullingDown: false,
    pullingUp: false,
    loadingText: '上拉加载'
  };
  this.computed = {};
  this.watch = {};
  this.methods = {
    pullDownRefreshHandle: function pullDownRefreshHandle(e) {
      var _this = this;

      this.pullingDown = true;
      setTimeout(function () {
        var length = _this.texts.length;

        for (var i = length; i < length + 5; i++) {
          _this.texts.unshift(i);
        }

        _this.pullingDown = false;
      }, 2000);
    },
    pullUploadHandle: function pullUploadHandle(e) {
      var _this2 = this;

      this.pullingUp = true;
      this.loadingText = '加载中...';
      setTimeout(function () {
        _this2.loadingText = '加载完成';
        var length = _this2.texts.length;

        for (var i = length; i < length + 5; i++) {
          _this2.texts.push(i);
        }

        _this2.loadingText = '上拉加载';
        _this2.pullingUp = false;
      }, 2000);
    }
  };
};

exports.default = new Refresh_view();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('415', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/loading_1f26c50.gif";
})
cmldefine('420', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var RefreshView = function () {
  function RefreshView() {
    _classCallCheck(this, RefreshView);

    this.props = {
      enablePullUpLoad: {
        type: Boolean,
        default: false
      },
      pullUpLoadComplete: {
        type: Boolean,
        default: false
      },
      pullingUp: {
        type: Boolean,
        default: false
      },
      pullUpStop: {
        type: Number,
        default: 80
      },
      pullUpStart: {
        type: Number,
        default: 50
      },
      pullDownStart: {
        type: Number,
        default: 50
      },
      pullDownStop: {
        type: Number,
        default: 80
      },
      pullingDown: {
        type: Boolean,
        default: false
      }
    };
    this.methods = {
      onPullDownRefresh: function onPullDownRefresh() {
        this.$cmlEmit('onPullDownRefresh');
      },
      onPullUpLoad: function onPullUpLoad() {
        this.$cmlEmit('onPullUpLoad');
      }
    };
    this.watch = {
      pullingDown: function pullingDown(v) {
        if (!v) {
          wx.stopPullDownRefresh();
        }
      }
    };
  }

  _createClass(RefreshView, [{
    key: 'created',
    value: function created() {
      var _this = this;

      var currentPages = getCurrentPages();
      var currentPath = currentPages.pop().route;
      this.$cmlEventBus.on(currentPath + '_onPullDownRefresh', function () {
        if (_this.pullingDown) return;

        _this.onPullDownRefresh();
      });

      if (this.enablePullUpLoad) {
        this.$cmlEventBus.on(currentPath + '_onReachBottom', function () {
          if (_this.pullUpLoadComplete || _this.pullingUp) return;

          _this.onPullUpLoad();
        });
      }
    }
  }]);

  return RefreshView;
}();

exports.default = new RefreshView();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('425', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CDialog = function () {
  function CDialog() {
    _classCallCheck(this, CDialog);

    this.data = {
      show: false,
      mask: true,
      showClose: false,
      headerTitle: "c-dialog",
      headerDesc: "c-dialog",
      message: "",
      type: "alert",
      iconType: "warn",
      iconStyle: {
        width: "60cpx",
        height: "60cpx"
      },
      title: "我是标题",
      content: "我是内容",
      custom: false
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      changeShow: function changeShow(e) {
        this.show = e.detail.value;
      },
      showAlert: function showAlert() {
        this.type = "alert";
        this.title = "我是标题";
        this.content = "我是内容";
        this.iconType = "warn";
        this.showClose = false;
        this.show = true;
      },
      showConfirm: function showConfirm() {
        this.type = "confirm";
        this.title = "确定离开吗";
        this.content = "";
        this.iconType = "warn";
        this.showClose = false;
        this.show = true;
      },
      showCloseIcon: function showCloseIcon() {
        this.type = "alert";
        this.title = "我是标题";
        this.content = "我是内容";
        this.iconType = "warn";
        this.showClose = true;
        this.show = true;
      },
      showCustom: function showCustom() {
        var _this = this;

        this.custom = true;
        setTimeout(function () {
          _this.custom = false;
        }, 1000);
      },
      closeEvent: function closeEvent() {},
      confirmEvent: function confirmEvent() {},
      cancelEvent: function cancelEvent() {}
    };
  }

  _createClass(CDialog, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return CDialog;
}();

exports.default = new CDialog();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('430', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("431");

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var IconMap = {
  network: require("432"),
  warn: require("433"),
  success: require("434")
};

var CDialog = function CDialog() {
  _classCallCheck(this, CDialog);

  this.props = {
    show: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "alert" //alert confirm

    },
    showClose: {
      type: Boolean,
      default: false
    },
    closeSrc: {
      type: String,
      default: require("50")
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    iconType: {
      type: String,
      default: "warn" //warn  success

    },
    iconUrl: {
      type: String,
      default: "" //warn  success

    },
    iconStyle: {
      type: Object,
      default: {}
    },
    confirmStyle: {
      type: Object,
      default: {}
    },
    cancelStyle: {
      type: Object,
      default: {}
    },
    dialogStyle: {
      type: Object,
      default: {}
    },
    titleStyle: {
      type: Object,
      default: {}
    },
    contentStyle: {
      type: Object,
      default: {}
    }
  };
  this.data = {
    defaultCloseIcon: require("50")
  };
  this.computed = {
    iconSrc: function iconSrc() {
      return IconMap[this.iconType];
    },
    computedIconStyle: function computedIconStyle() {
      return (0, _style.obj2str)(this.iconStyle || {});
    },
    computedConfirmStyle: function computedConfirmStyle() {
      return (0, _style.obj2str)(this.confirmStyle || {});
    },
    computedCancelStyle: function computedCancelStyle() {
      return (0, _style.obj2str)(this.cancelStyle || {});
    },
    computedDialogStyle: function computedDialogStyle() {
      return (0, _style.obj2str)(this.dialogStyle || {});
    },
    computedTitleStyle: function computedTitleStyle() {
      return (0, _style.obj2str)(this.titleStyle || {});
    },
    computedContentStyle: function computedContentStyle() {
      return (0, _style.obj2str)(this.contentStyle || {});
    }
  };
  this.watch = {};
  this.methods = {
    cancelTap: function cancelTap() {
      this.$cmlEmit("show", {
        value: false
      });
      this.$cmlEmit("cancel");
    },
    confirmTap: function confirmTap() {
      this.$cmlEmit("show", {
        value: false
      });
      this.$cmlEmit("confirm");
    },
    closeTap: function closeTap() {
      this.$cmlEmit("show", {
        value: false
      });
      this.$cmlEmit("close");
    }
  };
};

exports.default = new CDialog();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('431', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obj2str = obj2str;

function obj2str() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(obj).map(function (key) {
    return key + ":" + obj[key];
  }).join(";");
}
})
cmldefine('432', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/network_5ae2413.png";
})
cmldefine('433', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/warn_7953d27.png";
})
cmldefine('434', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/success_1674452.png";
})
cmldefine('50', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/close_816a4e2.png";
})
cmldefine('438', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var createAnimation = _cmlTtApi2.default.createAnimation;

var CPopup = function CPopup() {
  _classCallCheck(this, CPopup);

  this.props = {
    mask: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  };
  this.data = {
    animationData: createAnimation()
  };
  this.computed = {
    maskClass: function maskClass() {
      return this.mask ? "has-mask" : "no-mask";
    },
    containerStyle: function containerStyle() {
      var s = '';

      if (this.center) {
        s += 'align-items:center;justify-content:center;';
      }

      return s;
    },
    contentStyle: function contentStyle() {
      var style = "position: absolute;left:0;right:0;top:0;bottom:0;";

      switch (this.position) {
        case 'top':
          style = style.replace('bottom:0;', 'display:flex;flex-direction:column;');
          break;

        case 'right':
          style = style.replace('left:0;', 'display:flex;flex-direction:row;');
          break;

        case 'bottom':
          style = style.replace('top:0;', 'display:flex;flex-direction:column;');
          break;

        case 'left':
          style = style.replace('right:0;', 'display:flex;flex-direction:row;');
          break;

        default:
          style = "position:relative;";
          break;
      }

      return style;
    }
  };
  this.watch = {// show(newV, oldV) {
    //   if (newV) {
    //     this.showMask()
    //   } else {
    //     this.hideMask()
    //   }
    // }
  };
  this.methods = {
    closeevent: function closeevent() {
      this.$cmlEmit("close");
    },
    contentTap: function contentTap() {},
    showMask: function showMask() {
      this.animationData = createAnimation().opacity(0.4).backgroundColor('#25262d').step({
        duration: 300,
        timingFunction: 'linear',
        delay: 0
      }).export();
    },
    hideMask: function hideMask() {
      this.animationData = createAnimation().opacity(0).step({
        duration: 300,
        timingFunction: 'linear',
        delay: 0
      }).export();
    }
  };
};

exports.default = new CPopup();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('443', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CLoading = function () {
  function CLoading() {
    _classCallCheck(this, CLoading);

    this.data = {
      loading: true
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      changeLoading: function changeLoading() {
        this.loading = !this.loading;
      }
    };
  }

  _createClass(CLoading, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return CLoading;
}();

exports.default = new CLoading();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('448', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CToast = function () {
  function CToast() {
    _classCallCheck(this, CToast);

    this.data = {
      show: false,
      message: "",
      type: "loading",
      mask: false,
      duration: 1000,
      needIcon: true
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      changeShow: function changeShow(e) {
        this.show = e.detail.value;
      },
      showLoading: function showLoading() {
        this.message = "loading";
        this.type = "loading";
        this.mask = false;
        this.duration = 1000;
        this.needIcon = true;
        this.show = true;
      },
      showMask: function showMask() {
        this.message = "mask toast";
        this.type = "loading";
        this.mask = true;
        this.duration = 1000;
        this.needIcon = true;
        this.show = true;
      },
      showSuccess: function showSuccess() {
        this.message = "success toast";
        this.type = "success";
        this.mask = true;
        this.duration = 1000;
        this.needIcon = true;
        this.show = true;
      },
      showWarn: function showWarn() {
        this.message = "warn toast";
        this.type = "warn";
        this.duration = 1000;
        this.mask = true;
        this.needIcon = true;
        this.show = true;
      },
      showWithout: function showWithout() {
        this.message = "toast without icon";
        this.duration = 1000;
        this.mask = false;
        this.needIcon = false;
        this.show = true;
      }
    };
  }

  _createClass(CToast, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return CToast;
}();

exports.default = new CToast();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('453', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CToast = function CToast() {
  _classCallCheck(this, CToast);

  this.props = {
    type: {
      type: String,
      default: "loading"
    },
    message: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 3000
    },
    show: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: false
    },
    needIcon: {
      type: Boolean,
      default: true
    }
  };
  this.data = {
    transitionStyle: "",
    IconMap: {
      loading: require("26"),
      success: require("454"),
      warn: require("455")
    }
  };
  this.computed = {
    typeImg: function typeImg() {
      return this.IconMap[this.type];
    },
    maskClass: function maskClass() {
      return this.mask ? "has-mask" : "no-mask";
    }
  };
  this.watch = {
    show: function show(n, o) {
      var _this = this;

      if (n) {
        setTimeout(function () {
          _this.$cmlEmit("show", {
            value: false
          });
        }, this.duration);
      }
    }
  };
};

exports.default = new CToast();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('454', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/succ_1ecca56.png";
})
cmldefine('455', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/warn_da3ad45.png";
})
cmldefine('460', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CTip = function () {
  function CTip() {
    _classCallCheck(this, CTip);

    this.data = {
      showtip1: false,
      showtip2: false,
      direction: "top"
    };
    this.computed = {
      tipStyle: function tipStyle() {
        var style = void 0;

        switch (this.direction) {
          case "top":
            style = "position:absolute;top:0;left: 260cpx;";
            break;

          case "bottom":
            style = "position:absolute;top:164cpx;left: 260cpx;";
            break;

          case "left":
            style = "position:absolute;left:-10cpx;top:93cpx;";
            break;

          case "right":
            style = "position:absolute;left:480cpx;top:93cpx;";
            break;
        }

        return style;
      }
    };
    this.watch = {};
    this.methods = {
      closeTip1: function closeTip1() {
        this.showtip1 = false;
      },
      showTip1: function showTip1() {
        this.showtip1 = true;
      },
      closeTip2: function closeTip2() {
        this.showtip2 = false;
      },
      showTip2: function showTip2() {
        this.direction = "top";
        this.showtip2 = true;
      },
      showTip2Top: function showTip2Top() {
        this.direction = "top";
        this.showtip2 = true;
      },
      showTip2Bottom: function showTip2Bottom() {
        this.direction = "bottom";
        this.showtip2 = true;
      },
      showTip2Left: function showTip2Left() {
        this.direction = "left";
        this.showtip2 = true;
      },
      showTip2Right: function showTip2Right() {
        this.direction = "right";
        this.showtip2 = true;
      }
    };
  }

  _createClass(CTip, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return CTip;
}();

exports.default = new CTip();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('465', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CTip = function CTip() {
  _classCallCheck(this, CTip);

  this.props = {
    show: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "top" //bottom, left, right

    },
    closeUrl: {
      type: String,
      default: require("466")
    },
    offsetLeft: {
      type: Number,
      default: 0
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetRight: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number,
      default: 0
    }
  };
  this.data = {
    iconMap: {
      left: require("467"),
      right: require("468"),
      top: require("469"),
      bottom: require("470")
    }
  };
  this.computed = {
    angleImg: function angleImg() {
      return this.iconMap[this.direction];
    },
    tipStyle: function tipStyle() {
      var style = void 0;

      switch (this.direction) {
        case 'top':
          if (this.offsetLeft || this.offsetRight) {
            style = "padding-bottom: 16cpx;";
          } else {
            style = "flex-direction: column-reverse;";
          }

          break;

        case 'right':
          if (this.offsetTop || this.offsetBottom) {
            style = "padding-left: 16cpx;";
          } else {
            style = "flex-direction: row;";
          }

          break;

        case 'bottom':
          if (this.offsetLeft || this.offsetRight) {
            style = "padding-top: 16cpx;";
          } else {
            style = 'flex-direction: column;';
          }

          break;

        case 'left':
          if (this.offsetTop || this.offsetBottom) {
            style = "padding-right: 16cpx;";
          } else {
            style = 'flex-direction: row-reverse;';
          }

          break;
      }

      return style;
    },
    angleStyle: function angleStyle() {
      var style = void 0;

      switch (this.direction) {
        case 'top':
          if (this.offsetLeft || this.offsetRight) {
            style = "position: absolute; bottom: 0;width: 0; height: 16cpx;";

            if (this.offsetLeft) {
              style = style + ("left:" + this.offsetLeft + "cpx;");
            }

            if (this.offsetRight) {
              style = style + ("right:" + this.offsetRight + "cpx;");
            }
          } else {
            style = "width: 0; height: 16cpx;";
          }

          break;

        case 'right':
          if (this.offsetTop || this.offsetBottom) {
            style = "position: absolute; left: 0;width: 16cpx; height: 0;";

            if (this.offsetTop) {
              style = style + ("top:" + this.offsetTop + "cpx;");
            }

            if (this.offsetBottom) {
              style = style + ("bottom:" + this.offsetBottom + "cpx;");
            }
          } else {
            style = "width: 16cpx; height: 0;";
          }

          break;

        case 'bottom':
          if (this.offsetLeft || this.offsetRight) {
            style = "position: absolute; top: 0;width: 0; height: 16cpx;";

            if (this.offsetLeft) {
              style = style + ("left:" + this.offsetLeft + "cpx;");
            }

            if (this.offsetRight) {
              style = style + ("right:" + this.offsetRight + "cpx;");
            }
          } else {
            style = "width: 0; height: 16cpx;";
          }

          break;

        case 'left':
          if (this.offsetTop || this.offsetBottom) {
            style = "position: absolute; right: 0;width: 16cpx; height: 0;";

            if (this.offsetTop) {
              style = style + ("top:" + this.offsetTop + "cpx;");
            }

            if (this.offsetBottom) {
              style = style + ("bottom:" + this.offsetBottom + "cpx;");
            }
          } else {
            style = "width: 16cpx; height: 0;";
          }

          break;
      }

      return style;
    }
  };
  this.watch = {};
  this.methods = {
    closeTap: function closeTap() {
      this.$cmlEmit("close");
    }
  };
};

exports.default = new CTip();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('466', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/close_49a1751.png";
})
cmldefine('467', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/left_0ac0eaf.png";
})
cmldefine('468', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/right_c8f477d.png";
})
cmldefine('469', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/top_a17a0e7.png";
})
cmldefine('470', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/bottom_4f4eed1.png";
})
cmldefine('475', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CTipAngle = function CTipAngle() {
  _classCallCheck(this, CTipAngle);

  this.props = {
    direction: {
      type: String,
      default: "top"
    },
    angleStyle: {
      type: String,
      default: ""
    },
    angleImg: {
      type: String,
      default: ""
    }
  };
};

exports.default = new CTipAngle();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('480', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CPopup = function () {
  function CPopup() {
    _classCallCheck(this, CPopup);

    this.data = {
      mask: true,
      show: false,
      show2: false,
      position: '',
      pos: ['left', 'top', 'right', 'bottom', ''],
      posi: 0
    };
    this.computed = {
      contentStyle: function contentStyle() {
        var style = void 0;

        switch (this.position) {
          case 'left':
            style = 'width:200cpx;background:#fff;';
            break;

          case 'top':
            style = 'height:200cpx;background:#fff;';
            break;

          case 'right':
            style = 'width:200cpx;background:#fff;';
            break;

          case 'bottom':
            style = 'height:200cpx;background:#fff;';
            break;

          default:
            style = "display:block;width: 500cpx;height: 200cpx;background: #fff;";
            break;
        }

        return style;
      }
    };
    this.watch = {};
    this.methods = {
      showPopup: function showPopup() {
        this.show = true;
      },
      showPopup2: function showPopup2() {
        this.position = this.pos[this.posi++];
        this.posi = this.posi % 5;
        this.show2 = true;
      },
      closePopup: function closePopup() {
        this.show = false;
        this.show2 = false;
      }
    };
  }

  _createClass(CPopup, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return CPopup;
}();

exports.default = new CPopup();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('485', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CActionsheet = function () {
  function CActionsheet() {
    _classCallCheck(this, CActionsheet);

    this.data = {
      actionShow: false,
      mask: true,
      list: ["高铁", "火车", "飞机", "打车", "地铁"],
      active: -1,
      title: "出行方式",
      pickerStyle: false
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      showActionSheet: function showActionSheet() {
        this.pickerStyle = false;
        this.actionShow = true;
      },
      showActionSheetActive: function showActionSheetActive() {
        this.pickerStyle = false;
        this.actionShow = true;
      },
      showActionSheetPicker: function showActionSheetPicker() {
        this.pickerStyle = true;
        this.actionShow = true;
      },
      cancel: function cancel() {
        this.actionShow = false; // cml.showToast({
        //   message: "Clicked 取消"
        // });
      },
      select: function select(e) {
        this.actionShow = false;
        this.active = +e.detail.index; // cml.showToast({
        //   message: "Clicked" + " " + e.detail.value
        // });
      }
    };
  }

  _createClass(CActionsheet, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {
      this.active = 0;
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return CActionsheet;
}();

exports.default = new CActionsheet();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('490', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CActionsheet = function CActionsheet() {
  _classCallCheck(this, CActionsheet);

  this.props = {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    cancelTxt: {
      type: String,
      default: "取消"
    },
    headerStyle: {
      type: String,
      default: ""
    },
    cancelStyle: {
      type: String,
      default: ""
    },
    contentStyle: {
      type: String,
      default: ""
    },
    activeStyle: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: ['']
    },
    pickerStyle: {
      type: Boolean,
      default: false
    },
    active: {
      type: Number,
      default: -1
    }
  };
  this.computed = {
    actionHeaderStyle: function actionHeaderStyle() {
      return this.headerStyle;
    },
    actionCancelStyle: function actionCancelStyle() {
      return this.cancelStyle;
    },
    actionContentStyle: function actionContentStyle() {
      return "height:" + this.list.length * 100 + "cpx";
    },
    textStyle: function textStyle() {
      return this.contentStyle;
    },
    activeTextStyle: function activeTextStyle() {
      return this.activeStyle;
    },
    listHeight: function listHeight() {
      return this.list.length * 100;
    }
  };
  this.methods = {
    cancelclick: function cancelclick() {
      this.$cmlEmit("cancel");
    },
    itemClick: function itemClick(e) {
      this.$cmlEmit("select", {
        index: String(e.currentTarget.dataset.idx),
        value: e.currentTarget.dataset.value
      });
    },
    actiontap: function actiontap() {}
  };
};

exports.default = new CActionsheet();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('495', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _data = require("496");

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CPicker = function () {
  function CPicker() {
    _classCallCheck(this, CPicker);

    this.data = {
      provins: _data.provins,
      defaultIndex: 0,
      provinsIndex: 0,
      pickerShow: false
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      selectchange: function selectchange(e) {
        this.provinsIndex = this.defaultIndex = e.detail.index;
      },
      showClick: function showClick() {
        this.pickerShow = true;
      },
      cancel: function cancel() {
        this.pickerShow = false;
      },
      confirm: function confirm() {
        this.pickerShow = false;
      }
    };
  }

  _createClass(CPicker, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return CPicker;
}();

exports.default = new CPicker();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('496', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
var provins = exports.provins = ["北京市", "天津市", "河北省", "山西省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏", "陕西省", "甘肃省", "青海", "宁夏", "新疆"];
})
cmldefine('501', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CPicker = function CPicker() {
  _classCallCheck(this, CPicker);

  this.props = {
    show: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 500
    },
    headerHeight: {
      type: Number,
      default: 100
    },
    textAlign: {
      type: String,
      default: "center"
    },
    dataScrollerHeight: {
      type: Number,
      default: 400
    },
    list: {
      type: Array,
      default: ['']
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    cancelBtnStyle: {
      type: String,
      default: ''
    },
    confirmBtnStyle: {
      type: String,
      default: ''
    },
    itemStyle: {
      type: String,
      default: ''
    }
  };
  this.computed = {};
  this.methods = {
    cancel: function cancel() {
      this.$cmlEmit('cancel');
    },
    confirm: function confirm() {
      this.$cmlEmit('confirm');
    },
    selectchange: function selectchange(e) {
      this.$cmlEmit('selectchange', e.detail);
    }
  };
};

exports.default = new CPicker();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('506', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CPickerPanel = function CPickerPanel() {
  _classCallCheck(this, CPickerPanel);

  this.props = {
    show: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 500
    },
    title: {
      type: String,
      default: "请选择"
    },
    headerHeight: {
      type: Number,
      default: 100
    },
    cancelBtnStyle: {
      type: String,
      default: ''
    },
    confirmBtnStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {};
  this.computed = {
    wraperStyle: function wraperStyle() {
      var style = 'height: ' + this.height + 'cpx';
      return style;
    },
    headerStyle: function headerStyle() {
      var style = 'height: ' + this.headerHeight + 'cpx';
      return style;
    },
    computedCancelBtn: function computedCancelBtn() {
      return this.cancelBtnStyle;
    },
    computedConfirmBtn: function computedConfirmBtn() {
      return this.confirmBtnStyle;
    }
  };
  this.methods = {
    cancelclick: function cancelclick() {
      this.$cmlEmit("cancel");
    },
    confirmclick: function confirmclick() {
      this.$cmlEmit("confirm");
    }
  };
};

exports.default = new CPickerPanel();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('511', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CPickerItem = function CPickerItem() {
  _classCallCheck(this, CPickerItem);

  this.props = {
    list: {
      type: Array,
      default: ['']
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 400
    },
    textAlign: {
      type: String,
      default: "center"
    },
    itemStyle: {
      type: String,
      default: ""
    }
  };
  this.computed = {
    value: function value() {
      return [this.defaultIndex];
    },
    computedItemStyle: function computedItemStyle() {
      // props 必须经过计算属性，否则没有经过 cpx 转换
      return this.itemStyle;
    }
  };
  this.methods = {
    bindChange: function bindChange(e) {
      var val = e.detail.value;
      this.$cmlEmit("selectchange", {
        index: val[0]
      });
    }
  };
};

exports.default = new CPickerItem();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('516', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/***
 * prefixStyle  suffixStyle 可以用来放置图标
*/


var CTab = function CTab() {
  _classCallCheck(this, CTab);

  this.data = {
    headerTitle: 'c-tabs',
    headerDesc: 'c-tabs',
    tabsAlone: [{
      label: 'label11' // prefixStyle:"width:50cpx;height:20cpx;background-color:red;",

    }, {
      label: "label22" // suffixStyle:"width:50cpx;height:20cpx;background-color:red;"

    }, {
      label: 'label33'
    }],
    activeLabelAlone: 'label33',
    tabs: [{
      label: 'label1' // prefixStyle:"width:50cpx;height:20cpx;background-color:red"

    }, {
      label: "label2" // suffixStyle:"width:50cpx;height:20cpx;background-color:red"

    }, {
      label: 'label3' // labelStyle:"color:green"

    }],
    activeLabel: 'label3'
  };
  this.methods = {
    handleTabTap: function handleTabTap(e) {
      this.activeLabel = e.detail.label;
    },
    handleTabTapAlone: function handleTabTapAlone(e) {
      this.activeLabelAlone = e.detail.label;
    }
  };
};

exports.default = new CTab();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('521', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CTabs = function CTabs() {
  _classCallCheck(this, CTabs);

  this.props = {
    tabs: {
      //label labelStyle prefixIcon  suffixIcon
      type: Array,
      default: [{}]
    },
    activeLabel: {
      type: String,
      default: ''
    },
    //标识item子项的排列方向,默认横向排列
    inline: {
      type: Boolean,
      default: true
    },
    lineStyle: {
      type: String,
      default: ''
    },
    hasUnderline: {
      type: Boolean,
      default: true
    },
    activeLabelStyle: {
      // 这个在微信中可以
      type: String,
      default: "color:#FC9153;"
    },
    activeIconStyle: {
      // 这个在微信中可以
      type: String,
      default: ""
    }
  };
  this.data = {};
  this.computed = {
    tabLineStyle: function tabLineStyle() {
      var _this = this;

      if (!this.tabs.length) {
        return '';
      }

      var width = 750 / this.tabs.length; //line的总宽度；

      var foundIndex = this.tabs.findIndex(function (item, index, arr) {
        return _this.activeLabel === item.label;
      });
      var leftIndex = foundIndex == -1 ? 0 : foundIndex;
      var leftOffset = leftIndex * width;
      var style = ';width:' + width + 'cpx;transform: translateX(' + leftOffset + 'cpx);';
      return this.lineStyle + style;
    }
  };
  this.methods = {
    handleTabTap: function handleTabTap(e) {
      var label = e.detail.label;
      var activeIndex = this.tabs.findIndex(function (item) {
        return item.label === label;
      });
      this.$cmlEmit('tabclick', {
        label: label,
        activeIndex: activeIndex
      });
    }
  };
};

exports.default = new CTabs();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('526', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CTabsItem = function CTabsItem() {
  _classCallCheck(this, CTabsItem);

  this.props = {
    tab: {
      //label labelStyle prefixIcon  suffixIcon
      type: Object,
      default: {}
    },
    inline: {
      type: Boolean,
      default: true
    },
    activeLabel: {
      type: String,
      default: ''
    },
    activeLabelStyle: {
      // 这个在微信中可以
      type: String,
      default: "color:#FC9153"
    },
    activeIconStyle: {
      // 这个在微信中可以
      type: String,
      default: ""
    }
  };
  this.data = {
    defaultPrefixStyle: "font-size: 28cpx;\n        text-align: center;",
    defaultLabelStyle: "line-height: 88cpx;\n        font-size: 28cpx;\n        text-align: center;\n        height: 88cpx;\n        padding-left:5cpx;\n        padding-right:5cpx;\n        padding-top:5cpx;\n        padding-bottom:5cpx;",
    defaultSuffixStyle: "font-size: 28cpx;\n        text-align: center;"
  };
  this.computed = {
    cTabsItem: function cTabsItem() {
      return this.inline ? "c-tabs-item-row" : "c-tabs-item-column";
    },
    finalPrefix: function finalPrefix() {
      var activeIconStyle = this.isActive ? this.activeIconStyle : ';';
      return this.defaultPrefixStyle + (this.tab.prefixStyle || ';') + (activeIconStyle || ';');
    },
    finalLabel: function finalLabel() {
      var activeLabelStyle = this.isActive ? this.activeLabelStyle : ';';
      return this.defaultLabelStyle + (this.tab.labelStyle || ';') + activeLabelStyle;
    },
    finalSuffix: function finalSuffix() {
      var activeIconStyle = this.isActive ? this.activeIconStyle : ';';
      return this.defaultSuffixStyle + (this.tab.suffixStyle || ';') + (activeIconStyle || ';');
    },
    isActive: function isActive() {
      return this.activeLabel === this.tab.label;
    }
  };
  this.watch = {};
  this.methods = {
    handleTabTap: function handleTabTap() {
      this.$cmlEmit('tabclick', this.tab);
    }
  };
};

exports.default = new CTabsItem();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('531', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CTabPane = function CTabPane() {
  _classCallCheck(this, CTabPane);

  this.props = {
    tabs: {
      //label labelStyle prefixIcon  suffixIcon
      type: Array,
      default: [{}]
    },
    activeLabel: {
      type: String,
      default: ''
    }
  };
  this.data = {};
  this.computed = {
    paneWrap: function paneWrap() {
      var _this = this;

      var width = this.tabs.length * 750; //总宽度；
      //findIndex找不到返回 -1

      var foundIndex = this.tabs.findIndex(function (item, index, arr) {
        return _this.activeLabel === item.label;
      });
      var leftIndex = foundIndex == -1 ? 0 : foundIndex;
      var leftOffset = leftIndex * 750;
      var style = 'width:' + width + 'cpx;transform: translateX(' + -leftOffset + 'cpx)';
      return style;
    }
  };
};

exports.default = new CTabPane();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('535', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CTabPaneItem = function CTabPaneItem() {
  _classCallCheck(this, CTabPaneItem);

  this.props = {};
  this.data = {};
  this.computed = {};
  this.watch = {};
  this.methods = {};
};

exports.default = new CTabPaneItem();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('540', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Refresh = function () {
  function Refresh() {
    _classCallCheck(this, Refresh);

    this.data = {
      topRefreshing: false,
      bottomRefreshing: false,
      bottomOffset: 20,
      scrollDirection: 'vertical',
      panels: [],
      rows: [],
      sumPage: 4,
      page: 0,
      loadingTextStyle: ''
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      getPanels: function getPanels(direction) {
        if (this.page >= this.sumPage) return;
        var rows = this.randomfn();
        this.panels = direction == 1 ? [].concat(_toConsumableArray(this.panels), _toConsumableArray(rows)) : [].concat(_toConsumableArray(rows), _toConsumableArray(this.panels));
        this.page++;
      },
      onrefreshUp: function onrefreshUp(e) {
        var _this = this;

        this.topRefreshing = e.detail.value;
        setTimeout(function () {
          _this.getPanels(-1);

          _this.topRefreshing = false;
        }, 2000);
      },
      onrefreshDown: function onrefreshDown(e) {
        var _this2 = this;

        this.bottomRefreshing = e.detail.value;
        setTimeout(function () {
          _this2.getPanels(1);

          _this2.bottomRefreshing = false;
        }, 2000);
      },
      change: function change(e) {
        var target = e.currentTarget;
        var dataset = target.dataset;
        var i = dataset.idx;
        var item = this.panels[i];

        if (item) {
          item.height = item.height === 200 ? 400 : 200;
          item.width = item.width === 330 ? 730 : 330;
          item.computedStyle = 'height:' + item.height + 'cpx;width:' + item.width + 'cpx;background-color:' + item.bgc + ';opacity:' + item.opacity;
        }
      },
      randomfn: function randomfn() {
        var ary = [];

        for (var i = 1; i <= 10; i++) {
          var item = {
            label: this.page * 10 + i,
            height: 200,
            width: 730,
            bgc: '#69BE96',
            opacity: 1
          };
          item.computedStyle = 'height:' + item.height + 'cpx;width:' + item.width + 'cpx;background-color:' + item.bgc + ';opacity:' + item.opacity;
          ary.push(item);
        }

        return ary;
      },
      onScroll: function onScroll(e) {
        var scrollTop = e.detail.scrollTop;

        if (scrollTop <= 0) {
          this.topRefreshing = true;
        }
      },
      onBottom: function onBottom(e) {
        if (this.bottomRefreshing || this.page >= this.sumPage) return;
        this.bottomRefreshing = true;
      }
    };
  }

  _createClass(Refresh, [{
    key: 'created',
    value: function created(res) {
      this.getPanels();
      this.loadingTextStyle = 'color:#999;font-size:36cpx;margin:30cpx 0;';
    }
  }]);

  return Refresh;
}();

exports.default = new Refresh();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('544', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CRefresh = function CRefresh() {
  _classCallCheck(this, CRefresh);

  this.props = {
    display: {
      type: Boolean,
      default: false
    },
    // top上拉刷新，bottom下拉刷新
    direction: {
      type: String,
      default: 'top'
    },
    // 是否通过插槽自定义ui
    customUi: {
      type: Boolean,
      default: false
    }
  };
  this.data = {
    icon: require("26")
  };
  this.watch = {
    display: function display(val) {
      this.$cmlEmit('refresh', {
        value: val
      });
      this.$cmlEmit('refreshevent', {
        value: true
      });
    }
  };
};

exports.default = new CRefresh();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('549', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CCheckbox = function CCheckbox() {
  _classCallCheck(this, CCheckbox);

  this.data = {
    checkboxGroupOption1: [{
      checked: true,
      label: 'one',
      disabled: true
    }, {
      checked: false,
      label: 'two'
    }, {
      checked: false,
      label: 'three'
    }],
    selected1: 'one',
    checkboxGroupOption2: [{
      checked: true,
      label: 'one',
      disabled: true
    }, {
      checked: false,
      label: 'two'
    }, {
      checked: false,
      label: 'three'
    }],
    selected2: 'one',
    checkboxGroupOption3: [{
      checked: true,
      label: 'one',
      disabled: true
    }, {
      checked: false,
      label: 'two'
    }, {
      checked: false,
      label: 'three'
    }],
    selected3: 'one'
  };
  this.computed = {};
  this.watch = {};
  this.methods = {
    valueChange1: function valueChange1(e) {
      this.checkboxValue1 = e.detail.value;
    },
    groupChangeHandler1: function groupChangeHandler1(e) {
      this.checkboxGroupOption1 = e.detail.value;
      this.selected1 = e.detail.selected.join(', ');
    },
    groupChangeHandler2: function groupChangeHandler2(e) {
      this.checkboxGroupOption2 = e.detail.value;
      this.selected2 = e.detail.selected.join(', ');
    },
    groupChangeHandler3: function groupChangeHandler3(e) {
      this.checkboxGroupOption3 = e.detail.value;
      this.selected3 = e.detail.selected.join(', ');
    },
    valueChange2: function valueChange2(e) {
      this.checkboxValue2 = e.detail.value;
    }
  };
};

exports.default = new CCheckbox();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('554', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Checkboxgroup = function Checkboxgroup() {
  _classCallCheck(this, Checkboxgroup);

  this.props = {
    option: {
      type: Array,
      default: [{}]
    },
    position: {
      type: String,
      default: 'left'
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    uncheckIcon: {
      type: String,
      default: ''
    },
    checkedIcon: {
      type: String,
      default: ''
    },
    cstyle: {
      type: String,
      default: ''
    },
    itemStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {};
  this.computed = {
    horizontalStyle: function horizontalStyle() {
      if (this.horizontal) {
        return 'display:inline-flex;flex-direction:row;align-items:center;flex-wrap:wrap;flex:1;' + this.cstyle;
      }

      return this.cstyle;
    },
    subPosition: function subPosition() {
      // 水平排列默认位置失效
      if (this.position === 'right' && !this.horizontal) {
        return 'right';
      }

      return 'left';
    }
  };
  this.watch = {};
  this.methods = {
    valueChange: function valueChange(e) {
      var groups = JSON.parse(JSON.stringify(this.option));
      var value = groups[e.detail.index];
      value = {
        checked: e.detail.value,
        label: value.label,
        disabled: value.disabled
      };
      groups[e.detail.index] = value;
      var selected = [];
      groups.forEach(function (item) {
        if (item.checked) {
          selected.push(item.label);
        }
      });
      this.$cmlEmit('groupchange', {
        index: e.detail.index,
        value: groups,
        selected: selected
      });
    }
  };
};

exports.default = new Checkboxgroup();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('559', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CRadio = function () {
  function CRadio() {
    _classCallCheck(this, CRadio);

    this.data = {
      radioGroupOption1: [{
        checked: false,
        label: 'Option1'
      }, {
        checked: false,
        label: 'Option2'
      }, {
        checked: false,
        label: 'Option3',
        disabled: true
      }],
      radioSelect1: '',
      radioGroupOption2: [{
        checked: true,
        label: 'Option1'
      }, {
        checked: false,
        label: 'Option2'
      }, {
        checked: false,
        label: 'Option3',
        disabled: true
      }],
      radioSelect2: 'Option1',
      radioGroupOption3: [{
        checked: true,
        label: 'Option1'
      }, {
        checked: false,
        label: 'Option2'
      }, {
        checked: false,
        label: 'Option3',
        disabled: true
      }],
      radioSelect3: 'Option1'
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      groupChangeHandler1: function groupChangeHandler1(e) {
        this.radioSelect1 = this.radioGroupOption1[e.detail.index].label;
      },
      groupChangeHandler2: function groupChangeHandler2(e) {
        this.radioSelect2 = this.radioGroupOption2[e.detail.index].label;
      },
      groupChangeHandler3: function groupChangeHandler3(e) {
        this.radioSelect3 = this.radioGroupOption3[e.detail.index].label;
      }
    };
  }

  _createClass(CRadio, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return CRadio;
}();

exports.default = new CRadio();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('564', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Radiogroup = function () {
  function Radiogroup() {
    _classCallCheck(this, Radiogroup);

    this.props = {
      option: {
        type: Array,
        default: [{}]
      },
      position: {
        type: String,
        default: 'left'
      },
      horizontal: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: '#fc9153'
      },
      cstyle: {
        type: String,
        default: ''
      },
      itemStyle: {
        type: String,
        default: ''
      }
    };
    this.data = {
      radioList: []
    };
    this.computed = {
      horizontalStyle: function horizontalStyle() {
        if (this.horizontal) {
          return 'display:inline-flex;flex-direction:row;align-items:center;flex-wrap:wrap;flex:1;' + this.cstyle;
        }

        return this.cstyle;
      },
      subPosition: function subPosition() {
        // 水平排列默认位置失效
        if (this.position === 'right' && !this.horizontal) {
          return 'right';
        }

        return 'left';
      }
    };
    this.watch = {
      option: function option(n) {
        try {
          this.radioList = JSON.parse(JSON.stringify(n));
        } catch (e) {
          console.error('【c-radio-group】入参option有问题，', e);
        }
      }
    };
    this.methods = {
      valueChange: function valueChange(e) {
        this.radioList = this.radioList.map(function (item, index) {
          if (index == e.detail.index) {
            item.checked = true;
          } else {
            item.checked = false;
          }

          return item;
        });
        this.$cmlEmit('groupchange', {
          value: this.radioList,
          index: e.detail.index
        });
      }
    };
  }

  _createClass(Radiogroup, [{
    key: 'mounted',
    value: function mounted() {
      try {
        this.radioList = JSON.parse(JSON.stringify(this.option));
      } catch (e) {
        console.error('【c-radio-group】入参option有问题，', e);
      }
    }
  }]);

  return Radiogroup;
}();

exports.default = new Radiogroup();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('569', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _getHomeImgList = require("17");

var _getHomeImgList2 = _interopRequireDefault(_getHomeImgList);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var animation = _cmlTtApi2.default.createAnimation();

var chameleonIcon = require("53");

var Index = function () {
  function Index() {
    _classCallCheck(this, Index);

    this.data = {
      title: "chameleon",
      scrollHeight: -1,
      animationData: {},
      num: 1,
      currentCom: 'home',
      selectedIndex: 0,
      tabbar: {
        tabbarStyle: "height:120cpx;",
        textStyle: "font-size: 24cpx",
        selectedTextStyle: "font-size: 24cpx;color:#61c7fc;",
        list: [{
          compName: 'home',
          text: '首页',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'classify',
          text: '分类',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'topic',
          text: '识物',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'shop',
          text: '购物车',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'my',
          text: '个人',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }]
      }
    };
    this.methods = {};
  }

  _createClass(Index, [{
    key: 'created',
    value: function created() {
      var _homePageData$data = _getHomeImgList2.default.data,
          special = _homePageData$data.special,
          disscountPriceImgUrl = _homePageData$data.disscountPriceImgUrl;
      this.special = special;
      this.disscountPriceImgUrl = disscountPriceImgUrl;
    }
  }, {
    key: 'mounted',
    value: function mounted() {
      var _this = this;

      _cmlTtApi2.default.getSystemInfo().then(function (info) {
        if (info.env == 'weex') {
          _this.scrollHeight = Number(info.viewportHeight) - 100 - 88;
        } else {
          _this.scrollHeight = Number(info.viewportHeight) - 100;
        }
      });
    }
  }]);

  return Index;
}();

exports.default = new Index();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('17', function(require, exports, module) {
  module.exports = module.exports = {"code":0,"data":{"bannerImgList":[{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/288bf88910aeba6d89689b99bec93133.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3804d6f02516e59927e07f091c8f1b27.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/ce535663c045b5e877540b0e0be16bb3.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/06af49f2a59b00ad080aeb03fb8d408f.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/7c94908d8e197cc99e942324c5cc526e.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/96cf611743d7b382c11031f29152fa04.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/973e299ac2e80c03acfb5d2d4501231c.jpg"}],"classifyImgList":[{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/9cdedb90a09cf061cfa19f3e21321c73.png","title":"居家"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/57e39dc404f1ce90b959d76b9abe4314.png","title":"鞋包分配"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/2b580df265124836dcd96b1c88068127.png","title":"服装"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/a53fff4d3cf0f4dedd78a8a0f2b129c9.png","title":"电器"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/6147b31404d5ddf1207a8363605aebf9.png","title":"婴童"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/8d29af79c24d78a3dcf7d61249702dcf.png","title":"饮食"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/2b9a25b6ea81655eb431944d3d57185f.png","title":"洗护"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/293f2341415d70bf7c6460c77fa07f41.png","title":"餐厨"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/2fbba45f945ee592d5470269d9e61f1c.png","title":"文体"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/54947b070f8af594dd46069f2d3bdd34.png","title":"特色区"}],"disscountPriceImgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15468670774810413.gif","special":{"newPerson":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15468671496890421.png","temai":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15468671650860425.png","qingdan":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15468671650860425.png"}}}
})
cmldefine('53', function(require, exports, module) {
  module.exports = "https://beatles-chameleon.github.io/cml-demo/dist/tt/static/img/chameleon_83ee00e.png";
})
cmldefine('573', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Home = function Home() {
  _classCallCheck(this, Home);
};

exports.default = new Home();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('578', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _getHomeImgList = require("17");

var _getHomeImgList2 = _interopRequireDefault(_getHomeImgList);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var List = function () {
  function List() {
    _classCallCheck(this, List);

    this.data = {
      bannerImgList: []
    };
    this.methods = {
      forbinding: function forbinding(e) {
        console.log(e);
        e._originEvent.stopPropagation && e._originEvent.stopPropagation();
      }
    };
  }

  _createClass(List, [{
    key: 'created',
    value: function created() {
      var bannerImgList = _getHomeImgList2.default.data.bannerImgList;
      this.bannerImgList = bannerImgList;
    }
  }]);

  return List;
}();

exports.default = new List();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('583', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Service = function Service() {
  _classCallCheck(this, Service);
};

exports.default = new Service();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('588', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _getHomeImgList = require("17");

var _getHomeImgList2 = _interopRequireDefault(_getHomeImgList);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Classlist = function () {
  function Classlist() {
    _classCallCheck(this, Classlist);

    this.data = {
      classifyImgList: []
    };
    this.methods = {
      change: function change() {
        _cmlTtApi2.default.navigateTo({
          "path": "/pages/demo/yanxuan/pages/list/list"
        });
      }
    };
  }

  _createClass(Classlist, [{
    key: "created",
    value: function created() {
      var classifyImgList = _getHomeImgList2.default.data.classifyImgList;
      this.classifyImgList = classifyImgList;
    }
  }]);

  return Classlist;
}();

exports.default = new Classlist();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('593', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _getHomeImgList = require("17");

var _getHomeImgList2 = _interopRequireDefault(_getHomeImgList);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Special = function () {
  function Special() {
    _classCallCheck(this, Special);

    this.data = {
      special: '',
      disscountPriceImgUrl: ''
    };
    this.methods = {
      test: function test() {
        _cmlTtApi2.default.navigateTo({
          "path": "/pages/demo/yanxuan/pages/list/list"
        });
      }
    };
  }

  _createClass(Special, [{
    key: 'created',
    value: function created() {
      var _homeData$data = _getHomeImgList2.default.data,
          special = _homeData$data.special,
          disscountPriceImgUrl = _homeData$data.disscountPriceImgUrl;
      this.special = special;
      this.disscountPriceImgUrl = disscountPriceImgUrl;
    }
  }]);

  return Special;
}();

exports.default = new Special();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('598', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _yanxuan = require("29");

var _yanxuan2 = _interopRequireDefault(_yanxuan);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var headerHeight = 114;
var tabbarHeight = 90;

var Yanxuan = function () {
  function Yanxuan() {
    _classCallCheck(this, Yanxuan);

    this.data = {
      classes: [],
      subclasses: [],
      scrollerHeight: -1
    };
    this.methods = {
      godetail: function godetail() {
        _cmlTtApi2.default.navigateTo({
          "path": "/pages/demo/yanxuan/pages/detail/detail"
        });
      },
      forbinding: function forbinding(e) {// e.stopPropagation();
      }
    };
  }

  _createClass(Yanxuan, [{
    key: "created",
    value: function created() {
      var result = _yanxuan2.default.data.result;
      this.classes = result.classes;
      this.subclasses = result.subclasses;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this = this;

      _cmlTtApi2.default.getSystemInfo().then(function (info) {
        _this.scrollerHeight = Number(info.viewportHeight) - headerHeight - tabbarHeight;
      });
    }
  }]);

  return Yanxuan;
}();

exports.default = new Yanxuan();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('29', function(require, exports, module) {
  module.exports = module.exports = {"errno":"0","errmsg":"","data":{"result":{"banners":[{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/630439320dae9f1ce3afef3c39721383.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/5100f0176e27a167cc2aea08b1bd11d8.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/banner-1.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/banner-8.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/banner-2.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/banner-4.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/banner-6.jpg"}],"makers":{"title":"品牌制造商直供","list":[{"name":"新秀丽制造商","price":"59","state":"上新","bg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/ppbg-1.jpg","url":""},{"name":"MUJI制造商","price":"12.9","state":"上新","bg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/ppbg-2.jpg","url":""},{"name":"CK制造商","price":"29","state":"上新","bg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/ppbg-3.jpg","url":""},{"name":"Adidas制造商","price":"29","bg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/75523d4274d85825ece16370cdb1693f.jpg","url":""}]},"recommend":{"head1":{"tlt":"周一周四 · 新品发布","tltBg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/bg-new.png","url":""},"goods1":[{"tlt":"日式和风声波式电动牙刷","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/e5474a8f4fd5748079e2ba2ead806b51.png","info":"进口刷毛，专利技术","price":"119"},{"tlt":"小馒头 多色双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/455eee1712358dbcb2e33d54ab287808.png","info":"奶油色泽，小巧减龄","price":"79"},{"tlt":"多功能商务双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/795884dc6d995eca9a091a6358e3634d.png","info":"17个功能分区，内置分层收纳","price":"334"},{"tlt":"切尔西牛皮女靴","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/0e9ddf1a0ed5af78e8ec12cb9489df17.png","info":"经典牛皮切尔西，时尚帅气","price":"289"},{"tlt":"清心花茶壶套装","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/a2a0f13385d67220b29e7a1124a361e6.png","info":"明亮通透，滤茶迅速","price":"119"},{"tlt":"全棉色织磨毛四件套","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3e1c00ce7b49a78e645538a8c45cabcb.png","info":"优雅色织，温暖磨毛","price":"299"},{"tlt":"黑凤梨 20寸PC膜拉链登机箱","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3108aaae80416b1cf27c3d7cc5661cea.png","info":"热卖9万只，网易人手1只","price":"185"},{"tlt":"日式和风敞口保温杯","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3aa67fee1c7d046a09f4ce878f4485ac.png","info":"真空隔热，保温保冷","price":"32"}],"head2":{"tlt":"周一周四 · 新品发布","tltBg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/bg-new.png","url":""},"goods2":[{"tlt":"日式和风声波式电动牙刷","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/e5474a8f4fd5748079e2ba2ead806b51.png","info":"进口刷毛，专利技术","price":"119"},{"tlt":"小馒头 多色双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/455eee1712358dbcb2e33d54ab287808.png","info":"奶油色泽，小巧减龄","price":"79"},{"tlt":"多功能商务双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/795884dc6d995eca9a091a6358e3634d.png","info":"17个功能分区，内置分层收纳","price":"334"},{"tlt":"切尔西牛皮女靴","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/0e9ddf1a0ed5af78e8ec12cb9489df17.png","info":"经典牛皮切尔西，时尚帅气","price":"289"},{"tlt":"清心花茶壶套装","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/a2a0f13385d67220b29e7a1124a361e6.png","info":"明亮通透，滤茶迅速","price":"119"},{"tlt":"全棉色织磨毛四件套","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3e1c00ce7b49a78e645538a8c45cabcb.png","info":"优雅色织，温暖磨毛","price":"299"},{"tlt":"黑凤梨 20寸PC膜拉链登机箱","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3108aaae80416b1cf27c3d7cc5661cea.png","info":"热卖9万只，网易人手1只","price":"185"},{"tlt":"日式和风敞口保温杯","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3aa67fee1c7d046a09f4ce878f4485ac.png","info":"真空隔热，保温保冷","price":"32"}]},"goods":[{"tlt":"日式和风敞口保温杯","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3aa67fee1c7d046a09f4ce878f4485ac.png","info":"真空隔热，保温保冷","url":"","price":"32"},{"tlt":"切尔西牛皮女靴","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/0e9ddf1a0ed5af78e8ec12cb9489df17.png","info":"奶油色泽，小巧减龄","url":"","price":"32"},{"tlt":"小馒头多色双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/455eee1712358dbcb2e33d54ab287808.png","info":"奶油色泽，小巧减龄","url":"","price":"79"},{"tlt":"全棉色织磨毛四件套","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3e1c00ce7b49a78e645538a8c45cabcb.png","info":"优雅色织，温暖磨毛","url":"","price":"299"},{"tlt":"日式和风声波式电动牙刷","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/e5474a8f4fd5748079e2ba2ead806b51.png","info":"进口刷毛，专利技术","url":"","price":"119"},{"tlt":"多功能商务双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/795884dc6d995eca9a091a6358e3634d.png","info":"17个功能分区，内置分层收纳","url":"","price":"334"},{"tlt":"黑凤梨20寸PC膜拉链登机箱","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3108aaae80416b1cf27c3d7cc5661cea.png","info":"热卖9万只，网易人手1只","url":"","price":"185"},{"tlt":"日式蓬软太鼓抱枕","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/ad953e16ad8c33b714e7af941ce8cd56.png","info":"萌趣太鼓造型 软糯轻柔回弹","url":"","price":"29"},{"tlt":"可水洗抗菌防螨丝羽绒枕","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/a6c9e142fd008b3734c690a71a78ae5b.png","info":"进口防螨布，热销50万件","url":"","price":"99"},{"tlt":"双宫茧桑蚕丝被 空调被","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/6b341648f59d0c3eb48fa81e1d2de06e.png","info":"一级桑蚕丝，吸湿透气柔软","url":"","price":"479"},{"tlt":"怀抱休闲椅组合（皮款）","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/b5289125e9b55cf72e9a9623d006415e.png","info":"葛优躺神器皮款","url":"","price":"3999"},{"tlt":"欧式哑光餐具套装","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/431e86c88b4a6c9f065d1d8abea6b603.png","info":"德化白瓷，坚实耐用","url":"","price":"189"},{"tlt":"清新两用杯","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/431f5d142e3dd9946dc8e38c2aa3cd34.png","info":"办公杯优选 轻松饮茶","url":"","price":"52"},{"tlt":"两带式男/女款拖鞋","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/7d1c130c7d80edf824e4218c6829b7c8.png","info":"鞋杯随脚型而变，舒适呵护","url":"","price":"69.9"}],"topics":[{"name":"严选look","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15030393722652401.jpg"},{"name":"严选推荐","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/d943675462a06f817d33062d4eb059f5.jpg"},{"name":"丁磊私物推荐","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/1de4da49367dd7c01af1f7a2b23b0237.jpg"},{"name":"挑款师推荐","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/437cc656ff529f8f84db6efc48df9bf4.png"}],"articles":[{"auther":"严选推荐","autherimg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3d860cbf663253590da6a64ff07f9919.png","tlt":"年中扫一扫，下半年运势好","info":"6个家庭清洁小技巧","price":"6.9","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/5a1df92d48fa3214bec9bb40ab067683.jpg"},{"auther":"服装组：小服","autherimg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15041772608140418.png","tlt":"小姐姐们的运动衣提前上架啦","info":"前两天推男式运动T恤时，就有小伙伴在专题评论里，问小姐姐们的运动衣在哪儿。","price":"","img":["https://cmljs.org/cml-demo/src/assets/images/yanxuan/15041772896010423.jpg","https://cmljs.org/cml-demo/src/assets/images/yanxuan/15041772808640420.jpg","https://cmljs.org/cml-demo/src/assets/images/yanxuan/15041772808640420.jpg"]},{"auther":"居家组：朵朵","autherimg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15040896357740404.png","tlt":"初秋，最想用它来裸睡","info":"连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...","price":"","img":["https://cmljs.org/cml-demo/src/assets/images/yanxuan/15040927525260414.jpg","https://cmljs.org/cml-demo/src/assets/images/yanxuan/15040927586650416.jpg","https://cmljs.org/cml-demo/src/assets/images/yanxuan/15040927556820415.jpg"]},{"auther":"严选推荐","autherimg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3d860cbf663253590da6a64ff07f9919.png","tlt":"不为繁华易匠心","info":"那些值得珍藏的严选手作好物","price":"29","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/4d72145e48e65ee3deaf2e1403e6ec73.jpg"}],"classes":["推荐区","家装区","居家","餐厨","配件","服装","电器","洗护","杂货","饮食","婴童","志趣"],"subclasses":[{"name":"中秋系列","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/82ae05c313b93355239ca1795917a5ac.png"},{"name":"超值套装","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/bd6f7deba69c8af2f6bb80025d7b98de.png"},{"name":"热卖爆品","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/c3418cc60d3968263c5b2ac7fb153c34.png"},{"name":"999+好评","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/87d1cb1bc196c5775b17788aea1c2239.png"},{"name":"boss推荐","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/fbee769af73c0f63f6120eb27ff3ce96.png"},{"name":"明星推荐","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/7dea8f7e0e706804c3307504e2e7c463.png"},{"name":"黑凤梨系列","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/a4a14669ce1fa497aece9a20c669196e.png"},{"name":"趣味粉系列","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/87fc01e5876482d521ecca13aea42653.png"}]}}}
})
cmldefine('603', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Yanxuan = function Yanxuan() {
  _classCallCheck(this, Yanxuan);
};

exports.default = new Yanxuan();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('608', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _yanxuan = require("29");

var _yanxuan2 = _interopRequireDefault(_yanxuan);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var headerHeight = 114;
var tabbarHeight = 90;
var sloganHeight = 66;

var Yanxuan = function () {
  function Yanxuan() {
    _classCallCheck(this, Yanxuan);

    this.data = {
      rightbtn: {
        name: "编辑"
      },
      goods: [],
      goodslist: [],
      scrollerHeight: 0
    };
    this.methods = {
      godetail: function godetail() {
        _cmlTtApi2.default.navigateTo({
          "path": "/pages/demo/yanxuan/pages/detail/detail"
        });
      }
    };
  }

  _createClass(Yanxuan, [{
    key: "created",
    value: function created() {
      var result = _yanxuan2.default.data.result;
      this.goods = result.goods;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this = this;

      _cmlTtApi2.default.getSystemInfo().then(function (info) {
        _this.scrollerHeight = Number(info.viewportHeight) - headerHeight - tabbarHeight - sloganHeight;
      });
    }
  }]);

  return Yanxuan;
}();

exports.default = new Yanxuan();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('613', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Yanxuan = function Yanxuan() {
  _classCallCheck(this, Yanxuan);

  this.props = {
    title: {
      type: String
    },
    leftbtn: {
      type: Object
    },
    rightbtn: {
      type: Object
    }
  };
};

exports.default = new Yanxuan();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('618', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Yanxuan = function Yanxuan() {
  _classCallCheck(this, Yanxuan);

  this.props = {
    goods: {
      type: Array,
      default: []
    }
  };
  this.methods = {
    jumpWeb: function jumpWeb(e) {}
  };
};

exports.default = new Yanxuan();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('623', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var tabbarHeight = 90;

var Yanxuan = function () {
  function Yanxuan() {
    _classCallCheck(this, Yanxuan);

    this.data = {
      classes: [],
      subclasses: [],
      scrollerHeight: -1,
      headerImg: require("53")
    };
    this.methods = {
      jumpWeb: function jumpWeb(_url) {}
    };
  }

  _createClass(Yanxuan, [{
    key: 'created',
    value: function created() {}
  }, {
    key: 'mounted',
    value: function mounted() {
      var _this = this;

      _cmlTtApi2.default.getSystemInfo().then(function (info) {
        _this.scrollerHeight = Number(info.viewportHeight) - tabbarHeight;
      });
    }
  }]);

  return Yanxuan;
}();

exports.default = new Yanxuan();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('628', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _yanxuan = require("29");

var _yanxuan2 = _interopRequireDefault(_yanxuan);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var headerHeight = 114;
var tabbarHeight = 90;

var Yanxuan = function () {
  function Yanxuan() {
    _classCallCheck(this, Yanxuan);

    this.data = {
      rightbtn: {
        name: "编辑"
      },
      topics: [],
      articles: [],
      scrollerHeight: 0
    };
  }

  _createClass(Yanxuan, [{
    key: "created",
    value: function created() {
      var result = _yanxuan2.default.data.result;
      this.topics = result.topics;
      this.articles = result.articles;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this = this;

      _cmlTtApi2.default.getSystemInfo().then(function (info) {
        _this.scrollerHeight = Number(info.viewportHeight) - headerHeight - tabbarHeight;
      });
    }
  }]);

  return Yanxuan;
}();

exports.default = new Yanxuan();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('633', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Yanxuan = function Yanxuan() {
  _classCallCheck(this, Yanxuan);

  this.props = {
    title: {
      type: String
    },
    leftbtn: {
      type: Object
    },
    rightbtn: {
      type: Object
    }
  };
};

exports.default = new Yanxuan();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('638', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Yanxuan = function Yanxuan() {
  _classCallCheck(this, Yanxuan);

  this.props = {
    topics: {
      type: Array,
      default: []
    }
  };
};

exports.default = new Yanxuan();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('643', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Yanxuan = function Yanxuan() {
  _classCallCheck(this, Yanxuan);

  this.props = {
    article: {
      type: Object,
      default: {}
    },
    url: {
      type: String,
      default: ''
    }
  };
  this.computed = {
    stringFun: function stringFun(obj) {
      return typeof this.article.img == 'string';
    },
    objectFun: function objectFun(obj) {
      return _typeof(this.article.img) == 'object' && this.article.img.length >= 3;
    }
  };
  this.methods = {
    godetail: function godetail() {
      _cmlTtApi2.default.navigateTo({
        "path": "/pages/demo/yanxuan/pages/detail/detail"
      });
    }
  };
};

exports.default = new Yanxuan();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('648', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/*** 
以下列举下tabbar的一些默认值
tabbar:{
      "tabbarStyle": "";
      "tabLineStyle":"background-color:#FC9153;height:2cpx;", //当选择tabbar在top的时候，会显示出来一个下划线，用来设置下划线的颜色和高度；
      "textStyle":'color:#000000', //文案默认style ,可以这里控制文案的大小，样式等
      "selectedTextStyle":'color:#61c7fc',//文案被选择style
      "position":"bottom", //tabbar的位置 top/bottom
      "useFixedLayout":默认不使用fixed布局,  //是否通过fixed布局进行tabbar的布局
      "list":[
        { 
          "compName":"bar-detail", //这里如果外部组件通过component is进行关联，则这个值必须传，且要和useingComponents中的key的保持一致；
          "text": "detail",//tabbar的文案
          "icon": require("../../../assets/images/index/icon_API.png"),
          "selectedIcon": require("../../../assets/images/index/icon_API_HL.png"),
          // "iconStyle":"width:50cpx;height:50cpx;",//默认的icon的宽高是40cpx;这里可以自定义
          // "selectedIconStyle":"width:70cpx;height:70cpx;",//默认的icon的宽高是40cpx;这里可以自定义
      ]
    },*/


var Tabbar = function () {
  function Tabbar() {
    _classCallCheck(this, Tabbar);

    this.props = {
      tabbar: {
        type: Object,
        default: {}
      },
      value: {
        //接受c-model的值
        type: String,
        dafault: ''
      }
    };
    this.data = {
      tapedIndex: 0
    };
    this.computed = {
      layoutClass: function layoutClass() {
        //默认不用fixed布局
        if (!this.useFixedLayout) {
          return '';
        } else if (this.useFixedLayout && this.top) {
          //tabbar在top
          return 'tab-bar-root-top';
        } else if (this.useFixedLayout && !this.top) {
          //tabbar在bottom
          return 'tab-bar-root-bottom';
        }
      },
      useFixedLayout: function useFixedLayout() {
        return this.tabbar.useFixedLayout;
      },
      top: function top() {
        return this.tabbar.position === 'top';
      },
      tabLineStyle: function tabLineStyle() {
        if (!this.tabbar.list.length) {
          return '';
        }

        var width = 750 / this.tabbar.list.length; //line的总宽度；

        var leftOffset = this.tapedIndex * width;
        var style = ';width:' + width + 'cpx;transform: translateX(' + leftOffset + 'cpx);' + (this.tabbar.tabLineStyle || 'background-color:#FC9153;height:2cpx;');
        return style;
      },
      hasIcon: function hasIcon() {
        var necessaryKeys = ['icon'];
        return (this.tabbar.list || []).every(function (item) {
          return necessaryKeys.every(function (key) {
            return Object.keys(item).includes(key);
          });
        });
      },
      //根据c-model的值计算出选中的哪个tab
      activeIndex: function activeIndex() {
        var _this = this;

        var tabIndex = this.tabbar.list.findIndex(function (item) {
          return item.compName === _this.value;
        });

        if (tabIndex >= 0) {
          return tabIndex;
        } else {
          throw new Error('未在tabbar 中配置的list中compName中找到对应的组件名');
        }
      }
    };
    this.watch = {
      //兼容支付宝不跳转的问题
      value: function value() {
        this.tapedIndex = this.activeIndex;
      }
    };
    this.methods = {
      onTabbarItemTap: function onTabbarItemTap(index) {
        this.tapedIndex = index;
        var compName = this.tabbar.list[index].compName;
        this.$cmlEmit('onclick', {
          compName: compName
        });
        /*这里是为了方便和使用c-tabbar的组件进行关联，如果是通过 
        <component is="{{currentComp}}"></component>
        <c-tabbar c-model="{{currentComp}}"></c-tabbar>
        这里方式使用，可以关联currentComp的值*/

        this.$cmlEmit('input', {
          value: compName
        });
      }
    };
  }

  _createClass(Tabbar, [{
    key: 'mounted',
    value: function mounted() {
      this.tapedIndex = this.activeIndex;

      if (!this.tabbar.length) {
        return '';
      }

      var width = 750 / this.tabbar.length; //line的总宽度；

      var leftOffset = this.activeIndex * width;
      this.tabLineStyle = ';width:' + width + 'cpx;transform: translateX(' + leftOffset + 'cpx);';
    }
  }]);

  return Tabbar;
}();

exports.default = new Tabbar();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('653', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _listImages = require("654");

var _listImages2 = _interopRequireDefault(_listImages);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Refresh = function () {
  function Refresh() {
    _classCallCheck(this, Refresh);

    this.data = {
      topRefreshing: false,
      bottomRefreshing: false,
      bottomOffset: 20,
      scrollDirection: 'vertical',
      loadingTextStyle: '',
      page: 0,
      sumPage: 5,
      list: [],
      topImg: ''
    };
    this.methods = {
      change: function change(e) {
        _cmlTtApi2.default.navigateTo({
          "path": "/pages/demo/yanxuan/pages/detail/detail",
          query: {
            a: 1,
            b: 'test'
          }
        });
      },
      onBottom: function onBottom(e) {
        var _this = this;

        if (this.bottomRefreshing || this.page >= this.sumPage) return;
        setTimeout(function () {
          _this._getData();
        }, 200);
      },
      onScroll: function onScroll() {},
      _getData: function _getData() {
        var _listData$data = _listImages2.default.data,
            topImgUrl = _listData$data.topImgUrl,
            list = _listData$data.list;
        this.list = [].concat(_toConsumableArray(this.list), _toConsumableArray(list));
        this.topImg = topImgUrl;
        this.page = this.page + 1;
      }
    };
  }

  _createClass(Refresh, [{
    key: 'created',
    value: function created(res) {
      this.loadingTextStyle = 'color:#666;font-size:36cpx;margin:30cpx auto;';

      this._getData();
    }
  }]);

  return Refresh;
}();

exports.default = new Refresh();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('654', function(require, exports, module) {
  module.exports = module.exports = {"code":0,"data":{"topImgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/4972949f269e7295a4f37e99a303553e.jpg","list":[{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/8635c42f2b3a92768b12015c491821b5.png","des":"400跟纯棉贡缎","name":"60s锦绵贡缎四件套","money":"￥400","tag":["APP特惠"]},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/4a00fd1035efe874d70d51dfc04c5cee.png","des":"少女粉润贡缎","name":"朱莉.粉唐四件套","money":"￥359","tag":["年货节特卖","满赠"]},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/9f3c89c8b98fb06968c67edb12a195cf.png","des":"少女粉润贡缎","name":"朱莉.粉唐四件套","money":"￥359","tag":[]},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/cc863b46d890633445fb2a1354b01841.png","des":"入门享受奢华感受","name":"60s锦绵贡缎四件套","money":"￥400"}]}}
})
cmldefine('659', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _detailInfo = require("660");

var _detailInfo2 = _interopRequireDefault(_detailInfo);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Detail = function () {
  function Detail() {
    _classCallCheck(this, Detail);

    this.data = {
      bannerImg: [],
      descriptionInfo: [],
      money: 0,
      appTag: '',
      scrollHeight: -1
    };
    this.methods = {
      goto: function goto() {},
      change: function change() {
        console.log('change');
      },
      forbinding: function forbinding(e) {}
    };
  }

  _createClass(Detail, [{
    key: 'created',
    value: function created() {
      var _detailData$data = _detailInfo2.default.data,
          carouselList = _detailData$data.carouselList,
          description = _detailData$data.description,
          money = _detailData$data.money,
          tag = _detailData$data.tag;
      this.bannerImg = carouselList;
      this.descriptionInfo = description;
      this.money = money;
      this.appTag = tag;
    }
  }, {
    key: 'mounted',
    value: function mounted() {
      var _this = this;

      _cmlTtApi2.default.getSystemInfo().then(function (info) {
        if (info.env == 'weex') {
          _this.scrollHeight = Number(info.viewportHeight) - 80 - 88;
        } else {
          _this.scrollHeight = Number(info.viewportHeight) - 80;
        }
      });
    }
  }]);

  return Detail;
}();

exports.default = new Detail();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('660', function(require, exports, module) {
  module.exports = module.exports = {"code":0,"data":{"carouselList":[{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/5240f52c0f410054fe9c20abc54aa7b9.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/5142255cef97dafd012bb73423eff4d4.png"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/0e72c98273b50c0959d34662c2fad4e8.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/44334a3a100aa6fa974c17e352969a6f.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/bf216b5af1dc8cdb5a70e87b8271028c.png"}],"description":[{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/17e5327561f5b9df04f7d000a8c71bb2.jpg","tag1":"贡缎细糯","tag2":"如绸光泽"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/459cfd6a33991746fc2cf452642c7c68.jpg","tag1":"高支纯棉","tag2":"新贵臻密"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/964045a4796d70488adfef26a3093e35.jpg","tag1":"同色边框","tag2":"精致恰好"}],"money":"￥469","tag":"App特惠￥455.00"}}
})
cmldefine('665', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Myscroller = function Myscroller() {
  _classCallCheck(this, Myscroller);
};

exports.default = new Myscroller();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('669', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtApi = require("1");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _amapWx = require("670");

var _amapWx2 = _interopRequireDefault(_amapWx);

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var markersData = [];

var Map = function () {
  function Map() {
    _classCallCheck(this, Map);

    this.props = {
      name: {
        type: String,
        default: '默认值'
      }
    };
    this.data = {
      markers: [],
      latitude: '',
      longitude: '',
      textData: {}
    };
    this.methods = {
      makertap: function makertap(e) {
        var id = e.markerId;
        var that = this;
        that.showMarkerInfo(markersData, id);
        that.changeMarkerColor(markersData, id);
      },
      showMarkerInfo: function showMarkerInfo(data, i) {
        this.textData = {
          name: data[i].name,
          desc: data[i].address
        };
      },
      changeMarkerColor: function changeMarkerColor(data, i) {
        var that = this;
        var markers = [];
        this.markers = markers;
      }
    };
  }

  _createClass(Map, [{
    key: 'mounted',
    value: function mounted() {
      var me = this;
      this.$cmlEmit('onshow', {
        value: this.name
      });
      var myAmapFun = new _amapWx2.default.AMapWX({
        key: 'b7f499f3cc98e7170b361d77c2e12c17'
      });
      myAmapFun.getPoiAround({
        success: function success(data) {
          markersData = data.markers;
          me.markers = markersData;
          me.latitude = markersData[0].latitude;
          me.longitude = markersData[0].longitude;
          me.showMarkerInfo(markersData, 0);
        },
        fail: function fail(info) {
          _cmlTtApi2.default.showToast({
            message: JSON.stringify(info.errMsg)
          });
        }
      });
    }
  }]);

  return Map;
}();

exports.default = new Map();
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('670', function(require, exports, module) {
  function AMapWX(a) {
  this.key = a.key, this.requestConfig = {
    key: a.key,
    s: "rsx",
    platform: "WXJS",
    appname: a.key,
    sdkversion: "1.2.0",
    logversion: "2.0"
  };
}

AMapWX.prototype.getWxLocation = function (a, b) {
  wx.getLocation({
    type: "gcj02",
    success: function success(a) {
      var c = a.longitude + "," + a.latitude;
      wx.setStorage({
        key: "userLocation",
        data: c
      }), b(c);
    },
    fail: function fail(c) {
      wx.getStorage({
        key: "userLocation",
        success: function success(a) {
          a.data && b(a.data);
        }
      }), a.fail({
        errCode: "0",
        errMsg: c.errMsg || ""
      });
    }
  });
}, AMapWX.prototype.getRegeo = function (a) {
  function c(c) {
    var d = b.requestConfig;
    wx.request({
      url: "https://restapi.amap.com/v3/geocode/regeo",
      data: {
        key: b.key,
        location: c,
        extensions: "all",
        s: d.s,
        platform: d.platform,
        appname: b.key,
        sdkversion: d.sdkversion,
        logversion: d.logversion
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(b) {
        var d, e, f, g, h, i, j, k, l;
        b.data.status && "1" == b.data.status ? (d = b.data.regeocode, e = d.addressComponent, f = [], g = "", d && d.roads[0] && d.roads[0].name && (g = d.roads[0].name + "附近"), h = c.split(",")[0], i = c.split(",")[1], d.pois && d.pois[0] && (g = d.pois[0].name + "附近", j = d.pois[0].location, j && (h = parseFloat(j.split(",")[0]), i = parseFloat(j.split(",")[1]))), e.provice && f.push(e.provice), e.city && f.push(e.city), e.district && f.push(e.district), e.streetNumber && e.streetNumber.street && e.streetNumber.number ? (f.push(e.streetNumber.street), f.push(e.streetNumber.number)) : (k = "", d && d.roads[0] && d.roads[0].name && (k = d.roads[0].name), f.push(k)), f = f.join(""), l = [{
          iconPath: a.iconPath,
          width: a.iconWidth,
          height: a.iconHeight,
          name: f,
          desc: g,
          longitude: h,
          latitude: i,
          id: 0,
          regeocodeData: d
        }], a.success(l)) : a.fail({
          errCode: b.data.infocode,
          errMsg: b.data.info
        });
      },
      fail: function fail(b) {
        a.fail({
          errCode: "0",
          errMsg: b.errMsg || ""
        });
      }
    });
  }

  var b = this;
  a.location ? c(a.location) : b.getWxLocation(a, function (a) {
    c(a);
  });
}, AMapWX.prototype.getWeather = function (a) {
  function d(d) {
    var e = "base";
    a.type && "forecast" == a.type && (e = "all"), wx.request({
      url: "https://restapi.amap.com/v3/weather/weatherInfo",
      data: {
        key: b.key,
        city: d,
        extensions: e,
        s: c.s,
        platform: c.platform,
        appname: b.key,
        sdkversion: c.sdkversion,
        logversion: c.logversion
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(b) {
        function c(a) {
          var b = {
            city: {
              text: "城市",
              data: a.city
            },
            weather: {
              text: "天气",
              data: a.weather
            },
            temperature: {
              text: "温度",
              data: a.temperature
            },
            winddirection: {
              text: "风向",
              data: a.winddirection + "风"
            },
            windpower: {
              text: "风力",
              data: a.windpower + "级"
            },
            humidity: {
              text: "湿度",
              data: a.humidity + "%"
            }
          };
          return b;
        }

        var d, e;
        b.data.status && "1" == b.data.status ? b.data.lives ? (d = b.data.lives, d && d.length > 0 && (d = d[0], e = c(d), e["liveData"] = d, a.success(e))) : b.data.forecasts && b.data.forecasts[0] && a.success({
          forecast: b.data.forecasts[0]
        }) : a.fail({
          errCode: b.data.infocode,
          errMsg: b.data.info
        });
      },
      fail: function fail(b) {
        a.fail({
          errCode: "0",
          errMsg: b.errMsg || ""
        });
      }
    });
  }

  function e(e) {
    wx.request({
      url: "https://restapi.amap.com/v3/geocode/regeo",
      data: {
        key: b.key,
        location: e,
        extensions: "all",
        s: c.s,
        platform: c.platform,
        appname: b.key,
        sdkversion: c.sdkversion,
        logversion: c.logversion
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(b) {
        var c, e;
        b.data.status && "1" == b.data.status ? (e = b.data.regeocode, e.addressComponent ? c = e.addressComponent.adcode : e.aois && e.aois.length > 0 && (c = e.aois[0].adcode), d(c)) : a.fail({
          errCode: b.data.infocode,
          errMsg: b.data.info
        });
      },
      fail: function fail(b) {
        a.fail({
          errCode: "0",
          errMsg: b.errMsg || ""
        });
      }
    });
  }

  var b = this,
      c = b.requestConfig;
  a.city ? d(a.city) : b.getWxLocation(a, function (a) {
    e(a);
  });
}, AMapWX.prototype.getPoiAround = function (a) {
  function d(d) {
    var e = {
      key: b.key,
      location: d,
      s: c.s,
      platform: c.platform,
      appname: b.key,
      sdkversion: c.sdkversion,
      logversion: c.logversion
    };
    a.querytypes && (e["types"] = a.querytypes), a.querykeywords && (e["keywords"] = a.querykeywords), wx.request({
      url: "https://restapi.amap.com/v3/place/around",
      data: e,
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(b) {
        var c, d, e, f;

        if (b.data.status && "1" == b.data.status) {
          if (b = b.data, b && b.pois) {
            for (c = [], d = 0; d < b.pois.length; d++) {
              e = 0 == d ? a.iconPathSelected : a.iconPath, c.push({
                latitude: parseFloat(b.pois[d].location.split(",")[1]),
                longitude: parseFloat(b.pois[d].location.split(",")[0]),
                iconPath: e,
                width: 22,
                height: 32,
                id: d,
                name: b.pois[d].name,
                address: b.pois[d].address
              });
            }

            f = {
              markers: c,
              poisData: b.pois
            }, a.success(f);
          }
        } else a.fail({
          errCode: b.data.infocode,
          errMsg: b.data.info
        });
      },
      fail: function fail(b) {
        a.fail({
          errCode: "0",
          errMsg: b.errMsg || ""
        });
      }
    });
  }

  var b = this,
      c = b.requestConfig;
  a.location ? d(a.location) : b.getWxLocation(a, function (a) {
    d(a);
  });
}, AMapWX.prototype.getStaticmap = function (a) {
  function f(b) {
    c.push("location=" + b), a.zoom && c.push("zoom=" + a.zoom), a.size && c.push("size=" + a.size), a.scale && c.push("scale=" + a.scale), a.markers && c.push("markers=" + a.markers), a.labels && c.push("labels=" + a.labels), a.paths && c.push("paths=" + a.paths), a.traffic && c.push("traffic=" + a.traffic);
    var e = d + c.join("&");
    a.success({
      url: e
    });
  }

  var e,
      b = this,
      c = [],
      d = "https://restapi.amap.com/v3/staticmap?";
  c.push("key=" + b.key), e = b.requestConfig, c.push("s=" + e.s), c.push("platform=" + e.platform), c.push("appname=" + e.appname), c.push("sdkversion=" + e.sdkversion), c.push("logversion=" + e.logversion), a.location ? f(a.location) : b.getWxLocation(a, function (a) {
    f(a);
  });
}, AMapWX.prototype.getInputtips = function (a) {
  var b = this,
      c = b.requestConfig,
      d = {
    key: b.key,
    s: c.s,
    platform: c.platform,
    appname: b.key,
    sdkversion: c.sdkversion,
    logversion: c.logversion
  };
  a.location && (d["location"] = a.location), a.keywords && (d["keywords"] = a.keywords), a.type && (d["type"] = a.type), a.city && (d["city"] = a.city), a.citylimit && (d["citylimit"] = a.citylimit), wx.request({
    url: "https://restapi.amap.com/v3/assistant/inputtips",
    data: d,
    method: "GET",
    header: {
      "content-type": "application/json"
    },
    success: function success(b) {
      b && b.data && b.data.tips && a.success({
        tips: b.data.tips
      });
    },
    fail: function fail(b) {
      a.fail({
        errCode: "0",
        errMsg: b.errMsg || ""
      });
    }
  });
}, AMapWX.prototype.getDrivingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = {
    key: b.key,
    s: c.s,
    platform: c.platform,
    appname: b.key,
    sdkversion: c.sdkversion,
    logversion: c.logversion
  };
  a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.waypoints && (d["waypoints"] = a.waypoints), a.avoidpolygons && (d["avoidpolygons"] = a.avoidpolygons), a.avoidroad && (d["avoidroad"] = a.avoidroad), wx.request({
    url: "https://restapi.amap.com/v3/direction/driving",
    data: d,
    method: "GET",
    header: {
      "content-type": "application/json"
    },
    success: function success(b) {
      b && b.data && b.data.route && a.success({
        paths: b.data.route.paths,
        taxi_cost: b.data.route.taxi_cost || ""
      });
    },
    fail: function fail(b) {
      a.fail({
        errCode: "0",
        errMsg: b.errMsg || ""
      });
    }
  });
}, AMapWX.prototype.getWalkingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = {
    key: b.key,
    s: c.s,
    platform: c.platform,
    appname: b.key,
    sdkversion: c.sdkversion,
    logversion: c.logversion
  };
  a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({
    url: "https://restapi.amap.com/v3/direction/walking",
    data: d,
    method: "GET",
    header: {
      "content-type": "application/json"
    },
    success: function success(b) {
      b && b.data && b.data.route && a.success({
        paths: b.data.route.paths
      });
    },
    fail: function fail(b) {
      a.fail({
        errCode: "0",
        errMsg: b.errMsg || ""
      });
    }
  });
}, AMapWX.prototype.getTransitRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = {
    key: b.key,
    s: c.s,
    platform: c.platform,
    appname: b.key,
    sdkversion: c.sdkversion,
    logversion: c.logversion
  };
  a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.city && (d["city"] = a.city), a.cityd && (d["cityd"] = a.cityd), wx.request({
    url: "https://restapi.amap.com/v3/direction/transit/integrated",
    data: d,
    method: "GET",
    header: {
      "content-type": "application/json"
    },
    success: function success(b) {
      if (b && b.data && b.data.route) {
        var c = b.data.route;
        a.success({
          distance: c.distance || "",
          taxi_cost: c.taxi_cost || "",
          transits: c.transits
        });
      }
    },
    fail: function fail(b) {
      a.fail({
        errCode: "0",
        errMsg: b.errMsg || ""
      });
    }
  });
}, AMapWX.prototype.getRidingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = {
    key: b.key,
    s: c.s,
    platform: c.platform,
    appname: b.key,
    sdkversion: c.sdkversion,
    logversion: c.logversion
  };
  a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({
    url: "https://restapi.amap.com/v4/direction/bicycling",
    data: d,
    method: "GET",
    header: {
      "content-type": "application/json"
    },
    success: function success(b) {
      b && b.data && b.data.data && a.success({
        paths: b.data.data.paths
      });
    },
    fail: function fail(b) {
      a.fail({
        errCode: "0",
        errMsg: b.errMsg || ""
      });
    }
  });
}, module.exports.AMapWX = AMapWX;
})
cmldefine('675', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("0");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Map = function Map() {
  _classCallCheck(this, Map);
};

exports.default = new Map();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})