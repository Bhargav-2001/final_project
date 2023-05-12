import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminproductComponent } from '../admin/adminhome/adminproduct/adminproduct.component';
import { AdminproductdetailsComponent } from '../admin/adminhome/adminproductdetails/adminproductdetails.component';

@Injectable({
  providedIn: 'root'
})
export class AdminproductService {

  constructor(private http:HttpClient) { }
  getProducts():Observable<any> {
    return this.http.get("http://localhost:4500/products")
  }
  getProductById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/products/"+id)
  }
}
