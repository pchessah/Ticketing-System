import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForgortPasswordComponent } from './admin-forgort-password.component';

describe('AdminForgortPasswordComponent', () => {
  let component: AdminForgortPasswordComponent;
  let fixture: ComponentFixture<AdminForgortPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminForgortPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminForgortPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
