import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllmedicalPage } from './allmedical.page';

const routes: Routes = [
  {
    path: '',
    component: AllmedicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllmedicalPageRoutingModule {}
