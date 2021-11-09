import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import {keys, urls} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationPickerService {

  constructor(private httpClient: HttpClient) { }

  getAddress(lat, long) {
    return this.httpClient.get(`${urls.geocode}latlng=${lat},${long}&key=${keys.maps}`).pipe(map(geoData => {
      if (!geoData || !geoData['results'] || geoData['results']['length'] === 0) {
        return null;
      } return geoData['results'][0].formatted_address;
    }));
  }
}
