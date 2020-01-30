import { Component, OnInit, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  received: string;
  formType: string;
  enddate: string;
  report: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {formType:" 1-A", received: '04/01/2016', enddate: '', report: ''},
  {formType:" 1-A POS", received: '07/26/2018	', enddate: '', report: ''},
  {formType:" 1-A POS", received: '06/28/2017	', enddate: '', report: ''},
  {formType:" 1-A POS", received: '05/17/2017	', enddate: '', report: ''},
  {formType:" 1-A POS", received: '05/23/2016	', enddate: '', report: ''},
  {formType:" 1-A/A", received: '05/03/2016', enddate: '', report: ''},
  {formType:"1-K", received: '07/23/2018', enddate: '01/31/2018', report: ''},
  {formType:"1-K", received: '05/31/2017', enddate: '01/31/2017', report: ''},
  {formType:"1-SA", received: '11/30/2018', enddate: '07/31/2018', report: ''},
  {formType:"1-SA", received: '05/17/2018	', enddate: '07/31/2017', report: ''},
  
];


@Component({
  selector: 'app-sec-filings',
  templateUrl: './sec-filings.component.html',
  styleUrls: ['./sec-filings.component.css']
})
export class SECFilingsComponent implements OnInit {
  
  displayedColumns: string[] = ['formType', 'received', 'enddate', 'report'];
  dataSource = new MatTableDataSource(ELEMENT_DATA)

  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
