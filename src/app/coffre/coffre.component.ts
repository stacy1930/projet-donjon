import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-coffre',
  templateUrl: './coffre.component.html',
  styleUrls: ['./coffre.component.scss']
})
export class CoffreComponent implements OnInit {

  public data: any;
  public coffre: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    if (localStorage.getItem('Authorization')) {
      this.coffre = this.apiService.getCoffre(localStorage.getItem('Authorization')).subscribe(data => {
        console.log(data);
        this.data = data;
      }
      );
    }

  }

}
