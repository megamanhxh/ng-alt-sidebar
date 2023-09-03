import { Directive } from '@angular/core';
import { AltSidebar } from './alt-sidebar.component';

@Directive({
  selector: '[closeSidebar]',
  host: {
    '(click)': '_onClick()'
  }
})
export class CloseAltSidebar {
  constructor(private _sidebar?: AltSidebar) {}

  /** @internal */
  _onClick(): void {
    if (this._sidebar) {
      this._sidebar.close();
    }
  }
}
