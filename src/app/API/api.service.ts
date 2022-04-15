import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// const rr = 'http://141.95.153.155/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiBook = 'https://cors-anywhere.herokuapp.com/141.95.153.155';
  auth: string = 'grgge';


  constructor(private http: HttpClient) { }

  //headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  myheader = new Headers({
    'Content-Type': 'multipart/form-data',
    // 'Access-Control-Allow-Origin': 'http://141.95.153.155/',
    'Authorization': `Basic ${this.auth}`,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '',
    'Access-Control-Allow-Methods': 'POST, GET',
    'X-Requested-With': 'XMLHttpRequest',
    "Accept": "/*",
    responseType: "text",
  });


  getTest(auth: any){
   
    this.auth = auth
    return fetch(this.apiBook, { method: 'GET', mode: 'cors', headers: this.myheader }).then(res => res.json()).then(res => { console.warn(res); return res });
    //return this.http.get(`${this.apiBook}/inscription`, this.httpOptions);
  }

  /*getLogin(auth: any){
   
    this.auth = auth
    return fetch(this.apiBook + '/inscription', { method: 'GET', mode: 'cors', headers: this.myheader }).then(res => res.json()).then(res => { console.warn(res); return res });
    //return this.http.get(`${this.apiBook}/inscription`, this.httpOptions);
  }*/

}
