import {
  Component,
  OnChanges,
  ViewChild,
  Input,
  ElementRef,
} from '@angular/core';
import * as d3 from 'd3';

import { IRefineData } from '../../../interfaces/IRefineData';

@Component({
  selector: 'app-refine-plan-chart',
  templateUrl: './refine-plan-chart.component.html',
  styleUrls: ['./refine-plan-chart.component.css'],
})
export class RefinePlanChartComponent implements OnChanges {
  @ViewChild('refineChartRef', { static: true })
  public refineChartRef: ElementRef;

  @Input('data')
  private data: IRefineData;
  @Input('width')
  public componentWidth: number;

  public title1: string;
  public title2: string;
  public fact: number;
  public plan: number;

  private hostElement;
  private svgElement;
  private groupElement;

  public startDeg: number;
  public endDeg: number;
  public currentProgress: number;

  constructor() {
    this.startDeg = 0;
    this.endDeg = 260;
  }

  ngOnChanges(): void {
    this.findHostElement();
    this.processData();
    this.clearPreviousChart();
    this.createChart();
  }

  //component methods
  findHostElement() {
    this.hostElement = this.refineChartRef.nativeElement as HTMLOrSVGElement;
  }
  processData() {
    this.title1 = this.data.title1;
    this.title2 = this.data.title2;
    this.fact = this.data.fact;
    this.plan = this.data.plan;

    if (this.fact > this.plan) {
      this.currentProgress = 100;
      return;
    }
    this.currentProgress = (this.fact / this.plan) * 100;
  }
  clearPreviousChart() {
    d3.select(this.hostElement).select('svg').remove();
  }
  createChart() {
    this.drawSvgElement();
    this.drawGroupElement();
    this.drawBackgroundTrack();
    this.drawBackgroundDashed();
    this.drawProgress();
    this.drawProgressBorders();
    this.drawProgressIndicator();
    this.drawText();
  }

  //draw methods
  drawSvgElement(): void {
    const responsive = {
      width: this.componentWidth,
      height: this.componentWidth,
      translateY: this.componentWidth / 2,
      translateX: this.componentWidth / 2,
    };

    this.svgElement = d3
      .select(this.hostElement)
      .append('svg')
      .attr('width', responsive.width)
      .attr('height', responsive.height)
      .append('g')
      .attr(
        'transform',
        `translate(${responsive.translateX},${responsive.translateY})`
      );
  }
  drawGroupElement(): void {
    this.groupElement = this.svgElement
      .append('g')
      .attr('transform', 'rotate(230)');
  }
  drawBackgroundTrack(): void {
    //progress background track
    const responsive = {
      itemInnerRadius: this.componentWidth / 3.133,
      itemOuterRadius: this.componentWidth / 2.35,
    };
    const backgroundTrackArc = this.arcConstructor(
      0,
      260,
      responsive.itemInnerRadius,
      responsive.itemOuterRadius,
      0
    );
    this.groupElement
      .append('path')
      .attr('d', backgroundTrackArc)
      .attr('fill', '#1c1f2b');
  }
  drawBackgroundDashed(): void {
    //dashed background decoration
    const responsive = {
      arcsOffset: this.componentWidth / 69.629,
      itemWidth: this.componentWidth / 117.5,
      itemInnerRadius: this.componentWidth / 3.58,
      itemOuterRadius: this.componentWidth / 3.418,
    };
    const properties: any = {
      hostElement: this.groupElement,
      arcsStartDeg: this.startDeg,
      arcsEndDeg: this.endDeg,
      // arcsOffset: 5.4,
      arcsOffset: responsive.arcsOffset,
      itemConstructorFunc: this.arcConstructor,
      // itemWidth: 3.2,
      itemWidth: responsive.itemWidth,
      // itemInnerRadius: 105,
      itemInnerRadius: responsive.itemInnerRadius,
      // itemOuterRadius: 110,
      itemOuterRadius: responsive.itemOuterRadius,
      itemCornerRadius: 0,
      primaryItemFill: '#1c1f2b',
    };

    this.arcsConstructor(properties);
  }
  drawProgress(): void {
    //активная часть круговой диаграммы
    const responsive = {
      itemInnerRadius: this.componentWidth / 2.937,
      itemOuterRadius: this.componentWidth / 2.457,
    };
    const properties: any = {
      hostElement: this.groupElement,
      arcsStartDeg: this.startDeg + 1,
      arcsEndDeg: this.endDeg - 2,
      arcsOffset: 1,
      itemConstructorFunc: this.arcConstructor,
      itemWidth: 1,
      // itemInnerRadius: 128,
      itemInnerRadius: responsive.itemInnerRadius,
      // itemOuterRadius: 153,
      itemOuterRadius: responsive.itemOuterRadius,
      itemCornerRadius: 0,
      primaryItemFill: '#0089ff',
      secondaryItemFill: '#F7931E',
      separatorDeg: (this.endDeg / 100) * this.currentProgress,
    };

    this.arcsConstructor(properties);
  }

