(self["webpackChunkbooking_app"] = self["webpackChunkbooking_app"] || []).push([["src_app_places_offers_new-offer_new-offer_module_ts"],{

/***/ 8733:
/*!*********************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewOfferPageRoutingModule": () => (/* binding */ NewOfferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _new_offer_new_offer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-offer/new-offer.page */ 9192);




const routes = [
    {
        path: '',
        component: _new_offer_new_offer_page__WEBPACK_IMPORTED_MODULE_0__.NewOfferPage
    }
];
let NewOfferPageRoutingModule = class NewOfferPageRoutingModule {
};
NewOfferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewOfferPageRoutingModule);



/***/ }),

/***/ 4757:
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewOfferPageModule": () => (/* binding */ NewOfferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-offer-routing.module */ 8733);
/* harmony import */ var _new_offer_new_offer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-offer/new-offer.page */ 9192);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ 4466);








let NewOfferPageModule = class NewOfferPageModule {
};
NewOfferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewOfferPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_new_offer_new_offer_page__WEBPACK_IMPORTED_MODULE_1__.NewOfferPage]
    })
], NewOfferPageModule);



/***/ }),

/***/ 9192:
/*!*********************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer/new-offer.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewOfferPage": () => (/* binding */ NewOfferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_new_offer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-offer.page.html */ 832);
/* harmony import */ var _new_offer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-offer.page.scss */ 6055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _places_services_places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../places/services/places.service */ 7187);








let NewOfferPage = class NewOfferPage {
    constructor(placesService, toastController, router) {
        this.placesService = placesService;
        this.toastController = toastController;
        this.router = router;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(180)]
            }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]
            }),
            dateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            }),
            dateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            }),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            })
        });
    }
    createOffer() {
        console.log('form is ', this.form.value);
        this.placesService.addPlace(this.form.value.title, this.form.value.description, this.form.value.price, new Date(this.form.value.dateFrom), new Date(this.form.value.dateTo), this.form.value.location).subscribe(res => {
            console.log('res is ', res);
        });
        const presentToast = () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Place added successfully.',
                duration: 1000
            });
            toast.present();
            this.form.reset();
            this.router.navigate(['/places/offers']);
        });
        presentToast();
    }
    locationPicked(location) {
        console.log('location data is ', location);
        this.form.patchValue({
            location
        });
    }
};
NewOfferPage.ctorParameters = () => [
    { type: _places_services_places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
NewOfferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-new-offer',
        template: _raw_loader_new_offer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_offer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewOfferPage);



/***/ }),

/***/ 1218:
/*!*********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapModalComponent": () => (/* binding */ MapModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_map_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map-modal.component.html */ 8091);
/* harmony import */ var _map_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-modal.component.scss */ 7054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);






let MapModalComponent = class MapModalComponent {
    constructor(modalCtrl, toastCtrl, renderer) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.renderer = renderer;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        // consume map sdk once it has been resolved
        this.getMaps().then(googleMaps => {
            this.googleMaps = googleMaps;
            // create google maps view from resolved sdk
            const mapEl = this.mapElementRef.nativeElement;
            const map = new googleMaps.Map(mapEl, {
                center: { lat: -1.2856, lng: 36.8259 },
                zoom: 16
            });
            // add visible css class to make the map visible once loaded
            this.googleMaps.event.addListenerOnce(map, 'idle', () => {
                this.renderer.addClass(mapEl, 'visible');
            });
            // add click listener to get location clicked
            this.clickListener = map.addListener('click', event => {
                const selectedCoords = {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                };
                // dismiss the map modal with selected coordinates
                this.modalCtrl.dismiss(selectedCoords);
            });
        }).catch(err => {
            const presentToast = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    message: err,
                    duration: 3000
                });
                toast.present();
            });
            presentToast();
        });
    }
    cancel() {
        this.modalCtrl.dismiss();
    }
    ngOnDestroy() {
        this.googleMaps.event.removeListener(this.clickListener);
    }
    getMaps() {
        // load js sdk
        const win = window;
        // win.google by default isnt set but will be set immediately after we import js sdk
        const googleModule = win.google;
        if (googleModule && googleModule.maps) {
            // js sdk has been already loaded
            return Promise.resolve(googleModule.maps);
        }
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.urls.maps}${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.keys.maps}`;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = () => {
                const loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    reject('Google maps SDK not available');
                }
            };
        });
    }
};
MapModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2 }
];
MapModalComponent.propDecorators = {
    mapElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['map', { static: false },] }]
};
MapModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-map-modal',
        template: _raw_loader_map_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapModalComponent);



/***/ }),

/***/ 8042:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPickerComponent": () => (/* binding */ LocationPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_location_picker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./location-picker.component.html */ 9685);
/* harmony import */ var _location_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-picker.component.scss */ 722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../map-modal/map-modal.component */ 1218);
/* harmony import */ var _services_location_picker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/location-picker.service */ 1181);







let LocationPickerComponent = class LocationPickerComponent {
    constructor(modalCtrl, locationService, loadingCtrl, actionSheetCtrl) {
        this.modalCtrl = modalCtrl;
        this.locationService = locationService;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.latLng = {
            lat: null,
            lng: null,
            address: null,
            staticMapImageUrl: null
        };
        this.isLoading = false;
    }
    ngOnInit() { }
    pickLocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const actionSht = yield this.actionSheetCtrl.create({
                header: 'Please choose',
                buttons: [
                    { text: 'Auto locate', handler: () => { this.locateUser(); } },
                    { text: 'Pick on map', handler: () => { this.openMap(); } },
                    { text: 'Cancel', role: 'cancel' }
                ]
            });
            yield actionSht.present();
        });
    }
    openMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_2__.MapModalComponent
            });
            yield modal.present();
            const dismiss = yield modal.onDidDismiss();
            if (dismiss.data) {
                this.isLoading = true;
                this.latLng.lat = dismiss.data.lat;
                this.latLng.lng = dismiss.data.lng;
                this.latLng.staticMapImageUrl = null;
                this.getLocation();
                this.getStaticMap();
            }
        });
    }
    locateUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    resetLocation() {
        this.latLng.staticMapImageUrl = null;
    }
    getLocation() {
        this.locationService.getAddress(this.latLng.lat, this.latLng.lng).subscribe(res => {
            this.latLng.address = res;
            console.log('address is ', this.latLng.address);
        });
    }
    ;
    getStaticMap() {
        this.locationService.getMapImage(+this.latLng.lat, +this.latLng.lng, 14).subscribe(res => {
            // not working
            console.log('response is ', res);
            this.latLng.staticMapImageUrl = res[0];
            this.isLoading = false;
        }, err => {
            console.log('error is ', err);
            if (err.status === 200) {
                this.latLng.staticMapImageUrl = err.url;
                console.log('image url is ', this.latLng.staticMapImageUrl);
            }
            this.isLoading = false;
            this.locationPick.emit(this.latLng);
        });
    }
};
LocationPickerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_location_picker_service__WEBPACK_IMPORTED_MODULE_3__.LocationPickerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController }
];
LocationPickerComponent.propDecorators = {
    locationPick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
LocationPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-location-picker',
        template: _raw_loader_location_picker_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_location_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LocationPickerComponent);



/***/ }),

/***/ 1181:
/*!************************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/services/location-picker.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPickerService": () => (/* binding */ LocationPickerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 2340);





let LocationPickerService = class LocationPickerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAddress(lat, long) {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.urls.geocode}latlng=${lat},${long}&key=${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.keys.maps}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(geoData => {
            if (!geoData || !geoData['results'] || geoData['results']['length'] === 0) {
                return null;
            }
            return geoData['results'][0].formatted_address;
        }));
    }
    getMapImage(lat, lng, zoom) {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.urls.staticMap}${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap&markers=color:red%7Clabel:Place%7C${lat},${lng}&key=${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.keys.maps}`);
    }
};
LocationPickerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
LocationPickerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LocationPickerService);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-modal/map-modal.component */ 1218);
/* harmony import */ var _pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickers/location-picker/location-picker.component */ 8042);






