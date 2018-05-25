import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  isEnseignant : string = "";
  auth : boolean = false;

  ngOnInit() {
  }
  Enseignant() {
    this.isEnseignant="true";
  }
  Etudiant() {
    this.isEnseignant="false";
  }

}
