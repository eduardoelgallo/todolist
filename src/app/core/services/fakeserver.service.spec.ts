import { TestBed } from '@angular/core/testing';

import { FakeserverService } from './fakeserver.service';

describe('FakeserverService', () => {
  let service: FakeserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
