import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgortPasswordComponent } from './forgort-password.component';

describe('ForgortPasswordComponent', () => {
  let component: ForgortPasswordComponent;
  let fixture: ComponentFixture<ForgortPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgortPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgortPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
