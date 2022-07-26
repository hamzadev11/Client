import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { livUrl, panierUrl, prodUrl } from 'api';
import { map, Observable } from 'rxjs';
import { Panier } from '../models/panier';
import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private http: HttpClient) { }
     
   //get Commande
   getList(){
    console.log("test OK");
    return this.http.get<Panier[]>(panierUrl);
    console.log( this.http.get<Panier[]>(panierUrl));
  } 
  getCartItems(): Observable<Panier[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<Panier[]>(panierUrl).pipe(
      map((result: any[]) => {
        let cartItems: Panier[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i]._id === item.product.id) {
              cartItems[i].nbrTotProd++
              productExists = true
              break;
            }
          }

          if (!productExists) {
           // cartItems.push(new Panier(item.id, item.product));
          }
        }

        return cartItems;
      })
    );
  }
 
  getListProd(){
    return this.http.get<Product[]>(prodUrl);
    console.log( this.http.get<Product[]>(prodUrl));
  }
  addProductToCart(product: Product): Observable<any> {
    return this.http.post(panierUrl, { product });
  }
  //add a new commande

  addCommande(commande : Panier){
    commande 
    return this.http.post(panierUrl+'add/'+commande.produit,commande);
  }
 
  //delete

  deleteCommande(id:string){
    return this.http.delete(panierUrl+"delete/"+id);
  }
  //get by id panier
  get(id : string){
    return this.http.get<Panier>(panierUrl+'get/'+id);
  } 
  singleProduct2(id:any){
    
    return this.http.get<Product>("http://localhost:3000/produit/get/"+id)
  }
  
  //update

  updateCommande(commande:Panier){
    return this.http.put(panierUrl+commande._id,commande);
  }}