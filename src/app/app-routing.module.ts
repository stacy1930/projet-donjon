import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffreComponent } from './coffre/coffre.component';
import { EscalierFirstComponent } from './escalier-first/escalier-first.component';
import { EtageDeuxAccueilComponent } from './etage-deux-accueil/etage-deux-accueil.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { TresorUnComponent } from './tresor-un/tresor-un.component';
import { VieuxComponent } from './vieux/vieux.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'first-escalier', component: EscalierFirstComponent },
  { path: 'accueil-second-etage', component: EtageDeuxAccueilComponent },
  { path: 'coffre', component: CoffreComponent },
  { path: 'tresor/1', component: TresorUnComponent },
  { path: 'vieux', component: VieuxComponent },
  { path: 'note', component: NoteComponent },
  { path: '**', redirectTo: 'home' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
