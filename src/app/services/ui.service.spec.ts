import { TestBed, inject } from '@angular/core/testing';

import { UiService } from './ui.service';

describe('UiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiService]
    });
  });

  it('should be created', inject([UiService], (service: UiService) => {
    expect(service).toBeTruthy();
  }));
});
