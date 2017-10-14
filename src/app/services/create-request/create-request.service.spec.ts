import { TestBed, inject } from '@angular/core/testing';

import { CreateRequestService } from './create-request.service';

describe('CreateRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateRequestService]
    });
  });

  it('should be created', inject([CreateRequestService], (service: CreateRequestService) => {
    expect(service).toBeTruthy();
  }));
});
