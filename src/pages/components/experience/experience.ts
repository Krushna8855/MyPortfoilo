import { Component } from '@angular/core';

interface WorkItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  tasks: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section class="experience-section container" id="experience">
      <div class="section-header" data-aos="fade-up">
        <h2 class="section-title"><span>04.</span> Professional Experience</h2>
        <div class="header-line"></div>
      </div>

      <div class="inner-experience">
        <!-- Vertical Tabs -->
        <div class="job-list" data-aos="fade-right">
          @for (workElem of workList; track workElem.id) {
            <button 
              [class.active]="activeIdx === $index"
              (click)="setActive($index)">
              {{ workElem.company }}
            </button>
          }
          <div class="job-highlight" [style.transform]="'translateY(' + (activeIdx * 42) + 'px)'"></div>
        </div>

        <!-- Job Content -->
        <div class="job-content" data-aos="fade-left">
          @for (workElem of workList; track workElem.id) {
            @if (activeIdx === $index) {
              <div class="job-details">
                <h3 class="job-role">{{ workElem.role }} <span>&#64; {{ workElem.company }}</span></h3>
                <p class="job-duration">{{ workElem.duration }} | {{ workElem.location }}</p>
                <ul class="job-tasks">
                  @for (t of workElem.tasks; track t) {
                    <li>{{ t }}</li>
                  }
                </ul>
              </div>
            }
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './experience.scss',
})
export class Experience {
  activeIdx = 0;
  workList: WorkItem[] = [
    {
      id: 0,
      company: 'Sharnex',
      role: 'Android Developer Intern (React Native)',
      duration: 'Jan 2026 – Present',
      location: 'Remote — Noida, UP',
      tasks: [
        'Developing and maintaining cross-platform mobile application UI using React Native for the Sharnex platform.',
        'Integrated RESTful APIs with React Native frontend to enable dynamic and real-time data handling.',
        'Designed and implemented multiple app screens including authentication flows and dashboards.',
        'Applied performance optimization techniques and achieved reusable component architecture.'
      ]
    },
    {
      id: 1,
      company: 'Anvistar ITS',
      role: 'Java Developer Intern',
      duration: 'Dec 2024 – Feb 2025',
      location: 'Pune, India',
      tasks: [
        'Built a full-stack Dairy Shop Management System using Java Servlets and MySQL.',
        'Developed responsive UI with HTML, CSS, and JavaScript.',
        'Automated daily operational workflows, improving overall business efficiency.'
      ]
    },
    {
      id: 2,
      company: 'TANZ Journal',
      role: 'Published Researcher',
      duration: '2025',
      location: 'International Publication',
      tasks: [
        'Published research on ML-based IoT systems for waste reduction (ISSN: 1869-7720).',
        'Topics: Machine Learning, IoT, OpenCV, Raspberry Pi.',
        'Integrated image classification for food waste segregation.'
      ]
    }
  ];

  setActive(idx: number) {
    this.activeIdx = idx;
  }
}
