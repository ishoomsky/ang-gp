import { Component, OnDestroy, Input } from '@angular/core';
import { IndicatorsDatasource } from '../../services/indicators.datasource';

import { IIndicatorData } from '../../interfaces/IIndicatorData';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css'],
})
export class IndicatorsComponent implements OnDestroy {
  private subscription = null;
  public indicators: Array<IIndicatorData> = null;
  public openedIndicators: number[] = [];

  private _activeParameterId: number = null;

  //banana box
  set activeParameterId(id: number) {
    this._activeParameterId = id;
  }
  get activeParameterId(): number {
    return this._activeParameterId;
  }

  constructor(private indicatorsDatasource: IndicatorsDatasource) {
    this.subscription = indicatorsDatasource
      .getIndicatorsData()
      .subscribe((data) => {
        this.indicators = data;
      });
  }

  useIndicator(id: number): void {
    let findId = this.openedIndicators.findIndex((i) => i === id);
    if (findId !== -1) {
      this.openedIndicators.splice(findId, 1);
      return;
    }
    this.openedIndicators.push(id);
  }

  isOpenedIndicator(id: number): boolean {
    return this.openedIndicators.includes(id);
  }

  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
