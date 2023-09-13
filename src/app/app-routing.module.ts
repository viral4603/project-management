import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/components/master/master.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {
    path: '1rivet',
    component: MasterComponent,
    data: { id: '1', name: "1rivet" },
    children: [
      {
        path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '1rivet',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
