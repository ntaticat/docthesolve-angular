import { IIncidence } from 'src/app/data/interfaces/incidences.interfaces';
import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  backendHubUri = environment.backendHubUri;

  data?: IIncidence;
  private hubConnection!: signalR.HubConnection;

  async startConnection() {
    try {
      this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.backendHubUri)
      .build();

      await this.hubConnection.start();
      console.log('Connection started');
    }
    catch (error) {
      console.error('Error while starting connection: ' + error)
    }
  }

  addTransferChartDataListener() {
    this.hubConnection.on('receiveMessage', (data: IIncidence) => {
      this.data = data;
      console.log(data);
    });
  }

  closeConnection() {
    this.hubConnection.stop();
  }
}
