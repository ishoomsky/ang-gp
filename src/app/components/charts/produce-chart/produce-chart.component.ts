import {
  Component,
  OnChanges,
  ViewChild,
  Input,
  ElementRef,
} from '@angular/core';
import * as d3 from 'd3';

import { IProduceData } from '../../../interfaces/IProduceData';

@Component({
  selector: 'app-produce-chart',
  templateUrl: './produce-chart.component.html',
  styleUrls: ['./produce-chart.component.css'],
})
export class ProduceChartComponent implements OnChanges {
  @ViewChild('produceChartRef', { static: true })
  public produceChartRef: ElementRef;

  @Input('data')
  private data: IProduceData;
  @Input('width')
  public componentWidth: number;

  private hostElement;
  private svg;

  public title1: string;
  public title2: string;
  public fact: number;
  public plan: number;

  public currentProgress: number;
  public circleChartProgressPoint: number = (Math.PI * 2) / 100;

  ngOnChanges(): void {
    this.findHostElement();
    this.processData();
    this.clearPreviousChart();
    this.createChart();
  }

  //component methods
  findHostElement() {
    this.hostElement = this.produceChartRef.nativeElement;
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
    this.drawSvg();
    this.drawProgressBg();
    this.drawProgressArc();
    this.drawText();
  }

  //draw methods
  drawSvg(): void {
    const responsive = {
      width: this.componentWidth,
      height: this.componentWidth,
      translateY: this.componentWidth / 2,
      translateX: this.componentWidth / 2,
    };

    this.svg = d3
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
  drawProgressBg(): void {
    const responsive = {
      strokeWidthThin: this.componentWidth / 41.875,
      strokeWidthBold: this.componentWidth / 16.75,
      radius: this.componentWidth / 2.617,
    };

    this.svg
      .append('circle')
      .attr('fill', 'none')
      .attr('stroke', '#1c1f2b')
      .attr('stroke-width', responsive.strokeWidthBold)
      .attr('r', responsive.radius);

    this.svg
      .append('circle')
      .attr('fill', 'none')
      .attr('stroke', '#F7931E20')
      .attr('stroke-width', responsive.strokeWidthThin)
      .attr('r', responsive.radius);
  }
  drawProgressArc(): void {
    const responsive = {
      innerRadius: this.componentWidth / 2.701,
      outerRadius: this.componentWidth / 2.537,
      cornerRadius: this.componentWidth / 22.33,
    };
    const progressArc = d3
      .arc()
      .startAngle(0)
      .endAngle(this.circleChartProgressPoint * this.currentProgress)
      .innerRadius(responsive.innerRadius)
      .outerRadius(responsive.outerRadius)
      .cornerRadius(responsive.cornerRadius);

    this.svg.append('path').attr('d', progressArc).attr('fill', '#fff');
  }
  drawText() {
    const responsive = {
      titleFontSize: this.componentWidth / 13.99,
      title1PosY: Math.round(-this.componentWidth / 3.988),
      title2PosY: Math.round(-this.componentWidth / 8.375),

      numFontSize: this.componentWidth / 11.66,

      factPosY: Math.round(this.componentWidth / 41.875),
      planPosY: Math.round(this.componentWidth / 7.282),
      resultPosY: Math.round(this.componentWidth / 3.72),
    };

    //title1
    this.svg
      .append('text')
      .attr('fill', '#606580')
      .attr('font-size', responsive.titleFontSize)
      .attr('font-family', 'Tahoma')
      .attr('y', responsive.title1PosY)
      .attr('text-anchor', 'middle')
      .text(`${this.title1}`);

    //title2
    this.svg
      .append('text')
      .attr('fill', '#D7E2F2')
      .attr('font-size', responsive.titleFontSize)
      .attr('font-family', 'Tahoma')
      .attr('y', responsive.title2PosY)
      .attr('text-anchor', 'middle')
      .text(`${this.title2}`);

    //total
    this.svg
      .append('text')
      .attr('fill', '#D7E2F2')
      .attr('font-size', responsive.numFontSize)
      .attr('font-family', 'Tahoma')
      .attr('y', responsive.factPosY)
      .attr('text-anchor', 'middle')
      .text(`${this.fact.toLocaleString('ru-RU')}`);

    //plan
    this.svg
      .append('text')
      .attr('fill', '#0089FF')
      .attr('font-size', responsive.numFontSize)
      .attr('font-family', 'Tahoma')
      .attr('y', responsive.planPosY)
      .attr('text-anchor', 'middle')
      .text(`${this.plan.toLocaleString('ru-RU')}`);

    //result
    this.svg
      .append('text')
      .attr('fill', '#f7931e')
      .attr('font-size', responsive.numFontSize)
      .attr('font-family', 'Tahoma')
      .attr('y', responsive.resultPosY)
      .attr('text-anchor', 'middle')
      .text(`${(this.fact - this.plan).toLocaleString('ru-RU')}`);
  }
}
