import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppliedjobsPage } from './appliedjobs.page';

const routes: Routes = [
  {
    path: '',
    component: AppliedjobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppliedjobsPageRoutingModule {}
