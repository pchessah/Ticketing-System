import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSingleTicketComponent } from './admin-single-ticket.component';

describe('AdminSingleTicketComponent', () => {
  let component: AdminSingleTicketComponent;
  let fixture: ComponentFixture<AdminSingleTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSingleTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSingleTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
