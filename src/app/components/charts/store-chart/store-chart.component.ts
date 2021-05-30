import {
  Component,
  ViewChild,
  Input,
  ElementRef,
  OnChanges,
  OnInit,
} from '@angular/core';
import * as d3 from 'd3';

import { IStoreData, IStoreDayData } from '../../../interfaces/IStoreData';

@Component({
  selector: 'app-store-chart',
  templateUrl: './store-chart.component.html',
  styleUrls: ['./store-chart.component.css'],
})
export class StoreChartComponent implements OnChanges, OnInit {
  @ViewChild('storeChartRef', { static: true })
  public storeChartRef: ElementRef;

  @Input('data')
  private data: IStoreData;
  @Input('width')
  public componentWidth: number;
  public componentHeight: number;

  private hostElement;

  private title1: string;
  private title2: string;
  private daysData: Array<IStoreDayData>;
  private maxCapacity: number;
  private todayData: IStoreDayData; //объект с фактом, планом и номером дня
  private todayPercentageProgress: number;
  private factTotal: number;

  private dangerCapacityLevel: number = 0.8; //отметка опасного уровня - сейчас 80%
  private dangerFactLevel: number = 0.9; //отметка опасного уровня - сейчас 80%

  public svgElement;
  public gElelementCircleChart;
  public leftCircleElement;

  ngOnInit(): void {
    this.componentHeight = this.componentWidth / 3.631;
  }
  ngOnChanges(): void {
    this.findHostElement();
    this.processData();
    this.clearPreviousChart();
    this.createChart();
  }

  findHostElement(): void {
    this.hostElement = this.storeChartRef.nativeElement as HTMLOrSVGElement;
  }
  processData(): void {
    this.title1 = this.data.title1;
    this.title2 = this.data.title2;
    this.maxCapacity = this.data.maxCapacity;
    this.daysData = this.data.daysData;
    this.todayData = this.daysData.find((i) => i.day === this.data.today);
    this.todayPercentageProgress =
      (this.todayData.fact / this.todayData.plan) * 100;
    this.factTotal = this.daysData.reduce((sum, day) => sum + day.fact, 0);
  }

  clearPreviousChart(): void {
    d3.select(this.hostElement).select('svg').remove();
  }
  createChart(): void {
    this.drawSvg();
    this.drawCircleChart();
    this.drawTitles();
    this.drawTank();
    this.drawHistogram();
  }

  drawSvg(): void {
    const responsive = {
      width: this.componentWidth,
      height: this.componentWidth / 3.631,
    };
    this.svgElement = d3
      .select(this.hostElement)
      .append('svg')
      .attr('width', responsive.width)
      .attr('height', responsive.height);
  }

