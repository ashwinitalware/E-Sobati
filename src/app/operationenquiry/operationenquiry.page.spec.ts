import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationenquiryPage } from './operationenquiry.page';

describe('OperationenquiryPage', () => {
  let component: OperationenquiryPage;
  let fixture: ComponentFixture<OperationenquiryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OperationenquiryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
