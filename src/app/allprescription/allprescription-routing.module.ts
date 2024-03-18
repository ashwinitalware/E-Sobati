import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllprescriptionPage } from './allprescription.page';

const routes: Routes = [
  {
    path: '',
    component: AllprescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllprescriptionPageRoutingModule {}
