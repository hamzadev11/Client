import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { programme } from '../model/programme';
import { ProgrammeService } from '../services/programme.service';

@Component({
  selector: 'app-programme-prox',
  templateUrl: './programme-prox.component.html',
  styleUrls: ['./programme-prox.component.css']
})
export class ProgrammeProxComponent implements OnInit {
lat: any;
lng:any;

programmeList:programme[];
  constructor(
    private route:ActivatedRoute,
    private serviceProg:ProgrammeService
  ) { }

  latitude: any;
  longitude: any;

  ngOnInit(): void {

    
  
  if(!navigator.geolocation){
    console.log("geolocation is not supported");
  }
  
  this.programmeProx();
  }

  programmeProx()
  {
    this.route.queryParams.subscribe(params => {
      this.lng = params['lng'];
      this.lat = params['lat'];
      
      console.log( this.latitude);// OUTPUT 1534
      console.log( this.longitude);// OUTPUT red
    });

    this.serviceProg.getProgrammeByProx(this.lng,this.lat).subscribe((data:any) => this.programmeList = data);
 
  }

}
