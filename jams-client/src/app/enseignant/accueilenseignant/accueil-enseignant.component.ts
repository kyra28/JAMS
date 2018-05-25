import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/app-data-service";


@Component({
  selector: 'app-acceuilenseignant',
  templateUrl: './accueil-enseignant.component.html',
  styleUrls: ['./accueil-enseignant.component.css']
})
export class AccueilEnseignantComponent implements OnInit {

  public qcmlist: any[];
  public classelist: any[];
  public iterator: number;

  constructor(
    private _dataService: DataService) {
  }

  ngOnInit() {
    this._dataService
      .getAll<any[]>("qcm/all2")
      .subscribe((data: any[]) => this.qcmlist = data,
        error => () => {
          console.log('error');
        },
        () => {
          console.log('success');
        });

    this._dataService
      .getAll<any[]>("classe/all")
      .subscribe((data: any[]) => this.classelist = data,
        error => () => {
          console.log('error');
        },
        () => {
          console.log('success');
        });
  }

}
