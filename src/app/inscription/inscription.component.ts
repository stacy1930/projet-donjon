import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public token: any;

  url: any;
  constructor(public activatedRoute: ActivatedRoute, public dialogRef: MatDialogRef<InscriptionComponent>, private apiService: ApiService, private formBuilder: FormBuilder) {
    this.activatedRoute.url.subscribe(activeUrl => {
      this.url = window.location.pathname;
      console.warn(this.url);
    });
  }

  loginForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  inscription() {

    if (this.url === '/home') {
      this.apiService.getInscription(this.loginForm.value.name, this.loginForm.value.password).subscribe(res => {
        //@ts-ignore
        localStorage.setItem('Authorization', res.headers.get('X-Subject-Token'))
        //@ts-ignore
        console.log(res.headers.get('X-Subject-Token'));
        //@ts-ignore
        this.dialogRef.close(res.headers.get('X-Subject-Token'));
      }
      );
    }

    if (this.url === '/accueil-second-etage') {
      this.apiService.getInscription2Etage(this.loginForm.value.name, this.loginForm.value.password).subscribe(res => {
        //@ts-ignore
        localStorage.setItem('Authorization', res.headers.get('X-Subject-Token'))
        //@ts-ignore
        console.log(res.headers.get('X-Subject-Token'));
        //@ts-ignore
        this.dialogRef.close(res.headers.get('X-Subject-Token'));
      }
      );
    }

  }

}
