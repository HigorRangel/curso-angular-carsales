import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";


const routes: Routes = [{path: '', component: LoginComponent},
//lazy loading
{path:'dashboard', loadChildren: ()=> import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
