import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenceComponent } from './incidence/incidence.component';
import { IncidencesComponent } from './incidences.component';

const routes: Routes = [
  {
    path: '',
    component: IncidencesComponent,
  },
  {
    path: ':id',
    component: IncidenceComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidencesRoutingModule { }
