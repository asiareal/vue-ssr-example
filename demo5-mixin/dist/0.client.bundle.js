webpackJsonp([0],{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_other_item_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_820d4ca0_hasScoped_false_preserveWhitespace_false_node_modules_vue_loader_lib_selector_type_template_index_0_other_item_vue__ = __webpack_require__(27);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_other_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_820d4ca0_hasScoped_false_preserveWhitespace_false_node_modules_vue_loader_lib_selector_type_template_index_0_other_item_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "demo5-mixin/src/components/other-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] other-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-820d4ca0", Component.options)
  } else {
    hotAPI.reload("data-v-820d4ca0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchItem; });
// api
var fetchItem = function fetchItem(id, name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ id: id, title: name + id });
    }, 1000);
  });
};

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_store_modules_other_item__ = __webpack_require__(26);
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        route = _ref.route;

    console.log('asyncData');
    store.registerModule('otherItem', __WEBPACK_IMPORTED_MODULE_0_src_store_modules_other_item__["a" /* default */]);
    // 触发 action 后，会返回 Promise
    return store.dispatch('otherItem/fetchItem', route.params.id);
  },

  // 重要信息：当多次访问路由时，
  // 避免在客户端重复注册模块。
  destroyed: function destroyed() {
    this.$store.unregisterModule('otherItem');
  },

  computed: {
    // 从 store 的 state 对象中的获取 item。
    item: function item() {
      return this.$store.state['otherItem'].items[this.$route.params.id];
    }
  }
});

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_api__ = __webpack_require__(21);
// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）



/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: {
    items: {}
  },
  actions: {
    fetchItem: function fetchItem(_ref, id) {
      var commit = _ref.commit;

      // `store.dispatch()` 会返回 Promise，
      // 以便我们能够知道数据在何时更新
      return Object(__WEBPACK_IMPORTED_MODULE_1_src_api__["a" /* fetchItem */])(id, 'other-item').then(function (item) {
        commit('setItem', { id: id, item: item });
      });
    }
  },
  mutations: {
    setItem: function setItem(state, _ref2) {
      var id = _ref2.id,
          item = _ref2.item;

      __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].set(state.items, id, item);
    }
  }
});

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', [_vm._v(_vm._s(_vm.item && _vm.item.title))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-820d4ca0", esExports)
  }
}

/***/ })

});