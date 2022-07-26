
    

import { Component, OnInit } from '@angular/core';
import {Evenement} from "../model/evenement";
import {TypeEvenement} from "../model/typeEvenement";

import {EvenementService} from "../services/evenement.service";

import { ActivatedRoute } from '@angular/router';
import { WeatherByCityService } from "../services/weather-by-city.service";
import { TypeEvenementService } from '../services/type-evenement.service';

@Component({
  selector: 'app-evenement-details',
  templateUrl: './evenement-details.component.html',
  styleUrls: ['./evenement-details.component.css']
})
export class EvenementDetailsComponent implements OnInit {
  
 
  evenement: Evenement;
  _id: string;
  weather: any;
  evenememntCity : string;
  typeEvenement : TypeEvenement;
  typeEvenementId: string;
 // adminCreateurId: string;
  constructor(private route: ActivatedRoute, private evenementService:EvenementService,

              private weatherByCity :WeatherByCityService, private typeEvenementService:TypeEvenementService) { }


    

    ngOnInit() : void{

   
      
      this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this._id = params["_id"];
        this.evenememntCity = params["evenememntCity"];
        this.typeEvenementId = params["typeEvenementId"];
       // this.adminCreateurId = "";
        console.log("this._id = " + this._id); // price
       // console.log("this.adminCreateurId = " + this.adminCreateurId); // price
      }

      
    );


      this.evenementService.getEvenementById(this._id).subscribe(
      (data:Evenement)=> 

              this.evenement=data

    );


    this.weatherByCity.getCityWeather(this.evenememntCity).subscribe(
      (data: any)=> this.weather = data
    );
          console.log("weather" + this.weather);

       this.typeEvenementService.getATypeEventById(this.typeEvenementId).subscribe(
      (data:TypeEvenement)=> this.typeEvenement=data
    );


}
  updateEvent(){
    //
 //   this.book.nbrLike=0;
    this.evenementService.updateEvenement(this.evenement).subscribe();
    //notify

  }

}