let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_1__.LocationPickerComponent, _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__.MapModalComponent],
        entryComponents: [_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__.MapModalComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        exports: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_1__.LocationPickerComponent, _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__.MapModalComponent],
    })
], SharedModule);



/***/ }),

/***/ 6055:
/*!***********************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer/new-offer.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\nion-col {\n  border: 1px solid crimson;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1vZmZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQSIsImZpbGUiOiJuZXctb2ZmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbmlvbi1jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCBjcmltc29uO1xufVxuKi9cbiJdfQ== */");

/***/ }),

/***/ 7054:
/*!***********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.map.visible {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtBQUFGIiwiZmlsZSI6Im1hcC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcbn1cblxuLm1hcC52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 722:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".location-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.picker {\n  width: 30rem;\n  max-width: 100%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJsb2NhdGlvbi1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9jYXRpb24taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5waWNrZXIge1xuICB3aWR0aDogMzByZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgbWF4LWhlaWdodDogMzB2aDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ 832:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer/new-offer.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"createOffer()\" [disabled]=\"!form.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid class=\"ion-padding\">\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input type=\"text\" autocomplete autocorrect formControlName=\"title\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n           <ion-item>\n             <ion-label position=\"floating\">Short description</ion-label>\n             <ion-textarea rows=\"3\" formControlName=\"description\"></ion-textarea>\n           </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"form.get('description').invalid && form.get('description').touched\">\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <p>Description must be between 1 & 180 characters</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"4\" offset-sm=\"2\">\n          <ion-item>\n            <ion-label position=\"floating\">Available from</ion-label>\n            <ion-datetime min=\"2019-01-01\" max=\"2025-12-31\" formControlName=\"dateFrom\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"4\" offset-sm=\"2\">\n          <ion-item>\n            <ion-label position=\"floating\">to</ion-label>\n            <ion-datetime min=\"2019-01-02\" max=\"2025-12-31\" formControlName=\"dateTo\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"4\" offset-sm=\"2\">\n          <app-location-picker (locationPick)=\"locationPicked($event)\"></app-location-picker>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ 8091:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map-modal/map-modal.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Pick Location</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"cancel()\">Cancel</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"map\" #map></div>\n</ion-content>\n");

/***/ }),

/***/ 9685:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/location-picker/location-picker.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"picker\">\n  <ion-spinner name=\"dots\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-button color=\"primary\" (click)=\"pickLocation()\" *ngIf=\"!latLng.staticMapImageUrl && !isLoading\"><ion-icon name=\"map\" slot=\"start\"></ion-icon><ion-label>Select Location</ion-label></ion-button>\n  <ion-img [src]=\"latLng.staticMapImageUrl\" class=\"location-img\" *ngIf=\"latLng.staticMapImageUrl\"></ion-img>\n</div>\n<ion-button color=\"primary\" (click)=\"resetLocation()\" *ngIf=\"latLng.staticMapImageUrl\"><ion-label>ReSelect Location</ion-label></ion-button>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_offers_new-offer_new-offer_module_ts.js.map