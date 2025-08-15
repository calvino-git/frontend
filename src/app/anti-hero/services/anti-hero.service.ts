import {Injectable} from '@angular/core';
import {AntiHero} from '../../core/models/anti-hero';
import {Observable} from 'rxjs';
@Injectable()
export class AntiHeroService{

  getAntiHeroes() {
    return new Observable<AntiHero>();
  }
}
