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
  public testLogin: any;

  constructor(private apiService: ApiService) { }
  data: any;

  ngOnInit(): void {
    // this.login = this.apiService.getTest('eee');
    // //this.testLogin = this.apiService.getLogin('eee');
    // console.log(this.login)
    this.login = this.apiService.getAccueil().pipe(tap(e => console.log(e)));

    this.login.subscribe((e: any) => {
      this.data = e;
    });

    console.warn();

  }

}
