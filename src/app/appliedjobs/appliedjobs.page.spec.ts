import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppliedjobsPage } from './appliedjobs.page';

describe('AppliedjobsPage', () => {
  let component: AppliedjobsPage;
  let fixture: ComponentFixture<AppliedjobsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppliedjobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
