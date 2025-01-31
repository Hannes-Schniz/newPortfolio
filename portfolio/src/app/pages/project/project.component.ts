import { Component } from '@angular/core';
import { PortfolioAPIService } from '../../shared/services/portfolio-api.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  projects: any = 'test';
  constructor(public projectAPI: PortfolioAPIService) {
    this.projectAPI.getAllProjects()?.subscribe((projects) => {
      this.projects = projects;
    });
    //timeout
    setTimeout(() => {
      console.log(this.projects[0]);
    }, 1000);
  }
}
