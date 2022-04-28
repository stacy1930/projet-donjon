import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffreComponent } from './coffre/coffre.component';
import { CouloirComponent } from './couloir/couloir.component';
import { EscalierFirstComponent } from './escalier-first/escalier-first.component';
import { EtageDeuxAccueilComponent } from './etage-deux-accueil/etage-deux-accueil.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { TresorUnComponent } from './tresor-un/tresor-un.component';
import { VieuxComponent } from './vieux/vieux.component';
import { EtageTroisAcceuilComponent } from './etage-trois-acceuil/etage-trois-acceuil.component';
import { EscalierSecondComponent } from './escalier-second/escalier-second.component';
import { DragonComponent } from './dragon/dragon.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'first-escalier', component: EscalierFirstComponent },
  { path: 'second-escalier', component: EscalierSecondComponent },
  { path: 'accueil-second-etage', component: EtageDeuxAccueilComponent },
  { path: 'coffre', component: CoffreComponent },
  { path: 'tresor/1', component: TresorUnComponent },
  { path: 'vieux', component: VieuxComponent },
  { path: 'note', component: NoteComponent },
  { path: 'couloir-second-etage', component: CouloirComponent },
  { path: 'accueil-troisieme-etage', component: EtageTroisAcceuilComponent },
  { path: 'dragon', component: DragonComponent },
  { path: '**', redirectTo: 'home' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
