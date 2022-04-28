import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// const rr = 'http://141.95.153.155/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiBook = 'https://cors-proxy-any.herokuapp.com/141.95.153.155';
  auth: string = btoa('testtest:fddegze');


  constructor(private http: HttpClient) { }

  //headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  myheader = new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    'Authorization': `Basic ${this.auth}`,
    'Access-Control-Allow-Headers': 'Content-Type',
  });

  getToken(token: any) {
    const myheaderToken = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Headers': 'Content-Type',
      'x-auth-token': token
    });

    return myheaderToken
  }

  getAccueil() {
    return this.http.get<any>(`${this.apiBook}/`);
  }


  // getInscription() {
  //   //@ts-ignore
  //   return this.http.get<any>(`${this.apiBook}/inscription`, { headers: this.myheader, responseType: "text", observe: 'response' });
  // }
  getInscription(name: string, password: string) {

    const authentication = btoa(`'${name}:${password}'`);
    const headerInscription = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Authorization': `Basic ${authentication}`,
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/inscription`, { headers: headerInscription, responseType: "text", observe: 'response' });
  }

  getEscalier(token: any) {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/escalier`, { headers: this.getToken(token), responseType: "text", observe: 'response' });
  }

  getCoffre(token: any) {

    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/coffre`, { headers: this.getToken(token), responseType: "json", observe: 'response' });
  }
  getTresor(token: any) {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/1`, { headers: this.getToken(token), responseType: "text", observe: 'response' });
  }

  getRouteCache(token: any) {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/tresor`, { headers: this.getToken(token), responseType: "text", observe: 'response' });
  }
  getRoute36(token: any) {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/36`, { headers: this.getToken(token), responseType: "text", observe: 'response' });
  }

  getResetRDC(token: any) {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/reset`, { headers: this.getToken(token), responseType: "json", observe: 'response' });
  }


  getInformationJoueur() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}/reset`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getAccueil2Etage(token: any) {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/`, { headers: this.getToken(token), responseType: "json", observe: 'response' });
  }

  // getInscription2Etage() {
  //   //@ts-ignore
  //   return this.http.get<any>(`${this.apiBook}:8000/inscription`, { headers: this.myheader, responseType: "text", observe: 'response' });
  // }
  getInscription2Etage(name: string, password: string) {

    const authentication = btoa(`'${name}:${password}'`);
    const headerInscription = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Authorization': `Basic ${authentication}`,
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/inscription`, { headers: headerInscription, responseType: "text", observe: 'response' });
  }

  getReset2Etage(token: any) {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/reset`, { headers: this.getToken(token), responseType: "json", observe: 'response' });
  }
  getCouloir2etage(token: any) {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/couloir`, { headers: this.getToken(token), responseType: "text", observe: 'response' });
  }
  getTresorCouloir2Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/couloir/1`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getNoteIndice2Etage(token: any) {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/note`, { headers: this.getToken(token), responseType: "text", observe: 'response' });
  }
  getVieux2Etage(token: any) {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:8000/vieux`, { headers: this.getToken(token), responseType: "json", observe: 'response' });
  }
  postVieuxTresor2Etage(reponse: any) {
    //@ts-ignore
    return this.http.post<any>(`${this.apiBook}:8000/vieux`, reponse, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  getAccueil3Etage() {
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:7259/`, { headers: this.myheader, responseType: "text", observe: 'response' });
  }
  // getInscription3Etage() {
  //   //@ts-ignore
  //   return this.http.get<any>(`${this.apiBook}:7259/inscription`, { headers: this.myheader, responseType: "text", observe: 'response' });
  // }

  getInscription3Etage(name: string, password: string) {

    const authentication = btoa(`'${name}:${password}'`);
    const headerInscription = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Authorization': `Basic ${authentication}`,
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    //@ts-ignore
    return this.http.get<any>(`${this.apiBook}:7259/inscription`, { headers: headerInscription, responseType: "text", observe: 'response' });
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



  /*getLogin(auth: any){

    this.auth = auth
    return fetch(this.apiBook + '/inscription', { method: 'GET', mode: 'cors', headers: this.myheader }).then(res => res.json()).then(res => { console.warn(res); return res });
    //return this.http.get(`${this.apiBook}/inscription`, this.httpOptions);
  }*/

}
