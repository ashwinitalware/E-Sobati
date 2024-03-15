import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllhospitalPage } from './allhospital.page';

describe('AllhospitalPage', () => {
  let component: AllhospitalPage;
  let fixture: ComponentFixture<AllhospitalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllhospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
