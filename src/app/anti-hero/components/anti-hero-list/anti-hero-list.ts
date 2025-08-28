import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {AntiHero} from '../../models/anti-hero';
import {Header} from '../../../core/models/header';
import {TableActions} from '../../../core/enums/table-actions-enum';
import {MaterialModule} from '../../../material/material-module';
import {CommandBarActions} from "../../../core/enums/command-bar-actions-enum";

@Component({
  selector: 'app-anti-hero-list',
  templateUrl: './anti-hero-list.html',
  styleUrls: ['./anti-hero-list.css']//,
  // imports: [
  //   CommonModule, MatIconModule, MatTableModule
  // ]
})
export class AntiHeroList implements OnInit {
  @Input()
  antiHeroes: ReadonlyArray<AntiHero> = [];
  @Input()
  headers: Array<Header> = [];
  @Output()
  antiHeroDelete = new EventEmitter<{ antiHero: AntiHero, action: TableActions }>();
  @Output()
  antiHeroSelect = new EventEmitter<{ antiHero: AntiHero, action: TableActions }>();
  @Output()
  antiHeroEdit = new EventEmitter<{ antiHero: AntiHero, action: TableActions }>();
  headerFields: string[] = [];

  // This component is responsible for displaying a list of anti-heroes.
  // It can be used to fetch and display data from a service or API.

  ngOnInit() {
    // Initialization logic can go here, such as fetching data from a service.
    this.getHeaderFields();
  }

  getHeaderFields() {
    this.headerFields = this.headers.map((data) => data.fieldName);
    this.headerFields.push("actions");
  }

  deleteAntiHero(antiHero: AntiHero, action: TableActions) {
    this.antiHeroDelete.emit({antiHero, action});
  }

  editAntiHero(antiHero: AntiHero, action: TableActions) {
    this.antiHeroEdit.emit({antiHero, action});
  }

  selectAntiHero(antiHero: AntiHero, action: TableActions) {
    this.antiHeroSelect.emit({antiHero, action});
  }

    protected readonly CommandBarActions = CommandBarActions;
  protected readonly TableActions = TableActions;
}
