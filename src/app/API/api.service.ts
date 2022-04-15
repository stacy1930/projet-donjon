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
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/coffre`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getTresor() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/1`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getInformationJoueur() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/reset`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getAccueil2Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getInscription2Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/inscription`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getReset2Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/reset`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getCouloir2etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/couloir`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getTresorCouloir2Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/couloir/1`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getNoteIndice2Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/note`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getVieux2Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/vieux`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  postVieuxTresor2Etage(reponse: any) {
    //@ts-ignore
    return this.http.post<any>(`${this.apiBook}:8000/vieux`, reponse, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getAccueil3Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:7259/`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getInscription3Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:7259/inscription`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getDragon3Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:7259/dragon`), { headers: this.myheader, responseType: "text", observe: 'response' };
  }
  deleteDragon3Etage() {
    //@ts-ignore
    return this.http.delete<any>(`${this.apiBook}:7259/dragon`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getReset3Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:7259/reset`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getEscalier() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/escalier`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }


  /*getLogin(auth: any){

    this.auth = auth
    return fetch(this.apiBook + '/inscription', { method: 'GET', mode: 'cors', headers: this.myheader }).then(res => res.json()).then(res => { console.warn(res); return res });
    //return this.http.get(`${this.apiBook}/inscription`, this.httpOptions);
  }*/

}
