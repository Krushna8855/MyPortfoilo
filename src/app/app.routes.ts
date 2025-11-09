import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/components/hero-section/hero-section').then(
        (m) => m.HeroSection
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../pages/components/about-me/about-me').then((m) => m.AboutMe),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('../pages/components/skills/skills').then((m) => m.Skills),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('../pages/components/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('../pages/components/experience/experience').then(
        (m) => m.Experience
      ),
  },
  {
    path: 'education',
    loadComponent: () =>
      import('../pages/components/education/education').then(
        (m) => m.Education
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../pages/components/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
