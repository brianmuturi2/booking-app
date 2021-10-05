import { Injectable } from '@angular/core';
import {Offer} from '../models/offers.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private _offers: Offer[] = [
    new Offer('o1', 'Manhattan Mansion', 'https://media.timeout.com/images/105150636/image.jpg'),
    new Offer('o2', 'L\'Amour Toujours', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F08%2Ffunky-loft-studio-airbnb-rental-paris-france-AIRBNBPARIS0817.jpg'),
    new Offer('o3', 'The Foggy Palace', 'https://static.tripzilla.com/thumb/9/0/165008_800x.jpg'),
    ];

  constructor() { }

  get offers() {
    return [...this._offers];
  }
}
