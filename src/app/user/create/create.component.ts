import { Component, } from '@angular/core';
import { ContactService } from 'src/app/services/contactservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  contactlist:any;
  constructor(private cs:ContactService){

    this.cs.getContacts().subscribe(
       {
         next: (data:any)=>this.contactlist = data,
         error: ()=> this.contactlist = []
       }
    )
  }
}
