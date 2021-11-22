import { Component, OnDestroy, OnInit } from '@angular/core';
import {BookingService} from '../services/booking.service';
import {Booking} from '../models/booking.model';
import {IonItemSliding, LoadingController, ToastController} from '@ionic/angular';
import { Subscription } from 'rxjs';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {

  isLoading = false;
  bookingsSub: Subscription;
  loadedBookings: Booking[];
  constructor(private bookingService: BookingService,
              private authService: AuthService,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    //this.bookingsSub = this.bookingService.bookings.subscribe(res => this.loadedBookings = res);
    this.isLoading = true;
    this.getBookings();
  }

  async cancelBooking(bookingId, slide: IonItemSliding) {
    this.isLoading = false;
    slide.close();
    // cancel booking with id
    const loading = await this.loadingCtrl.create({
      message: 'Deleting booking ...',
    });
    await loading.present();
    this.bookingService.cancelBooking(bookingId).subscribe( res => {
      this.isLoading = true;
      this.getBookings();
      loading.dismiss();
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.getBookings();
  }

  getBookings() {
    this.bookingsSub = this.bookingService.getBookings().subscribe(res => {
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

}
