import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { FeedbackService } from 'src/app/services/feedback.service';

import { ForumService } from 'src/app/services/forum.service';




@Component({

 selector: 'app-feedback-form',

 templateUrl: './feedback-form.component.html',

 styleUrls: ['./feedback-form.component.css']

})

export class FeedbackFormComponent {

 id:any;

 forum:any;

 query:any;


 response:any;



constructor(private ds:ForumService,private ar:ActivatedRoute){

 this.ar.params.subscribe(
 {
 next: (params)=>{
this.id =params['id']
this.readData()
 },
 error: () => this.id = 0
 }
 )

}
readData(){
 this.ds.getForumById(this.id).subscribe({
next: (data:any)=> this.forum=data,
error: ()=> this.forum= {}
 }) 
}
AddSuggestion(res:string){

 if (this.forum && this.forum.responses){
 this.forum.responses.push(res);

 this.ds.postSuggestion(this.forum).subscribe(

 {

 next:(data:any)=>{

 alert("suggestion posted");

 location.reload();


 },


 error:(error)=>alert("suggestion not posted")

 });

 }





















}





















}