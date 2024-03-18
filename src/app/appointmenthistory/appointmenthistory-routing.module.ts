import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmenthistoryPage } from './appointmenthistory.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmenthistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmenthistoryPageRoutingModule {}
