import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-escalier-second',
  templateUrl: './escalier-second.component.html',
  styleUrls: ['./escalier-second.component.scss']
})
export class EscalierSecondComponent implements OnInit {

  public escalier: any;
  public data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.escalier = this.apiService.getEscalier3(localStorage.getItem('Authorization')).subscribe(data => {
      console.log(data);
      this.data = data;
    }
    );
  }

}
