import { NgModule } from '@angular/core';
import { AltSidebarComponent } from './alt-sidebar.component';
import { CommonModule } from '@angular/common';
import { AltSidebarContainerComponent } from './alt-sidebar-container.component';
import { CloseAltSidebarDirective } from './close-alt-sidebar.directive';

@NgModule({
  declarations: [AltSidebarComponent, AltSidebarContainerComponent, CloseAltSidebarDirective],
  imports: [CommonModule],
  exports: [AltSidebarComponent, AltSidebarContainerComponent, CloseAltSidebarDirective]
})
export class AltSidebarModule {}
