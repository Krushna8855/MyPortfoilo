import { Component, OnInit, signal, effect } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection implements OnInit {
  roles = ["Mobile & Full-Stack Developer", "React Native Expert", "Android Developer", "Node.js Developer"];
  displayText = signal('');
  currentIndex = 0;
  charIndex = 0;
  isDeleting = false;

  ngOnInit(): void {
    this.type();
  }

  type() {
    const currentFullText = this.roles[this.currentIndex];
    
    if (this.isDeleting) {
      this.displayText.set(currentFullText.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.displayText.set(currentFullText.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === currentFullText.length) {
      typeSpeed = 2000; // Pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.roles.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}
