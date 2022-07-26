
import { Injectable } from '@angular/core';
import {Admin} from "../model/admin";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AdminService {
   url: string = environment.url  + "/admin";
   constructor(private http: HttpClient) { }
   //get Books
   getList(){
     return this.http.get<Admin[]>(this.url + "/")
   }
   //add a new Book
  addAdmin(admin:Admin){
     return this.http.post(this.url + "/add",admin )
  }
  //delete a book
  deleteAdmin(_id: string){
     return this.http.delete(this.url + "/delete/" +_id)
  }
  //update a book
  updateAdmin(admin: Admin){
     return this.http.put(this.url + "/update/" + admin._id, admin)
  }
}
