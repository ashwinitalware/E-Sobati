import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmenthistoryPage } from './appointmenthistory.page';

describe('AppointmenthistoryPage', () => {
  let component: AppointmenthistoryPage;
  let fixture: ComponentFixture<AppointmenthistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppointmenthistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
