
import { Injectable } from '@angular/core';

import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import { Membre } from './model/membre';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
   url: string = environment.url  + "/membre";
   constructor(private http: HttpClient) { }
   //get Membres
   getList(){
     return this.http.get<Membre[]>(this.url + "/")
   }
   //add a new membre
  addMembre(membre:Membre){
     return this.http.post(this.url + "/add",membre )
  }
  //delete an membre
  deleteMembre(_id: string){
     return this.http.delete(this.url + "/delete/" +_id)
  }
  //update an membre
  updateMembre(membre: Membre){
     return this.http.put(this.url + "/update/" + membre._id, membre)
  }

  getMembreById(_id: string) {

   return this.http.get<Membre>(this.url + "/getMembreById/" + _id);
}


login(user:any){
   return this.http.post<{message:any, connectedUser : any}>(this.url + '/login',user);
 }


}

