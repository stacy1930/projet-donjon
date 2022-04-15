import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffreComponent } from './coffre/coffre.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { InscriptionComponent } from './inscription/inscription.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EtageDeuxAccueilComponent } from './etage-deux-accueil/etage-deux-accueil.component';
import { EscalierFirstComponent } from './escalier-first/escalier-first.component';
import { TresorUnComponent } from './tresor-un/tresor-un.component';
import { VieuxComponent } from './vieux/vieux.component';
import { NoteComponent } from './note/note.component';


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
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
