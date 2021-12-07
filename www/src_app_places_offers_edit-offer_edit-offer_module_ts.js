(self["webpackChunkbooking_app"] = self["webpackChunkbooking_app"] || []).push([["src_app_places_offers_edit-offer_edit-offer_module_ts"],{

/***/ 1198:
/*!***********************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditOfferPageRoutingModule": () => (/* binding */ EditOfferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _edit_offer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-offer.page */ 2478);




const routes = [
    {
        path: '',
        component: _edit_offer_page__WEBPACK_IMPORTED_MODULE_0__.EditOfferPage
    }
];
let EditOfferPageRoutingModule = class EditOfferPageRoutingModule {
};
EditOfferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditOfferPageRoutingModule);



/***/ }),

/***/ 6347:
/*!***************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditOfferPageModule": () => (/* binding */ EditOfferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _edit_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-offer-routing.module */ 1198);
/* harmony import */ var _edit_offer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-offer.page */ 2478);







let EditOfferPageModule = class EditOfferPageModule {
};
EditOfferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditOfferPageRoutingModule
        ],
        declarations: [_edit_offer_page__WEBPACK_IMPORTED_MODULE_1__.EditOfferPage]
    })
], EditOfferPageModule);



/***/ }),

/***/ 2478:
/*!*************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditOfferPage": () => (/* binding */ EditOfferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_offer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-offer.page.html */ 6074);
/* harmony import */ var _edit_offer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-offer.page.scss */ 9102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _places_services_places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../places/services/places.service */ 7187);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);








let EditOfferPage = class EditOfferPage {
    constructor(route, router, placesService, navController, loadingController, alertCtrl) {
        this.route = route;
        this.router = router;
        this.placesService = placesService;
        this.navController = navController;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(res => {
            if (!res.has('placeId')) {
                this.navController.navigateBack('/places/offers');
                return;
            }
            this.placeId = res.get('placeId');
            this.isLoading = true;
            this.placeSub = this.placesService.fetchPlace(this.placeId).subscribe(res => {
                console.log('res is ', res);
                this.place = res;
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.place.title, {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
                    }),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.place.description, {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
                    })
                });
                this.isLoading = false;
            }, err => {
                this.isLoading = false;
                console.log(err);
                this.presentModal(err);
            });
        });
    }
    presentModal(err) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: err,
                buttons: [{ text: 'Okay', handler: () => {
                            this.router.navigate(['/places/offers']);
                        } }]
            });
            alert.present();
        });
    }
    saveOffer() {
        this.loadingController.create({
            message: 'Updating place...'
        }).then(loadingEl => {
            loadingEl.present();
            this.placesService.updatePlace(this.placeId, this.form.value.title, this.form.value.description).subscribe(res => {
                loadingEl.dismiss();
                this.form.reset();
                this.router.navigate(['/places/offers']);
            });
        });
        console.log('saved');
    }
    ngOnDestroy() {
        this.placeSub.unsubscribe();
    }
};
EditOfferPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _places_services_places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
EditOfferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-offer',
        template: _raw_loader_edit_offer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_offer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditOfferPage);



/***/ }),

/***/ 9102:
/*!***************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW9mZmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 6074:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/edit-offer/edit-offer.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"saveOffer()\" [disabled]=\"form.invalid\" *ngIf=\"!isLoading\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!isLoading\">\n  <form [formGroup]=\"form\">\n    <ion-grid class=\"ion-padding\">\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input type=\"text\" autocomplete autocorrect formControlName=\"title\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Short description</ion-label>\n            <ion-textarea rows=\"3\" formControlName=\"description\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"form.get('description').invalid && form.get('description').touched\">\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <p>Description must be between 1 & 180 characters</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_offers_edit-offer_edit-offer_module_ts.js.map