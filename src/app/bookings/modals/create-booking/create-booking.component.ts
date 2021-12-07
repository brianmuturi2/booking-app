import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Place} from '../../../places/places/models/place.model';
import {ModalController} from '@ionic/angular';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: string;
  @Input() id: string;

  startDate: string;
  endDate: string;

  @ViewChild('f', {static: false}) form: FormGroup;

  constructor(private modalController: ModalController) { }

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
    this.modalController.dismiss(
      {
        message: 'Closed book place',
      }, 'cancel', this.id);
  }
  save() {
    if (this.form.invalid || !this.datesValid()) {
      return;
    }
    this.modalController.dismiss(
      {
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
}
