import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { WaterTankStats } from '../../models/water-tank-stats/water-tank-stats.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getStats(): Observable<Array<WaterTankStats>> {
    return this.httpClient.get<Array<WaterTankStats>>('https://watertank-measurement.azurewebsites.net/api/stats');
  }
}
