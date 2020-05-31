(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_cars_page_cars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-cars/page-cars.component */ "./src/app/page-cars/page-cars.component.ts");
/* harmony import */ var _page_orders_page_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-orders/page-orders.component */ "./src/app/page-orders/page-orders.component.ts");
/* harmony import */ var _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-home/page-home.component */ "./src/app/page-home/page-home.component.ts");
/* harmony import */ var _page_configuration_page_configuration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-configuration/page-configuration.component */ "./src/app/page-configuration/page-configuration.component.ts");
/* harmony import */ var _page_thanks_page_thanks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-thanks/page-thanks.component */ "./src/app/page-thanks/page-thanks.component.ts");
/* harmony import */ var _page_privacy_policy_page_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-privacy-policy/page-privacy-policy.component */ "./src/app/page-privacy-policy/page-privacy-policy.component.ts");










const routes = [
    { path: 'cars', component: _page_cars_page_cars_component__WEBPACK_IMPORTED_MODULE_2__["PageCarsComponent"] },
    { path: 'orders', component: _page_orders_page_orders_component__WEBPACK_IMPORTED_MODULE_3__["PageOrdersComponent"] },
    { path: 'home', component: _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_4__["PageHomeComponent"] },
    { path: 'configuration', component: _page_configuration_page_configuration_component__WEBPACK_IMPORTED_MODULE_5__["PageConfigurationComponent"] },
    { path: 'thanks', component: _page_thanks_page_thanks_component__WEBPACK_IMPORTED_MODULE_6__["PageThanksComponent"] },
    { path: 'pp', component: _page_privacy_policy_page_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__["PagePrivacyPolicyComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_page_cars_page_cars_component__WEBPACK_IMPORTED_MODULE_2__["PageCarsComponent"], _page_orders_page_orders_component__WEBPACK_IMPORTED_MODULE_3__["PageOrdersComponent"],
    _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_4__["PageHomeComponent"], _page_configuration_page_configuration_component__WEBPACK_IMPORTED_MODULE_5__["PageConfigurationComponent"], _page_thanks_page_thanks_component__WEBPACK_IMPORTED_MODULE_6__["PageThanksComponent"], _page_privacy_policy_page_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__["PagePrivacyPolicyComponent"]];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_order_info_page_order_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-order-info/page-order-info.component */ "./src/app/page-order-info/page-order-info.component.ts");
/* harmony import */ var _comp_addon_comp_addon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp-addon/comp-addon.component */ "./src/app/comp-addon/comp-addon.component.ts");
/* harmony import */ var _comp_order_comp_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp-order/comp-order.component */ "./src/app/comp-order/comp-order.component.ts");
/* harmony import */ var _page_cars_page_cars_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-cars/page-cars.component */ "./src/app/page-cars/page-cars.component.ts");
/* harmony import */ var _page_orders_page_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-orders/page-orders.component */ "./src/app/page-orders/page-orders.component.ts");
/* harmony import */ var _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-home/page-home.component */ "./src/app/page-home/page-home.component.ts");
/* harmony import */ var _page_configuration_page_configuration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-configuration/page-configuration.component */ "./src/app/page-configuration/page-configuration.component.ts");
/* harmony import */ var _page_thanks_page_thanks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-thanks/page-thanks.component */ "./src/app/page-thanks/page-thanks.component.ts");
/* harmony import */ var _page_privacy_policy_page_privacy_policy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-privacy-policy/page-privacy-policy.component */ "./src/app/page-privacy-policy/page-privacy-policy.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _page_cars_page_cars_component__WEBPACK_IMPORTED_MODULE_7__["PageCarsComponent"], _page_orders_page_orders_component__WEBPACK_IMPORTED_MODULE_8__["PageOrdersComponent"], _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_9__["PageHomeComponent"], _page_configuration_page_configuration_component__WEBPACK_IMPORTED_MODULE_10__["PageConfigurationComponent"], _page_thanks_page_thanks_component__WEBPACK_IMPORTED_MODULE_11__["PageThanksComponent"], _page_privacy_policy_page_privacy_policy_component__WEBPACK_IMPORTED_MODULE_12__["PagePrivacyPolicyComponent"], _page_order_info_page_order_info_component__WEBPACK_IMPORTED_MODULE_4__["PageOrderInfoComponent"],
        _comp_addon_comp_addon_component__WEBPACK_IMPORTED_MODULE_5__["CompAddonComponent"],
        _comp_order_comp_order_component__WEBPACK_IMPORTED_MODULE_6__["CompOrderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
                    _page_order_info_page_order_info_component__WEBPACK_IMPORTED_MODULE_4__["PageOrderInfoComponent"],
                    _comp_addon_comp_addon_component__WEBPACK_IMPORTED_MODULE_5__["CompAddonComponent"],
                    _comp_order_comp_order_component__WEBPACK_IMPORTED_MODULE_6__["CompOrderComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/backend-communication.service.ts":
/*!**************************************************!*\
  !*** ./src/app/backend-communication.service.ts ***!
  \**************************************************/
/*! exports provided: BackendCommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendCommunicationService", function() { return BackendCommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class BackendCommunicationService {
    constructor(http) {
        this.http = http;
        this.hostOrders = 'localhost:3001/orders';
    }
    getOrders() {
        return this.http.get(this.hostOrders);
    }
    getOrder(id) {
        return this.http.get(this.hostOrders + id);
    }
    postOrder(order) {
        return this.http.post(this.hostOrders, order);
    }
}
BackendCommunicationService.ɵfac = function BackendCommunicationService_Factory(t) { return new (t || BackendCommunicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BackendCommunicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendCommunicationService, factory: BackendCommunicationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendCommunicationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comp-addon/comp-addon.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comp-addon/comp-addon.component.ts ***!
  \****************************************************/
/*! exports provided: CompAddonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompAddonComponent", function() { return CompAddonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CompAddonComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompAddonComponent.ɵfac = function CompAddonComponent_Factory(t) { return new (t || CompAddonComponent)(); };
CompAddonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompAddonComponent, selectors: [["app-comp-addon"]], decls: 2, vars: 0, template: function CompAddonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "comp-addon works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtYWRkb24vY29tcC1hZGRvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompAddonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comp-addon',
                templateUrl: './comp-addon.component.html',
                styleUrls: ['./comp-addon.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comp-order/comp-order.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comp-order/comp-order.component.ts ***!
  \****************************************************/
/*! exports provided: CompOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompOrderComponent", function() { return CompOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _backend_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backend-communication.service */ "./src/app/backend-communication.service.ts");



function CompOrderComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.car.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.value);
} }
class CompOrderComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
        this.apiService.getOrders().subscribe((data) => {
            console.log(data);
            this.orders = data;
        });
    }
}
CompOrderComponent.ɵfac = function CompOrderComponent_Factory(t) { return new (t || CompOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_communication_service__WEBPACK_IMPORTED_MODULE_1__["BackendCommunicationService"])); };
CompOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompOrderComponent, selectors: [["app-comp-order"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForIn"], [1, "td-bordered"]], template: function CompOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CompOrderComponent_tr_0_Template, 11, 4, "tr", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForIn", ctx.orders);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtb3JkZXIvY29tcC1vcmRlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comp-order',
                templateUrl: './comp-order.component.html',
                styleUrls: ['./comp-order.component.css']
            }]
    }], function () { return [{ type: _backend_communication_service__WEBPACK_IMPORTED_MODULE_1__["BackendCommunicationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page-cars/page-cars.component.ts":
/*!**************************************************!*\
  !*** ./src/app/page-cars/page-cars.component.ts ***!
  \**************************************************/
/*! exports provided: PageCarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCarsComponent", function() { return PageCarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PageCarsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toS() {
        document.getElementById('models').setAttribute('class', 'border_button_active');
        document.getElementById('model3').setAttribute('class', 'border_button_not_active');
        document.getElementById('modelx').setAttribute('class', 'border_button_not_active');
        document.getElementById('modely').setAttribute('class', 'border_button_not_active');
        document.getElementById('bg').setAttribute('class', 'bg-s');
    }
    to3() {
        document.getElementById('models').setAttribute('class', 'border_button_not_active');
        document.getElementById('model3').setAttribute('class', 'border_button_active');
        document.getElementById('modelx').setAttribute('class', 'border_button_not_active');
        document.getElementById('modely').setAttribute('class', 'border_button_not_active');
        document.getElementById('bg').setAttribute('class', 'bg-3');
    }
    toX() {
        document.getElementById('models').setAttribute('class', 'border_button_not_active');
        document.getElementById('model3').setAttribute('class', 'border_button_not_active');
        document.getElementById('modelx').setAttribute('class', 'border_button_active');
        document.getElementById('modely').setAttribute('class', 'border_button_not_active');
        document.getElementById('bg').setAttribute('class', 'bg-x');
    }
    toY() {
        document.getElementById('models').setAttribute('class', 'border_button_not_active');
        document.getElementById('model3').setAttribute('class', 'border_button_not_active');
        document.getElementById('modelx').setAttribute('class', 'border_button_not_active');
        document.getElementById('modely').setAttribute('class', 'border_button_active');
        document.getElementById('bg').setAttribute('class', 'bg-y');
    }
    toConf() {
        // tslint:disable-next-line:triple-equals
        if (document.getElementById('bg').getAttribute('class') == 'bg-s') {
            this.router.navigate(['configuration'], { queryParams: { car: 'model-s' } });
        }
        // tslint:disable-next-line:triple-equals
        if (document.getElementById('bg').getAttribute('class') == 'bg-3') {
            this.router.navigate(['configuration'], { queryParams: { car: 'model-3' } });
        }
        // tslint:disable-next-line:triple-equals
        if (document.getElementById('bg').getAttribute('class') == 'bg-x') {
            this.router.navigate(['configuration'], { queryParams: { car: 'model-x' } });
        }
        // tslint:disable-next-line:triple-equals
        if (document.getElementById('bg').getAttribute('class') == 'bg-y') {
            this.router.navigate(['configuration'], { queryParams: { car: 'model-y' } });
        }
    }
}
PageCarsComponent.ɵfac = function PageCarsComponent_Factory(t) { return new (t || PageCarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PageCarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageCarsComponent, selectors: [["app-page-cars"]], decls: 15, vars: 0, consts: [["id", "bg", 1, "bg-s"], ["id", "top-panel", 2, "z-index", "1"], ["id", "logo", "routerLink", "/home", "src", "assets/logo_name.svg"], ["id", "models", 1, "border_button_active", 3, "click"], ["id", "model3", 1, "border_button_not_active", 3, "click"], ["id", "modelx", 1, "border_button_not_active", 3, "click"], ["id", "modely", 1, "border_button_not_active", 3, "click"], ["id", "configure-button-div", 2, "z-index", "1"], ["id", "configure-button", 3, "click"]], template: function PageCarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCarsComponent_Template_button_click_4_listener() { return ctx.toS(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Model S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCarsComponent_Template_button_click_6_listener() { return ctx.to3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Model 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCarsComponent_Template_button_click_8_listener() { return ctx.toX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Model X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCarsComponent_Template_button_click_10_listener() { return ctx.toY(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Model Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCarsComponent_Template_button_click_13_listener() { return ctx.toConf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Configure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.border_button_active[_ngcontent-%COMP%] {\n  border: #CCCCCC solid 3px;\n  color: #CCCCCC;\n}\n\n.border_button_not_active[_ngcontent-%COMP%] {\n  border: #000000 solid 3px;\n  color: #000000;\n}\n\n.border_button_not_active[_ngcontent-%COMP%], .border_button_active[_ngcontent-%COMP%] {\n  padding: .4em;\n  margin: 10px;\n  background: transparent;\n  font-size: 2em;\n\n}\n\n#bg[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100vh;\n}\n\n.bg-s[_ngcontent-%COMP%] {\n  background-image: url('bg_s.jpg');\n}\n\n.bg-3[_ngcontent-%COMP%] {\n  background-image: url('bg_3.jpg');\n}\n\n.bg-x[_ngcontent-%COMP%] {\n  background-image: url('bg_x.jpg');\n}\n\n.bg-y[_ngcontent-%COMP%] {\n  background-image: url('bg_y.jpg');\n}\n\n#logo[_ngcontent-%COMP%] {\n  top: 100px;\n  height: 100%;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n\n#top-panel[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: auto;\n  height: 180px;\n  align-items: center;\n  display: inline-flex;\n  border-bottom: #00000088 solid 1px;\n}\n\n#configure-button[_ngcontent-%COMP%]{\n  background: transparent;\n  font-size: 3em;\n  border: #CCCCCC solid 3px;\n  color: #CCCCCC;\n  margin-top: 60vh;\n  padding: .5em 2em .5em 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1jYXJzL3BhZ2UtY2Fycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlDQUE4QztBQUNoRDs7QUFDQTtFQUNFLGlDQUE4QztBQUNoRDs7QUFDQTtFQUNFLGlDQUE4QztBQUNoRDs7QUFDQTtFQUNFLGlDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWNhcnMvcGFnZS1jYXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9yZGVyX2J1dHRvbl9hY3RpdmUge1xuICBib3JkZXI6ICNDQ0NDQ0Mgc29saWQgM3B4O1xuICBjb2xvcjogI0NDQ0NDQztcbn1cblxuLmJvcmRlcl9idXR0b25fbm90X2FjdGl2ZSB7XG4gIGJvcmRlcjogIzAwMDAwMCBzb2xpZCAzcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYm9yZGVyX2J1dHRvbl9ub3RfYWN0aXZlLCAuYm9yZGVyX2J1dHRvbl9hY3RpdmUge1xuICBwYWRkaW5nOiAuNGVtO1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDJlbTtcblxufVxuXG4jYmcge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYmctcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iZ19zLmpwZ1wiKTtcbn1cbi5iZy0zIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JnXzMuanBnXCIpO1xufVxuLmJnLXgge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmdfeC5qcGdcIik7XG59XG4uYmcteSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iZ195LmpwZ1wiKTtcbn1cblxuI2xvZ28ge1xuICB0b3A6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI3RvcC1wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDg4IHNvbGlkIDFweDtcbn1cblxuI2NvbmZpZ3VyZS1idXR0b257XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDNlbTtcbiAgYm9yZGVyOiAjQ0NDQ0NDIHNvbGlkIDNweDtcbiAgY29sb3I6ICNDQ0NDQ0M7XG4gIG1hcmdpbi10b3A6IDYwdmg7XG4gIHBhZGRpbmc6IC41ZW0gMmVtIC41ZW0gMmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageCarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-cars',
                templateUrl: './page-cars.component.html',
                styleUrls: ['./page-cars.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page-configuration/page-configuration.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/page-configuration/page-configuration.component.ts ***!
  \********************************************************************/
/*! exports provided: PageConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageConfigurationComponent", function() { return PageConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PageConfigurationComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        // tslint:disable-next-line:triple-equals
        if (this.route.snapshot.queryParamMap.get('car') == 'model-s') {
            document.getElementById('bg').setAttribute('class', 'bg-s');
        }
        // tslint:disable-next-line:triple-equals
        if (this.route.snapshot.queryParamMap.get('car') == 'model-3') {
            document.getElementById('bg').setAttribute('class', 'bg-3');
        }
        // tslint:disable-next-line:triple-equals
        if (this.route.snapshot.queryParamMap.get('car') == 'model-x') {
            document.getElementById('bg').setAttribute('class', 'bg-x');
        }
        // tslint:disable-next-line:triple-equals
        if (this.route.snapshot.queryParamMap.get('car') == 'model-y') {
            document.getElementById('bg').setAttribute('class', 'bg-y');
        }
    }
}
PageConfigurationComponent.ɵfac = function PageConfigurationComponent_Factory(t) { return new (t || PageConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PageConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageConfigurationComponent, selectors: [["app-page-configuration"]], decls: 28, vars: 0, consts: [["id", "bg", 1, "bg-s"], [1, "container"], ["id", "top-panel"], ["width", "15%"], ["routerLink", "/home", "id", "logo", "src", "assets/logo_name.svg"], ["width", "70%", 2, "border-bottom", "#00000088 solid 1px"], [1, "inner-div"], [2, "text-align", "center"], ["routerLink", "/thanks", "id", "order-button"]], template: function PageConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "MODEL S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Color select: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Additions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cost: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Your name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Phone number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " E-mail address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#bg[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100vh;\n  padding: 0;\n}\n\n.bg-s[_ngcontent-%COMP%] {\n  background: url('bg_s.jpg') no-repeat center center fixed;\n}\n\n.bg-3[_ngcontent-%COMP%] {\n  background: url('bg_3.jpg') no-repeat center center fixed;\n}\n\n.bg-x[_ngcontent-%COMP%] {\n  background: url('bg_x.jpg') no-repeat center center fixed;\n}\n\n.bg-y[_ngcontent-%COMP%] {\n  background: url('bg_y.jpg') no-repeat center center fixed;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 70%;\n  overflow-y: auto;\n  text-align: center;\n  display: inline-block;\n  background: #00000033;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  height: 100%;\n  width: 100%;\n  font-family: Tesla, serif;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  vert-align: bottom;\n  text-align: center;\n  font-size: 8em;\n}\n\n#logo[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 70%;\n  alignment: center;\n}\n\n.inner-div[_ngcontent-%COMP%] {\n  background: #00000066;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  width: 70%;\n  margin-left: 15%;\n  font-size: 2.5em;\n  line-height: 2em;\n  color: #CCCCCC;\n}\n\n#top-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  align-items: center;\n  display: inline-flex;\n}\n\n.td-bordered[_ngcontent-%COMP%] {\n  border: 0;\n  border-left: #00000055 solid 1px;\n  border-right: #00000055 solid 1px;\n}\n\nth[_ngcontent-%COMP%] {\n  border-bottom: black solid 1px;\n}\n\n.border_button[_ngcontent-%COMP%] {\n  background: transparent;\n  font-size: 3em;\n  border: #CCCCCC solid 3px;\n  color: #CCCCCC;\n  padding: .3em;\n\n}\n\n#welcome_order_button[_ngcontent-%COMP%] {\n  margin-top: 43vh;\n  padding: .5em 2em .5em 2em;\n}\n\n#home_button[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.5em;\n  margin-top: 15px;\n  margin-left: 15px;\n}\n\n#order-button[_ngcontent-%COMP%] {\n  background: transparent;\n  font-size: 3em;\n  border: #CCCCCC solid 3px;\n  color: #CCCCCC;\n  margin-top: 30px;\n  margin-bottom: 45px;\n  padding: .5em 2em .5em 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1jb25maWd1cmF0aW9uL3BhZ2UtY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5REFBc0U7QUFDeEU7O0FBQ0E7RUFDRSx5REFBc0U7QUFDeEU7O0FBQ0E7RUFDRSx5REFBc0U7QUFDeEU7O0FBQ0E7RUFDRSx5REFBc0U7QUFDeEU7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1jb25maWd1cmF0aW9uL3BhZ2UtY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2JnIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJnLXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmdfcy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG59XG4uYmctMyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9iZ18zLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbn1cbi5iZy14IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JnX3guanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xufVxuLmJnLXkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmdfeS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogNzAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzAwMDAwMDMzO1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBUZXNsYSwgc2VyaWY7XG59XG5cbnRkLCB0aCB7XG4gIHZlcnQtYWxpZ246IGJvdHRvbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDhlbTtcbn1cblxuI2xvZ28ge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogNzAlO1xuICBhbGlnbm1lbnQ6IGNlbnRlcjtcbn1cblxuLmlubmVyLWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA2NjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgY29sb3I6ICNDQ0NDQ0M7XG59XG5cbiN0b3AtcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi50ZC1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWxlZnQ6ICMwMDAwMDA1NSBzb2xpZCAxcHg7XG4gIGJvcmRlci1yaWdodDogIzAwMDAwMDU1IHNvbGlkIDFweDtcbn1cblxudGgge1xuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAxcHg7XG59XG5cbi5ib3JkZXJfYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBib3JkZXI6ICNDQ0NDQ0Mgc29saWQgM3B4O1xuICBjb2xvcjogI0NDQ0NDQztcbiAgcGFkZGluZzogLjNlbTtcblxufVxuXG4jd2VsY29tZV9vcmRlcl9idXR0b24ge1xuICBtYXJnaW4tdG9wOiA0M3ZoO1xuICBwYWRkaW5nOiAuNWVtIDJlbSAuNWVtIDJlbTtcbn1cblxuI2hvbWVfYnV0dG9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4jb3JkZXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBib3JkZXI6ICNDQ0NDQ0Mgc29saWQgM3B4O1xuICBjb2xvcjogI0NDQ0NDQztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgcGFkZGluZzogLjVlbSAyZW0gLjVlbSAyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-configuration',
                templateUrl: './page-configuration.component.html',
                styleUrls: ['./page-configuration.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page-home/page-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/page-home/page-home.component.ts ***!
  \**************************************************/
/*! exports provided: PageHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeComponent", function() { return PageHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PageHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageHomeComponent.ɵfac = function PageHomeComponent_Factory(t) { return new (t || PageHomeComponent)(); };
PageHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHomeComponent, selectors: [["app-page-home"]], decls: 10, vars: 0, consts: [["align", "right", "width", "100%"], ["routerLink", "/orders", "id", "manage_orders_button", 1, "border_button"], [1, "container"], ["src", "assets/logo_name.svg", "id", "landing_logo"], ["routerLink", "/cars", "id", "welcome_order_button", 1, "border_button"]], template: function PageHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Order now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  background: url('bg_landing.jpg') no-repeat center center fixed;\n}\n#landing_logo[_ngcontent-%COMP%] {\n  width: 15vw;\n  height: 15vw;\n}\n.container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  overflow-y: auto;\n  text-align: center;\n  display: inline-block;\n}\n.border_button[_ngcontent-%COMP%] {\n  background: transparent;\n  font-size: 3em;\n  border: #CCCCCC solid 3px;\n  color: #CCCCCC;\n  padding: .3em;\n\n}\n#welcome_order_button[_ngcontent-%COMP%] {\n  margin-top: 43vh;\n  padding: .5em 2em .5em 2em;\n}\n#manage_orders_button[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 1.5em;\n  margin-top: 15px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ob21lL3BhZ2UtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0RBQTBFO0FBQzVFO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTs7QUFFZjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ob21lL3BhZ2UtaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmdfbGFuZGluZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xufVxuI2xhbmRpbmdfbG9nbyB7XG4gIHdpZHRoOiAxNXZ3O1xuICBoZWlnaHQ6IDE1dnc7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJvcmRlcl9idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAzZW07XG4gIGJvcmRlcjogI0NDQ0NDQyBzb2xpZCAzcHg7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICBwYWRkaW5nOiAuM2VtO1xuXG59XG5cbiN3ZWxjb21lX29yZGVyX2J1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDQzdmg7XG4gIHBhZGRpbmc6IC41ZW0gMmVtIC41ZW0gMmVtO1xufVxuXG4jbWFuYWdlX29yZGVyc19idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-home',
                templateUrl: './page-home.component.html',
                styleUrls: ['./page-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page-order-info/page-order-info.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/page-order-info/page-order-info.component.ts ***!
  \**************************************************************/
/*! exports provided: PageOrderInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOrderInfoComponent", function() { return PageOrderInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageOrderInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageOrderInfoComponent.ɵfac = function PageOrderInfoComponent_Factory(t) { return new (t || PageOrderInfoComponent)(); };
PageOrderInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageOrderInfoComponent, selectors: [["app-page-order-info"]], decls: 2, vars: 0, template: function PageOrderInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-order-info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utb3JkZXItaW5mby9wYWdlLW9yZGVyLWluZm8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageOrderInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-order-info',
                templateUrl: './page-order-info.component.html',
                styleUrls: ['./page-order-info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page-orders/page-orders.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-orders/page-orders.component.ts ***!
  \******************************************************/
/*! exports provided: PageOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOrdersComponent", function() { return PageOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comp_order_comp_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-order/comp-order.component */ "./src/app/comp-order/comp-order.component.ts");




class PageOrdersComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageOrdersComponent.ɵfac = function PageOrdersComponent_Factory(t) { return new (t || PageOrdersComponent)(); };
PageOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageOrdersComponent, selectors: [["app-page-orders"]], decls: 18, vars: 0, consts: [[2, "text-align", "center"], ["align", "right", "width", "100%"], ["routerLink", "/home", "id", "home_button", 1, "border_button"], [1, "container"], ["id", "orders_table"], ["scope", "col"]], template: function PageOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "customer name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "car");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-comp-order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _comp_order_comp_order_component__WEBPACK_IMPORTED_MODULE_2__["CompOrderComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  background: url('bg_landing.jpg') no-repeat center center fixed;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  min-width: 70%;\n  min-height: 95vh;\n  overflow-y: auto;\n  text-align: center;\n  display: inline-block;\n  background: #FFFFFF77;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  width: 96%;\n  border-spacing: 0;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 20%;\n  border: 0;\n  text-align: center;\n}\n\n.td-bordered[_ngcontent-%COMP%] {\n  border: 0;\n  border-left: #00000055 solid 1px;\n  border-right: #00000055 solid 1px;\n}\n\nth[_ngcontent-%COMP%] {\n  border-bottom: black solid 1px;\n}\n\n.border_button[_ngcontent-%COMP%] {\n  background: transparent;\n  font-size: 3em;\n  border: #CCCCCC solid 3px;\n  color: #CCCCCC;\n  padding: .3em;\n\n}\n\n#welcome_order_button[_ngcontent-%COMP%] {\n  margin-top: 43vh;\n  padding: .5em 2em .5em 2em;\n}\n\n#home_button[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.5em;\n  margin-top: 15px;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1vcmRlcnMvcGFnZS1vcmRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtEQUEwRTtBQUM1RTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULGdDQUFnQztFQUNoQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW9yZGVycy9wYWdlLW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmdfbGFuZGluZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1pbi13aWR0aDogNzAlO1xuICBtaW4taGVpZ2h0OiA5NXZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjc3O1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgd2lkdGg6IDk2JTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnRkLCB0aCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAyMCU7XG4gIGJvcmRlcjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGQtYm9yZGVyZWQge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1sZWZ0OiAjMDAwMDAwNTUgc29saWQgMXB4O1xuICBib3JkZXItcmlnaHQ6ICMwMDAwMDA1NSBzb2xpZCAxcHg7XG59XG5cbnRoIHtcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgMXB4O1xufVxuXG4uYm9yZGVyX2J1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDNlbTtcbiAgYm9yZGVyOiAjQ0NDQ0NDIHNvbGlkIDNweDtcbiAgY29sb3I6ICNDQ0NDQ0M7XG4gIHBhZGRpbmc6IC4zZW07XG5cbn1cblxuI3dlbGNvbWVfb3JkZXJfYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNDN2aDtcbiAgcGFkZGluZzogLjVlbSAyZW0gLjVlbSAyZW07XG59XG5cbiNob21lX2J1dHRvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-orders',
                templateUrl: './page-orders.component.html',
                styleUrls: ['./page-orders.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page-privacy-policy/page-privacy-policy.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/page-privacy-policy/page-privacy-policy.component.ts ***!
  \**********************************************************************/
/*! exports provided: PagePrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePrivacyPolicyComponent", function() { return PagePrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PagePrivacyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagePrivacyPolicyComponent.ɵfac = function PagePrivacyPolicyComponent_Factory(t) { return new (t || PagePrivacyPolicyComponent)(); };
PagePrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagePrivacyPolicyComponent, selectors: [["app-page-privacy-policy"]], decls: 5, vars: 0, consts: [["routerLink", "/home", "id", "home_button", 1, "border_button"], [1, "container"]], template: function PagePrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Place for privacy policy\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  background: url('bg_landing.jpg') no-repeat center center fixed;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-left: 15%;\n  min-width: 70%;\n  max-width: 70%;\n  width: 70%;\n  min-height: 95vh;\n  overflow-y: auto;\n  text-align: center;\n  display: inline-block;\n  background: #FFFFFF77;\n  padding-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1wcml2YWN5LXBvbGljeS9wYWdlLXByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrREFBMEU7QUFDNUU7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLXByaXZhY3ktcG9saWN5L3BhZ2UtcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JnX2xhbmRpbmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1pbi13aWR0aDogNzAlO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgd2lkdGg6IDcwJTtcbiAgbWluLWhlaWdodDogOTV2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY3NztcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagePrivacyPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-privacy-policy',
                templateUrl: './page-privacy-policy.component.html',
                styleUrls: ['./page-privacy-policy.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page-thanks/page-thanks.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-thanks/page-thanks.component.ts ***!
  \******************************************************/
/*! exports provided: PageThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageThanksComponent", function() { return PageThanksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PageThanksComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageThanksComponent.ɵfac = function PageThanksComponent_Factory(t) { return new (t || PageThanksComponent)(); };
PageThanksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageThanksComponent, selectors: [["app-page-thanks"]], decls: 29, vars: 0, consts: [["align", "right", "width", "100%"], ["routerLink", "/orders", "id", "manage_orders_button", 1, "border_button"], [1, "container"], ["src", "assets/logo_name.svg", "id", "landing_logo"], ["id", "thanks-div"], [2, "font-family", "Tesla, serif"], ["routerLink", "/pp", "routerLinkActive", "active"], ["routerLink", "/cars", "id", "cancel-button", 1, "border_button"], ["routerLink", "/home", "id", "confirm-button", 1, "border_button"]], template: function PageThanksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Thank you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " By clicking \"Submit\" you agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " regulations of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " and agree to adhere to these principles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["body[_ngcontent-%COMP%] {\n  background: url('bg_landing.jpg') no-repeat center center fixed;\n}\n\n#confirm-button[_ngcontent-%COMP%] {\n  background: transparent;\n  font-size: 3em;\n  border: #CCCCCC solid 3px;\n  color: #CCCCCC;\n  padding-left: 1em;\n  padding-right: 1em;\n  width: 90%;\n  text-align: center;\n}\n\n#cancel-button[_ngcontent-%COMP%] {\n  background: transparent;\n  font-size: 3em;\n  border: darkred solid 3px;\n  color: darkred;\n  width: 90%;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n#landing_logo[_ngcontent-%COMP%] {\n  width: 15vw;\n  height: 15vw;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  width: 40%;\n  margin-left: 30%;\n}\n\ntd[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  overflow-y: auto;\n  text-align: center;\n  display: inline-block;\n}\n\n.border_button[_ngcontent-%COMP%] {\n  background: transparent;\n  font-size: 3em;\n  border: #CCCCCC solid 3px;\n  color: #CCCCCC;\n  padding: .3em;\n\n}\n\n#thanks-div[_ngcontent-%COMP%] {\n  font-size: 2em;\n  padding: 30px;\n  margin-top: 100px;\n  margin-left: 30%;\n  font-weight: bold;\n  background: #CCCCCCAA;\n  width: 40%;\n}\n\n#welcome_order_button[_ngcontent-%COMP%] {\n  margin-top: 20vh;\n  padding: .5em 2em .5em 2em;\n}\n\n#manage_orders_button[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 1.5em;\n  margin-top: 15px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS10aGFua3MvcGFnZS10aGFua3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtEQUEwRTtBQUM1RTs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLXRoYW5rcy9wYWdlLXRoYW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmdfbGFuZGluZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xufVxuXG4jY29uZmlybS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAzZW07XG4gIGJvcmRlcjogI0NDQ0NDQyBzb2xpZCAzcHg7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jY2FuY2VsLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDNlbTtcbiAgYm9yZGVyOiBkYXJrcmVkIHNvbGlkIDNweDtcbiAgY29sb3I6IGRhcmtyZWQ7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG4jbGFuZGluZ19sb2dvIHtcbiAgd2lkdGg6IDE1dnc7XG4gIGhlaWdodDogMTV2dztcbn1cblxuXG5cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbn1cblxudGQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYm9yZGVyX2J1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDNlbTtcbiAgYm9yZGVyOiAjQ0NDQ0NDIHNvbGlkIDNweDtcbiAgY29sb3I6ICNDQ0NDQ0M7XG4gIHBhZGRpbmc6IC4zZW07XG5cbn1cblxuI3RoYW5rcy1kaXYge1xuICBmb250LXNpemU6IDJlbTtcbiAgcGFkZGluZzogMzBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjQ0NDQ0NDQUE7XG4gIHdpZHRoOiA0MCU7XG59XG5cbiN3ZWxjb21lX29yZGVyX2J1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwdmg7XG4gIHBhZGRpbmc6IC41ZW0gMmVtIC41ZW0gMmVtO1xufVxuXG4jbWFuYWdlX29yZGVyc19idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageThanksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-thanks',
                templateUrl: './page-thanks.component.html',
                styleUrls: ['./page-thanks.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pat/workspace/web/tesla5/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map