import {AntiHeroState} from '../models/anti-hero.state';
import {createReducer, on} from '@ngrx/store';
import {setAntiHeroList} from './anti-hero.actions';

export const initialState: AntiHeroState = {
  antiHeroes: []
}

export const antiHeroReducer = createReducer(
  initialState,
  on(setAntiHeroList,
    (state, {antiHeroes}) => {
      return {...state, antiHeroes}
    }
  )
);
