import { Table3Component } from './table3/table3.component';
import { JobportalComponent } from './jobportal/jobportal.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';


const routes: Routes = [
  {
    path: 'first',
    component:LandingComponent,
   
  },
  {
    path: 'second',
    component: JobportalComponent
  },
  {
    path: 'third',
    component: Table3Component
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: "",
    redirectTo: '/third',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }