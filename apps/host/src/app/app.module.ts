import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// comment/uncomment these imports:

// import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
// import { DxPivotGridModule } from 'devextreme-angular/ui/pivot-grid';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // comment/uncomment these module imports:

    // DxDataGridModule,
    // DxPivotGridModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
