import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectcityPage } from './selectcity.page';

describe('SelectcityPage', () => {
  let component: SelectcityPage;
  let fixture: ComponentFixture<SelectcityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectcityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
