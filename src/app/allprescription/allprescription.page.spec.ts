import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllprescriptionPage } from './allprescription.page';

describe('AllprescriptionPage', () => {
  let component: AllprescriptionPage;
  let fixture: ComponentFixture<AllprescriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllprescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
