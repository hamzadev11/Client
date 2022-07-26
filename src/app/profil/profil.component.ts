import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Membre } from '../model/membre';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  membre: Membre;
  _id: string;
  sessionRole : any;
  adminIsConnected : any;

  constructor(private route: ActivatedRoute, private userService:UserService) { }
  ngOnInit() : void{

    this.sessionRole = localStorage.getItem("connectedUser")
    this.adminIsConnected = JSON.parse(this.sessionRole)._id ;
    //alert(this.adminIsConnected)


    //setTimeout(function(){
    //  console.log("waited for: "+ " seconds");
    //}, 1000);
    
    this.userService.getUserById(this.adminIsConnected).subscribe(
    (data:any)=> this.membre=data
  );
  
}

}




    

