import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { TaskCardComponent } from '../common/task-card/task-card.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardPresentationComponent } from './dashboard-container/dashboard-presentation/dashboard-presentation.component';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectSidebarComponent } from './project-sidebar/project-sidebar.component';
import { SummaryContainerComponent } from './summary-container/summary-container.component';
import { SummaryPresentationComponent } from './summary-container/summary-presentation/summary-presentation.component';
import { TaskListContainerComponent } from './task/task-list-container/task-list-container.component';
import { TaskListPresentationComponent } from './task/task-list-container/task-list-presentation/task-list-presentation.component';
import { HighlightDragOverDirective } from '../common/directives/highlight-drag-over.directive';

@NgModule({
  declarations: [
    ProjectHomeComponent,
    ProjectSidebarComponent,
    SummaryContainerComponent,
    SummaryPresentationComponent,
    DashboardContainerComponent,
    DashboardPresentationComponent,
    TaskListContainerComponent,
    TaskListPresentationComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    CdkDrag,
    CdkDropList,
    TaskCardComponent,
    HighlightDragOverDirective
  ]
})
export class ProjectModule { }
