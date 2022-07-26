import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Panier } from '../models/panier';
import { CommandeService } from '../services/commande.service';
import { PanierService } from '../services/panier.service';
import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { MessengerService } from './../services/messenger.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  list! : Product[];
  prod! : Product;
  livraison!: Product;
tot! : [];
  cartTotal = 0
  _id !: string;
test !: Product;
  
  constructor(private cmdService: PanierService,private route: ActivatedRoute,private msg : MessengerService ) { }

  ngOnInit(): void {
   
    console.log('test 3');
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this._id = params["_id"];
     // this.adminCreateurId = "";
      console.log("this._id = " + this._id); // price
     // console.log("this.adminCreateurId = " + this.adminCreateurId); // price
    }

    
  );
  this.cmdService.singleProduct2(this._id).subscribe(
    (data:Product)=> {this.livraison=data
    console.log(this.livraison);
  this.test =  this.livraison;
  this.addCart();

  }

  );
this.CartDetails();

 
}
itemsCart : any = [];
addCart(){
  console.log("addProduct");

  console.log(this.test);
let cartDNULL = localStorage.getItem('localCar');
if(cartDNULL == null ){
  let store : any = [];
  store.push(this.test);
  localStorage.setItem('localCart',JSON.stringify(store));
}
else {
  var id = this.test._id;
  let index : number = -1 ;
this.itemsCart =JSON.parse( localStorage.getItem('localCart')|| '');
for (let i =0 ; i<this.itemsCart.length; i++){
  if(id === this.itemsCart[i]._id){
    this.itemsCart[i].quantiteProd = this.test.quantiteProd;
    index = i;
break;

  }
  if (index == -1 ){
    this.itemsCart.push(this.test);
    localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
  }else{
    localStorage.setItem('localCart',JSON.stringify(this.itemsCart));

  }
}

}
}

    getCartDetails : any = [];
 CartDetails(){

  if(localStorage.getItem('localCart')){
    let name1:string = localStorage.getItem('localCart') || '';
this.getCartDetails = JSON.parse(name1 );
console.log(this.getCartDetails);
  }
 }
}