import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  fileName = '';
  constructor(private http:HttpClient) { }

  addProduct(product:any){
    
    return this.http.post("http://localhost:3000/produit/addProduct",product)
  }
  listProduct(){
    
    return this.http.get("http://localhost:3000/produit/")
  }
  deleteProduct(id:any){
    
    return this.http.delete("http://localhost:3000/produit/delete/"+id)
  }
  singleProduct(id:any){
    
    return this.http.get("http://localhost:3000/produit/get/"+id)
  }
  updateProduct(id:any,product:any){
    return this.http.put("http://localhost:3000/produit/update/"+id,product)
  }
}
