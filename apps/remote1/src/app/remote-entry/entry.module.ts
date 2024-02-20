import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteEntryComponent } from './entry.component';
import { DxDataGridModule, DxPivotGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, DxDataGridModule, DxPivotGridModule],
  providers: [],
})
export class RemoteEntryModule {}
