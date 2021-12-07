(self["webpackChunkbooking_app"] = self["webpackChunkbooking_app"] || []).push([["src_app_places_offers_offer-bookings_offer-bookings_module_ts"],{

/***/ 8856:
/*!*******************************************************************************!*\
  !*** ./src/app/places/offers/offer-bookings/offer-bookings-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferBookingsPageRoutingModule": () => (/* binding */ OfferBookingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _offer_bookings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer-bookings.page */ 262);




const routes = [
    {
        path: '',
        component: _offer_bookings_page__WEBPACK_IMPORTED_MODULE_0__.OfferBookingsPage
    }
];
let OfferBookingsPageRoutingModule = class OfferBookingsPageRoutingModule {
};
OfferBookingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OfferBookingsPageRoutingModule);



/***/ }),

/***/ 2293:
/*!***********************************************************************!*\
  !*** ./src/app/places/offers/offer-bookings/offer-bookings.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferBookingsPageModule": () => (/* binding */ OfferBookingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _offer_bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer-bookings-routing.module */ 8856);
/* harmony import */ var _offer_bookings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer-bookings.page */ 262);







let OfferBookingsPageModule = class OfferBookingsPageModule {
};
OfferBookingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _offer_bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.OfferBookingsPageRoutingModule
        ],
        declarations: [_offer_bookings_page__WEBPACK_IMPORTED_MODULE_1__.OfferBookingsPage]
    })
], OfferBookingsPageModule);



/***/ }),

/***/ 262:
/*!*********************************************************************!*\
  !*** ./src/app/places/offers/offer-bookings/offer-bookings.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferBookingsPage": () => (/* binding */ OfferBookingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_offer_bookings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./offer-bookings.page.html */ 5452);
/* harmony import */ var _offer_bookings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer-bookings.page.scss */ 9661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _places_services_places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../places/services/places.service */ 7187);







let OfferBookingsPage = class OfferBookingsPage {
    constructor(route, navController, placesService) {
        this.route = route;
        this.navController = navController;
        this.placesService = placesService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(res => {
            if (!res.has('placeId')) {
                this.navController.navigateBack('/places/offers');
                return;
            }
            this.placesService.getPlace(res.get('placeId')).subscribe(res => this.place = res);
        });
    }
};
OfferBookingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _places_services_places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService }
];
OfferBookingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-offer-bookings',
        template: _raw_loader_offer_bookings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_offer_bookings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OfferBookingsPage);



/***/ }),

/***/ 9661:
/*!***********************************************************************!*\
  !*** ./src/app/places/offers/offer-bookings/offer-bookings.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlci1ib29raW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5452:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-bookings/offer-bookings.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{place.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-button margin color=\"primary\" [routerLink]=\"['/places/offers/edit', place.id]\">Edit</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_offers_offer-bookings_offer-bookings_module_ts.js.map