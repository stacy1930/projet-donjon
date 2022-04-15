import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-vieux',
  templateUrl: './vieux.component.html',
  styleUrls: ['./vieux.component.scss']
})
export class VieuxComponent implements OnInit {

  public data: any;
  public vieux: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.vieux = this.apiService.getVieux2Etage(localStorage.getItem('Authorization')).subscribe(data => {
      console.log(data);
      this.data = data;
    }
    );
  }

}
