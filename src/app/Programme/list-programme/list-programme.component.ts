import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { programme } from 'src/app/model/programme';
import { ProgrammeService } from 'src/app/services/programme.service';



@Component({
  selector: 'app-list-programme',
  templateUrl: './list-programme.component.html',
  styles: [
  ]
})
export class ListProgrammeComponent implements OnInit {
  latitude: any;
  longitude: any;
  programmeList:programme[];
  constructor(
    private programmeService: ProgrammeService,
    private route:ActivatedRoute
    ) { 
    
  }

 

  ngOnInit(): void {
    if(!navigator.geolocation){
      console.log("geolocation is not supported");
    }
    navigator.geolocation.getCurrentPosition((position)=>
    {
      this.latitude=position.coords.latitude;
      this.longitude=position.coords.longitude;
      var accuracy = position.coords.accuracy;
      console.log(
        `lat: ${position.coords.latitude} , lon: ${position.coords.longitude}`
      ,'accuracy',accuracy);
    });

    this.programmeService.getprogrammes().subscribe((data:any) => this.programmeList = data);

  
  
  }
 

  }

