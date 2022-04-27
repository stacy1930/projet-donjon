import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-couloir',
  templateUrl: './couloir.component.html',
  styleUrls: ['./couloir.component.scss']
})
export class CouloirComponent implements OnInit {

  public couloir: any;
  public data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.couloir = this.apiService.getCouloir2etage(localStorage.getItem('Authorization')).subscribe(data => {
      console.log(data);
      this.data = data;
    }
    );
  }

}
