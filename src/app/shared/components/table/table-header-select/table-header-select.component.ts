import { Component, OnInit } from '@angular/core';
import { ITableDataSource } from '../../../data-sources/table-data-source';
import { TableCellCustom } from '../table-cell/table-cell-custom';

@Component({
  selector: 'app-table-header-select',
  templateUrl: './table-header-select.component.html',
  styleUrls: ['./table-header-select.component.scss']
})
export class TableHeaderSelectComponent<T> extends TableCellCustom<T> { }
