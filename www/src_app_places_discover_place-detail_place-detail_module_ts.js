(self["webpackChunkbooking_app"] = self["webpackChunkbooking_app"] || []).push([["src_app_places_discover_place-detail_place-detail_module_ts"],{

/***/ 7554:
/*!****************************************************************************!*\
  !*** ./src/app/bookings/modals/create-booking/create-booking.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBookingComponent": () => (/* binding */ CreateBookingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_create_booking_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-booking.component.html */ 1121);
/* harmony import */ var _create_booking_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-booking.component.scss */ 2835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let CreateBookingComponent = class CreateBookingComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
        const availableFrom = new Date(this.selectedPlace.availableFrom);
        const availableTo = new Date(this.selectedPlace.availableTo);
        if (this.selectedMode === 'random') {
            this.startDate = new Date(availableFrom.getTime() + Math.random() * (availableTo.getTime() - 7 * 24 * 60 * 60 * 1000 - availableFrom.getTime())).toISOString();
            this.endDate = new Date(new Date(this.startDate).getTime() + Math.random() * (new Date(this.startDate).getTime() + 6 * 24 * 60 * 60 * 1000 - new Date(this.startDate).getTime())).toISOString();
        }
    }
    bookPlace() {
        this.modalController.dismiss();
    }
    cancel() {
        this.modalController.dismiss({
            message: 'Closed book place',
        }, 'cancel', this.id);
    }
    save() {
        if (this.form.invalid || !this.datesValid()) {
            return;
        }
        this.modalController.dismiss({
            bookingData: {
                firstName: this.form.value.firstName,
                lastName: this.form.value.lastName,
                guestNumber: +this.form.value.guestNumber,
                startDate: new Date(this.form.value.dateFrom),
                endDate: new Date(this.form.value.dateTo)
            }
        }, 'confirm');
    }
    datesValid() {
        return this.form.value.dateTo > this.form.value.dateFrom;
    }
};
CreateBookingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
CreateBookingComponent.propDecorators = {
    selectedPlace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    selectedMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['f', { static: false },] }]
};
CreateBookingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-create-booking',
        template: _raw_loader_create_booking_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_booking_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateBookingComponent);



/***/ }),

/***/ 8982:
/*!*****************************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPageRoutingModule": () => (/* binding */ PlaceDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-detail.page */ 4042);




const routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_0__.PlaceDetailPage
    }
];
let PlaceDetailPageRoutingModule = class PlaceDetailPageRoutingModule {
};
PlaceDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlaceDetailPageRoutingModule);



/***/ }),

/***/ 4631:
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPageModule": () => (/* binding */ PlaceDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-detail-routing.module */ 8982);
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-detail.page */ 4042);
/* harmony import */ var _bookings_modals_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bookings/modals/create-booking/create-booking.component */ 7554);








let PlaceDetailPageModule = class PlaceDetailPageModule {
};
PlaceDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlaceDetailPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule
        ],
        declarations: [
            _place_detail_page__WEBPACK_IMPORTED_MODULE_1__.PlaceDetailPage,
            _bookings_modals_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__.CreateBookingComponent
        ],
        entryComponents: [
            _bookings_modals_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__.CreateBookingComponent
        ]
    })
], PlaceDetailPageModule);



/***/ }),

/***/ 4042:
/*!*******************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPage": () => (/* binding */ PlaceDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_place_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./place-detail.page.html */ 1043);
/* harmony import */ var _place_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-detail.page.scss */ 6691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _places_services_places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../places/services/places.service */ 7187);
/* harmony import */ var _bookings_modals_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bookings/modals/create-booking/create-booking.component */ 7554);
/* harmony import */ var _bookings_services_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../bookings/services/booking.service */ 8777);









