import { Component } from '@angular/core';
import { PortfolioAPIService } from '../../shared/services/portfolio-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

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
