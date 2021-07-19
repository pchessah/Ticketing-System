import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTicketsComponent } from './all-tickets.component';

describe('AllTicketsComponent', () => {
  let component: AllTicketsComponent;
  let fixture: ComponentFixture<AllTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
