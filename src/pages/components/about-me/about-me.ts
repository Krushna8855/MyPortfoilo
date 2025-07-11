import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
ngOnInit(): void {
  const roles = ["Frontend Developer", "Angular Expert", "Web Enthusiast"];
  let i = 0, charIndex = 0;

  setTimeout(() => {
    const typingElement = document.querySelector('.typed-text') as HTMLElement | null;
    if (!typingElement) return;

    const type = () => {
      if (charIndex < roles[i].length) {
        typingElement.textContent += roles[i].charAt(charIndex);
        charIndex++;
        setTimeout(type, 80);
      } else {
        setTimeout(erase, 1200);
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
  }, 0);

  window.addEventListener('scroll', () => {
    const section = document.querySelector('.about-modern');
    if (section && section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}

}
