import { Routes, RouterModule } from '@angular/router';

import {EtudiantComponent} from "./etudiant/etudiant.component";
import {EnseignantComponent} from "./enseignant/enseignant.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {CreationqcmComponent} from "./enseignant/creationqcm/creationqcm.component";
import {MesQcmComponent} from "./enseignant/mesqcm/mes-qcm.component";
import {EnseignantsessionComponent} from "./enseignant/enseignantsession/enseignantsession.component";
import {MesClassesComponent} from "./enseignant/mesclasses/mes-classes.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/connexion', pathMatch: 'full' },
  {path: 'accueil', component : EnseignantComponent},
  {path: 'mesqcm', component : MesQcmComponent},
  {path: 'mesclasses', component : MesClassesComponent},
  {path: 'creationqcm', component : CreationqcmComponent},
  {path: 'connexion', component : ConnexionComponent},
  {path: 'etudiant', component : EtudiantComponent},
  {path: 'session', component : EnseignantsessionComponent},
  {path: 'enseignantbilan', component : EnseignantbilanComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