  drawProgressBorders(): void {
    //start end borders
    const responsive = {
      itemInnerRadius: this.componentWidth / 3.13,
      itemOuterRadius: this.componentWidth / 2.35,
    };
    const startBorderProperties: any = {
      hostElement: this.groupElement,
      arcsStartDeg: this.startDeg,
      arcsEndDeg: this.startDeg + 1,
      arcsOffset: 1,
      itemConstructorFunc: this.arcConstructor,
      itemWidth: 1,
      // itemInnerRadius: 120,
      itemInnerRadius: responsive.itemInnerRadius,
      // itemOuterRadius: 160,
      itemOuterRadius: responsive.itemOuterRadius,
      itemCornerRadius: 0,
      primaryItemFill: '#303549',
    };

    const endBorderProperties: any = {
      hostElement: this.groupElement,
      arcsStartDeg: this.endDeg - 1,
      arcsEndDeg: this.endDeg,
      arcsOffset: 1,
      itemConstructorFunc: this.arcConstructor,
      itemWidth: 1,
      // itemInnerRadius: 120,
      itemInnerRadius: responsive.itemInnerRadius,
      // itemOuterRadius: 160,
      itemOuterRadius: responsive.itemOuterRadius,
      itemCornerRadius: 0,
      primaryItemFill: '#303549',
    };

    this.arcsConstructor(startBorderProperties);
    this.arcsConstructor(endBorderProperties);
  }
  drawProgressIndicator(): void {
    // active indicator
    const responsive = {
      itemInnerRadius: this.componentWidth / 3.13,
      itemOuterRadius: this.componentWidth / 2.35,
    };
    const properties: any = {
      hostElement: this.groupElement,
      arcsStartDeg: Math.round((this.endDeg / 100) * this.currentProgress),
      arcsEndDeg: Math.round((this.endDeg / 100) * this.currentProgress),
      arcsOffset: 1,
      itemConstructorFunc: this.arcConstructor,
      itemWidth: 1,
      // itemInnerRadius: 120,
      itemInnerRadius: responsive.itemInnerRadius,
      // itemOuterRadius: 160,
      itemOuterRadius: responsive.itemOuterRadius,
      itemCornerRadius: 0,
      primaryItemFill: '#ffffff',
    };

    this.arcsConstructor(properties);
  }

