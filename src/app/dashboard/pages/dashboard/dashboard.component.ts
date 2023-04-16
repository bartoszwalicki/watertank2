import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { WaterTankStats } from '../../../api/models/water-tank-stats/water-tank-stats.model';
import { ApiService } from '../../../api/services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public waterTankStats$: Observable<Array<WaterTankStats>>;

  constructor(private apiService: ApiService) {
    this.waterTankStats$ = this.apiService.getStats();
  }
}
