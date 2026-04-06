import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  education = [
    {
      institution: 'CDAC Sunbeam, Pune',
      degree: 'Post Graduate Diploma in Mobile Computing',
      year: 'Graduation Year: 2026',
      percentage: '63%',
      icon: 'fa-solid fa-user-graduate'
    },
    {
      institution: 'Savitribai Phule Pune University (SPPU)',
      degree: 'Bachelor of Engineering — Information Technology',
      year: 'Graduation Year: 2025',
      percentage: 'CGPA: 7.15',
      icon: 'fa-solid fa-university'
    },
    {
      institution: 'Late B.P. Patil College of Engineering',
      degree: 'Higher Secondary Certificate (HSC)',
      year: 'Graduation Year: 2021',
      percentage: '63%',
      icon: 'fa-solid fa-school'
    },
    {
      institution: 'Pimpalgaon High School',
      degree: 'Secondary School Certificate (SSC)',
      year: 'Graduation Year: 2019',
      percentage: '73%',
      icon: 'fa-solid fa-graduation-cap'
    }
  ];
}
