import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChartsModule } from '../charts/charts.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, ChartsModule],
})
export class DashboardModule {}
