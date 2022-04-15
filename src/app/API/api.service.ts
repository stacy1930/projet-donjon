import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// const rr = 'http://141.95.153.155/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiBook = 'http://localhost:4200/api';
  auth: string = 'grgge';


  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': 'http://141.95.153.155/',
      'Authorization': `Basic ${this.auth}`,
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET',
      'X-Requested-With': 'XMLHttpRequest',
      responseType: "json",
    }),
  };

  getTest(auth: any): Observable<any> {
    this.auth = auth

    return this.http.get(`${this.apiBook}/inscription`, this.httpOptions);
    // return this.http.get(rr);
  }
}
