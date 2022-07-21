import { Component, OnInit } from '@angular/core';
import { IIncidence } from 'src/app/data/interfaces/incidences.interfaces';
import { IncidencesService } from 'src/app/data/services/incidences.service';

@Component({
  selector: 'app-incidences',
  templateUrl: './incidences.component.html',
  styleUrls: ['./incidences.component.scss']
})
export class IncidencesComponent implements OnInit {

  numbArr: number[];
  incidences: IIncidence[] = [];

  constructor(private incidencesService: IncidencesService) {
    this.numbArr = [1, 1, 1, 1];
  }

  ngOnInit(): void {
    this.incidencesService.getIncidences().subscribe((incidences) => {
      if (incidences) {
        this.incidences = incidences;
      }
    });
  }

}
