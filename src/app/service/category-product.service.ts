import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {

  fileName = '';
  constructor(private http:HttpClient) { }

  addProductCategory(product:any){
    
    return this.http.post("http://localhost:3000/categorieProduit/add",product)
  }
  listProductCategory(){
    
    return this.http.get("http://localhost:3000/categorieProduit/")
  }
  deleteProductCategory(id:any){
    
    return this.http.delete("http://localhost:3000/categorieProduit/delete/"+id)
  }
}
