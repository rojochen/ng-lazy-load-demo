import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule
  ],
  declarations: [SecondPageComponent]
})
export class SecondModule { }
