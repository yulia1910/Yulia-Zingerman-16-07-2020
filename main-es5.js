function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, RoutingComponent */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingComponent", function () {
      return RoutingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _weather_weather_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./weather/weather.component */
    "./src/app/weather/weather.component.ts");
    /* harmony import */


    var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favorites/favorites.component */
    "./src/app/favorites/favorites.component.ts");
    /* harmony import */


    var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./not-found-page/not-found-page.component */
    "./src/app/not-found-page/not-found-page.component.ts");

    var routes = [{
      path: '',
      component: _weather_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"]
    }, {
      path: 'weather',
      component: _weather_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"]
    }, {
      path: 'weather/:key/:city',
      component: _weather_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"]
    }, {
      path: 'favorites',
      component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"]
    }, {
      path: '**',
      component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    var RoutingComponent = [_weather_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"], _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Weather';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./not-found-page/not-found-page.component */
    "./src/app/not-found-page/not-found-page.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _daily_forecast_daily_forecast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./daily-forecast/daily-forecast.component */
    "./src/app/daily-forecast/daily-forecast.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _reducers_favorites_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./reducers/favorites.reducer */
    "./src/app/reducers/favorites.reducer.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var _city_city_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./city/city.component */
    "./src/app/city/city.component.ts");
    /* harmony import */


    var _weather_weather_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./weather/weather.component */
    "./src/app/weather/weather.component.ts");
    /* harmony import */


    var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./favorites/favorites.component */
    "./src/app/favorites/favorites.component.ts");
    /* import { reducers, metaReducers } from './reducers'; */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({
        favorites: _reducers_favorites_reducer__WEBPACK_IMPORTED_MODULE_12__["favoritesReducer"]
      }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production
      }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__["StoreRouterConnectingModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _weather_weather_component__WEBPACK_IMPORTED_MODULE_17__["WeatherComponent"], _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_18__["FavoritesComponent"], _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _daily_forecast_daily_forecast_component__WEBPACK_IMPORTED_MODULE_10__["DailyForecastComponent"], _city_city_component__WEBPACK_IMPORTED_MODULE_16__["CityComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__["StoreRouterConnectingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingComponent"], _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _daily_forecast_daily_forecast_component__WEBPACK_IMPORTED_MODULE_10__["DailyForecastComponent"], _city_city_component__WEBPACK_IMPORTED_MODULE_16__["CityComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({
            favorites: _reducers_favorites_reducer__WEBPACK_IMPORTED_MODULE_12__["favoritesReducer"]
          }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production
          }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__["StoreRouterConnectingModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/city/city.component.ts":
  /*!****************************************!*\
    !*** ./src/app/city/city.component.ts ***!
    \****************************************/

  /*! exports provided: CityComponent */

  /***/
  function srcAppCityCityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityComponent", function () {
      return CityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CityComponent = /*#__PURE__*/function () {
      function CityComponent() {
        _classCallCheck(this, CityComponent);
      }

      _createClass(CityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CityComponent;
    }();

    CityComponent.ɵfac = function CityComponent_Factory(t) {
      return new (t || CityComponent)();
    };

    CityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CityComponent,
      selectors: [["app-city"]],
      inputs: {
        location: "location"
      },
      decls: 7,
      vars: 3,
      consts: [[1, "main"], [1, "name"], [1, "temp"], [1, "description"]],
      template: function CityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location.temp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location.description);
        }
      },
      styles: [".main[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-color: #fcfcfc;\r\n    border: 1px solid #e9e9e9;\r\n    border-radius: 1px;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.name[_ngcontent-%COMP%]{\r\n    color: #bababa;\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n}\r\n.temp[_ngcontent-%COMP%]{\r\n    color: #878787;\r\n    font-size: 1.3rem;\r\n}\r\n.description[_ngcontent-%COMP%]{\r\n    color: #f05514;\r\n    font-size: 1.4rem;\r\n    font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0eS9jaXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jaXR5L2NpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5uYW1le1xyXG4gICAgY29sb3I6ICNiYWJhYmE7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRlbXB7XHJcbiAgICBjb2xvcjogIzg3ODc4NztcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcbi5kZXNjcmlwdGlvbntcclxuICAgIGNvbG9yOiAjZjA1NTE0O1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-city',
          templateUrl: './city.component.html',
          styleUrls: ['./city.component.css']
        }]
      }], function () {
        return [];
      }, {
        location: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/daily-forecast/daily-forecast.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/daily-forecast/daily-forecast.component.ts ***!
    \************************************************************/

  /*! exports provided: DailyForecastComponent */

  /***/
  function srcAppDailyForecastDailyForecastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DailyForecastComponent", function () {
      return DailyForecastComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        selected: a0
      };
    };

    var DailyForecastComponent = /*#__PURE__*/function () {
      function DailyForecastComponent() {
        _classCallCheck(this, DailyForecastComponent);
      }

      _createClass(DailyForecastComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DailyForecastComponent;
    }();

    DailyForecastComponent.ɵfac = function DailyForecastComponent_Factory(t) {
      return new (t || DailyForecastComponent)();
    };

    DailyForecastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DailyForecastComponent,
      selectors: [["app-daily-forecast"]],
      inputs: {
        forecast: "forecast"
      },
      decls: 9,
      vars: 9,
      consts: [[1, "main", 3, "ngClass"], [1, "day"], ["width", "80%", 3, "src"], [1, "temp"], [1, "max"], [1, "min"]],
      template: function DailyForecastComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.forecast.selected == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.forecast.day);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.forecast.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.forecast.maxTemp, "", ctx.forecast.unit, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.forecast.minTemp, "", ctx.forecast.unit, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".main[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-align: center;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    font-size: 1.5rem;\r\n    padding-bottom: 15px;\r\n    padding-top: 10px;\r\n}\r\n.day[_ngcontent-%COMP%] {\r\n    padding-top: 7px;\r\n    line-height: 15px;\r\n    color: #bababa;\r\n    margin-bottom: 20px;\r\n}\r\n.max[_ngcontent-%COMP%]{\r\n    color: #878787;\r\n    padding-right: 5px;\r\n    display: inline;\r\n    margin: 10px;\r\n}\r\n.min[_ngcontent-%COMP%]{\r\n    color: #bababa;\r\n    display: inline;\r\n}\r\n.temp[_ngcontent-%COMP%]{\r\n  display: block;  \r\n  font-size: 1.3rem;\r\n}\r\n.selected[_ngcontent-%COMP%]{\r\n    background-color: #fcfcfc;\r\n    border: 1px solid #e9e9e9;\r\n    border-radius: 1px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFpbHktZm9yZWNhc3QvZGFpbHktZm9yZWNhc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZGFpbHktZm9yZWNhc3QvZGFpbHktZm9yZWNhc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLmRheSB7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogI2JhYmFiYTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLm1heHtcclxuICAgIGNvbG9yOiAjODc4Nzg3O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5taW57XHJcbiAgICBjb2xvcjogI2JhYmFiYTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4udGVtcHtcclxuICBkaXNwbGF5OiBibG9jazsgIFxyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcbi5zZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyForecastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-daily-forecast',
          templateUrl: './daily-forecast.component.html',
          styleUrls: ['./daily-forecast.component.css']
        }]
      }], function () {
        return [];
      }, {
        forecast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/favorites/favorites.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/favorites/favorites.component.ts ***!
    \**************************************************/

  /*! exports provided: FavoritesComponent */

  /***/
  function srcAppFavoritesFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () {
      return FavoritesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _reducers_favorites_Selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../reducers/favorites.Selectors */
    "./src/app/reducers/favorites.Selectors.ts");
    /* harmony import */


    var _weather_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../weather/weather.service */
    "./src/app/weather/weather.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _city_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../city/city.component */
    "./src/app/city/city.component.ts");

    function FavoritesComponent_app_city_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-city", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritesComponent_app_city_3_Template_app_city_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var fav_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onClick(fav_r1.key, fav_r1.cityName);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fav_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("location", fav_r1);
      }
    }

    var FavoritesComponent = /*#__PURE__*/function () {
      function FavoritesComponent(store, weatherService, router) {
        _classCallCheck(this, FavoritesComponent);

        this.store = store;
        this.weatherService = weatherService;
        this.router = router;
        this.header = 'Favorite Locations';
        this.favorites = [];
        this.subscriptions = [];
      }

      _createClass(FavoritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription1 = this.store.select(_reducers_favorites_Selectors__WEBPACK_IMPORTED_MODULE_1__["selectFavorites"]).subscribe(function (favoritesArr) {
            favoritesArr.map(function (city) {
              _this.subscriptions.push(_this.weatherService.getCurrentCondition(city.key).subscribe(function (cond) {
                _this.favorites.push({
                  "key": city.key,
                  "cityName": city.cityName,
                  "temp": cond[0].Temperature.Imperial.Value + cond[0].Temperature.Imperial.Unit,
                  "description": cond[0].WeatherText
                });
              }));
            });
          });
        }
      }, {
        key: "onClick",
        value: function onClick(key, city) {
          this.router.navigate(['weather', key, city.toString()]);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription1.unsubscribe();
          this.subscriptions.forEach(function (subscription) {
            return subscription.unsubscribe();
          });
        }
      }]);

      return FavoritesComponent;
    }();

    FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) {
      return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FavoritesComponent,
      selectors: [["app-favorites"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_weather_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])],
      decls: 4,
      vars: 2,
      consts: [[1, "main"], [3, "header"], [1, "container", "d-flex", "justify-content-start", "flex-wrap"], ["class", "city", 3, "location", "click", 4, "ngFor", "ngForOf"], [1, "city", 3, "location", "click"]],
      template: function FavoritesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FavoritesComponent_app_city_3_Template, 1, 1, "app-city", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favorites);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _city_city_component__WEBPACK_IMPORTED_MODULE_7__["CityComponent"]],
      styles: [".main[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin-top: 30px;\r\n    margin-bottom: 20px;\r\n}\r\n.city[_ngcontent-%COMP%]{\r\n  \r\n  margin-right: 2%;\r\n}\r\n.massage[_ngcontent-%COMP%]{\r\n    color: #878787;\r\n    font-size: 1.4rem;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    top: 30%;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .city[_ngcontent-%COMP%]{\r\n        width: 200px;\r\n    }\r\n  }\r\n@media only screen and (min-width: 600px) {\r\n    .city[_ngcontent-%COMP%]{\r\n        width: 200px;\r\n    }\r\n}\r\n@media only screen and (min-width: 992px) {\r\n    .city[_ngcontent-%COMP%]{\r\n        width: 300px;\r\n    }\r\n    \r\n}\r\n@media only screen and (min-width: 1200px) {\r\n     .city[_ngcontent-%COMP%]{\r\n        width: 300px;\r\n    }\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSTtRQUNJLFlBQVk7SUFDaEI7RUFDRjtBQUVGO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSjtBQUVBO0tBQ0s7UUFDRyxZQUFZO0lBQ2hCOztFQUVGIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jaXR5e1xyXG4gIC8qICB3aWR0aDogMTUlOyAqL1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuLm1hc3NhZ2V7XHJcbiAgICBjb2xvcjogIzg3ODc4NztcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNpdHl7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jaXR5e1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNpdHl7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgLmNpdHl7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-favorites',
          templateUrl: './favorites.component.html',
          styleUrls: ['./favorites.component.css'],
          providers: [_weather_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]]
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _weather_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/globle.ts":
  /*!***************************!*\
    !*** ./src/app/globle.ts ***!
    \***************************/

  /*! exports provided: api */

  /***/
  function srcAppGlobleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "api", function () {
      return api;
    });

    var api = {
      //apiKey: 'AoyF1lGC2EoRuVGrTJeAD29GGjUzmlDn',
      // apiKey: 'efVbvA0cJoWkqDkWBsLcUvLwzYmXeZ0d',
      apiKey: 'V950odAsNBqkvfjrL8L76oUUwtZZEPGP',
      defaultKey: '215854',
      defaultCity: 'Tel aviv',
      baseApiUrl: 'http://dataservice.accuweather.com',
      location: 'locations/v1/cities/autocomplete',
      forecast: 'forecasts/v1/daily/5day/',
      imageBaseUrl: 'https://developer.accuweather.com/sites/default/files/',
      currentCondition: 'currentconditions/v1/'
    };
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = function HeaderComponent() {
      _classCallCheck(this, HeaderComponent);
    };

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        header: "header"
      },
      decls: 8,
      vars: 1,
      consts: [[1, "main", "d-flex", "justify-content-center"], [1, "title"], [1, "nav"], ["href", "weather"], ["href", "favorites"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DAILY FORECASTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FAVORITES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
        }
      },
      styles: [".main[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    font-family: Heebo;\r\n    border-bottom: 1px solid #ddd;\r\n    line-height: 1.2rem;\r\n    padding: 10px 20px 10px 20px;\r\n    color: #878787;\r\n}\r\n.title[_ngcontent-%COMP%]{\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    width: 60%;\r\n}\r\n.nav[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n}\r\n.nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    color: #878787;\r\n}\r\n.nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover{\r\n    color: #f05514;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogSGVlYm87XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgY29sb3I6ICM4Nzg3ODc7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4ubmF2e1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG4ubmF2ID4gYXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBjb2xvcjogIzg3ODc4NztcclxufVxyXG4ubmF2ID4gYTpob3ZlcntcclxuICAgIGNvbG9yOiAjZjA1NTE0O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, {
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/http.service.ts":
  /*!*********************************!*\
    !*** ./src/app/http.service.ts ***!
    \*********************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);

    var HttpService = /*#__PURE__*/function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.baseApiUrl = "http://dataservice.accuweather.com";
      }

      _createClass(HttpService, [{
        key: "getHttpHeaders",
        value: function getHttpHeaders() {
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
        }
      }, {
        key: "get",
        value: function get(endpoint, queryStringParams) {
          var _this2 = this;

          return this.http.get("".concat(this.baseApiUrl, "/").concat(endpoint), {
            headers: this.getHttpHeaders(),
            observe: 'response',
            params: queryStringParams
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this2.handleError(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return !Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(response) && response.body ? response.body : null;
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(errorResponse) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('There is a problem with the service. We are notified & working on it. Please try again later.');
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-found-page/not-found-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/not-found-page/not-found-page.component.ts ***!
    \************************************************************/

  /*! exports provided: NotFoundPageComponent */

  /***/
  function srcAppNotFoundPageNotFoundPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function () {
      return NotFoundPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");

    var NotFoundPageComponent = /*#__PURE__*/function () {
      function NotFoundPageComponent() {
        _classCallCheck(this, NotFoundPageComponent);

        this.header = "Weather";
      }

      _createClass(NotFoundPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundPageComponent;
    }();

    NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) {
      return new (t || NotFoundPageComponent)();
    };

    NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundPageComponent,
      selectors: [["app-not-found-page"]],
      decls: 3,
      vars: 1,
      consts: [[3, "header"], [1, "main"]],
      template: function NotFoundPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page not found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
      styles: [".main[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    color: #878787;\r\n    font-weight: 600;\r\n    top:50%;\r\n    position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC1wYWdlL25vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogIzg3ODc4NztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found-page',
          templateUrl: './not-found-page.component.html',
          styleUrls: ['./not-found-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/reducers/favorites.Selectors.ts":
  /*!*************************************************!*\
    !*** ./src/app/reducers/favorites.Selectors.ts ***!
    \*************************************************/

  /*! exports provided: selectFavoritesState, selectFavorites */

  /***/
  function srcAppReducersFavoritesSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectFavoritesState", function () {
      return selectFavoritesState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectFavorites", function () {
      return selectFavorites;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _favorites_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./favorites.reducer */
    "./src/app/reducers/favorites.reducer.ts");

    var selectFavoritesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_favorites_reducer__WEBPACK_IMPORTED_MODULE_1__["favoriteNode"]);
    var selectFavorites = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFavoritesState, function (state) {
      return state.favorites;
    });
    /***/
  },

  /***/
  "./src/app/reducers/favorites.action.ts":
  /*!**********************************************!*\
    !*** ./src/app/reducers/favorites.action.ts ***!
    \**********************************************/

  /*! exports provided: LOAD_FAVORITES, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, GetFavorites, AddToFavorites, RemoveFromFavorites */

  /***/
  function srcAppReducersFavoritesActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOAD_FAVORITES", function () {
      return LOAD_FAVORITES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_TO_FAVORITES", function () {
      return ADD_TO_FAVORITES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_FAVORITES", function () {
      return REMOVE_FROM_FAVORITES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetFavorites", function () {
      return GetFavorites;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddToFavorites", function () {
      return AddToFavorites;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveFromFavorites", function () {
      return RemoveFromFavorites;
    });

    var LOAD_FAVORITES = 'Get All Saved Favorites';
    var ADD_TO_FAVORITES = 'Add City To Favorites';
    var REMOVE_FROM_FAVORITES = 'Remove City From Favorites';

    var GetFavorites = function GetFavorites(payload) {
      _classCallCheck(this, GetFavorites);

      this.payload = payload;
      this.type = LOAD_FAVORITES;
    };

    var AddToFavorites = function AddToFavorites(payload) {
      _classCallCheck(this, AddToFavorites);

      this.payload = payload;
      this.type = ADD_TO_FAVORITES;
    };

    var RemoveFromFavorites = function RemoveFromFavorites(payload) {
      _classCallCheck(this, RemoveFromFavorites);

      this.payload = payload;
      this.type = REMOVE_FROM_FAVORITES;
    };
    /***/

  },

  /***/
  "./src/app/reducers/favorites.reducer.ts":
  /*!***********************************************!*\
    !*** ./src/app/reducers/favorites.reducer.ts ***!
    \***********************************************/

  /*! exports provided: favoriteNode, favoritesReducer */

  /***/
  function srcAppReducersFavoritesReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "favoriteNode", function () {
      return favoriteNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "favoritesReducer", function () {
      return favoritesReducer;
    });
    /* harmony import */


    var _favorites_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./favorites.action */
    "./src/app/reducers/favorites.action.ts");

    var favoriteNode = 'favorites';
    var initinalState = {
      favorites: []
    };

    function favoritesReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initinalState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _favorites_action__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_FAVORITES"]:
          {
            return Object.assign(Object.assign({}, state), {
              favorites: [].concat(_toConsumableArray(state.favorites), [action.payload])
            });
          }

        case _favorites_action__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FROM_FAVORITES"]:
          {
            return Object.assign(Object.assign({}, state), {
              favorites: state.favorites.filter(function (item) {
                return item.key != action.payload;
              })
            });
          }

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/weather/weather.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/weather/weather.component.ts ***!
    \**********************************************/

  /*! exports provided: WeatherComponent */

  /***/
  function srcAppWeatherWeatherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherComponent", function () {
      return WeatherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./weather.service */
    "./src/app/weather/weather.service.ts");
    /* harmony import */


    var _globle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../globle */
    "./src/app/globle.ts");
    /* harmony import */


    var _reducers_favorites_Selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../reducers/favorites.Selectors */
    "./src/app/reducers/favorites.Selectors.ts");
    /* harmony import */


    var _reducers_favorites_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../reducers/favorites.action */
    "./src/app/reducers/favorites.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _daily_forecast_daily_forecast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../daily-forecast/daily-forecast.component */
    "./src/app/daily-forecast/daily-forecast.component.ts");

    function WeatherComponent_div_0_app_daily_forecast_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-daily-forecast", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherComponent_div_0_app_daily_forecast_22_Template_app_daily_forecast_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var forecast_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.onClick(forecast_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var forecast_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forecast", forecast_r3);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "favorite": a0
      };
    };

    function WeatherComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-autoComplete", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeatherComponent_div_0_Template_p_autoComplete_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.selectedCountry = $event;
        })("completeMethod", function WeatherComponent_div_0_Template_p_autoComplete_completeMethod_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.searchCountry($event);
        })("onSelect", function WeatherComponent_div_0_Template_p_autoComplete_onSelect_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.selectCountry($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherComponent_div_0_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.addOrRemoteFavorite(ctx_r10.selectedCountry);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WeatherComponent_div_0_app_daily_forecast_22_Template, 1, 1, "app-daily-forecast", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx_r0.header);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r0.selectedCountry.favorite))("ngModel", ctx_r0.selectedCountry)("suggestions", ctx_r0.countriesSuggestions)("dropdown", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.addRemoveAction);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentCity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedDay == null ? null : ctx_r0.selectedDay.dayLong);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedDay == null ? null : ctx_r0.selectedDay.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.selectedDay == null ? null : ctx_r0.selectedDay.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.selectedDay == null ? null : ctx_r0.selectedDay.maxTemp, "", ctx_r0.selectedDay == null ? null : ctx_r0.selectedDay.unit, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.forecasts);
      }
    }

    function WeatherComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorR);
      }
    }

    var WeatherComponent = /*#__PURE__*/function () {
      function WeatherComponent(lacationService, store, route) {
        _classCallCheck(this, WeatherComponent);

        this.lacationService = lacationService;
        this.store = store;
        this.route = route;
        this.title = " Weather";
        this.currentCity = _globle__WEBPACK_IMPORTED_MODULE_2__["api"].defaultCity;
        this.currencyCityKey = _globle__WEBPACK_IMPORTED_MODULE_2__["api"].defaultKey;
        this.addRemoveAction = "Add to Favorites";
      }

      _createClass(WeatherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var key = this.route.snapshot.paramMap.get('key');

          if (key == null) {
            this.subscription5 = this.store.select(_reducers_favorites_Selectors__WEBPACK_IMPORTED_MODULE_3__["selectFavorites"]).subscribe(function (favoritesArr) {
              if (favoritesArr.length != 0) {
                if (favoritesArr.filter(function (item) {
                  return item.key == _this3.currencyCityKey;
                }).length != 0) {
                  _this3.selectedCountry = {
                    key: _globle__WEBPACK_IMPORTED_MODULE_2__["api"].defaultKey,
                    name: _globle__WEBPACK_IMPORTED_MODULE_2__["api"].defaultCity,
                    favorite: true
                  };
                  _this3.addRemoveAction = 'Remove From  Favorites';
                } else {
                  _this3.selectedCountry = {
                    key: _globle__WEBPACK_IMPORTED_MODULE_2__["api"].defaultKey,
                    name: _globle__WEBPACK_IMPORTED_MODULE_2__["api"].defaultCity,
                    favorite: false
                  };
                  _this3.addRemoveAction = 'Add To Favorites';
                }
              } else {
                _this3.selectedCountry = {
                  key: _globle__WEBPACK_IMPORTED_MODULE_2__["api"].defaultKey,
                  name: _globle__WEBPACK_IMPORTED_MODULE_2__["api"].defaultCity,
                  favorite: false
                };
                _this3.addRemoveAction = 'Add To Favorites';
              }
            });
          } else {
            this.selectedCountry = {
              key: key,
              name: this.route.snapshot.paramMap.get('city'),
              favorite: true
            };
            this.addRemoveAction = 'Remove From Favorites';
          }

          this.currentCity = this.selectedCountry.name;
          this.header = "".concat(this.selectedCountry.name).concat(this.title);
          this.subscription1 = this.lacationService.getForeCast(this.selectedCountry.key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return _this3.errorR = err;
          })).subscribe(function (res) {
            _this3.dailyForecasts = res;

            _this3.getForecasts(res);
          });
        }
      }, {
        key: "searchCountry",
        value: function searchCountry(event) {
          var _this4 = this;

          this.subscription2 = this.lacationService.getLocations(event.query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return _this4.errorR = err;
          })).subscribe(function (res) {
            _this4.countriesSuggestions = res.map(function (country) {
              return {
                key: country.Key,
                name: country.LocalizedName,
                favorite: false
              };
            });
          });
        }
      }, {
        key: "getUrl",
        value: function getUrl(icon) {
          var idIcon = icon < 10 ? "0".concat(icon) : icon;
          return "".concat(_globle__WEBPACK_IMPORTED_MODULE_2__["api"].imageBaseUrl).concat(idIcon, "-s.png");
        }
      }, {
        key: "selectCountry",
        value: function selectCountry(event) {
          var _this5 = this;

          this.currentCity = event.name;
          this.header = "".concat(this.currentCity).concat(this.title);
          this.currencyCityKey = event.key;
          this.subscription3 = this.lacationService.getForeCast(this.currencyCityKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return _this5.errorR = err;
          })).subscribe(function (res) {
            _this5.getForecasts(res);
          });
          this.subscription4 = this.store.select(_reducers_favorites_Selectors__WEBPACK_IMPORTED_MODULE_3__["selectFavorites"]).subscribe(function (favoritesArr) {
            if (favoritesArr.length != 0) {
              if (favoritesArr.filter(function (item) {
                return item.key == event.key;
              }).length != 0) {
                _this5.selectedCountry = {
                  key: event.key,
                  name: event.name,
                  favorite: true
                };
                _this5.addRemoveAction = 'Remove From Favorites';
              } else {
                _this5.selectedCountry = {
                  key: event.key,
                  name: event.name,
                  favorite: false
                };
                _this5.addRemoveAction = 'Add To Favorites';
              }
            } else {
              _this5.selectedCountry = {
                key: event.key,
                name: event.name,
                favorite: false
              };
              _this5.addRemoveAction = 'Add To Favorites';
            }
          });
        }
      }, {
        key: "getForecasts",
        value: function getForecasts(res) {
          var _this6 = this;

          this.forecasts = res.DailyForecasts.map(function (day) {
            return {
              iconUrl: _this6.getUrl(day.Day.Icon),
              day: new Date(day.Date).toLocaleString('en-us', {
                weekday: 'short'
              }),
              dayLong: new Date(day.Date).toLocaleString('en-us', {
                weekday: 'long'
              }),
              minTemp: day.Temperature.Minimum.Value.toString(),
              maxTemp: day.Temperature.Maximum.Value.toString(),
              unit: day.Temperature.Maximum.Unit,
              description: day.Day.IconPhrase,
              selected: false
            };
          });
          this.selectedDay = this.forecasts[0];
          this.selectedDay.selected = true;
        }
      }, {
        key: "onClick",
        value: function onClick(forecast) {
          this.forecasts.filter(function (res) {
            return res.selected == true;
          })[0].selected = false;
          this.selectedDay = forecast;
          this.selectedDay.selected = true;
        }
      }, {
        key: "addOrRemoteFavorite",
        value: function addOrRemoteFavorite(city) {
          if (city.favorite == false) {
            this.selectedCountry = {
              key: this.selectedCountry.key,
              name: this.selectedCountry.name,
              favorite: true
            };
            this.store.dispatch(new _reducers_favorites_action__WEBPACK_IMPORTED_MODULE_4__["AddToFavorites"]({
              "key": this.selectedCountry.key.toString(),
              "cityName": this.selectedCountry.name
            }));
            this.addRemoveAction = 'Remove From Favorites';
          } else {
            this.store.dispatch(new _reducers_favorites_action__WEBPACK_IMPORTED_MODULE_4__["RemoveFromFavorites"](city.key));
            this.selectedCountry = {
              key: this.selectedCountry.key,
              name: this.selectedCountry.name,
              favorite: false
            };
            this.addRemoveAction = 'Add To Favorites';
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription1.unsubscribe();
          this.subscription2.unsubscribe();
          this.subscription3.unsubscribe();
          this.subscription4.unsubscribe();
          this.subscription5.unsubscribe();
        }
      }]);

      return WeatherComponent;
    }();

    WeatherComponent.ɵfac = function WeatherComponent_Factory(t) {
      return new (t || WeatherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
    };

    WeatherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WeatherComponent,
      selectors: [["app-weather"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])],
      decls: 2,
      vars: 2,
      consts: [["class", "main", 4, "ngIf"], ["class", "backdrop", 4, "ngIf"], [1, "main"], [1, "header", 3, "header"], [1, "autocomplete", "d-flex", "justify-content-center"], [1, "search", "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "fa", "fa-search", "fa-fw"], ["field", "name", 3, "ngClass", "ngModel", "suggestions", "dropdown", "ngModelChange", "completeMethod", "onSelect"], [1, "buttonF", 3, "click"], [1, "selected", "d-flex", "flex-row"], [1, "city"], [1, "day"], [1, "description"], [1, "details", "d-flex", "flex-row"], ["width", "190", "height", "120", 1, "img", 3, "src"], [1, "temp"], [1, "container", "d-flex", "justify-content-between", "flex-wrap"], ["class", "item", 3, "forecast", "click", 4, "ngFor", "ngForOf"], [1, "item", 3, "forecast", "click"], [1, "backdrop"], [1, "error"]],
      template: function WeatherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeatherComponent_div_0_Template, 23, 15, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherComponent_div_1_Template, 3, 1, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.errorR);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorR);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__["AutoComplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _daily_forecast_daily_forecast_component__WEBPACK_IMPORTED_MODULE_12__["DailyForecastComponent"]],
      styles: [".main[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    overflow-y: scroll;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n}\r\n.autocomplete[_ngcontent-%COMP%]{\r\n    margin-top: 70px;\r\n    width: 100%;\r\n}\r\n.buttonF[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n    border-radius: 4px;;\r\n    background-color: #337ab7;\r\n    border-color: #2e6da4;\r\n    cursor: pointer;\r\n    border: 1px solid transparent;\r\n    \r\n    color: #fff;\r\n    width: 181px;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n    background-color: #eee;\r\n    border: 1px solid #ccc;\r\n    border-bottom-left-radius: 5px;\r\n    border-top-left-radius: 4px;\r\n    width: 30px;\r\n    border-right: 0px;\r\n}\r\n[_nghost-%COMP%]     .ui-autocomplete .ui-button.ui-button-icon-only{\r\n    display: none !important;\r\n}\r\n[_nghost-%COMP%]     .ui-inputtext{\r\n    width: 300px;\r\n    border-color: #ccc !important;\r\n    border-bottom-left-radius: 0px !important;\r\n    border-top-left-radius: 0px !important;\r\n    border-top-right-radius: 4px !important;\r\n    border-bottom-right-radius: 4px !important;\r\n    \r\n}\r\n[_nghost-%COMP%]     .ui-inputtext:enabled:focus{\r\n   border-color: #ccc !important;\r\n   box-shadow: none !important;\r\n   text-decoration: none !important;\r\n   outline: none !important;\r\n}\r\n[_nghost-%COMP%]     .favorite .ui-inputtext {\r\n    color: #f05514;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.item[_ngcontent-%COMP%]{\r\n    width: 25%;\r\n}\r\n.selected[_ngcontent-%COMP%]{\r\n    margin-left: 5%;\r\n    margin-top: 123px;\r\n    margin-bottom: 100px;\r\n}\r\n.city[_ngcontent-%COMP%]{\r\n    color: #878787;\r\n    text-align: left;\r\n    font-size: 1.8rem;\r\n}\r\n.day[_ngcontent-%COMP%]{\r\n    font-size: 1.2rem;\r\n    color: #878787;\r\n    text-align: left;\r\n}\r\n.description[_ngcontent-%COMP%]{\r\n    font-size: 1.2rem;\r\n    color: #878787;\r\n    text-align: left;\r\n}\r\n.temp[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n    color: #212121;\r\n    align-self: center;\r\n}\r\n.clicked[_ngcontent-%COMP%]{\r\n    background-color: #fcfcfc;\r\n    border: 1px solid #e9e9e9;\r\n    border-radius: 1px; \r\n}\r\n@media only screen and (max-width: 600px) {\r\n    [_nghost-%COMP%]     .ui-inputtext{\r\n        width: 100px;\r\n    }\r\n    .item[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n    }\r\n  }\r\n@media only screen and (min-width: 600px) {\r\n    [_nghost-%COMP%]     .ui-inputtext{\r\n        width: 200px;\r\n    }\r\n    .item[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n    }\r\n}\r\n@media only screen and (min-width: 992px) {\r\n    [_nghost-%COMP%]     .ui-inputtext{\r\n        width: 300px;\r\n    }\r\n    .item[_ngcontent-%COMP%]{\r\n        width: 45%;\r\n    }\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n    [_nghost-%COMP%]     .ui-inputtext{\r\n        width: 400px;\r\n    }\r\n    .item[_ngcontent-%COMP%]{\r\n        width: 20%;\r\n    }\r\n  }\r\n.backdrop[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 1;\r\n}\r\n.error[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 30%;\r\n    font-weight: 600;\r\n    color: #878787;\r\n    font-size: 1.4rem;\r\n    right: 20%;\r\n    left: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMsc0JBQXNCO0FBQzFCO0FBRUE7R0FDRyw2QkFBNkI7R0FDN0IsMkJBQTJCO0dBQzNCLGdDQUFnQztHQUNoQyx3QkFBd0I7QUFDM0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQztJQUNHLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtFQUNGO0FBRUY7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtFQUNGO0FBRUE7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5hdXRvY29tcGxldGV7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJ1dHRvbkZ7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcclxuICAgIGJvcmRlci1jb2xvcjogIzJlNmRhNDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgLyogcGFkZGluZzogNnB4IDEycHg7ICovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxODFweDtcclxufVxyXG4uc2VhcmNoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJvcmRlci1yaWdodDogMHB4O1xyXG59XHJcbjpob3N0ID4+PiAudWktYXV0b2NvbXBsZXRlIC51aS1idXR0b24udWktYnV0dG9uLWljb24tb25seXtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA+Pj4gLnVpLWlucHV0dGV4dHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAwcHg7ICovXHJcbn1cclxuXHJcbjpob3N0ID4+PiAudWktaW5wdXR0ZXh0OmVuYWJsZWQ6Zm9jdXN7XHJcbiAgIGJvcmRlci1jb2xvcjogI2NjYyAhaW1wb3J0YW50O1xyXG4gICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgPj4+IC5mYXZvcml0ZSAudWktaW5wdXR0ZXh0IHtcclxuICAgIGNvbG9yOiAjZjA1NTE0O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLml0ZW17XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4uc2VsZWN0ZWR7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbi5jaXR5e1xyXG4gICAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbn1cclxuLmRheXtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5kZXNjcmlwdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZW1we1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuIC5jbGlja2Vke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7IFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICA6aG9zdCA+Pj4gLnVpLWlucHV0dGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbXtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIDpob3N0ID4+PiAudWktaW5wdXR0ZXh0e1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICAgIC5pdGVte1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIDpob3N0ID4+PiAudWktaW5wdXR0ZXh0e1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIC5pdGVte1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICA6aG9zdCA+Pj4gLnVpLWlucHV0dGV4dHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbXtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJhY2tkcm9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4uZXJyb3J7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzg3ODc4NztcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgcmlnaHQ6IDIwJTtcclxuICAgIGxlZnQ6IDIwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-weather',
          templateUrl: './weather.component.html',
          styleUrls: ['./weather.component.css'],
          providers: [_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]]
        }]
      }], function () {
        return [{
          type: _weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/weather/weather.service.ts":
  /*!********************************************!*\
    !*** ./src/app/weather/weather.service.ts ***!
    \********************************************/

  /*! exports provided: WeatherService */

  /***/
  function srcAppWeatherWeatherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherService", function () {
      return WeatherService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _globle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../globle */
    "./src/app/globle.ts");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../http.service */
    "./src/app/http.service.ts");

    var WeatherService = /*#__PURE__*/function () {
      function WeatherService(http) {
        _classCallCheck(this, WeatherService);

        this.http = http;
      }

      _createClass(WeatherService, [{
        key: "getLocations",
        value: function getLocations(keyWord) {
          var queryString = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apikey', _globle__WEBPACK_IMPORTED_MODULE_2__["api"].apiKey).set('q', keyWord).set('language', 'en-us');
          return this.http.get(_globle__WEBPACK_IMPORTED_MODULE_2__["api"].location, queryString);
        }
      }, {
        key: "getForeCast",
        value: function getForeCast(cityKey) {
          var queryString = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apikey', _globle__WEBPACK_IMPORTED_MODULE_2__["api"].apiKey);
          return this.http.get("".concat(_globle__WEBPACK_IMPORTED_MODULE_2__["api"].forecast).concat(cityKey), queryString);
        }
      }, {
        key: "getCurrentCondition",
        value: function getCurrentCondition(cityKey) {
          var queryString = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apikey', _globle__WEBPACK_IMPORTED_MODULE_2__["api"].apiKey);
          return this.http.get("".concat(_globle__WEBPACK_IMPORTED_MODULE_2__["api"].currentCondition).concat(cityKey), queryString);
        }
      }]);

      return WeatherService;
    }();

    WeatherService.ɵfac = function WeatherService_Factory(t) {
      return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
    };

    WeatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WeatherService,
      factory: WeatherService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Yulia\Herolo\weather\weather\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map