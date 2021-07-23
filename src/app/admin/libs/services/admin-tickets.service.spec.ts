import { TestBed } from '@angular/core/testing';

import { AdminTicketsService } from './admin-tickets.service';

describe('AdminTicketsService', () => {
  let service: AdminTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
