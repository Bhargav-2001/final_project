import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminmenubarComponent } from './adminmenubar/adminmenubar.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { AdminproductComponent } from './adminhome/adminproduct/adminproduct.component';
import { AdminproductdetailsComponent } from './adminhome/adminproductdetails/adminproductdetails.component';
import { AdmindietplanComponent } from './admindietplan/admindietplan.component';
import { AdmindiettypeComponent } from './admindietplan/admindiettype/admindiettype.component';
import { AdmindietdetailsComponent } from './admindietplan/admindietdetails/admindietdetails.component';
import { AdmincreateComponent } from './admincreate/admincreate.component';
import { AdminresponseComponent } from './admincreate/adminresponse/adminresponse.component';
import { AdminresponseformComponent } from './admincreate/adminresponseform/adminresponseform.component';





@NgModule({
  declarations: [
    AdminmenubarComponent,
    AdminhomeComponent,
    AdminproductComponent,
    AdminproductdetailsComponent,
    AdmindietplanComponent,
    AdmindiettypeComponent,
    AdmindietdetailsComponent,
    AdmincreateComponent,
    AdminresponseComponent,
    AdminresponseformComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule
   
  
  ]
})
export class AdminModule { }
