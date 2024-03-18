import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationenquiryPage } from './operationenquiry.page';

const routes: Routes = [
  {
    path: '',
    component: OperationenquiryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationenquiryPageRoutingModule {}
