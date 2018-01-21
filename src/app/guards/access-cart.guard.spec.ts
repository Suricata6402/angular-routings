import { TestBed, async, inject } from '@angular/core/testing';

import { AccessCartGuard } from './access-cart.guard';

describe('AccessCartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessCartGuard]
    });
  });

  it('should ...', inject([AccessCartGuard], (guard: AccessCartGuard) => {
    expect(guard).toBeTruthy();
  }));
});
