import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../shared/reducers';
import { GetCarDetails } from '../../shared/actions';

import { Car } from '../car.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  @Input() carsList: Car[];

  selectedCarModel: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSelect() {
    if (this.selectedCarModel) {
      this.store.dispatch(new GetCarDetails(this.selectedCarModel));
    }
  }

}
