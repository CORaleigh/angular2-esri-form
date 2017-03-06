import { TestBed, inject } from '@angular/core/testing';

import { FeatureLayerService } from './feature-layer.service';

describe('FeatureLayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureLayerService]
    });
  });

  it('should ...', inject([FeatureLayerService], (service: FeatureLayerService) => {
    expect(service).toBeTruthy();
  }));
});