  drawCircleChart(): void {
    const responsive = {
      centerY: this.componentWidth / 7.289,
      centerX: this.componentWidth / 7.469,
      progress: {
        innerRadius: this.componentWidth / 4.502 / 2, //175 / 2
        outerRadius: this.componentWidth / 4.169 / 2, //189 / 2
        cornerRadius: this.componentWidth / 157.6, // 5
      },
      progressBg: {
        strokeWidth: this.componentWidth / 112.571,
        radius: this.componentWidth / 4.329 / 2,
      },
      title1: {
        fontSize: this.componentWidth / 35.965,
        posY: this.componentWidth / 14.327,
      },
      fact: {
        fontSize: this.componentWidth / 29.973,
      },
      line: {
        strokeDasharray: `${this.componentWidth / 394} ${
          this.componentWidth / 394
        }`,
        strokeWidth: this.componentWidth / 394,
        posX: this.componentWidth / 13.412,
        posY: this.componentWidth / 65.66,
      },
      overFact: {
        fontSize: this.componentWidth / 29.97,
        posY: this.componentWidth / 19.219,
      },
    };

    const progressArc = d3
      .arc()
      .startAngle(0)
      .endAngle(((Math.PI * 2) / 100) * this.todayPercentageProgress)
      .innerRadius(responsive.progress.innerRadius)
      .outerRadius(responsive.progress.outerRadius)
      .cornerRadius(responsive.progress.cornerRadius);

    //progress
    this.svgElement
      .append('path')
      .attr('d', progressArc)
      .attr('fill', () => {
        if (this.todayData.fact > this.maxCapacity * this.dangerCapacityLevel) {
          return '#ff1d25';
        }
        if (this.todayData.fact > this.todayData.plan * this.dangerFactLevel) {
          return '#f7913e';
        }
        if (this.todayData.fact > this.todayData.plan) {
          return '#f7913e';
        }
        return '#0089ff';
      })
      .attr(
        'transform',
        'translate(' + responsive.centerX + ',' + responsive.centerY + ')'
      );
    //progress background
    this.svgElement
      .append('circle')
      .attr('fill', 'none')
      .attr('stroke', '#0089ff20')
      .attr('stroke-width', responsive.progressBg.strokeWidth)
      .attr('r', responsive.progressBg.radius)
      .attr(
        'transform',
        'translate(' + responsive.centerX + ',' + responsive.centerY + ')'
      );
    //title1 text
    this.svgElement
      .append('text')
      .attr('fill', '#606580')
      .attr('font-size', responsive.title1.fontSize)
      .attr('font-family', 'Tahoma')
      .attr('x', responsive.centerX)
      .attr('y', responsive.centerY - responsive.title1.posY)
      .attr('text-anchor', 'middle')
      .text(`${this.title1}`);

    //today fact text
    this.svgElement
      .append('text')
      .attr('fill', '#D7E2F2')
      .attr('font-size', responsive.fact.fontSize)
      .attr('font-family', 'Tahoma')
      .attr('x', responsive.centerX)
      .attr('y', responsive.centerY + 1)
      .attr('text-anchor', 'middle')
      .text(`${this.todayData.fact.toLocaleString('ru-RU')}`);
    //line
    this.svgElement
      .append('line')
      .attr('fill', 'none')
      .attr('x1', responsive.centerX - responsive.line.posX)
      .attr('x2', responsive.centerX + responsive.line.posX)
      .attr('y1', responsive.centerY + responsive.line.posY)
      .attr('y2', responsive.centerY + responsive.line.posY)
      .attr('stroke-dasharray', responsive.line.strokeDasharray)
      .attr('stroke', '#60658025')
      .attr('stroke-width', responsive.line.strokeWidth);

    const overFact = this.todayData.plan - this.todayData.fact;

    const overFactTitle = overFact < 0 ? -overFact.toLocaleString('ru-RU') : 0;

    this.svgElement
      .append('text')
      .attr('fill', () => (overFact < 0 ? '#f7931e' : '#606580'))
      .attr('font-size', responsive.overFact.fontSize)
      .attr('font-family', 'Tahoma')
      .attr('x', responsive.centerX)
      .attr('y', responsive.centerY + responsive.overFact.posY)
      .attr('text-anchor', 'middle')
      .text(`${overFactTitle}`);
  }

