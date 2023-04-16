import { Component, Input } from '@angular/core';

import { WaterTankStats } from '../../api/models/water-tank-stats/water-tank-stats.model';

@Component({
  selector: 'app-single-stat[waterTankStats]',
  templateUrl: './single-stat.component.html',
  styleUrls: ['./single-stat.component.scss'],
})
export class SingleStatComponent {
  @Input() public waterTankStats!: WaterTankStats;
}
