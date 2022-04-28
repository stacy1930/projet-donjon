import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from '../API/api.service';
import { InscriptionComponent } from '../inscription/inscription.component';
import { ResetRdcComponent } from '../reset-rdc/reset-rdc.component';

@Component({
  selector: 'app-etage-trois-acceuil',
  templateUrl: './etage-trois-acceuil.component.html',
  styleUrls: ['./etage-trois-acceuil.component.scss']
})
export class EtageTroisAcceuilComponent implements OnInit {

  public dataEtage2: any;
  public data: any;

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataEtage2 = this.apiService.getAccueil3Etage(localStorage.getItem('Authorization')).subscribe(data => {
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

}