  drawTitles(): void {
    const responsive = {
      title2: {
        fontSize: this.componentWidth / 25.676,
        posX: this.componentWidth / 3.353,
        posY: this.componentWidth / 19.7,
      },
      fact: {
        fontSize: this.componentWidth / 29.973,
        posX: this.componentWidth / 1.14,
        posY: this.componentWidth / 20.736,
      },
      cumulativeTitle: {
        fontSize: this.componentWidth / 35.96,
        posX: this.componentWidth / 3.353,
        posY: this.componentWidth / 8.954,
      },
      cumulativeValue: {
        fontSize: this.componentWidth / 29.973,
        posX: this.componentWidth / 1.14,
        posY: this.componentWidth / 8.954,
      },
    };

    //название (гудрон)
    this.svgElement
      .append('text')
      .attr('fill', '#d7e2f2')
      .attr('font-size', responsive.title2.fontSize)
      .attr('font-family', 'Tahoma')
      .attr('x', responsive.title2.posX)
      .attr('y', responsive.title2.posY)
      .attr('text-anchor', 'start')
      .text(`${this.title2}`);
    //факт за день
    this.svgElement
      .append('text')
      .attr('fill', () => {
        if (this.todayData.fact > this.maxCapacity * this.dangerCapacityLevel) {
          return '#ff1d25';
        }
        if (this.todayData.fact > this.todayData.plan * this.dangerFactLevel) {
          return '#f7913e';
        }
        if (this.todayData.fact > this.todayData.plan) {
          return '#f7913e';
        }
        return '#0089ff';
      })
      .attr('font-size', responsive.fact.fontSize)
      .attr('font-family', 'Tahoma')
      .attr('x', responsive.fact.posX)
      .attr('y', responsive.fact.posY)
      .attr('text-anchor', 'end')
      .text(`${this.todayData.fact.toLocaleString('ru-RU')}`);
    //Накопительно
    this.svgElement
      .append('text')
      .attr('fill', '#606580')
      .attr('font-size', responsive.cumulativeTitle.fontSize)
      .attr('font-family', 'Tahoma')
      .attr('x', responsive.cumulativeTitle.posX)
      .attr('y', responsive.cumulativeTitle.posY)
      .attr('text-anchor', 'left')
      .text('Накопительно');

    //Накопительно значение
    this.svgElement
      .append('text')
      .attr('fill', '#606580')
      .attr('font-size', responsive.cumulativeValue.fontSize)
      .attr('font-family', 'Tahoma')
      .attr('x', responsive.cumulativeValue.posX)
      .attr('y', responsive.cumulativeValue.posY)
      .attr('text-anchor', 'end')
      .text(this.factTotal.toLocaleString('ru-RU'));
  }

  drawTank(): void {
    const responsive = {
      leftX: this.componentWidth / 1.095,
      bottomY: this.componentWidth / 3.716,
      tankWidth: this.componentWidth / 12.7,
      tankHeight: this.componentWidth / 5.116,

      percentText: {
        smallFontSize: this.componentWidth / 35.02,
        normalFontSize: this.componentWidth / 29.97,
        posX: this.componentWidth / 21.297,
        posY: this.componentWidth / 20.736,
      },

      percentSymbol: {
        fontSize: this.componentWidth / 44.95,
        posX: this.componentWidth / 19.7,
        posY: this.componentWidth / 20.736,
      },
    };

    //max capacity
    this.svgElement
      .append('rect')
      .attr('fill', '#0089ff20')
      .attr('width', responsive.tankWidth)
      .attr('height', responsive.tankHeight)
      .attr('x', responsive.leftX)
      .attr('y', responsive.bottomY)
      .attr('transform', `translate(0 -${responsive.tankHeight})`);

    //fact
    const factHeight =
      (responsive.tankHeight * this.todayData.fact) / this.maxCapacity;
    const bottomTank = 0.12; //нижняя часть танка

    this.svgElement
      .append('rect')
      .attr('fill', () => {
        if (this.todayData.fact > this.maxCapacity * this.dangerCapacityLevel) {
          return '#ff1d25';
        }
        if (this.todayData.fact > this.todayData.plan * this.dangerFactLevel) {
          return '#f7913e';
        }
        if (this.todayData.fact > this.todayData.plan) {
          return '#f7913e';
        }
        return '#0089ff';
      })
      .attr('width', responsive.tankWidth)
      .attr('height', factHeight - responsive.tankHeight * bottomTank)
      .attr('x', responsive.leftX)
      .attr('y', responsive.bottomY)
      .attr('transform', `translate(0 ${-factHeight})`);

    //текст в процентах
    this.svgElement
      .append('text')
      .attr('fill', '#d7e2f2')
      .attr('font-size', () =>
        Math.floor(this.todayPercentageProgress) > 99
          ? responsive.percentText.smallFontSize
          : responsive.percentText.normalFontSize
      )
      .attr('font-family', 'Tahoma')
      .attr('x', responsive.leftX + responsive.percentText.posX)
      .attr('y', responsive.percentText.posY)
      .attr('text-anchor', 'end')
      .text(Math.floor(this.todayPercentageProgress));

    //символ %
    this.svgElement
      .append('text')
      .attr('fill', '#606580')
      .attr('font-size', responsive.percentSymbol.fontSize)
      .attr('font-family', 'Tahoma')
      .attr('x', responsive.leftX + responsive.percentSymbol.posX)
      .attr('y', responsive.percentSymbol.posY)
      .attr('text-anchor', 'start')
      .text('%');

    //line - min capacity level
    const minLevelY = responsive.tankHeight * 0.1;
    this.svgElement
      .append('line')
      .attr('fill', 'none')
      .attr('x1', responsive.leftX)
      .attr('x2', responsive.leftX + responsive.tankWidth)
      .attr('y1', responsive.bottomY - minLevelY)
      .attr('y2', responsive.bottomY - minLevelY)
      .attr(
        'stroke-dasharray',
        `${this.componentWidth / 394} ${this.componentWidth / 394}`
      )
      .attr('stroke', '#fff')
      .attr('stroke-width', this.componentWidth / 394);

    //line - max plan level
    const planLevelY =
      (responsive.tankHeight * this.todayData.plan) / this.maxCapacity;
    this.svgElement
      .append('line')
      .attr('fill', 'none')
      .attr('x1', responsive.leftX)
      .attr('x2', responsive.leftX + responsive.tankWidth)
      .attr('y1', responsive.bottomY - planLevelY)
      .attr('y2', responsive.bottomY - planLevelY)
      .attr(
        'stroke-dasharray',
        `${this.componentWidth / 394} ${this.componentWidth / 394}`
      )
      .attr('stroke', '#fff')
      .attr('stroke-width', this.componentWidth / 394);
  }

