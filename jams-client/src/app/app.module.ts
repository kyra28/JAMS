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
import {MesClassesComponent} from "./enseignant/mesclasses/mes-classes.component";
import {PlayQcmProfessorViewComponent} from "./play-qcm-professor-view/play-qcm-professor-view.component";
import {DataService} from "./services/app-data-service";
import {Configuration} from "./app.constants";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";

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
    MesClassesComponent,
    PlayQcmProfessorViewComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [DataService,Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
