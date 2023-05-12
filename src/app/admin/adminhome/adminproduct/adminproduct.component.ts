import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent {
  @Input() pro1:any;
}
