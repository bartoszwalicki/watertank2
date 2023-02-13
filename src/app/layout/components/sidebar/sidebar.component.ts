import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SidebarItemModel } from '../../models/sidebar-item/sidebar-item.model';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public readonly sidebarItems: Array<SidebarItemModel>;

  constructor(private sidebarService: SidebarService) {
    this.sidebarItems = this.sidebarService.getSidebarItems();
  }
}
