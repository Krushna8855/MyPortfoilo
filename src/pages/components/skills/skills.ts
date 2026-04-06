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
    // Frontend
    { name: 'React', icon: 'fa-brands fa-react', category: 'frontend', link: 'https://react.dev' },
    { name: 'Angular', icon: 'fa-brands fa-angular', category: 'frontend', link: 'https://angular.io' },
    { name: 'HTML5', icon: 'fa-brands fa-html5', category: 'frontend', link: '' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', category: 'frontend', link: '' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', category: 'frontend', link: '' },
    
    // Backend
    { name: 'Node.js', icon: 'fa-brands fa-node-js', category: 'backend', link: '' },
    { name: 'Express.js', icon: 'fa-solid fa-server', category: 'backend', link: '' },
    { name: 'Spring Boot', icon: 'fa-solid fa-leaf', category: 'backend', link: '' },
    { name: 'Java', icon: 'fa-brands fa-java', category: 'backend', link: '' },
    { name: 'Python', icon: 'fa-brands fa-python', category: 'backend', link: '' },
    { name: 'MySQL', icon: 'fa-solid fa-database', category: 'backend', link: '' },
    { name: 'Firebase', icon: 'fa-solid fa-fire', category: 'backend', link: '' },
    
    // Mobile
    { name: 'React Native', icon: 'fa-brands fa-react', category: 'mobile', link: '' },
    { name: 'Android (Java)', icon: 'fa-brands fa-android', category: 'mobile', link: '' },
    { name: 'iOS', icon: 'fa-brands fa-apple', category: 'mobile', link: '' },
    { name: 'Ionic', icon: 'fa-solid fa-mobile-screen', category: 'mobile', link: '' },
    
    // Tools
    { name: 'Git & GitHub', icon: 'fa-brands fa-github', category: 'tools', link: 'https://github.com' },
    { name: 'Postman', icon: 'fa-solid fa-envelope-open-text', category: 'tools', link: '' },
    { name: 'Android Studio', icon: 'fa-solid fa-code', category: 'tools', link: '' },
    { name: 'VS Code', icon: 'fa-solid fa-file-code', category: 'tools', link: '' },
    { name: 'Xcode', icon: 'fa-solid fa-terminal', category: 'tools', link: '' }
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
