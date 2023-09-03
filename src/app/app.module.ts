import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AltSidebarModule } from 'ng-alt-sidebar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AltSidebarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
