import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/app-data-service";

@Component({
  selector: 'app-mesqcm',
  templateUrl: './mes-qcm.component.html',
  styleUrls: ['./mes-qcm.component.css']
})
export class MesQcmComponent implements OnInit {

  public qcmlist: any[];
  public id_professeur: number;

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


  }
}
