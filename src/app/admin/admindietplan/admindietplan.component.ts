import { Component } from '@angular/core';
import { AdmindietserviceService } from 'src/app/services/admindietservice.service';

@Component({
  selector: 'app-admindietplan',
  templateUrl: './admindietplan.component.html',
  styleUrls: ['./admindietplan.component.css']
})
export class AdmindietplanComponent {
  dietlist:any;
  constructor(private ds:AdmindietserviceService){
    this.ds.getAdmindiet().subscribe(
      {
        next: (data:any)=> this.dietlist =data,
        error: ()=> this.dietlist=[]
      }
    )
  }

  ngOnInit(): void {
    }
  }
  
  
  


