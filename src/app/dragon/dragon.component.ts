import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';
import { NotificationService } from '../API/notification.service';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss']
})
export class DragonComponent implements OnInit {

  public data: any;
  public dragon: any;
  constructor(private notify: NotificationService, private apiService: ApiService) { }

  ngOnInit(): void {

    if (localStorage.getItem('Authorization')) {
      this.dragon = this.apiService.getDragon3Etage(localStorage.getItem('Authorization')).subscribe(data => {
        this.data = data;
      }
      );
    }
  }

  deleteDragon() {

    this.apiService.deleteDragon3Etage(localStorage.getItem('Authorization')).subscribe(data => {
      //@ts-ignore
      this.notify.success(data.body);

    })
  }

  wrong() {
    this.notify.error('Il n\'y a rien ici');

  }

}
