import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/app-data-service';


@Component({
  selector: 'app-play-qcm-professor-view',
  templateUrl: './play-qcm-professor-view.component.html',
  styleUrls: []
})
export class PlayQcmProfessorViewComponent implements OnInit {

  public values: any[];
  public iterator: number;

  constructor(
   private _dataService: DataService) {
   }

  ngOnInit() {
    this._dataService
            .getAll<any[]>("professeur/antoine.pichard@u-psud.fr/antoine.pich/verif")
            .subscribe((data: any[]) => this.values = data,
            error => () => {
                console.log('error');
            },
            () => {
              console.log('success');
              });
    this.iterator = 0;
  }

  iteratorPlusUn() {
    this.iterator = this.iterator + 1;
  }

}
