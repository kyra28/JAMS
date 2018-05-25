import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { CreationqcmComponent } from './enseignant/creationqcm/creationqcm.component';
import { NavbarComponent } from './enseignant/navbar/navbar.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { MesQcmComponent } from './enseignant/mesqcm/mes-qcm.component';
import { AccueilEnseignantComponent } from './enseignant/accueilenseignant/accueil-enseignant.component';
import { EnseignantsessionComponent } from './enseignant/enseignantsession/enseignantsession.component';
import {EnseignantbilanComponent} from "./enseignant/enseignantbilan/enseignantbilan.component";
import {routing} from "./app-routing.module";

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
    EnseignantsessionComponent,
    EnseignantbilanComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
