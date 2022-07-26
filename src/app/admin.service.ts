import { Injectable } from '@angular/core';
import { Membre } from "./model/membre";
import {HttpClient} from "@angular/common/http";
//import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MembreService {
   url: string = "http://localhost:3000/membre";
   constructor(private http: HttpClient) { }
   //get Members
   getListMembre(){
     return this.http.get<Membre[]>(this.url)
   }
   //add a new Member
  addMembre(membre:Membre){
     return this.http.post(this.url + "/add",membre )
  }
  //delete a Member
  deleteMembre(id: String){
     return this.http.delete(this.url + "/delete/" +id)
  }
  //update a Member
  updateMembre(membre: Membre){
     return this.http.put(this.url + "/update/" + membre._id, membre)
  }
}
