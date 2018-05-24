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
import { AcceuilEnseignantComponent } from './enseignant/acceuilenseignant/acceuil-enseignant.component';
import { MesclassesComponent } from './enseignant/mesclasses/mesclasses.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    EnseignantComponent,
    CreationqcmComponent,
    NavbarComponent,
    EtudiantComponent,
    MesQcmComponent,
    AcceuilEnseignantComponent,
    MesclassesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/acceuil', pathMatch: 'full' },
      {path: 'acceuil', component : AcceuilEnseignantComponent},
      {path: 'mesqcm', component : MesQcmComponent},
      {path: 'mesclasses', component : MesclassesComponent},
      {path: 'messqcm', component : MesclassesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
