import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppliedjobsPageRoutingModule } from './appliedjobs-routing.module';

import { AppliedjobsPage } from './appliedjobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppliedjobsPageRoutingModule
  ],
  declarations: [AppliedjobsPage]
})
export class AppliedjobsPageModule {}
