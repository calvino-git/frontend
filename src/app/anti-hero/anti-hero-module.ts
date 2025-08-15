import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntiHeroRoutingModule } from './anti-hero-routing-module';
import {MaterialModule} from '../material/material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {AntiHeroEffects} from './state/anti-hero.effects';
import {StoreModule} from '@ngrx/store';
import {antiHeroReducer, initialState} from './state/anti-hero.reducers';



@NgModule({
  declarations: [
    //AntiHeroForm//, AntiHeroList
  ],
    exports: [
        //AntiHeroForm,
        //AntiHeroList
    ],
  imports: [
    CommonModule,
    AntiHeroRoutingModule,
    FormsModule,
    MaterialModule,
    EffectsModule.forFeature([AntiHeroEffects]),
    StoreModule.forFeature('antiHeroState', antiHeroReducer)
  ]
})
export class AntiHeroModule { }
