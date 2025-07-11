// // import { Routes } from '@angular/router';
// // /
// // import { AppComponent } from './app.component'; // NOT app.Component

// // export const routes: Routes = [
// //   { path: '', component: AppComponent }
// // ];


// // export const routes: Routes = [
// //   {
// //     path: '',
// //     loadComponent: () =>
// //       import('../pages/components/hero-section/hero-section').then(
// //         (m) => m.HeroSection
// //       ),
// //   },
// //   {
// //     path: 'about',
// //     loadComponent: () =>
// //       import('../pages/components/about-me/about-me').then(
// //         (m) => m.AboutMe
// //       ),
// //   },
// //   {
// //     path: 'skills',
// //     loadComponent: () =>
// //       import('../pages/components/skills/skills').then(
// //         (m) => m.Skills
// //       ),
// //   },
// //   {
// //     path: 'projects',
// //     loadComponent: () =>
// //       import('../pages/components/projects/projects').then(
// //         (m) => m.Projects
// //       ),
// //   },
// //   {
// //     path: 'experience',
// //     loadComponent: () =>
// //       import('../pages/components/experience/experience').then(
// //         (m) => m.Experience
// //       ),
// //   },
// //   {
// //     path: 'education',
// //     loadComponent: () =>
// //       import('../pages/components/education/education').then(
// //         (m) => m.Education
// //       ),
// //   },
// //   {
// //     path: 'contact',
// //     loadComponent: () =>
// //       import('../pages/components/contact/contact').then(
// //         (m) => m.Contact
// //       ),
// //   },
// // ];
// import { Routes } from '@angular/router';
// import { AppComponent } from './app.Component';

// export const router: Routes = [
//   {
//     path: '',
//     loadComponent: () =>
//       import('../pages/components/hero-section/hero-section').then(
//         (m) => m.HeroSection
//       ),
//   },
//   {
//     path: 'about',
//     loadComponent: () =>
//       import('../pages/components/about-me/about-me').then(
//         (m) => m.AboutMe
//       ),
//   },
//   {
//     path: 'skills',
//     loadComponent: () =>
//       import('../pages/components/skills/skills').then(
//         (m) => m.Skills
//       ),
//   },
//   {
//     path: 'projects',
//     loadComponent: () =>
//       import('../pages/components/projects/projects').then(
//         (m) => m.Projects
//       ),
//   },
//   {
//     path: 'experience',
//     loadComponent: () =>
//       import('../pages/components/experience/experience').then(
//         (m) => m.Experience
//       ),
//   },
//   {
//     path: 'education',
//     loadComponent: () =>
//       import('../pages/components/education/education').then(
//         (m) => m.Education
//       ),
//   },
//   {
//     path: 'contact',
//     loadComponent: () =>
//       import('../pages/components/contact/contact').then(
//         (m) => m.Contact
//       ),
//   },
// ];
//  export const routes: Routes = [
//   { path: '', component: AppComponent }
// ];
// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { environment } from '../environments/environment';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     importProvidersFrom(
//       provideFirebaseApp(() => initializeApp(environment.firebase)),
//       provideFirestore(() => getFirestore()),
//       provideAuth(() => getAuth())
//     )
//   ]
// };
// export { routes };
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
};


export { routes };
// export { routes };

