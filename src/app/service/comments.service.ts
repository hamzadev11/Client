import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  fileName = '';
  constructor(private http:HttpClient) { }

  addCommentsByProduct(user:string, description:string, note:string,id:string){
    
    const producteData = new FormData();
    producteData.append("user", user);
    producteData.append("description", description);
    producteData.append("note", note);
    console.log("producteData>>>>>><"+producteData);
   // return this.http.post("http://localhost:3000/produit/ajoutProduit",producteData);


    return this.http.post("http://localhost:3000/commentaires/add/"+id,producteData)
  }
  listCommentsByProduct(id:any){
    return this.http.get(" http://localhost:3000/commentaires/getCommentsByProductId/"+id)
  }
  deleteComment(id:any){
    
    return this.http.delete("http://localhost:3000/commentaires/delete/"+id)
  }
  updateComment(id:any,product:any){
    return this.http.put(" http://localhost:3000/commentaires/update/"+id,product)
  }
}
