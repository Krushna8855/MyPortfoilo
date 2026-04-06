import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = false;
  isScrolled = false;

  navLinks = [
    { name: 'About', path: '#about', icon: 'fas fa-user-astronaut' },
    { name: 'Experience', path: '#experience', icon: 'fas fa-briefcase' },
    { name: 'Skills', path: '#skills', icon: 'fas fa-rocket' },
    { name: 'Projects', path: '#projects', icon: 'fas fa-layer-group' },
    { name: 'Education', path: '#education', icon: 'fas fa-graduation-cap' },
    { name: 'Contact', path: '#contact', icon: 'fas fa-paper-plane' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
