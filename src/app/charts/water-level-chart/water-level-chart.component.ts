import { Component } from '@angular/core';

import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-water-level-chart',
  templateUrl: './water-level-chart.component.html',
  styleUrls: ['./water-level-chart.component.scss'],
})
export class WaterLevelChartComponent {
  public title: string = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend: boolean = true;
}
