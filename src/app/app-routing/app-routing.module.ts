import { AdminComponent } from './../admin/admin.component';
import { SecondComponent } from './../second/second.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from '../first/first.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/',
  pathMatch: 'full'
},
  {
    path: 'first',
    component: FirstComponent,
},
{
  path: 'second',
  component: SecondComponent,
},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
