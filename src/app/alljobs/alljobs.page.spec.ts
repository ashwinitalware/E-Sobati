import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlljobsPage } from './alljobs.page';

describe('AlljobsPage', () => {
  let component: AlljobsPage;
  let fixture: ComponentFixture<AlljobsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlljobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
