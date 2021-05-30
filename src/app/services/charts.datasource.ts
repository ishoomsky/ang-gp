import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { IProduceData } from '../interfaces/IProduceData';
import { IRefineData } from '../interfaces/IRefineData';
import { IStoreData } from '../interfaces/IStoreData';

@Injectable()
export class ChartsDatasource {
  dataProduce: IProduceData = {
    title1: 'ТН',
    title2: 'Выработка',
    fact: 0,
    plan: 32350,
  };

  dataRefine: IRefineData = {
    title1: 'ТН',
    title2: 'План переработки',
    fact: 0,
    plan: 30000,
  };

  dataStore: IStoreData = {
    title1: 'ТН',
    title2: 'Гудрон',
    maxCapacity: 2100,
    today: 8,
    daysData: [
      { day: 1, plan: 1200, fact: 1200 },
      { day: 2, plan: 1500, fact: 1200 },
      { day: 3, plan: 1400, fact: 1800 },
      { day: 4, plan: 1400, fact: 1400 },
      { day: 5, plan: 1200, fact: 1600 },
      { day: 6, plan: 900, fact: 900 },
      { day: 7, plan: 1200, fact: 1200 },
      { day: 8, plan: 1000, fact: 300 },
      { day: 9, plan: 1400, fact: 0 },
      { day: 10, plan: 1200, fact: 0 },
      { day: 11, plan: 1400, fact: 0 },
      { day: 12, plan: 1400, fact: 0 },
      { day: 13, plan: 1200, fact: 0 },
      { day: 14, plan: 900, fact: 0 },
      { day: 15, plan: 1200, fact: 0 },
      { day: 16, plan: 1200, fact: 0 },
      { day: 17, plan: 1600, fact: 0 },
      { day: 18, plan: 1200, fact: 0 },
      { day: 19, plan: 1400, fact: 0 },
      { day: 20, plan: 1400, fact: 0 },
      { day: 21, plan: 1200, fact: 0 },
      { day: 22, plan: 900, fact: 0 },
      { day: 23, plan: 1800, fact: 0 },
      { day: 24, plan: 1200, fact: 0 },
      { day: 25, plan: 1400, fact: 0 },
      { day: 26, plan: 1100, fact: 0 },
      { day: 27, plan: 1400, fact: 0 },
      { day: 28, plan: 1400, fact: 0 },
      { day: 29, plan: 1200, fact: 0 },
      { day: 30, plan: 900, fact: 0 },
    ],
  };

  //dataProduce
  private dataProduceSubject: BehaviorSubject<IProduceData> =
    new BehaviorSubject(this.dataProduce);
  private dataProduce$: Observable<IProduceData> =
    this.dataProduceSubject.asObservable();

  //dataRefine
  private dataRefineSubject: BehaviorSubject<IRefineData> = new BehaviorSubject(
    this.dataRefine
  );
  private dataRefine$: Observable<IRefineData> =
    this.dataRefineSubject.asObservable();

  //dataStore
  private dataStoreSubject: BehaviorSubject<IStoreData> = new BehaviorSubject(
    this.dataStore
  );
  private dataStore$: Observable<IStoreData> =
    this.dataStoreSubject.asObservable();

  constructor() {
    this.startChangingMockData();
  }

  getObservableDataProduce(): Observable<IProduceData> {
    return this.dataProduce$;
  }
  getObservableDataRefine(): Observable<IRefineData> {
    return this.dataRefine$;
  }
  getObservableDataStore(): Observable<IStoreData> {
    return this.dataStore$;
  }

  startChangingMockData(): void {
    const produceAnimate = () => {
      if (this.dataProduce.fact <= this.dataProduce.plan - 50) {
        this.dataProduce.fact = this.dataProduce.fact + 50;
        const newData = {
          ...this.dataProduce,
        };
        this.dataProduceSubject.next(newData);
        requestAnimationFrame(produceAnimate);
      }
    };

    produceAnimate();

    const refineAnimate = () => {
      if (this.dataRefine.fact <= this.dataRefine.plan - 100) {
        this.dataRefine.fact = this.dataRefine.fact + 100;
        const newData = {
          ...this.dataRefine,
        };
        this.dataRefineSubject.next(newData);
        requestAnimationFrame(refineAnimate);
      }
    };
    refineAnimate();

    const histogramAnimate = () => {
      if (this.dataStore.daysData[7].fact <= this.dataStore.maxCapacity * 0.9) {
        this.dataStore.daysData[7].fact = this.dataStore.daysData[7].fact + 10;
        let newData = { ...this.dataStore };
        this.dataStoreSubject.next(newData);
        requestAnimationFrame(histogramAnimate);
      }
    };
    histogramAnimate();
  }
}
