// // // // // import { enableProdMode, importProvidersFrom } from '@angular/core';
// // // // // import { bootstrapApplication } from '@angular/platform-browser';
// // // // // import { provideRouter } from '@angular/router';
// // // // // import { provideHttpClient } from '@angular/common/http';

// // // // // import { AppComponent } from './app/app.component'; 
// // // // // import { routes } from './app/app.routes';
// // // // // import { environment } from './environments/environment';

// // // // // import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// // // // // import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';

// // // // // if (environment.production) {
// // // // //   enableProdMode();
// // // // // }

// // // // // bootstrapApplication(AppComponent, {
// // // // //   providers: [
// // // // //     provideRouter(routes),
// // // // //     provideHttpClient(),
// // // // //     importProvidersFrom(
// // // // //       provideFirebaseApp(() => initializeApp(environment.firebase)),
// // // // //       provideAnalytics(() => getAnalytics())
// // // // //     ),
// // // // //     ScreenTrackingService,
// // // // //     UserTrackingService,
// // // // //   ],
// // // // // }).catch(err => console.error(err));
// // // // import { bootstrapApplication } from '@angular/platform-browser';
// // // // import { AppComponent } from './app/app.component';
// // // // import { appConfig } from './app/app.config';

// // // // bootstrapApplication(AppComponent, appConfig)
// // // //   .catch(err => console.error(err));
// // // import { bootstrapApplication } from '@angular/platform-browser';
// // // import { AppComponent } from './app/app.Component';
// // // import { appConfig } from './app/app.config';

// // // bootstrapApplication(AppComponent, appConfig)
// // //   .catch(err => console.error(err));
// // import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// // import { provideRouter } from '@angular/router';
// // import { routes } from './app.routes';
// // import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// // import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// // import { provideAuth, getAuth } from '@angular/fire/auth';
// // import { environment } from '../environments/environment';

// // export const appConfig: ApplicationConfig = {
// //   providers: [
// //     provideRouter(routes),
// //     importProvidersFrom(
// //       provideFirebaseApp(() => initializeApp(environment.firebase)),
// //       provideFirestore(() => getFirestore()),
// //       provideAuth(() => getAuth())
// //     )
// //   ]
// // };
// // import { bootstrapApplication } from '@angular/platform-browser';
// // import { appConfig } from './app/app.config';

// // bootstrapApplication(() =>
// //   import('./app/app.component').then(m => m.AppComponent), appConfig
// // ).catch(err => console.error(err));
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { appConfig } from './app/app.config';

// bootstrapApplication(AppComponent, appConfig)
//   .catch(err => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
