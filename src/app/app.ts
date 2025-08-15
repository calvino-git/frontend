import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {SharedModule} from './shared/shared-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('Calvin ILOKI');
  isReloading = true;

  reload() {
    window.location.reload();
  }
}
