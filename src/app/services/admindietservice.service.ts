import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmindietserviceService {

  constructor(private http:HttpClient) { }
  getAdmindiet():Observable<any> {
    return this.http.get("http://localhost:4500/dietryplan")
  }
  getAdmindietId(id:any):Observable<any>{
    return this.http.get("http://localhost:4500/dietryplan/"+id)
  }
}