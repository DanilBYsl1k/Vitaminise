import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'vtm-begin-polis',
  templateUrl: './begin-polis.component.html',
  styleUrls: ['./begin-polis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeginPolisComponent implements OnInit {
  listAvailabilityVin = ['АА3441ВВ', 'АА3442ВВ', 'АА3441ВВ'];
  loading$ = new BehaviorSubject<boolean>(false);

  search = new FormControl<string | null>(null);

  isSearchValue = false;

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        filter((searchVin) => !!searchVin),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.loading$.next(true)),
        switchMap((vin) => {
          return of(true).pipe(
            map(() => this.listAvailabilityVin.includes(vin as string))
          );
        }),
        delay(1000),
        tap(() => this.loading$.next(false))
      )
      .subscribe((response) => {
        this.isSearchValue = response;
      });
  }
}
