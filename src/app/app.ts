import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {SharedModule} from './shared/shared-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = 'Anti-Hero App';
  isReloading = true;

  reload() {
    window.location.reload();
  }
}
