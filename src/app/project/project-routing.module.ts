import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { SummaryContainerComponent } from './summary-container/summary-container.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { TaskListContainerComponent } from './task/task-list-container/task-list-container.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectHomeComponent,
    children: [
      {
        path: 'summary',
        component: SummaryContainerComponent
      },
      {
        path: 'dashboard',
        component: DashboardContainerComponent
      },
      {
        path: 'task',
        component: TaskListContainerComponent
      },
      {
        path: '',
        redirectTo: 'summary',
        pathMatch: 'full'
      },
      {
        path: "**",
        component: PageNotFoundComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }
