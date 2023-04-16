import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgChartsModule } from 'ng2-charts';

import { SingleStatComponent } from './single-stat/single-stat.component';
import { WaterLevelChartComponent } from './water-level-chart/water-level-chart.component';

@NgModule({
  declarations: [SingleStatComponent, WaterLevelChartComponent],
  imports: [CommonModule, NgChartsModule],
  exports: [SingleStatComponent, WaterLevelChartComponent],
})
export class ChartsModule {}
