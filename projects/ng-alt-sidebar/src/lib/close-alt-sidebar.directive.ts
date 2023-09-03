import { Directive, HostBinding } from '@angular/core';
import { AltSidebarComponent } from './alt-sidebar.component';

@Directive({
  selector: '[closeSidebar]'
})
export class CloseAltSidebarDirective {
  constructor(private _sidebar?: AltSidebarComponent) {}

  /** @internal */
  @HostBinding('click')
  _onClick(): void {
    if (this._sidebar) {
      this._sidebar.close();
    }
  }
}
