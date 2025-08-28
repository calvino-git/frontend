import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TableActions} from '../../../core/enums/table-actions-enum';
import {CommandBarActions} from '../../../core/enums/command-bar-actions-enum';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-anti-hero-command-bar',
  templateUrl: './anti-hero-command-bar.html',
  styleUrls: ['./anti-hero-command-bar.css']
})
export class AntiHeroCommandBar implements OnInit{
  @Output()
  action = new EventEmitter<CommandBarActions>()

  constructor() {
  }

  ngOnInit(): void {
  }

  emitAction(action: CommandBarActions) {
    console.log('Action : ' + action);
    this.action.emit(action);
  }

  protected readonly TableActions = TableActions;
  protected readonly CommandBarActions = CommandBarActions;
}
