import { TestBed } from '@angular/core/testing';

import { ShoppinglistserviceService } from './shoppinglistservice.service';

describe('ShoppinglistserviceService', () => {
  let service: ShoppinglistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppinglistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
