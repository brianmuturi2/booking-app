import { TestBed } from '@angular/core/testing';

import { LocationPickerService } from './location-picker.service';

describe('LocationPickerService', () => {
  let service: LocationPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
