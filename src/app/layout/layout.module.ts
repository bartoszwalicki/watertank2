import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutWithSidebarComponent } from './components/layout-with-sidebar/layout-with-sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [SidebarComponent, SidebarItemComponent, LayoutWithSidebarComponent, LayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
