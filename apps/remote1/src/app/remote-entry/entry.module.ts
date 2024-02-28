import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteEntryComponent } from './entry.component';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
// import { DxPivotGridModule } from 'devextreme-angular/ui/pivot-grid';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    DxDataGridModule,
    // DxPivotGridModule
  ],
  exports: [RemoteEntryComponent],
  providers: [],
})
export class RemoteEntryModule {
  static getEntryComponent() {
    return RemoteEntryComponent;
  }
}
