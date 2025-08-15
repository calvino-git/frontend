import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AntiHeroState} from '../models/anti-hero.state';

export const selectAntiHeroState = createFeatureSelector('antiHeroState')
console.log(selectAntiHeroState)

export const selectAntiHeroes = createSelector(
  selectAntiHeroState,
  (state:AntiHeroState) => state.antiHeroes
)
console.log(selectAntiHeroes)

export const selectAntiHero = (id: string) => createSelector(
  selectAntiHeroState,
  (state: AntiHeroState) => state.antiHeroes.find(d => d.id === id)
)
console.log(selectAntiHero)
