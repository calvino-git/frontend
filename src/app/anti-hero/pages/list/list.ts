import {Component, OnInit} from '@angular/core';
import {AntiHero} from '../../models/anti-hero';
import {Header} from '../../../core/models/header';
import {TableActions} from '../../../core/enums/table-actions-enum';
import {CommandBarActions} from '../../../core/enums/command-bar-actions-enum';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {selectAntiHeroes} from '../../state/anti-hero.selectors';
import {AntiHeroActions} from '../../state/anti-hero.actions';
import {Observable} from 'rxjs';
import {AppState} from '../../../state/app.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class List implements OnInit {
  // This component is responsible for displaying a list of anti-heroes.
  // It can be used to fetch and display data from a service or API.
  antiHeroes: ReadonlyArray<AntiHero> = [];
  //   AntiHero[] = [
  //   {id: '1', firstName: 'AntiHero One', lastName: 'Invisibility', house: 'Light', kownAs: 'Shadow'},
  //   {id: '2', firstName: 'AntiHero Two', lastName: 'Super Strength', house: 'Dark', kownAs: 'Titan'},
  //   {id: '3', firstName: 'AntiHero Three', lastName: 'Flight', house: 'Neutral', kownAs: 'Falcon'},
  //   {id: '4', firstName: 'AntiHero Four', lastName: 'Telepathy', house: 'Light', kownAs: 'Mind Reader'}
  // ];
  antiHeroes$ = this.store.select(selectAntiHeroes);

  headers: Array<Header> = [
    {headerName: 'First Name', fieldName: 'firstName'},
    {headerName: 'Last Name', fieldName: 'lastName'},
    {headerName: 'House', fieldName: 'house'},
    {headerName: 'Known As', fieldName: 'kownAs'}
  ];

  constructor(private router: Router, private store: Store<AppState>) {
    // You can inject services here if needed.
  }

  ngOnInit(): void {
    this.store.dispatch({type: AntiHeroActions.GET_ANTI_HERO_LIST});
    this.assignAntiHeroes();
  }

  deleteAntiHero(obj: { antiHero: AntiHero, action: TableActions }) {
    // Logic to delete an anti-hero by id
    console.log(`Delete hero : ${obj.antiHero.firstName} : ${obj.action}`);
  }

  editAntiHero(obj: { antiHero: AntiHero, action: TableActions }) {
    // Logic to edit an anti-hero
    console.log(`Edit hero: ${obj.antiHero.firstName} : ${obj.action}`);
  }

  selectAntiHero(obj: { antiHero: AntiHero, action: TableActions }) {
    console.log(`Triggered event: ${obj.antiHero.firstName} : ${obj.action.toString()}`);
    this.router.navigate(['anti-heroes/form', obj.antiHero.id])
  }

  executeCommandBarAction(action: CommandBarActions) {
    console.log(action)
    switch (action){
      case CommandBarActions.Create:{
        this.router.navigate(['anti-hero/form'])
        return;
      }
      case CommandBarActions.Delete: return
      default : ""
    }
  }

  assignAntiHeroes(){
    this.antiHeroes$.subscribe((data)=>{this.antiHeroes = data});
  }
}
