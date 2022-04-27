import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-escalier-first',
  templateUrl: './escalier-first.component.html',
  styleUrls: ['./escalier-first.component.scss']
})
export class EscalierFirstComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  public escalier: any;
  public data: any;

  ngOnInit(): void {
    this.escalier = this.apiService.getEscalier(localStorage.getItem('Authorization')).subscribe(data => {
      console.log(data);
      this.data = data;
    }
    );
  }


}
