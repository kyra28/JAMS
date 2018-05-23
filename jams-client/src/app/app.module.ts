import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AcueilEnseignantComponent } from './acueil-enseignant/acueil-enseignant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { CreationqcmComponent } from './creationqcm/creationqcm.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AcueilEnseignantComponent,
    EnseignantComponent,
    CreationqcmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
