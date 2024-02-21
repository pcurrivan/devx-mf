import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RemoteEntryModule } from 'remote1/Module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RemoteEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
