import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public login: any;
  public data: any;
  public token: any;
  public escalier: any;
  public coffre: any;
  public tresort: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.login = this.apiService.getAccueil().subscribe(data => {

      this.data = data

    }
    );
    //this.testLogin = this.apiService.getLogin('eee');
    console.log(this.login)
  }

  inscription() {
    this.token = this.apiService.getInscription().subscribe(res => {

      //@ts-ignore
      localStorage.setItem('Authorization', res.headers.get('X-Subject-Token'))

    }
    );
  }

  etage() {
    this.escalier = this.apiService.getEscalier(localStorage.getItem('Authorization')).subscribe(data => {

      console.log(data)

    }
    );
  }

  coffref(){
    this.coffre = this.apiService.getCoffre(localStorage.getItem('Authorization')).subscribe(data => {

      console.log(data)

    }
    );
  }

  tresor(){
    this.tresort = this.apiService.getTresor(localStorage.getItem('Authorization')).subscribe(data => {

      console.log(data)

    }
    );
  }


}
