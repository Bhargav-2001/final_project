import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmenubarComponent } from './adminmenubar/adminmenubar.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdmindietplanComponent } from './admindietplan/admindietplan.component';
import { AdmincreateComponent } from './admincreate/admincreate.component';
import { AdminresponseformComponent } from './admincreate/adminresponseform/adminresponseform.component';



const routes: Routes = [
  {path:"",component:AdminmenubarComponent,
children:[
  {path:"adminhome",component:AdminhomeComponent},
  {path:"admindietplan",component:AdmindietplanComponent},
  {path:"admincreate",component:AdmincreateComponent},
  {path:"forum",component:AdminresponseformComponent}
  
  
  

]},
  


  

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
