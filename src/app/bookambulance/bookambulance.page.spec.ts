import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookambulancePage } from './bookambulance.page';

describe('BookambulancePage', () => {
  let component: BookambulancePage;
  let fixture: ComponentFixture<BookambulancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookambulancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
