import { Component, OnInit } from '@angular/core';
import { MembreService } from '../admin.service';
import { Membre } from '../model/membre';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  membre: Membre;
  constructor(private membreService:SignupService) { }

  ngOnInit(): void {
    this.membre= new Membre();
  }
  save(){
    //
 //   this.book.nbrLike=0;
    this.membreService.addMembre(this.membre).subscribe();
    //notify

  }
}
