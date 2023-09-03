import { NgModule } from '@angular/core';
import { AltSidebar } from './alt-sidebar.component';
import { CommonModule } from '@angular/common';
import { AltSidebarContainer } from './alt-sidebar-container.component';
import { CloseAltSidebar } from './close-alt-sidebar.directive';

@NgModule({
  declarations: [AltSidebar, AltSidebarContainer, CloseAltSidebar],
  imports: [CommonModule],
  exports: [AltSidebar, AltSidebarContainer, CloseAltSidebar]
})
export class AltSidebarModule {}
