import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first', loadChildren: './first/first.module#FirstModule'},
  { path: 'second', loadChildren: './second/second.module#SecondModule'},
  { path: 'third', loadChildren: './third/third.module#ThirdModule'},
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