  drawHistogram(): void {
    const data: any = this.daysData;

    const responsive = {
      histogramLeftPosX: this.componentWidth / 3.353,
      histogramTopPosY: this.componentWidth / 7.296,
      histogramWidth: this.componentWidth / 1.728,
      histogramHeight: this.componentWidth / 9.162,
      histogramMargin: this.componentWidth / 194,
      capacityBarWidth: this.componentWidth / 78.8,
    };

    const capacityBarHeight = responsive.histogramHeight;

    const xAxisLengh =
      responsive.histogramWidth -
      (this.componentWidth / 394) * responsive.histogramMargin;

    const scaleX = d3
      .scaleLinear()
      .domain([1, data.length])
      .range([0, xAxisLengh]);

    const g = this.svgElement
      .append('g')
      .attr(
        'transform',
        `translate(${responsive.histogramLeftPosX} ${responsive.histogramTopPosY})`
      );

    const drawCapacityBars = () => {
      g.selectAll('rect.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar');

      g.selectAll('g.bar-items')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'bar-items');

      g.selectAll('rect.bar')
        .data(data)
        .attr('x', (d) => scaleX(d.day))
        .attr('y', () => 0)
        .attr('height', () => capacityBarHeight)
        .attr('width', () => responsive.capacityBarWidth)
        .attr('fill', (d) => {
          if (d.day === this.todayData.day) {
            return '#0089FF20';
          }
          return '#272A38';
        })
        .attr('rx', this.componentWidth / 315.2)
        .attr('ry', this.componentWidth / 315.2);
    };

