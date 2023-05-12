import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CreateComponent } from './create/create.component';
import { ForumComponent } from './forum/forum.component';
import { MenubarComponent } from './menubar/menubar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { DietdetailsComponent } from './dietplan/dietdetails/dietdetails.component';
import { HomeComponent } from './home/home.component';
import { DietplanComponent } from './dietplan/dietplan.component';


const routes: Routes = [  
  {path:"menubar",component:MenubarComponent,
  children:[
    {path:"home",component:HomeComponent},
    
    {path:"Dietplan",component:DietplanComponent},
    {path:"Create",component:CreateComponent},
    {path:"forum",component:ForumComponent},
  {path:"dietdetails/:id",component:DietdetailsComponent}
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
