import {HttpClient} from '@angular/common/http';
import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ActionSheetController, AlertController, LoadingController, ModalController} from '@ionic/angular';
import {MapModalComponent} from "../../map-modal/map-modal.component";
import {LocationPickerService} from './services/location-picker.service';
import {map, switchMap} from 'rxjs/operators';
import {Coordinates, PlaceLocation} from './models/location.model';
import {Capacitor, Plugins} from '@capacitor/core';
import {Geolocation} from '@capacitor/geolocation';

@Component({
    selector: 'app-location-picker',
    templateUrl: './location-picker.component.html',
    styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit, OnChanges {

    @Output() locationPick = new EventEmitter<PlaceLocation>();
    @Input() showPreview = false;

    latLng: PlaceLocation = {
        lat: null,
        lng: null,
        address: null,
        staticMapImageUrl: null
    };

    isLoading = false;

    constructor(public modalCtrl: ModalController,
                private locationService: LocationPickerService,
                private loadingCtrl: LoadingController,
                private actionSheetCtrl: ActionSheetController,
                private alertCtrl: AlertController) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        if (!this.showPreview) {
            this.latLng.staticMapImageUrl = '';
        }
    }

    async pickLocation() {
        const actionSht = await this.actionSheetCtrl.create({
            header: 'Please choose',
            buttons: [
                {
                    text: 'Auto locate', handler: () => {
                        this.locateUser();
                    }
                },
                {
                    text: 'Pick on map', handler: () => {
                        this.openMap();
                    }
                },
                {text: 'Cancel', role: 'cancel'}
            ]
        });
        await actionSht.present();
    }

    private async openMap() {
        const modal = await this.modalCtrl.create({
            component: MapModalComponent
        });
        await modal.present();
        const dismiss = await modal.onDidDismiss();

        if (dismiss.data) {
            this.isLoading = true;

            this.latLng.lat = dismiss.data.lat;
            this.latLng.lng = dismiss.data.lng;

            this.latLng.staticMapImageUrl = null;

            this.getLocation();
            this.getStaticMap();
        }
    }

    private async locateUser() {
        if (!Geolocation) {
            const alert = await this.alertCtrl.create({
                message: 'Sorry, getting location automatically isnt possible. Please pick a location using the map.',
                buttons: [
                    {
                        text: 'Okay',
                        handler: () => {
                            this.openMap();
                        }
                    }
                ]
            });
            await alert.present();
        } else {
            try {
                const getLocation = await Geolocation.getCurrentPosition();
                this.latLng.lat = getLocation.coords.latitude;
                this.latLng.lng = getLocation.coords.longitude;
                this.getLocation();
                this.getStaticMap();
            } catch (e) {
                const alert = await this.alertCtrl.create({
                    message: e.message,
                    buttons: [
                        {
                            text: 'Okay',
                            role: 'cancel'
                        }
                    ]
                });
                await alert.present();
            }
        }
    }

    resetLocation() {
        this.latLng.staticMapImageUrl = null;
    }

    private getLocation() {
        this.locationService.getAddress(this.latLng.lat, this.latLng.lng).subscribe(res => {
            this.latLng.address = res;
            console.log('address is ', this.latLng.address);
        });
    };

    private getStaticMap() {
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
}
