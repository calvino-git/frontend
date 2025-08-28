import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { antiHeroReducer } from './state/anti-hero.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AntiHeroEffects } from './state/anti-hero.effects';
import { HttpClientModule } from '@angular/common/http';
import {AntiHeroList} from './components/anti-hero-list/anti-hero-list';
import {AntiHeroForm} from './components/anti-hero-form/anti-hero-form';
import {AntiHeroCommandBar} from './components/anti-hero-command-bar/anti-hero-command-bar';
import {List} from './pages/list/list';
import {Form} from './pages/form/form';
import {AntiHeroRoutingModule} from './anti-hero-routing.module';
import {MaterialModule} from '../material/material-module';


@NgModule({
  declarations: [
    AntiHeroList,
    AntiHeroForm,
    AntiHeroCommandBar,
    List,
    Form,
  ],
  imports: [
    CommonModule,
    AntiHeroRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forFeature('antiHeroState', antiHeroReducer),
    EffectsModule.forFeature([AntiHeroEffects])
  ]
})
export class AntiHeroModule { }
