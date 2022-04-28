import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-reset-rdc',
  templateUrl: './reset-rdc.component.html',
  styleUrls: ['./reset-rdc.component.scss']
})
export class ResetRdcComponent implements OnInit {

  public data: any;
  public information: any;

  url: any;

  constructor(public activatedRoute: ActivatedRoute, private apiService: ApiService) {
    this.activatedRoute.url.subscribe(activeUrl => {
      this.url = window.location.pathname;
      console.warn(this.url);
    });
  }

  ngOnInit(): void {
    if (this.url === '/home') {
      this.information = this.apiService.getResetRDC(localStorage.getItem('Authorization')).subscribe(data => {
        console.log(data);
        console.warn(this.url);

        this.data = data;
      }
      );
    }

    if (this.url === '/accueil-second-etage') {
      this.information = this.apiService.getReset2Etage(localStorage.getItem('Authorization')).subscribe(data => {
        console.log(data);
        console.warn(this.url);
        this.data = data;
      }
      );
    }

    if (this.url === '/accueil-troisieme-etage') {
      this.information = this.apiService.getReset3Etage(localStorage.getItem('Authorization')).subscribe(data => {
        console.log(data);
        console.warn(this.url);
        this.data = data;
      }
      );
    }

  }

}
