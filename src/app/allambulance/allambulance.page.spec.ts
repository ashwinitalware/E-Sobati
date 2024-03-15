import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllambulancePage } from './allambulance.page';

describe('AllambulancePage', () => {
  let component: AllambulancePage;
  let fixture: ComponentFixture<AllambulancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllambulancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
