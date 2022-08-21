import { SignalrService } from './../../data/services/signalr.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IIncidence } from 'src/app/data/interfaces/incidences.interfaces';
import { IncidencesService } from 'src/app/data/services/incidences.service';

@Component({
  selector: 'app-incidences',
  templateUrl: './incidences.component.html',
  styleUrls: ['./incidences.component.scss']
})
export class IncidencesComponent implements OnInit, OnDestroy {

  numbArr: number[];
  incidences: IIncidence[] = [];

  constructor(private incidencesService: IncidencesService, private signalrService: SignalrService) {
    this.numbArr = [1, 1, 1, 1];
  }

  ngOnInit(): void {

    this.signalrService.startConnection();
    this.signalrService.addTransferChartDataListener();

    this.incidencesService.getIncidences().subscribe((incidences) => {
      if (incidences) {
        this.incidences = incidences;
      }
    });
  }

  ngOnDestroy(): void {
    this.signalrService.closeConnection();
  }

}
