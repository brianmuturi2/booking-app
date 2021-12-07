(self["webpackChunkbooking_app"] = self["webpackChunkbooking_app"] || []).push([["src_app_places_discover_discover_module_ts"],{

/***/ 4183:
/*!************************************************************!*\
  !*** ./src/app/places/discover/discover-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageRoutingModule": () => (/* binding */ DiscoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _discover_discover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover/discover.page */ 1583);




const routes = [
    {
        path: '',
        component: _discover_discover_page__WEBPACK_IMPORTED_MODULE_0__.DiscoverPage
    },
    {
        path: ':placeId',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_bookings_services_booking_service_ts"), __webpack_require__.e("src_app_places_discover_place-detail_place-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./place-detail/place-detail.module */ 4631)).then(m => m.PlaceDetailPageModule)
    }
];
let DiscoverPageRoutingModule = class DiscoverPageRoutingModule {
};
DiscoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DiscoverPageRoutingModule);



/***/ }),

/***/ 2460:
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageModule": () => (/* binding */ DiscoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover-routing.module */ 4183);
/* harmony import */ var _discover_discover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover/discover.page */ 1583);







let DiscoverPageModule = class DiscoverPageModule {
};
DiscoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _discover_routing_module__WEBPACK_IMPORTED_MODULE_0__.DiscoverPageRoutingModule
        ],
        declarations: [_discover_discover_page__WEBPACK_IMPORTED_MODULE_1__.DiscoverPage]
    })
], DiscoverPageModule);



/***/ }),

/***/ 1583:
/*!***********************************************************!*\
  !*** ./src/app/places/discover/discover/discover.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPage": () => (/* binding */ DiscoverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_discover_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./discover.page.html */ 890);
/* harmony import */ var _discover_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover.page.scss */ 4211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _places_services_places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../places/services/places.service */ 7187);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/services/auth.service */ 6518);







let DiscoverPage = class DiscoverPage {
    constructor(placesService, authService, menuController) {
        this.placesService = placesService;
        this.authService = authService;
        this.menuController = menuController;
        this.isLoading = false;
    }
    ngOnInit() {
        this.placesSub = this.placesService.places.subscribe(res => {
            this.loadedPlaces = res;
            this.relevantPlaces = this.loadedPlaces;
        });
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.placesSub = this.placesService.fetchPlaces().subscribe(res => {
            this.isLoading = false;
            this.loadedPlaces = res;
            this.relevantPlaces = this.loadedPlaces;
        });
    }
    openMenu() {
        this.menuController.toggle();
    }
    segmentChanged(event) {
        console.log(event);
        if (event.detail.value === 'allPlaces') {
            this.relevantPlaces = this.loadedPlaces;
        }
        else {
            this.relevantPlaces = this.loadedPlaces.filter(cur => cur.userId !== this.authService.userId);
        }
    }
    ionViewDidEnter() {
        this.placesSub = this.placesService.places.subscribe(res => { this.loadedPlaces = res; });
    }
    ngOnDestroy() {
        if (this.placesSub) {
            this.placesSub.unsubscribe();
        }
    }
};
DiscoverPage.ctorParameters = () => [
    { type: _places_services_places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService },
    { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController }
];
DiscoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-discover',
        template: _raw_loader_discover_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_discover_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DiscoverPage);



/***/ }),

/***/ 4211:
/*!*************************************************************!*\
  !*** ./src/app/places/discover/discover/discover.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjb3Zlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 890:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover/discover.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Discover Places</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-segment value=\"allPlaces\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"allPlaces\">All Places</ion-segment-button>\n    <ion-segment-button value=\"bookablePlaces\">Bookable Places</ion-segment-button>\n  </ion-segment>\n  <ion-grid *ngIf=\"relevantPlaces.length === 0 && !isLoading\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <p>There are no bookable places!</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center\">\n          <ion-spinner name=\"crescent\" *ngIf=\"isLoading\" color=\"primary\"></ion-spinner>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"relevantPlaces.length > 0\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>{{ relevantPlaces[0].title}}</ion-card-title>\n            <ion-card-subtitle>{{ relevantPlaces[0].price | currency: 'Ksh'}} / Night</ion-card-subtitle>\n          </ion-card-header>\n          <ion-img [src]=\"relevantPlaces[0].imageUrl\"></ion-img>\n          <ion-card-content>{{relevantPlaces[0].description}}</ion-card-content>\n          <div>\n            <ion-button fill=\"clear\" color=\"primary\" routerDirection=\"forward\" [routerLink]=\"['/places/discover', relevantPlaces[0].id]\">More</ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-list>\n          <ion-item *ngFor=\"let place of relevantPlaces.slice(1)\" [routerLink]=\"['/places/discover', place.id]\" detail>\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"place.imageUrl\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{place.title}}</h2>\n              <p>{{place.description}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-button expand=\"block\" (click)=\"openMenu()\">Open Drawer</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_discover_discover_module_ts.js.map