    const drawFactCells = (hostElement, index) => {
      // const cellHeight = 2;
      const cellHeight = this.componentWidth / 394;
      // const cellWidth = 6.5;
      const cellWidth = this.componentWidth / 121.23;

      // const cellOffsetY = 2;
      const cellOffsetY = this.componentWidth / 394;

      const centeringCellMargin = (responsive.capacityBarWidth - cellWidth) / 2;

      const currCellVerticalIndex = index;

      const cellPosY = responsive.histogramHeight;

      return hostElement
        .selectAll('g.bar-items')
        .data(data)
        .insert('rect')
        .attr('x', (d) => scaleX(d.day) + centeringCellMargin)
        .attr(
          'y',
          cellPosY -
            cellHeight -
            cellOffsetY -
            (cellHeight + cellOffsetY) * currCellVerticalIndex
        )
        .attr('height', cellHeight)
        .attr('width', cellWidth)
        .attr('rx', 1)
        .attr('ry', 1)
        .attr('fill', (d) => {
          // если факта нет (равен нулю, не закрашиваем)
          if (d.fact === 0) {
            return 'none';
          }

          //если факт > 80% общей емкости
          if (
            d.fact > d.plan &&
            d.fact > this.dangerCapacityLevel * this.maxCapacity
          ) {
            if (
              currCellVerticalIndex + 1 <= d.fact / 100 &&
              currCellVerticalIndex + 1 > d.plan / 100
            ) {
              return '#FF1D25';
            }
            if (currCellVerticalIndex + 1 <= d.fact / 100) {
              return '#F7931E';
            }
          }

          //если факт превышает план
          if (d.fact > d.plan) {
            if (
              currCellVerticalIndex + 1 <= d.fact / 100 &&
              currCellVerticalIndex + 1 > d.plan / 100
            ) {
              return '#F7931E';
            }
            if (currCellVerticalIndex + 1 <= d.fact / 100) {
              return '#fff';
            }
          }
          //в остальных случаях
          if (
            currCellVerticalIndex + 1 <= d.fact / 100 &&
            currCellVerticalIndex + 1 > d.plan / 100
          ) {
            return '#F7931E';
          }
          if (currCellVerticalIndex + 1 <= d.fact / 100) {
            return '#0089FF';
          }
        });
    };

    const drawPlanLine = () => {
      g.selectAll('g.x-axis g.tick')
        .append('line')
        .classed('grid-line', true)
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', -capacityBarHeight);

      g.selectAll('g.y-axis g.tick')
        .append('line')
        .classed('grid-line', true)
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', xAxisLengh)
        .attr('y2', 0);

      const xAxisLenghLine =
        responsive.histogramWidth -
        (this.componentWidth / 394) * responsive.histogramMargin;
      const scaleXLine = d3
        .scaleLinear()
        .domain([1, data.length])
        .range([0, xAxisLenghLine]);

      const firstItemFix = d3.line()([
        [
          0,
          capacityBarHeight +
            1 -
            (this.componentWidth / 197) * (this.daysData[0].plan / 100),
        ],
        [
          this.componentWidth / 197,
          capacityBarHeight +
            1 -
            (this.componentWidth / 197) * (this.daysData[0].plan / 100),
        ],
      ]);

      const lastIndex = this.daysData.length;
      const lastItemFix = d3.line()([
        [
          xAxisLenghLine, //x1
          capacityBarHeight +
            1 -
            (this.componentWidth / 197) *
              (this.daysData[lastIndex - 1].plan / 100),
        ],
        [
          xAxisLenghLine + this.componentWidth / 75.76, //x2
          capacityBarHeight +
            1 -
            (this.componentWidth / 197) *
              (this.daysData[lastIndex - 1].plan / 100),
        ],
      ]);

      const line = d3
        .line()
        .x((d: any) => scaleXLine(d.day))
        .x((d: any) => {
          return scaleXLine(d.day) + this.componentWidth / 157.6;
        })
        .y(
          (d: any) =>
            capacityBarHeight + 1 - (this.componentWidth / 197) * (d.plan / 100)
        )
        .curve(d3.curveStep);

      g.append('path')
        .attr('d', line(data))
        .style('stroke', '#0089FF')
        .style('stroke-linecap', 'round')
        .style('stroke-width', this.componentWidth / 358.181);

      g.append('path')
        .attr('d', firstItemFix)
        .style('stroke', '#0089FF')
        .style('stroke-linecap', 'round')
        .style('stroke-width', this.componentWidth / 358.181);

      g.append('path')
        .attr('d', lastItemFix)
        .style('stroke', '#0089FF')
        .style('stroke-linecap', 'round')
        .style('stroke-width', this.componentWidth / 358.181);
    };

    drawCapacityBars();

    Array.from({ length: this.maxCapacity / 100 }).forEach((_, index) => {
      drawFactCells(g, index);
    });

    drawPlanLine();
  }
}
