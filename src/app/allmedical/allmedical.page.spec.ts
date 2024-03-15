import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllmedicalPage } from './allmedical.page';

describe('AllmedicalPage', () => {
  let component: AllmedicalPage;
  let fixture: ComponentFixture<AllmedicalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllmedicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
