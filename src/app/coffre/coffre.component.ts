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
  public ciffer: any;
  public testStacy: any;
  public contentHeaders: any;
  public array1: string[] = [];
  public array2: string[] = [];
  // var arr = { "un" : 1, "deux" : 2, "trois": 3 };

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {

    if (localStorage.getItem('Authorization')) {
      this.coffre = this.apiService.getCoffre(localStorage.getItem('Authorization')).subscribe(data => {
        console.log(data.headers.get('cipher'));
        this.data = data;

        this.ciffer = data.headers.get('cipher');

        this.contentHeaders = data.headers;
        //@ts-ignore
        this.testStacy = data.headers.headers;
        console.log(this.contentHeaders);

        this.testStacy.forEach((element: any) => {
          console.warn(element);
          this.array1.push(element);
        });
        console.warn(this.array1);

        this.contentHeaders.forEach((element: any) => {
          console.warn(element);
          this.array2.push(element);

        });

      }
      );
    }

  }

}
