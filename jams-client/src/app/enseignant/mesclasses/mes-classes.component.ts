import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/app-data-service";

@Component({
  selector: 'app-mesclasses',
  templateUrl: './mes-classes.component.html',
  styleUrls: ['./mes-classes.component.css']
})
export class MesClassesComponent implements OnInit {

  public classelist: any[];
  public id_professeur: number;

  constructor(
    private _dataService: DataService) {
  }

  ngOnInit() {
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
