import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HeaderInterceptor} from './core/interceptors/header.interceptor';
import {AntiHeroEffects} from './anti-hero/state/anti-hero.effects';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "anti-heroes",
    loadChildren: () =>
      import("./anti-hero/anti-hero.module").then((m) =>
        m.AntiHeroModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
