import { TestBed, async, inject } from '@angular/core/testing';

import { InterceptGuard } from './intercept.guard';

describe('InterceptGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptGuard]
    });
  });

  it('should ...', inject([InterceptGuard], (guard: InterceptGuard) => {
    expect(guard).toBeTruthy();
  }));
});
