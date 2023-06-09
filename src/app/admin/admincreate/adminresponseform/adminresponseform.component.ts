import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-adminresponseform',
  templateUrl: './adminresponseform.component.html',
  styleUrls: ['./adminresponseform.component.css']
})
export class AdminresponseformComponent {

  id:any;
forum:any;
query:any;
response:any;

constructor(private ds:ForumService,private ar:ActivatedRoute){
  this.ar.params.subscribe({
    next: (params)=>{
      this.id =params['id'];
      this.readData();
    },
    error: () => this.id = 0
  });
}

readData(){
  this.ds.getForumById(this.id).subscribe({
    next: (data:any)=> this.forum=data,
    error: ()=> this.forum= {}
  });
}

AddSuggestion(res:string){
  if (this.forum && this.forum.responses){
    this.forum.responses.push(res);
    this.ds.postSuggestion(this.forum).subscribe({
      next:(data:any)=>{
        alert("suggestion posted");
        location.reload();
      },
      error:(error)=>alert("suggestion not posted")
    });
  }
}
}
