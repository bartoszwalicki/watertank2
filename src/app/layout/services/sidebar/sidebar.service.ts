import { Injectable } from '@angular/core';

import { SidebarItemModel } from '../../models/sidebar-item/sidebar-item.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public getSidebarItems(): Array<SidebarItemModel> {
    return [
      { cssIconClass: 'water-icon', label: 'Measurements', target: '' },
      { cssIconClass: 'chart-icon', label: 'Charts', target: '' },
      { cssIconClass: 'note-icon', label: 'Notes', target: '' },
    ];
  }
}
