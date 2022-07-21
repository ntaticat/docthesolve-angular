import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidencesRoutingModule } from './incidences-routing.module';
import { IncidencesComponent } from './incidences.component';
import { IncidenceComponent } from './incidence/incidence.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IncidencesComponent,
    IncidenceComponent,
  ],
  imports: [
    CommonModule,
    IncidencesRoutingModule,
    SharedModule
  ]
})
export class IncidencesModule { }
