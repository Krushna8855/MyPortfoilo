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
  activeProject: number | null = null;

  projects = [
    {
      name: 'Offline Notes App',
      description: 'Offline-first notes app with real-time sync & conflict resolution.',
      features: ['Anonymous Login', 'Offline support', 'Firestore Sync', 'Conflict Handling'],
      technologies: ['Angular', 'Firebase', 'Node.js'],
      link: ''
    },
    {
      name: 'Smart Dustbin',
      description: 'IoT-based Smart Dustbin with food waste detection & classification.',
      features: ['Real-time Detection', 'Edible/Non-edible Classification', 'Efficient Segregation'],
      technologies: ['Python', 'OpenCV', 'IoT'],
      link: ''
    },
    {
      name: 'Billing Software',
      description: 'Invoice & Sales Management system built with Angular, Ionic & React.',
      features: ['Real-time Invoicing', 'Sales Automation', 'Responsive Design', 'Cross-platform Compatible'],
      technologies: ['Angular', 'Ionic', 'React'],
      link: ''
    },
    {
      name: 'EuroLand Dairy Management System',
      description: 'Web-based Dairy Management platform with real-time product management & order processing.',
      features: ['Dynamic Product Catalog', 'Secure Order Forms', 'Responsive UI', 'Database Integration'],
      technologies: ['HTML5', 'CSS3', 'Java', 'MySQL'],
      link: ''
    },
    {
      name: 'Smart Expense Tracker',
      description: 'Full-stack Personal Finance Manager using MERN Stack with JWT Authentication.',
      features: ['Add/Delete Transactions', 'Real-time Balance Summary', 'Expense Analytics with Charts'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: ''
    },
    {
      name: 'Smart Calculator - Java Swing',
      description: 'Desktop-based Calculator application with OOP principles & error handling.',
      features: ['Basic Arithmetic', 'Decimal Precision', 'Error Handling', 'Clean UI'],
      technologies: ['Java'],
      link: ''
    }
  ];
formatIcon(tech: string): string {
  switch (tech.toLowerCase()) {
    case 'html5': return 'html5';
    case 'css3': return 'css3';
    case 'node.js': return 'nodejs';
    case 'express': return 'express';
    case 'firebase': return 'firebase';
    case 'react': return 'react';
    case 'angular': return 'angular';
    case 'ionic': return 'ionic';
    case 'java': return 'java';
    case 'mysql': return 'mysql';
    case 'mongodb': return 'mongodb';
    case 'python': return 'python';
    case 'opencv': return 'opencv';
    case 'iot': return 'arduino'; // Example icon for IoT
    default: return tech.toLowerCase();
  }
}

  toggleProject(index: number) {
    this.activeProject = this.activeProject === index ? null : index;
  }
}
