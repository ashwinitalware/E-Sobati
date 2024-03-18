import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddprescriptionPage } from './addprescription.page';

describe('AddprescriptionPage', () => {
  let component: AddprescriptionPage;
  let fixture: ComponentFixture<AddprescriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddprescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
