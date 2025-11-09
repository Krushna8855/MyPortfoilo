import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../pages/components/navbar/navbar';
import { Footer } from '../pages/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Navbar, Footer],
  template: `
    <app-navbar></app-navbar>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      flex: 1;
      padding: 2rem;
      background: #ffffff;
      color: #222;
    }
  `]
})
export class AppComponent {
  title = 'Your Portfolio';
}
