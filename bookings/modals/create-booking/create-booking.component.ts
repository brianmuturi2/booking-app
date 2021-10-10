import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../../places/places/models/place.model';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() id: string;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  bookPlace() {
    this.modalController.dismiss();
  }

  cancel() {
    this.modalController.dismiss(
      {
        message: 'Closed book place'
      }, 'cancel', this.id);
  }

}
