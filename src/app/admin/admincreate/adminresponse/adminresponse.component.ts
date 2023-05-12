import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-adminresponse',
  templateUrl: './adminresponse.component.html',
  styleUrls: ['./adminresponse.component.css']
})
export class AdminresponseComponent {
  @Input() q:any;

}
