import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private http:HttpClient) { }
  
  getAllProducts(){
    return this.http.get("http://localhost:3000/assignment")
  }

  getProductById(pid):Observable<any>{
    return this.http.get("http://localhost:3000/assignment/"+pid)
  }

  deleteProductById(pid){
    return this.http.delete("http://localhost:3000/assignment/"+pid)
  }

  createProduct(product){
    return this.http.post("http://localhost:3000/assignment/", product)
   }

   updateProductById(id, product){
    return this.http.put("http://localhost:3000/assignment/" +id, product)
   }


}
