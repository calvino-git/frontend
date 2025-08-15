import {Component, OnInit} from '@angular/core';
import {AntiHero} from '../../../core/models/anti-hero';
import {Header} from '../../../core/models/header';
import {TableActions} from '../../../core/enums/table-actions-enum';
import {CommandBarActions} from '../../../core/enums/command-bar-actions-enum';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AntiHeroState} from '../../models/anti-hero.state';
import {selectAntiHeroes} from '../../state/anti-hero.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrl: './list.css',
  standalone: false
})
export class List implements OnInit {
  // This component is responsible for displaying a list of anti-heroes.
  // It can be used to fetch and display data from a service or API.
  antiHeroes: AntiHero[] = [
    {id: '1', firstName: 'AntiHero One', lastName: 'Invisibility', house: 'Light', kownAs: 'Shadow'},
    {id: '2', firstName: 'AntiHero Two', lastName: 'Super Strength', house: 'Dark', kownAs: 'Titan'},
    {id: '3', firstName: 'AntiHero Three', lastName: 'Flight', house: 'Neutral', kownAs: 'Falcon'},
    {id: '4', firstName: 'AntiHero Four', lastName: 'Telepathy', house: 'Light', kownAs: 'Mind Reader'}
  ];
  antiHeroes$ = this.store.select(selectAntiHeroes);

  headers: Array<Header> = [
    {headerName: 'First Name', fieldName: 'firstName'},
    {headerName: 'Last Name', fieldName: 'lastName'},
    {headerName: 'House', fieldName: 'house'},
    {headerName: 'Known As', fieldName: 'kownAs'}
  ];
  output: AntiHero = {id: '', firstName: '', lastName: '', house: '', kownAs: ''};

  constructor(private router: Router, private store: Store<AntiHeroState>) {
    // You can inject services here if needed.
  }

  ngOnInit(): void {
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
    // Logic to select an anti-hero
    this.output = obj.antiHero;
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
}
