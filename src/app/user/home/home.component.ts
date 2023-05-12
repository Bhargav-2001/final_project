import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productlist:any;
  types:string[]=[
    "All",
    "Salads",
    "Fruits",
    "Vegetables"
  ]
  selected:string="All"
      constructor(private ps:ProductService){
        this.ps.getProducts().subscribe(
          {
            next: (data:any)=> this.productlist =data,
            error: ()=> this.productlist=[]
          }
        )
      }

  ngOnInit(): void {
  }

}
