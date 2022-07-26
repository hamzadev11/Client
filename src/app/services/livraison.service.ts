import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { livUrl, panierUrl, prodUrl } from 'api';
import { Livraison } from '../models/livraison';
import { Panier } from '../models/panier';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private http: HttpClient) { }
     
   //get Commande
   getList(){
    console.log("test OK");
    console.log(this.http.get<Livraison[]>(livUrl));

    return this.http.get<Livraison[]>(livUrl);
  } 
  //get Commande
  getListProd(){
    return this.http.get<Product[]>(prodUrl);
  } 

  //add a new commande

  addCommande(commande : Livraison){
    return this.http.post(livUrl+'add/'+"62d8aa518facbb7167ffe033",commande);
  }
 
  //delete

  deleteCommande(id:string){
    return this.http.delete(livUrl+"delete/"+id);
  }
  //get by id panier
  get(id : string){
    return this.http.get<Panier[]>(panierUrl+'get/'+id);
  } 
  //update

  updateCommande(commande:Livraison){
    return this.http.put(livUrl+commande._id,commande);
  }}