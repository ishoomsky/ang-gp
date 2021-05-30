import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavbarModule } from './navbar.module';

import { ChartsComponent } from '../components/charts/charts.component';
import { ProduceChartComponent } from '../components/charts/produce-chart/produce-chart.component';
import { RefinePlanChartComponent } from '../components/charts/refine-plan-chart/refine-plan-chart.component';
import { StoreChartComponent } from '../components/charts/store-chart/store-chart.component';
import { ChartsDatasource } from '../services/charts.datasource';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
  },
];

@NgModule({
  declarations: [
    ChartsComponent,
    ProduceChartComponent,
    RefinePlanChartComponent,
    StoreChartComponent,
  ],
  imports: [CommonModule, NavbarModule, RouterModule.forChild(routes)],
  providers: [ChartsDatasource],
})
export class ChartsModule {}
