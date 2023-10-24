import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InprogressPageRoutingModule } from './inprogress-routing.module';

import { InprogressPage } from './inprogress.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InprogressPageRoutingModule,
    SharedModule
  ],
  declarations: [InprogressPage]
})
export class InprogressPageModule {}
