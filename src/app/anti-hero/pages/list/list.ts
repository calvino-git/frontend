import { Component, EventEmitter, OnInit } from '@angular/core';
import { AntiHero } from '../../../core/models/anti-hero';
import { Header } from '../../../core/models/header';
import { TableActions } from '../../../core/enums/table-actions-enum';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrl: './list.css',
  standalone: false
})
export class List implements OnInit{
  // This component is responsible for displaying a list of anti-heroes.
  // It can be used to fetch and display data from a service or API.
  antiHeroes: AntiHero[] = [
    { firstName: 'AntiHero One', lastName: 'Invisibility', house: 'Light', kownAs: 'Shadow'},
    { firstName: 'AntiHero Two', lastName: 'Super Strength', house: 'Dark', kownAs: 'Titan'},
    { firstName: 'AntiHero Three', lastName: 'Flight', house: 'Neutral', kownAs: 'Falcon'},
    { firstName: 'AntiHero Four', lastName: 'Telepathy', house: 'Light', kownAs: 'Mind Reader'}
  ];

  headers: Array<Header> = [
    { headerName: 'First Name', fieldName: 'firstName' },
    { headerName: 'Last Name', fieldName: 'lastName' },
    { headerName: 'House', fieldName: 'house' },
    { headerName: 'Known As', fieldName: 'kownAs' }
  ];
  output : AntiHero = { firstName: '', lastName: '', house: '', kownAs: '' };

  constructor() {
    // You can inject services here if needed.
  }
  ngOnInit(): void {
  }

  deleteHero(obj: {antiHero: AntiHero, action:TableActions}) {
    // Logic to delete an anti-hero by id
    console.log(`Delete hero : ${obj.antiHero.firstName} : ${obj.action}`);
  }
  editHero(obj: {antiHero: AntiHero, action:TableActions}) {
    // Logic to edit an anti-hero
    console.log(`Edit hero: ${obj.antiHero.firstName} : ${obj.action}`);
  }
  selectAntiHero(obj: {antiHero: AntiHero, action:TableActions}) {
    // Logic to select an anti-hero
    this.output = obj.antiHero;
    console.log(`Triggered event: ${obj.antiHero.firstName} : ${obj.action}`);
  }
}
