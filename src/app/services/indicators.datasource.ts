import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IIndicatorData } from '../interfaces/IIndicatorData';

@Injectable()
export class IndicatorsDatasource {
  constructor(private http: HttpClient) {}
  getIndicatorsData(): any {
    return <Observable<Array<IIndicatorData>>>(
      this.http.get('assets/json/indicators.json')
    );
  }
}