  drawText(): void {
    const responsive = {
      title1: {
        fontSize: this.componentWidth / 19.203,
        posY: this.componentWidth / 5.295,
      },
      fact: {
        fontSize: this.componentWidth / 12,
        posY: this.componentWidth / 12.965,
      },
      line: {
        // fontSize: this.componentWidth / 12,
        posX: this.componentWidth / 6.4,
        posY: this.componentWidth / 20.88,
      },
      plan: {
        fontSize: this.componentWidth / 12,
        posY: this.componentWidth / 23.5,
      },
      result: {
        fontSize: this.componentWidth / 12,
        posY: this.componentWidth / 5.081,
      },
      title2: {
        posY: this.componentWidth / 4.27,
        posX: this.componentWidth / 5.013,
        height: this.componentWidth / 6.266,
        width: this.componentWidth / 2.506,

        fontSize: this.componentWidth / 16,
      },
    };
    //title1
    this.svgElement
      .append('text')
      .attr('fill', '#606580')
      // .attr('font-size', 19.58)
      .attr('font-size', responsive.title1.fontSize)
      .attr('font-family', 'Tahoma')
      // .attr('y', -71)
      .attr('y', -responsive.title1.posY)
      .attr('text-anchor', 'middle')
      .text(`${this.title1}`);

    //fact
    this.svgElement
      .append('text')
      .attr('fill', '#D7E2F2')
      // .attr('font-size', 31.33)
      .attr('font-size', responsive.fact.fontSize)
      .attr('font-family', 'Tahoma')
      // .attr('y', -29)
      .attr('y', -responsive.fact.posY)
      .attr('text-anchor', 'middle')
      .text(`${this.fact.toLocaleString('ru-RU')}`);

    //line
    this.svgElement
      .append('line')
      .attr('fill', 'none')
      // .attr('x1', -58.75)
      // .attr('x2', 58.75)
      .attr('x1', -responsive.line.posX)
      .attr('x2', responsive.line.posX)
      // .attr('y1', -18)
      // .attr('y2', 18)
      .attr('y1', -responsive.line.posY)
      .attr('y2', -responsive.line.posY)
      .attr('stroke-dasharray', '2 2')
      .attr('stroke', '#272A3850')
      .attr('stroke-width', '2');

    //plan
    this.svgElement
      .append('text')
      .attr('fill', '#0089FF')
      // .attr('font-size', 31.33)
      .attr('font-size', responsive.plan.fontSize)
      .attr('font-family', 'Tahoma')
      // .attr('y', 16)
      .attr('y', responsive.plan.posY)
      .attr('text-anchor', 'middle')
      .text(`${this.plan.toLocaleString('ru-RU')}`);

    //result
    this.svgElement
      .append('text')
      .attr('fill', '#f7931e')
      // .attr('font-size', 31.33)
      .attr('font-size', responsive.result.fontSize)
      .attr('font-family', 'Tahoma')
      // .attr('y', 74)
      .attr('y', responsive.result.posY)
      .attr('text-anchor', 'middle')
      .text(`${(this.fact - this.plan).toLocaleString('ru-RU')}`);

    // title2
    this.svgElement
      .append('foreignObject')
      // .attr('y', 88)
      // .attr('x', -75)
      .attr('y', responsive.title2.posY)
      .attr('x', -responsive.title2.posX)
      // .attr('height', '60px')
      // .attr('width', '150px')
      .attr('height', `${responsive.title2.height}`)
      .attr('width', `${responsive.title2.width}`)
      .append('xhtml:div')
      .attr(
        'style',
        `text-align: center; font-size:${responsive.title2.fontSize}px;color: #D7E2F2; width: ${responsive.title2.width}; height: 100%;`
      )
      .text(`${this.title2}`);
  }

  //arc factory
  arcsConstructor({
    hostElement,
    arcsStartDeg,
    arcsEndDeg,
    arcsOffset,
    itemConstructorFunc,
    itemWidth,
    itemInnerRadius,
    itemOuterRadius,
    itemCornerRadius,
    primaryItemFill,
    secondaryItemFill,
    separatorDeg,
  }) {
    for (let i = arcsStartDeg; i <= arcsEndDeg; i++) {
      const arc = itemConstructorFunc(
        i,
        i + itemWidth,
        itemInnerRadius,
        itemOuterRadius,
        itemCornerRadius
      );
      if (!separatorDeg) {
        hostElement.append('path').attr('d', arc).attr('fill', primaryItemFill);
        i = i + arcsOffset;
      }
      if (separatorDeg) {
        hostElement
          .append('path')
          .attr('d', arc)
          .attr('fill', i < separatorDeg ? primaryItemFill : secondaryItemFill);
        i = i + arcsOffset;
      }
    }
  }
  arcConstructor = (
    start: number,
    end: number,
    innerRadius: number,
    outerRadius: number,
    cornerRadius: number
  ) => {
    return d3
      .arc()
      .startAngle(((Math.PI * 2) / 360) * start)
      .endAngle(((Math.PI * 2) / 360) * end)
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius);
  };
}
