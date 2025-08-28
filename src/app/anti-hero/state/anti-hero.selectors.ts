import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AntiHeroState} from './anti-hero.reducers';

export const selectAntiHeroState = createFeatureSelector<AntiHeroState>('antiHeroState')
console.log(selectAntiHeroState.name)

export const selectAntiHeroes = createSelector(
  selectAntiHeroState,
  (state:AntiHeroState) => state.antiHeroes
)
console.log(selectAntiHeroes.name)

export const selectAntiHero = (id: string) => createSelector(
  selectAntiHeroState,
  (state: AntiHeroState) => state.antiHeroes.find(d => d.id === id)
)
console.log(selectAntiHero.name)
