import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginActivateGuard } from './guards/login-activate.guard';
import { LogoutActivateGuard } from './guards/logout-activate.guard';
// import { RootActivateGuard } from './guards/root-activate.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login.module').then((m) => m.LoginModule),
    canActivate: [LogoutActivateGuard],
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./modules/charts.module').then((m) => m.ChartsModule),
    canActivate: [LoginActivateGuard],
  },
  {
    path: 'indicators',
    loadChildren: () =>
      import('./modules/indicators.module').then((m) => m.IndicatorsModule),
    canActivate: [LoginActivateGuard],
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./modules/indicators.module').then((m) => m.IndicatorsModule),
  //   canActivate: [RootActivateGuard],
  // },

  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
