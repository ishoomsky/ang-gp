import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IIndicatorData } from '../../../interfaces/IIndicatorData';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css'],
})
export class IndicatorComponent {
  @Input('props')
  public props: IIndicatorData;
  @Input('isOpen')
  public isOpen;
  @Input('activeParameterId')
  public activeParameterId;

  @Output('toggleIndicator')
  public toggleIndicator: EventEmitter<number> = new EventEmitter<number>();

  @Output('activeParameterIdChange')
  public activeParameterIdOutput: EventEmitter<number> = new EventEmitter<number>();

  setActiveParameterId(id: number): void {
    if (this.activeParameterId === id) {
      this.activeParameterIdOutput.emit(null);
      return;
    }
    this.activeParameterIdOutput.emit(id);
  }

  getDeviation(): number {
    let deviation: number = 0;
    this.props.parameters.forEach(({ fact, model }) => {
      if (fact > model) {
        deviation++;
      }
    });
    return deviation;
  }
}
