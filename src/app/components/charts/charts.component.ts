import { Component, OnDestroy } from '@angular/core';
import { ChartsDatasource } from 'src/app/services/charts.datasource';
import { IProduceData } from '../../interfaces/IProduceData';
import { IRefineData } from '../../interfaces/IRefineData';
import { IStoreData } from '../../interfaces/IStoreData';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnDestroy {
  private subscriptionDataProduce = null;
  private subscriptionDataRefine = null;
  private subscriptionDataStore = null;

  public dataProduce: IProduceData = null;
  public dataRefine: IRefineData = null;
  public dataStore: IStoreData = null;

  constructor(private chartDatasource: ChartsDatasource) {
    this.subscriptionDataProduce = chartDatasource
      .getObservableDataProduce()
      .subscribe((data) => (this.dataProduce = data));

    this.subscriptionDataRefine = chartDatasource
      .getObservableDataRefine()
      .subscribe((data) => (this.dataRefine = data));

    this.subscriptionDataStore = chartDatasource
      .getObservableDataStore()
      .subscribe((data) => (this.dataStore = data));
  }

  ngOnDestroy(): void {
    if (this.subscriptionDataProduce !== null) {
      this.subscriptionDataProduce.unsubscribe();
      this.subscriptionDataProduce = null;
    }
    if (this.subscriptionDataRefine !== null) {
      this.subscriptionDataRefine.unsubscribe();
      this.subscriptionDataRefine = null;
    }
    if (this.subscriptionDataStore !== null) {
      this.subscriptionDataStore.unsubscribe();
      this.subscriptionDataStore = null;
    }
  }
}
