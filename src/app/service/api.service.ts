import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Create
  createEspece(data:any): Observable<any> {
    let url = `${this.baseUri}/especeAnimales/add`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  createCategorie(data:any): Observable<any> {
    let url = `${this.baseUri}/categorieEspece/add`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Get all especes & categories
  getEspeces() {
    return this.http.get(`${this.baseUri}/especeAnimales`);
  }
  getFish(species:any): Observable<any> {
    let url = `/fish/${species}`;
    return this.http.get<any>(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  getCategories() {
    return this.http.get(`${this.baseUri}/categorieEspece`);
  }

  // Get employee & categorie
  getEspece(id:any): Observable<any> {
    let url = `${this.baseUri}/especeAnimales/read/${id}`;
    return this.http.get<any>(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  getCategorie(id:any): Observable<any> {
    let url = `${this.baseUri}/categorieEspece/read/${id}`;
    return this.http.get<any>(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update espece & categorie
  updateEspece(id :any, data :any ): Observable<any> {
    let url = `${this.baseUri}/especeAnimales/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  updateCategorie(id :any, data :any): Observable<any> {
    let url = `${this.baseUri}/categorieEspece/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete espece & categorie
  deleteEspece(id:any): Observable<any> {
    let url = `${this.baseUri}/especeAnimales/delete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  deleteCategorie(id:any): Observable<any> {
    let url = `${this.baseUri}/categorieEspece/delete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
