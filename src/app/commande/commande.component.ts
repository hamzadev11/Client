import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livraison } from '../models/livraison';
import { Product } from '../models/product';
import { CommandeService } from '../services/commande.service';
import { LivraisonService } from '../services/livraison.service';
import { PanierService } from '../services/panier.service';
import { Commande } from './../models/commande';
import { Panier } from './../models/panier';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private videoService: CommandeService,private panierService: PanierService,private livraisonService: LivraisonService) { }
  list! : Product[];
  livraison !: Livraison;
  commande! : Commande;
  panier ! : Panier;
  liv ! : Product;

li! : Object[];
_id  : any = [];
  ngOnInit(): void {
    this.commande = new Commande;
    this.livraison = new Livraison;
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this._id = params["_id"];
     // this.adminCreateurId = "";
      console.log("this._id = " + this._id); // price
     // console.log("this.adminCreateurId = " + this.adminCreateurId); // price
    }

    
  );

}

   save(){


    this.panierService.addCommande(this._id._id).subscribe
    (
      
    );
this.panierService.get(this._id).subscribe(
  (data:Panier)=> {this.panier=data
  console.log(this.panier);

}

);
    this.videoService.addCommande(this.panier._id, this.commande).subscribe();
    
    this.livraisonService.addCommande(this.livraison).subscribe();

    //notify
    
    }
}