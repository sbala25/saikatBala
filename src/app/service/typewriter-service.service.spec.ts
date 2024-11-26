import { TestBed } from '@angular/core/testing';

import { TypewriterServiceService } from './typewriter-service.service';

describe('TypewriterServiceService', () => {
  let service: TypewriterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypewriterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
