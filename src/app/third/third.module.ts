import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdRoutingModule } from './third-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
  imports: [
    CommonModule,
    ThirdRoutingModule
  ],
  declarations: [IndexComponent]
})
export class ThirdModule { }
