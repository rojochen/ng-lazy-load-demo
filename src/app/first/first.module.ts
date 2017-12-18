import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { IndexComponent } from './index.component';
@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule
  ],
  declarations: [IndexComponent]
})
export class FirstModule { }
