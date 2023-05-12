import { Component,OnInit,Input } from '@angular/core';
import { AdminproductService } from 'src/app/services/adminproduct.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit{
  
  @Input() pro1:any;

  selectedProduct: any;
  selectProduct(product: any) {
    this.selectedProduct = product;
  }
  

  productlist:any;
  product = null;
  constructor(private ps:AdminproductService, private http:HttpClient){
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
  



