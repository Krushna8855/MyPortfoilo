import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  email = 'krishnaghotekar7876@gmail.com';
  phone = '8855014791';
  linkedIn = 'https://linkedin.com/in/krushna-ghotekar';
}
