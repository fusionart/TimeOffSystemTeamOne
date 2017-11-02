/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SesionStorageService } from './sesion-storage.service';

describe('Service: SesionStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SesionStorageService]
    });
  });

  it('should ...', inject([SesionStorageService], (service: SesionStorageService) => {
    expect(service).toBeTruthy();
  }));
});