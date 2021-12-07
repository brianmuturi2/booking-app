(self["webpackChunkbooking_app"] = self["webpackChunkbooking_app"] || []).push([["src_app_places_offers_offers_module_ts"],{

/***/ 1228:
/*!******************************************************!*\
  !*** ./src/app/places/offers/models/offers.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Offer": () => (/* binding */ Offer)
/* harmony export */ });
class Offer {
    constructor(id, title, imageUrl) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
    }
}


/***/ }),

/***/ 2863:
/*!******************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferItemComponent": () => (/* binding */ OfferItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_offer_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./offer-item.component.html */ 3158);
/* harmony import */ var _offer_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer-item.component.scss */ 4930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let OfferItemComponent = class OfferItemComponent {
    constructor() { }
    ngOnInit() { }
    getDummyDate() {
        return new Date();
    }
};
OfferItemComponent.ctorParameters = () => [];
OfferItemComponent.propDecorators = {
    offer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
OfferItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'offer-item',
        template: _raw_loader_offer_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_offer_item_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OfferItemComponent);



/***/ }),

/***/ 5562:
/*!********************************************************!*\
  !*** ./src/app/places/offers/offers-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPageRoutingModule": () => (/* binding */ OffersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _offers_offers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers/offers.page */ 3414);




const routes = [
    {
        path: '',
        component: _offers_offers_page__WEBPACK_IMPORTED_MODULE_0__.OffersPage
    },
    {
        path: 'new',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_places_offers_new-offer_new-offer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./new-offer/new-offer.module */ 4757)).then(m => m.NewOfferPageModule)
    },
    {
        path: 'edit/:placeId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_places_offers_edit-offer_edit-offer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-offer/edit-offer.module */ 6347)).then(m => m.EditOfferPageModule)
    },
    {
        path: ':placeId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_places_offers_offer-bookings_offer-bookings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./offer-bookings/offer-bookings.module */ 2293)).then(m => m.OfferBookingsPageModule)
    },
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OffersPageRoutingModule);



/***/ }),

/***/ 1355:
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPageModule": () => (/* binding */ OffersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers-routing.module */ 5562);
/* harmony import */ var _offers_offers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers/offers.page */ 3414);
/* harmony import */ var _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offer-item/offer-item.component */ 2863);








let OffersPageModule = class OffersPageModule {
};
OffersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_0__.OffersPageRoutingModule
        ],
        declarations: [_offers_offers_page__WEBPACK_IMPORTED_MODULE_1__.OffersPage, _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_2__.OfferItemComponent]
    })
], OffersPageModule);



/***/ }),

/***/ 3414:
/*!*****************************************************!*\
  !*** ./src/app/places/offers/offers/offers.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPage": () => (/* binding */ OffersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./offers.page.html */ 1279);
/* harmony import */ var _offers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.page.scss */ 2304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offers.service */ 1164);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _places_services_places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places/services/places.service */ 7187);







let OffersPage = class OffersPage {
    constructor(offersService, placesService, router) {
        this.offersService = offersService;
        this.placesService = placesService;
        this.router = router;
        this.offers = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.offersSub = this.placesService.places.subscribe(res => this.offers = res);
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.offersSub = this.placesService.fetchPlaces().subscribe(res => {
            this.isLoading = false;
        });
    }
    onEdit(id, slideItem) {
        console.log(id);
        this.router.navigate(['/places/offers/edit', id]);
        slideItem.close();
    }
    ngOnDestroy() {
        this.offersSub.unsubscribe();
    }
    ionViewDidEnter() {
        this.offersSub = this.placesService.places.subscribe(res => {
            this.offers = res;
            console.log('offers are ', this.offers);
        });
    }
};
OffersPage.ctorParameters = () => [
    { type: _services_offers_service__WEBPACK_IMPORTED_MODULE_2__.OffersService },
    { type: _places_services_places_service__WEBPACK_IMPORTED_MODULE_3__.PlacesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
OffersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-offers',
        template: _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_offers_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OffersPage);



/***/ }),

/***/ 1164:
/*!**********************************************************!*\
  !*** ./src/app/places/offers/services/offers.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersService": () => (/* binding */ OffersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _models_offers_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/offers.model */ 1228);



let OffersService = class OffersService {
    constructor() {
        this._offers = [
            new _models_offers_model__WEBPACK_IMPORTED_MODULE_0__.Offer('p1', 'Manhattan Mansion', 'https://media.timeout.com/images/105150636/image.jpg'),
            new _models_offers_model__WEBPACK_IMPORTED_MODULE_0__.Offer('p2', 'L\'Amour Toujours', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F08%2Ffunky-loft-studio-airbnb-rental-paris-france-AIRBNBPARIS0817.jpg'),
            new _models_offers_model__WEBPACK_IMPORTED_MODULE_0__.Offer('p3', 'The Foggy Palace', 'https://static.tripzilla.com/thumb/9/0/165008_800x.jpg'),
        ];
    }
    get offers() {
        return [...this._offers];
    }
};
OffersService.ctorParameters = () => [];
OffersService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], OffersService);



/***/ }),

/***/ 4930:
/*!********************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".offer-details {\n  display: flex;\n  align-items: center;\n}\n\n.space_left {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoib2ZmZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmZlci1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNwYWNlX2xlZnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ 2304:
/*!*******************************************************!*\
  !*** ./src/app/places/offers/offers/offers.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3158:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-item/offer-item.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item>\n  <ion-thumbnail slot=\"start\">\n    <ion-img [src]=\"offer.imageUrl\"></ion-img>\n  </ion-thumbnail>\n  <ion-label>\n    <h2>{{offer.title}}</h2>\n    <div class=\"offer-details\">\n      <ion-icon name=\"calendar\" color=\"secondary\"></ion-icon>\n      <ion-text color=\"primary\" class=\"space_left\">{{offer.availableFrom | date}}</ion-text>\n      <span class=\"space_left\">to</span>\n      <ion-icon name=\"calendar\" color=\"secondary space_left\"></ion-icon>\n      <ion-text color=\"primary\" class=\"space_left\">{{offer.availableTo | date}}</ion-text>\n    </div>\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ 1279:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers/offers.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button [routerLink]=\"['/places/offers/new']\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        <div *ngIf=\"isLoading\" class=\"ion-text-center\">\n          <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n        </div>\n        <p *ngIf=\"!isLoading && offers.length === 0\"></p>\n        <ion-list *ngIf=\"!isLoading\">\n          <!--<ion-item-sliding  *ngFor=\"let offer of offers\" [routerLink]=\"['/places/offers', offer.id]\">-->\n          <ion-item-sliding  *ngFor=\"let offer of offers\" #sliding [routerLink]=\"['/places/offers', offer.id]\">\n              <offer-item [offer]=\"offer\"></offer-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option color=\"secondary\" (click)=\"onEdit(offer.id, sliding)\">\n                Edit\n                <ion-icon name=\"create\" slot=\"top\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_offers_offers_module_ts.js.map