import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


import { ProductdetailsComponent } from './user/home/productdetails/productdetails.component';
import { DietdetailsComponent } from './user/dietplan/dietdetails/dietdetails.component';
import { FeedbackFormComponent } from './user/forum/feedback-form/feedback-form.component';


const routes: Routes = [
  
  {path:"login",component:LoginComponent},
  {path:'p-details/:id',component:ProductdetailsComponent},
  {path:'dietdetails/:id',component:DietdetailsComponent},
  { path: 'search/:searchTerm', component: ProductdetailsComponent },

  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",
  loadChildren:() => import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"forum/:id", component: FeedbackFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
