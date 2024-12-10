import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="layout">
      <app-sidebar></app-sidebar>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, SidebarComponent],
})
export class AppComponent {}
