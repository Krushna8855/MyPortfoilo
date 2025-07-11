import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
 })
 export class Skills {
// ngOnInit(): void {
//   window.addEventListener('scroll', () => {
//     const skills = document.querySelectorAll('.progress');
//     skills.forEach(skill => {
//       const rect = skill.getBoundingClientRect();
//       if (rect.top < window.innerHeight) {
//         const targetWidth = (skill as HTMLElement).style.width;
//         (skill as HTMLElement).style.width = '0';
//         setTimeout(() => {
//           (skill as HTMLElement).style.width = targetWidth;
//         }, 100);
//       }
//     });
//   });
// }

activeTab: string = 'frontend';

  skills = [
    { name: 'Angular', icon: 'fa-brands fa-angular', category: 'frontend', link: 'https://angular.io' },
    { name: 'React', icon: 'fa-brands fa-react', category: 'frontend', link: 'https://react.dev' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', category: 'frontend', link: 'https://getbootstrap.com' },
    { name: 'HTML5', icon: 'fa-brands fa-html5', category: 'frontend', link: '' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', category: 'frontend', link: '' },
    { name: 'SCSS', icon: 'fa-brands fa-sass', category: 'frontend', link: '' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', category: 'frontend', link: '' },

    { name: 'Java', icon: 'fa-brands fa-java', category: 'backend', link: '' },
    { name: 'Python', icon: 'fa-brands fa-python', category: 'backend', link: '' },
    { name: 'MySQL', icon: 'fa-solid fa-database', category: 'backend', link: '' },

    { name: 'Git & GitHub', icon: 'fa-brands fa-github', category: 'tools', link: 'https://github.com' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', category: 'tools', link: 'https://linkedin.com/in/krushna-ghotekar-1223a222a' },
    { name: 'ChatGPT', icon: 'fa-brands fa-robot', category: 'tools', link: 'https://chat.openai.com' },
    { name: 'GitHub Copilot', icon: 'fa-brands fa-github', category: 'tools', link: 'https://github.com/features/copilot' },
    { name: 'Microsoft Copilot', icon: 'fa-solid fa-brain', category: 'tools', link: 'https://www.microsoft.com/en-us/microsoft-copilot' }
  ];

  get filteredSkills() {
    return this.skills.filter(skill => skill.category === this.activeTab);
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
 
// import { Component, AfterViewInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-skills',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './skills.html',
//   styleUrls: ['./skills.scss']
// })
// export class SkillsComponent implements AfterViewInit {

//   ngAfterViewInit(): void {
//     const circles = document.querySelectorAll<HTMLElement>('.progress-circle');

//     circles.forEach(circle => {
//       const percent = parseInt(circle.dataset['percentage'] || '0', 10);
//       circle.style.setProperty('--percent', percent.toString());
//     });

//     const bars = document.querySelectorAll<HTMLElement>('.progress');

//     bars.forEach(bar => {
//       const width = bar.style.width;
//       bar.style.width = '0%';
//       setTimeout(() => {
//         bar.style.width = width;
//       }, 500);
//     });
//   }
// }
