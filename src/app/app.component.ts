// // // import { Component } from '@angular/core';
// // // import { RouterOutlet } from '@angular/router';
// // // import { Navbar } from '../pages/components/navbar/navbar';
// // // import { Footer } from '../pages/components/footer/footer';

// // // @Component({
// // //   selector: 'app-root',
// // //   standalone: true,
// // //   imports: [RouterOutlet, Navbar, Footer],
// // //   templateUrl: './app.html',
// // //   styleUrl: './app.scss',
// // // })
// // // export class App {}
// // import { Component } from '@angular/core';
// // import { Firestore, collection, addDoc } from '@angular/fire/firestore';

// // @Component({
// //   selector: 'app-root',
// //   template: `<h1>Firebase Connected</h1>
// //              <button (click)="addData()">Add Data</button>`
// // })
// // export class AppComponent {
// //   constructor(private firestore: Firestore) {}

// //   addData() {
// //     const coll = collection(this.firestore, 'demo');
// //     addDoc(coll, { name: 'Krushna', created: new Date() }).then(() => {
// //       console.log('Data Added');
// //     });
// //   }
// // }
// import { Component } from '@angular/core';
// import { Firestore, collection, addDoc } from '@angular/fire/firestore';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   template: `<h1>Firebase Connected</h1>
//              <button (click)="addData()">Add Data</button>`
// })
// export class AppComponent {
//   constructor(private firestore: Firestore) {}

//   addData() {
//     const coll = collection(this.firestore, 'demo');
//     addDoc(coll, { name: 'Krushna', created: new Date() }).then(() => {
//       console.log('Data Added');
//     });
//   }
// }
import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Firebase Connected</h1>
             <button (click)="addData()">Add Data</button>`
})
export class AppComponent {
  constructor(private firestore: Firestore) {}

  addData() {
    const coll = collection(this.firestore, 'demo');
    addDoc(coll, { name: 'Krushna', created: new Date() }).then(() => {
      console.log('Data Added');
    });
  }
}
export class AppComponent {
  title = 'Your Portfolio';
}