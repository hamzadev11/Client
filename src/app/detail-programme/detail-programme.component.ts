import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { programme } from '../model/programme';
import { ProgrammeService } from '../services/programme.service';

declare const L:any;
@Component({
  selector: 'app-detail-programme',
  templateUrl: './detail-programme.component.html',
  styleUrls: ['./detail-programme.component.css']
  
})

export class DetailProgrammeComponent implements OnInit {
  
   coords:any;
  programme:programme;
  meteo: any;
  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService
  ) { 
    
  }

  ngOnInit(): void {
    
    
    this.loadProgramme();
    //this.mapSetUp();
    
   
  }
  

  loadProgramme(){
    const programmeId= this.route.snapshot.paramMap.get('id');
    console.log(programmeId);
   console.log(this.programme);
    this.programmeService.getprogrammeById(programmeId).subscribe((data:any) => {
      this.programme = data;
      this.programmeService.getMeteo(this.programme.geolocation.coordinates[0],this.programme.geolocation.coordinates[1]).subscribe((data:any) => this.meteo= data);
    
    //console.log(this.programme.geolocation.coordinates);
    var map = L.map('map').setView([34.8489445,10.1917834,], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© HuntKingdom'
}).addTo(map);
console.log(this.programme.geolocation.coordinates);
var arr=this.programme.geolocation.coordinates;
var new_arr=arr.reverse();
//console.log("first opt"+arr[0]+' second opt '+arr[1]);
//console.log("reverse array"+new_arr);
var marker = L.marker([arr[0],arr[1]]).addTo(map);

    });
    
  }


}
