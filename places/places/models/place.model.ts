import {PlaceLocation} from '../../../shared/pickers/location-picker/models/location.model';

export class Place {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public price: string,
    public availableFrom: Date,
    public availableTo: Date,
    public userId: string,
    public location: PlaceLocation
    ) {
  }
}
