import { inject, Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioAPIService {
  projects: Observable<any[]> | undefined;
  constructor(private firestore: AngularFirestore) {
    this.refreshProjects();
  }

  getAllProjects() {
    return this.projects;
  }

  async refreshProjects() {
    this.projects = this.firestore.collection('projects').valueChanges();
  }

  getProject(id: string) {
    return this.firestore.collection('projects').doc(id).valueChanges();
  }
}
