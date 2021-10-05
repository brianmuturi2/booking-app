import { Injectable } from '@angular/core';
import {Place} from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In the heart of Newyork city', 'https://media.timeout.com/images/105150636/image.jpg', '149.99'),
    new Place('p2', 'Amour Toujours', 'A romantic place in paris', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F08%2Ffunky-loft-studio-airbnb-rental-paris-france-AIRBNBPARIS0817.jpg', '199.99'),
    new Place('p3', 'The foggy palace', 'Not your average city trip!', 'https://static.tripzilla.com/thumb/9/0/165008_800x.jpg', '399.99'),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
