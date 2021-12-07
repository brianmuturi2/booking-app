import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PlacesService} from '../../places/services/places.service';
import {Place} from '../../places/models/place.model';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {

  form: FormGroup;
  placeId: string;

  place: Place;

  placeSub: Subscription;

  isLoading = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private placesService: PlacesService,
              private navController: NavController,
              private loadingController: LoadingController,
              private alertCtrl: AlertController) { }

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

        this.form = new FormGroup({
          title: new FormControl(this.place.title, {
            updateOn: 'blur',
            validators: [Validators.required]
          }),
          description: new FormControl(this.place.description, {
            updateOn: 'blur',
            validators: [Validators.required]
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

  async presentModal(err) {
    const alert = await this.alertCtrl.create({
      message: err,
      buttons: [{text: 'Okay', handler: () => {
          this.router.navigate(['/places/offers']);
        }}]
    });
    alert.present();
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

}
