(self["webpackChunkbooking_app"] = self["webpackChunkbooking_app"] || []).push([["src_app_bookings_bookings_module_ts"],{

/***/ 6652:
/*!***************************************************!*\
  !*** ./src/app/bookings/booking/bookings.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPage": () => (/* binding */ BookingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bookings.page.html */ 5686);
/* harmony import */ var _bookings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.page.scss */ 9307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/booking.service */ 8777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth.service */ 6518);







let BookingsPage = class BookingsPage {
    constructor(bookingService, authService, loadingCtrl) {
        this.bookingService = bookingService;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
    }
    ngOnInit() {
        //this.bookingsSub = this.bookingService.bookings.subscribe(res => this.loadedBookings = res);
        this.isLoading = true;
        this.getBookings();
    }
    cancelBooking(bookingId, slide) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            slide.close();
            // cancel booking with id
            const loading = yield this.loadingCtrl.create({
                message: 'Deleting booking ...',
            });
            yield loading.present();
            this.bookingService.cancelBooking(bookingId).subscribe(res => {
                this.isLoading = true;
                this.getBookings();
                loading.dismiss();
            });
        });
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.getBookings();
    }
    getBookings() {
        this.bookingsSub = this.bookingService.getBookings(this.authService.userId).subscribe(res => {
            console.log('response is ', res);
            let myArr = [];
            for (const x in res) {
                if (res.hasOwnProperty(x)) {
                    console.log('key is ', res[x]);
                    myArr.push(res[x]);
                }
            }
            this.loadedBookings = myArr;
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        if (this.bookingsSub) {
            this.bookingsSub.unsubscribe();
        }
    }
};
BookingsPage.ctorParameters = () => [
    { type: _services_booking_service__WEBPACK_IMPORTED_MODULE_2__.BookingService },
    { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
BookingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-bookings',
        template: _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bookings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BookingsPage);



/***/ }),

/***/ 5083:
/*!*****************************************************!*\
  !*** ./src/app/bookings/bookings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPageRoutingModule": () => (/* binding */ BookingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _booking_bookings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking/bookings.page */ 6652);




const routes = [
    {
        path: '',
        component: _booking_bookings_page__WEBPACK_IMPORTED_MODULE_0__.BookingsPage
    }
];
let BookingsPageRoutingModule = class BookingsPageRoutingModule {
};
BookingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingsPageRoutingModule);



/***/ }),

/***/ 7938:
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPageModule": () => (/* binding */ BookingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings-routing.module */ 5083);
/* harmony import */ var _booking_bookings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking/bookings.page */ 6652);







let BookingsPageModule = class BookingsPageModule {
};
BookingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingsPageRoutingModule
        ],
        declarations: [_booking_bookings_page__WEBPACK_IMPORTED_MODULE_1__.BookingsPage]
    })
], BookingsPageModule);



/***/ }),

/***/ 9307:
/*!*****************************************************!*\
  !*** ./src/app/bookings/booking/bookings.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5686:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/booking/bookings.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!isLoading\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size-lg=\"8\" offset-lg=\"2\" size-md=\"10\" offset-md=\"1\" size-sm=\"12\">\n        <p *ngIf=\"loadedBookings.length === 0\">No any bookings!</p>\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let booking of loadedBookings\" #bookingSlide>\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <ion-img [src]=\"booking.placeImage\"></ion-img>\n              </ion-avatar>\n              <ion-label>\n                <h5>{{booking.placeTitle}}</h5>\n                <p>Guests: {{booking.guestNumber}}</p>\n                <p>Name: {{booking.firstName}} {{booking.lastName}}</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options>\n              <ion-item-option color=\"danger\" (click)=\"cancelBooking(booking.id, bookingSlide)\">\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_bookings_bookings_module_ts.js.map