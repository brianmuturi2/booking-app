import { Injectable } from '@angular/core';
import {Place} from '../models/place.model';
import {AuthService} from "../../../auth/services/auth.service";
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>(
      [
        new Place(
            'p1',
            'Manhattan Mansion',
            'In the heart of Newyork city',
            'https://media.timeout.com/images/105150636/image.jpg',
            '149.99',
            new Date('2019-01-01'),
            new Date('2019-12-31'),
            'abc'
        ),
        new Place(
            'p2',
            'L\'Amour Toujours',
            'A romantic place in paris',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F08%2Ffunky-loft-studio-airbnb-rental-paris-france-AIRBNBPARIS0817.jpg',
            '199.99',
            new Date('2019-01-01'),
            new Date('2019-12-31'),
            'abc'
        ),
        new Place(
            'p3',
            'The foggy palace',
            'Not your average city trip!',
            'https://static.tripzilla.com/thumb/9/0/165008_800x.jpg',
            '399.99',
            new Date('2019-01-01'),
            new Date('2019-12-31'),
            'abc'
        )
      ]
  );

  constructor(private authService: AuthService) { }

  get places() {
      return this._places.asObservable();
  }

  getPlace(id: string) {
    return this.places.pipe(
        take(1),
        map(res => {
            return { ...res.find(c => c.id === id)};
      })
    );
  }

  addPlace(title: string, description: string, price: string, availableFrom: Date, availableTo: Date) {
    const newPlace = new Place(Math.random().toString(), title, description, 'https://static.tripzilla.com/thumb/9/0/165008_800x.jpg', price, availableFrom, availableTo, this.authService.userId);
    this.places.pipe(take(1)).subscribe(res => {
        this._places.next(res.concat(newPlace));
    });
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(take(1), delay(1000), tap(places => {
      const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
      const updatedPlaces = [...places];
      const old = updatedPlaces[updatedPlaceIndex];
      updatedPlaces[updatedPlaceIndex] = new Place(old.id, title, description, old.imageUrl, old.price, old.availableFrom, old.availableTo, old.userId);
      this._places.next(updatedPlaces);
    }));
  }
}
