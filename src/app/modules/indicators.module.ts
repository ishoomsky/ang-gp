import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavbarModule } from './navbar.module';

import { IndicatorsComponent } from '../components/indicators/indicators.component';
import { IndicatorComponent } from '../components/indicators/indicator/indicator.component';
import { IndicatorsDatasource } from '../services/indicators.datasource';

const routes: Routes = [
  {
    path: '',
    component: IndicatorsComponent,
  },
];

@NgModule({
  declarations: [IndicatorsComponent, IndicatorComponent],
  imports: [CommonModule, NavbarModule, RouterModule.forChild(routes)],
  providers: [IndicatorsDatasource],
})
export class IndicatorsModule {}
