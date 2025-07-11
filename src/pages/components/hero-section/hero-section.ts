import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  ngOnInit(): void {
  const roles = ["Frontend Developer", "Angular Expert", "Web Enthusiast"];
  let i = 0, charIndex = 0;

  setTimeout(() => {
    const typingElement = document.querySelector('.typed-text') as HTMLElement | null;

    if (typingElement) {
      const type = () => {
        if (charIndex < roles[i].length) {
          typingElement.textContent += roles[i].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100);
        } else {
          setTimeout(erase, 1500);
        }
      };

      const erase = () => {
        if (charIndex > 0) {
          typingElement.textContent = roles[i].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 50);
        } else {
          i = (i + 1) % roles.length;
          setTimeout(type, 500);
        }
      };

      type();
    }
  }, 0);
}
}
