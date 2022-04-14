import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public allRoles$: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.allRoles$ = this.apiService.getTest().subscribe((data:any) => { console.log(data)});

  }

}
