import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/landing/landing.component').then((c) => c.LandingPageComponent) },
  { path: ':id/details', loadComponent: () => import('./pages/details/detail.component').then((c) => c.DetailComponent) },
];
