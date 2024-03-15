import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllambulancePage } from './allambulance.page';

const routes: Routes = [
  {
    path: '',
    component: AllambulancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllambulancePageRoutingModule {}
