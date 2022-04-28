import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../API/api.service';
import { InscriptionComponent } from '../inscription/inscription.component';
import { ResetRdcComponent } from '../reset-rdc/reset-rdc.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public login: any;
  public data: any;
  public token: any;
  public escalier: any;
  public coffre: any;
  public tresort: any;
  public auth: any;

  routeForm = this.formBuilder.group({
    name: ['', Validators.required],
  });
  constructor(private apiService: ApiService, public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.login = this.apiService.getAccueil().subscribe(data => {

      this.data = data

    }
    );
    //this.testLogin = this.apiService.getLogin('eee');
    console.log(this.login)
  }

  openDialogInscription() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(InscriptionComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result : ${result}`);
    })
  }

  openDialogReset() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ResetRdcComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result : ${result}`);
    })
  }

  public routeTresor: any;
  createRoute() {
    if(localStorage.getItem('Authorization')){
    if (this.routeForm.value.name === '/tresor') {
      this.apiService.getRouteCache(localStorage.getItem('Authorization')).subscribe(data => {
        //@ts-ignore
        this.routeTresor = data.body;
        alert(this.routeTresor);
      })
    }
    if (this.routeForm.value.name === '/36') {
      this.apiService.getRoute36(localStorage.getItem('Authorization')).subscribe(data => {
        //@ts-ignore
        this.routeTresor = data.body;
        alert(this.routeTresor);
      })
    }
    if(this.routeForm.value.name != '/36' && this.routeForm.value.name != '/tresor'){
      alert("Il n'y a rien ici");
    }}else{
      alert(`Il vous faut une clé pour rentrer. Mettre la clé dans la balise "x-auth-token"`);
    }
  }

  etage() {
    this.escalier = this.apiService.getEscalier(localStorage.getItem('Authorization')).subscribe(data => {
      console.log(data)
    }
    );
  }

  coffref() {
    this.coffre = this.apiService.getCoffre(localStorage.getItem('Authorization')).subscribe(data => {

      console.log(data)

    }
    );
  }

  tresor() {
    this.tresort = this.apiService.getTresor(localStorage.getItem('Authorization')).subscribe(data => {

      console.log(data)

    }
    );
  }


}
