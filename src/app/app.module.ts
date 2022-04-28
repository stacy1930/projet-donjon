import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffreComponent } from './coffre/coffre.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { InscriptionComponent } from './inscription/inscription.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EtageDeuxAccueilComponent } from './etage-deux-accueil/etage-deux-accueil.component';
import { EscalierFirstComponent } from './escalier-first/escalier-first.component';
import { TresorUnComponent } from './tresor-un/tresor-un.component';
import { VieuxComponent } from './vieux/vieux.component';
import { NoteComponent } from './note/note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ResetRdcComponent } from './reset-rdc/reset-rdc.component';
import { CouloirComponent } from './couloir/couloir.component';
import { EtageTroisAcceuilComponent } from './etage-trois-acceuil/etage-trois-acceuil.component';
import { EscalierSecondComponent } from './escalier-second/escalier-second.component';
import { DragonComponent } from './dragon/dragon.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoffreComponent,
    InscriptionComponent,
    EtageDeuxAccueilComponent,
    EscalierFirstComponent,
    TresorUnComponent,
    VieuxComponent,
    NoteComponent,
    ResetRdcComponent,
    CouloirComponent,
    EtageTroisAcceuilComponent,
    EscalierSecondComponent,
    DragonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
