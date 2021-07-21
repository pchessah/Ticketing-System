import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllTicketsComponent } from './admin-all-tickets.component';

describe('AdminAllTicketsComponent', () => {
  let component: AdminAllTicketsComponent;
  let fixture: ComponentFixture<AdminAllTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
