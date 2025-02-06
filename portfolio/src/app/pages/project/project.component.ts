import { Component } from '@angular/core';
import { PortfolioAPIService } from '../../shared/services/portfolio-api.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  project: any;
  constructor(public projectAPI: PortfolioAPIService) {
    const params = new URLSearchParams(window.location.search);
    const projectID = params.get('projectID');
    this.projectAPI.getProject(projectID!)?.subscribe((projects) => {
      this.project = projects;
    });
    //timeout
    setTimeout(() => {
      console.log(this.project[0]);
    }, 1000);
  }
}
