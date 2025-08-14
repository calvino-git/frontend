import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AntiHero } from '../../../core/models/anti-hero';
import { Header } from '../../../core/models/header';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TableActions } from '../../../core/enums/table-actions-enum';

@Component({
  selector: 'app-anti-hero-list',
  templateUrl: './anti-hero-list.html',
  styleUrl: './anti-hero-list.css',
  imports: [
    CommonModule, MatIconModule, MatTableModule
  ]
})
export class AntiHeroList implements OnInit {
  @Input()
  antiHeroes: Array<AntiHero> = [];
  @Input()
  headers: Array<Header> = [];
  @Output()
  antiHero = new EventEmitter<{antiHero:AntiHero, action :TableActions}>();
  headerFields: string[] = [];

  // This component is responsible for displaying a list of anti-heroes.
  // It can be used to fetch and display data from a service or API.

  ngOnInit() {
    // Initialization logic can go here, such as fetching data from a service.
    this.getHeaderFields();
  }

  getHeaderFields() {
    this.headerFields = this.headers.map((data) =>
      data.fieldName);
    this.headerFields.push("actions");
}

  deleteHero(antiHero: AntiHero, action:TableActions) {
    this.antiHero.emit({antiHero, action});
  }
  editHero(antiHero: AntiHero, action:TableActions) {
    this.antiHero.emit({antiHero, action});
  }
  selectAntiHero(antiHero: AntiHero, action:TableActions) {
    this.antiHero.emit({antiHero, action});
  }
}
