import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  public data: any;
  public vieux: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.vieux = this.apiService.getNoteIndice2Etage(localStorage.getItem('Authorization')).subscribe(data => {
      console.log(data);
      this.data = data;
    }
    );
  }
}
