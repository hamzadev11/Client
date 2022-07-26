import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { programme } from '../model/programme';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  constructor(private http:HttpClient) { }
baseUrl="http://localhost:3000/programme/"
  getprogrammes()
  {
    return this.http.get<programme>(this.baseUrl);
    
  } 

  getprogrammeById(id:any):Observable<any>
  {
const url= `${this.baseUrl}${id}`;
return this.http.get(url);
  }

  getProgrammeByProx(lng:any,lat:any)
  {
    const url= `${this.baseUrl}/proximite/?lng=${lng}&lat=${lat}`
    return this.http.get(url);
  }

  getMeteo(lng:any,lat:any)
  {
    const url= `${this.baseUrl}/weather/?lng=${lng}&lat=${lat}`
    return this.http.get(url);
  }
}