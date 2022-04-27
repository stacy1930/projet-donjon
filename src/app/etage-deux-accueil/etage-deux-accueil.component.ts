import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from '../API/api.service';
import { InscriptionComponent } from '../inscription/inscription.component';
import { ResetRdcComponent } from '../reset-rdc/reset-rdc.component';

@Component({
  selector: 'app-etage-deux-accueil',
  templateUrl: './etage-deux-accueil.component.html',
  styleUrls: ['./etage-deux-accueil.component.scss']
})
export class EtageDeuxAccueilComponent implements OnInit {

  public dataEtage2: any;
  public data: any;
  public token: any;

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataEtage2 = this.apiService.getAccueil2Etage(localStorage.getItem('Authorization')).subscribe(data => {
      console.log(data);
      this.data = data;
    })
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

  // inscription() {
  //   this.token = this.apiService.getInscription2Etage().subscribe(res => {
  //     //@ts-ignore
  //     localStorage.setItem('Authorization', res.headers.get('X-Subject-Token'))
  //     //@ts-ignore
  //     console.log(res.headers.get('X-Subject-Token'));
  //   }
  //   );
  // }

}
