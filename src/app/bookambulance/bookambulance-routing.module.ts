import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookambulancePage } from './bookambulance.page';

const routes: Routes = [
  {
    path: '',
    component: BookambulancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookambulancePageRoutingModule {}
