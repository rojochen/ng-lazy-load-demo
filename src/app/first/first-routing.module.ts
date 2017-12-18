import { FirstPageComponent } from './first-page/first-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path : '',
    component: IndexComponent,
    children: [
      {
        path: 'first-page',
        component: FirstPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
