import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { CreationqcmComponent } from './enseignant/creationqcm/creationqcm.component';
import { NavbarComponent } from './enseignant/navbar/navbar.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { MesQcmComponent } from './enseignant/mesqcm/mes-qcm.component';
import { AccueilEnseignantComponent } from './enseignant/accueilenseignant/accueil-enseignant.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    EnseignantComponent,
    CreationqcmComponent,
    NavbarComponent,
    EtudiantComponent,
    MesQcmComponent,
    AccueilEnseignantComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/accueil', pathMatch: 'full' },
      {path: 'accueil', component : AccueilEnseignantComponent},
      {path: 'mesqcm', component : MesQcmComponent},
      {path: 'creationqcm', component : CreationqcmComponent},
      {path: 'connexion', component : ConnexionComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
