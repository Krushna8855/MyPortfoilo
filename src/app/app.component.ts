import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../pages/components/navbar/navbar';
import { Footer } from '../pages/components/footer/footer';
import * as AOS from 'aos';

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
    
    <!-- Background Accents -->
    <div class="bg-blur"></div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      position: relative;
    }

    .main-content {
      flex: 1;
      width: 100%;
    }

    .bg-blur {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -10;
      background: radial-gradient(circle at 10% 20%, rgba(0, 217, 255, 0.03) 0%, transparent 40%),
                  radial-gradient(circle at 90% 80%, rgba(255, 77, 90, 0.03) 0%, transparent 40%);
      pointer-events: none;
    }
  `]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false
    });
  }
}
