import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-tresor-un',
  templateUrl: './tresor-un.component.html',
  styleUrls: ['./tresor-un.component.scss']
})
export class TresorUnComponent implements OnInit {

  public data: any;
  public tresor: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.tresor = this.apiService.getTresor(localStorage.getItem('Authorization')).subscribe(data => {
      console.log(data);
      this.data = data;
    }
    );
  }

}