let PlaceDetailPage = class PlaceDetailPage {
    constructor(router, navController, route, placesService, modalController, actionSheetController, loadingController, bookingService) {
        this.router = router;
        this.navController = navController;
        this.route = route;
        this.placesService = placesService;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.bookingService = bookingService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(res => {
            this.placeId = res.get('placeId');
            // this.placeSub = this.placesService.getPlace(this.placeId).subscribe(placeRes => this.place = placeRes );
        });
        this.isLoading = true;
        this.getPlace();
    }
    ionViewWillEnter() {
    }
    onBookPlace() {
        //this.router.navigate(['/places/discover']);
        //this.navController.navigateBack('/places/discover');
        this.actionSheetController.create({
            buttons: [
                {
                    text: 'Select Date',
                    handler: () => {
                        this.openBookingModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: () => {
                        this.openBookingModal('random');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelled');
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    openBookingModal(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(mode);
            const modal = yield this.modalController.create({
                component: _bookings_modals_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_3__.CreateBookingComponent,
                componentProps: {
                    selectedPlace: this.place,
                    selectedMode: mode
                },
                id: 'book-place'
            });
            yield modal.present();
            const dismiss = yield modal.onDidDismiss();
            console.log('dismiss value is ', dismiss);
            if (dismiss.role === 'confirm') {
                const loadCtrl = yield this.loadingController.create({
                    message: 'Booking place...'
                });
                loadCtrl.present();
                this.bookingService.addBooking(this.place.id, this.place.title, this.place.imageUrl, dismiss.data.bookingData.firstName, dismiss.data.bookingData.lastName, dismiss.data.bookingData.guestNumber, dismiss.data.bookingData.startDate, dismiss.data.bookingData.endDate).subscribe(response => {
                    loadCtrl.dismiss();
                    console.log('create booking response is ', response);
                });
                this.router.navigate(['/bookings']);
            }
        });
    }
    ngOnDestroy() {
        this.placeSub.unsubscribe();
    }
    getPlace() {
        this.placeSub = this.placesService.fetchPlace(this.placeId).subscribe(res => {
            console.log('res is ', res);
            this.place = res;
            this.isLoading = false;
        });
    }
};
PlaceDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _places_services_places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _bookings_services_booking_service__WEBPACK_IMPORTED_MODULE_4__.BookingService }
];
PlaceDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-place-detail',
        template: _raw_loader_place_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_place_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlaceDetailPage);



/***/ }),

/***/ 2835:
/*!******************************************************************************!*\
  !*** ./src/app/bookings/modals/create-booking/create-booking.component.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 6691:
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFjZS1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 1121:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/modals/create-booking/create-booking.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{selectedPlace?.title}}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"cancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n  <form (ngSubmit)=\"save()\" #f=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input type=\"text\" ngModel name=\"firstName\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input type=\"text\" ngModel name=\"lastName\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">From</ion-label>\n            <ion-datetime displayFormat=\"MMM DD YYYY\" pickerFormat=\"YYYY MMM DD\" [ngModel]=\"startDate\" name=\"dateFrom\" #startDateCtrl=\"ngModel\" [min]=\"selectedPlace?.availableFrom.toISOString()\" [max]=\"selectedPlace?.availableTo.toISOString()\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">To</ion-label>\n            <ion-datetime displayFormat=\"MMM DD YYYY\" pickerFormat=\"YYYY MMM DD\" [min]=\"startDateCtrl.value\" [max]=\"selectedPlace?.availableTo.toISOString()\" [ngModel]=\"endDate\" name=\"dateTo\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Number of Guests</ion-label>\n            <ion-select name=\"guestNumber\" [ngModel]=\"'2'\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"!f.valid || !datesValid()\">Book!</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ 1043:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/discover\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!isLoading\">{{place.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<div class=\"ion-text-center\" *ngIf=\"isLoading\">\n  <ion-spinner name=\"crescent\"></ion-spinner>\n</div>\n<ion-content *ngIf=\"!isLoading\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\">\n        <ion-img [src]=\"place.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding\">\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\">\n        <p>{{place.description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-padding\">\n        <p>{{place?.location?.address}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding\">\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\">\n        <ion-button color=\"primary\" (click)=\"onBookPlace()\" expand=\"block\">Book</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_discover_place-detail_place-detail_module_ts.js.map