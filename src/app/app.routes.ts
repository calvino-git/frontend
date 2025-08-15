import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'anti-heroes',
    pathMatch: 'full'
  },
  {
    path: 'anti-heroes',
    loadChildren: () => import('./anti-hero/anti-hero-module').then(m => m.AntiHeroModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot({},{}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    }),
    EffectsModule.forRoot()
  ]
})
export class AppRoutesModule { }
