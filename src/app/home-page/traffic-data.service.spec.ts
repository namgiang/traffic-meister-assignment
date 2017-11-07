import { TestBed, inject } from '@angular/core/testing';

import { TrafficDataService } from './traffic-data.service';

describe('TrafficDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrafficDataService]
    });
  });

  it('should be created', inject([TrafficDataService], (service: TrafficDataService) => {
    expect(service).toBeTruthy();
  }));
});
