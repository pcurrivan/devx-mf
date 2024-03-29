import { Component } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

@Component({
  selector: 'devx-mf-remote1-entry',
  template: `
    <div>
      <dx-data-grid
        [dataSource]="dataSource"
      ></dx-data-grid>
    </div>    
    <!-- <div>
      <dx-pivot-grid
        [dataSource]="pivotGridDataSource"
      ></dx-pivot-grid>
    </div> -->
  `,
})

export class RemoteEntryComponent {
  dataSource = new DataSource({
    store: new ArrayStore({
      data: [
        { foo: 'foo1', bar: 'bar1' },
        { foo: 'foo2', bar: 'bar2' },
      ]
    })
  });

  // pivotGridDataSource = new PivotGridDataSource({
  //   store: new ArrayStore({
  //     data: [
  //       { foo: 'foo1', bar: 'bar1', val: 42 },
  //       { foo: 'foo2', bar: 'bar2', val: 77 },
  //     ]
  //   }),
  //   fields: [
  //     {
  //       dataField: 'foo',
  //       area: 'row'
  //     },
  //     {
  //       dataField: 'bar',
  //       area: 'column'
  //     },
  //     {
  //       dataField: 'val',
  //       area: 'data',
  //       dataType: 'number',
  //       summaryType: 'sum',
  //     }
  //   ]
  // })
}
