import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  projects = [
    {
      name: 'Finance Dashboard',
      description: 'A full-stack Finance Dashboard with real-time insights, built with a standalone frontend and Firestore Database.',
      technologies: ['React', 'Node.js', 'Firestore', 'Vercel'],
      link: 'https://finance-dashboard-xi-blond.vercel.app/',
      github: 'https://github.com/Krushna8855/Finance-Dashboard'
    },
    {
      name: 'Retail Banking Processor',
      description: 'A backend-focused project for retail banking transaction processing, implementing secure API endpoints and database management.',
      technologies: ['Python', 'Django/Flask', 'SQLite/MySQL'],
      link: '',
      github: 'https://github.com/Krushna8855/retail-banking-transaction-processing'
    },
    {
      name: 'Green Grow - Smart Agriculture',
      description: 'Role-based full-stack web application with JWT authentication, real-time market rates, and weather insights for farmers.',
      technologies: ['React', 'Node.js', 'Firebase', 'JWT'],
      link: '',
      github: 'https://github.com/Krushna8855'
    },
    {
      name: 'Blog Management System',
      description: 'Hackathon project: full-stack blog platform with secure CRUD operations, user authentication, and search/category filtering.',
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
      link: '',
      github: 'https://github.com/Krushna8855'
    },
    {
      name: 'Food Ordering App',
      description: 'Android app featuring user authentication, restaurant browsing, cart management, and real-time order tracking via Firebase.',
      technologies: ['Android', 'Java', 'Firebase'],
      link: '',
      github: 'https://github.com/Krushna8855'
    },
    {
      name: 'Smart Dustbin for Waste',
      description: 'ML-based food detection and waste segregation system using Raspberry Pi, OpenCV, and image classification algorithms.',
      technologies: ['Python', 'OpenCV', 'IoT', 'Raspberry Pi'],
      link: '',
      github: 'https://github.com/Krushna8855'
    }
  ];
}
