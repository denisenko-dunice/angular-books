import { Component, ViewChild, OnInit} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../models/book.model';
import { TableDataService } from '../services/table-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'type', 'content', 'image'];
  public dataSource: MatTableDataSource<Book>;
  public data: Book[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private tableDataService: TableDataService){}

  ngOnInit(): void {
    this.tableDataService.getTableData().subscribe(res => {
      this.data = res.data;
      this.dataSource = new MatTableDataSource<Book>(this.data);
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'content': return item.attributes.content;
          default: return item[property]
        }
      };
      this.dataSource.filterPredicate = (data, filter) => {
        const dataStr: string = `${data.attributes.content}${data.id}${data.type}`;
        return dataStr.toLowerCase().includes(filter);
      };
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
