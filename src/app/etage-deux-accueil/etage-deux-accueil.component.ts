import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-etage-deux-accueil',
  templateUrl: './etage-deux-accueil.component.html',
  styleUrls: ['./etage-deux-accueil.component.scss']
})
export class EtageDeuxAccueilComponent implements OnInit {

  public dataEtage2: any;
  public data: any;
  public token: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.dataEtage2 = this.apiService.getAccueil2Etage(localStorage.getItem('Authorization')).subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  inscription() {
    this.token = this.apiService.getInscription2Etage().subscribe(res => {
      //@ts-ignore
      localStorage.setItem('Authorization', res.headers.get('X-Subject-Token'))
      //@ts-ignore
      console.log(res.headers.get('X-Subject-Token'));


    }
    );
  }

}
