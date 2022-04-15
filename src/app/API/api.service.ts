import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// const rr = 'http://141.95.153.155/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiBook = 'https://cors-proxy-any.herokuapp.com/141.95.153.155';
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


  getTest(auth: any) {
    return this.http.get<any>(`${this.apiBook}`).subscribe(data => {
      console.log(data)
    });
  }

  getAccueil() {
    return this.http.get<any>(`${this.apiBook}/`);
  }

  getCoffre() {
    return this.http.get<any>(`${this.apiBook}/coffre`);
  }
  getTresor() {
    return this.http.get<any>(`${this.apiBook}/1`);
  }
  getInformationJoueur() {
    return this.http.get<any>(`${this.apiBook}/reset`);
  }
  getAccueil2Etage() {
    return this.http.get<any>(`${this.apiBook}:8000/`);
  }
  getInscription2Etage() {
    return this.http.get<any>(`${this.apiBook}:8000/inscription`);
  }
  getReset2Etage() {
    return this.http.get<any>(`${this.apiBook}:8000/reset`);
  }
  getCouloir2etage() {
    return this.http.get<any>(`${this.apiBook}:8000/couloir`);
  }
  getTresorCouloir2Etage() {
    return this.http.get<any>(`${this.apiBook}:8000/couloir/1`);
  }
  getNoteIndice2Etage() {
    return this.http.get<any>(`${this.apiBook}:8000/note`);
  }
  getVieux2Etage() {
    return this.http.get<any>(`${this.apiBook}:8000/vieux`);
  }
  postVieuxTresor2Etage(reponse: any) {
    return this.http.post<any>(`${this.apiBook}:8000/vieux`, reponse);
  }
  getAccueil3Etage() {
    return this.http.get<any>(`${this.apiBook}:7259/`);
  }
  getInscription3Etage() {
    return this.http.get<any>(`${this.apiBook}:7259/inscription`);
  }
  getDragon3Etage() {
    return this.http.get<any>(`${this.apiBook}:7259/dragon`);
  }
  deleteDragon3Etage() {
    return this.http.delete<any>(`${this.apiBook}:7259/dragon`);
  }
  getReset3Etage() {
    return this.http.get<any>(`${this.apiBook}:7259/reset`);
  }


  /*getLogin(auth: any){

    this.auth = auth
    return fetch(this.apiBook + '/inscription', { method: 'GET', mode: 'cors', headers: this.myheader }).then(res => res.json()).then(res => { console.warn(res); return res });
    //return this.http.get(`${this.apiBook}/inscription`, this.httpOptions);
  }*/

}
