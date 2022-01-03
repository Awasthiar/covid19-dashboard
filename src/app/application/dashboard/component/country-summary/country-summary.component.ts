import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  merge,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { CountrySummaryDataModel } from '../../model/response/api-response.model';

@Component({
  selector: 'country-summary-dashboard',
  templateUrl: './country-summary.component.html',
  styleUrls: ['./country-summary.component.css'],
})
export class CountrySummaryComponent implements OnInit {
  @Input() countryData: CountrySummaryDataModel[];
  showCountryData: boolean = false;
  dataSource: any[];
  isLoadingResults = false;
  displayedColumns = [
    'Country',
    'NewConfirmed',
    'TotalConfirmed',
    'NewDeaths',
    'TotalDeaths',
    'NewRecovered',
    'TotalRecovered',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  filter = new FormControl();
  total: number;

  ngOnInit() {}
  ngAfterViewInit() {
    const getLength = this.filter.valueChanges.pipe(
      startWith(null),
      debounceTime(200),
      switchMap((res: string) => this.getLength(res)),
      tap((res: number) => {
        this.paginator.firstPage();
        this.total = res;
      })
    );
    const sort = this.sort.sortChange.pipe(
      tap(() => this.paginator.firstPage())
    );
    merge(getLength, sort, this.paginator.page)
      .pipe(
        distinctUntilChanged(),
        tap((_) => (this.isLoadingResults = true)),
        switchMap((res) => {
          return this.getData(
            this.paginator.pageIndex,
            this.paginator.pageSize,
            this.filter.value,
            this.sort.active,
            this.sort.direction
          );
        }),
        tap((_) => (this.isLoadingResults = false))
      )
      .subscribe((res: any[]) => {
        this.dataSource = res;
      });
  }

  ngOnChanges() {
    if (this.countryData) {
      this.showCountryData = true;
    }
  }

  getElement(filter: string) {
    return !filter
      ? this.countryData
      : this.countryData.filter((x) => {
          const searchStr = (
            x.Country +
            x.NewConfirmed +
            x.TotalConfirmed +
            x.NewRecovered +
            x.TotalRecovered +
            x.NewDeaths +
            x.TotalDeaths
          ).toLowerCase();
          return searchStr.indexOf(filter.toLowerCase()) !== -1;
        });
  }

  getLength(filter: string) {
    return of(this.getElement(filter).length).pipe(delay(500));
  }
  getData(
    page: number,
    pageSize: number,
    filter: string,
    sortField: string,
    sortDirection: string
  ) {
    const factor = sortDirection == 'asc' ? -1 : 1;
    return of(
      this.getElement(filter)
        .sort((a: any, b: any) =>
          a[sortField] > b[sortField] ? -factor : factor
        )
        .slice(page * pageSize, (page + 1) * pageSize)
    ).pipe(
      delay(500),
      tap(() => {})
    );
  }
}
