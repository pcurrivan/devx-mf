import { Component } from '@angular/core';
// import ArrayStore from 'devextreme/data/array_store';
// import DataSource from 'devextreme/data/data_source';
// import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

@Component({
  selector: 'devx-mf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'host';

  // dataSource = new DataSource({
  //   store: new ArrayStore({
  //     data: [
  //       { foo: 'foo1', bar: 'bar1' },
  //       { foo: 'foo2', bar: 'bar2' },
  //     ]
  //   })
  // });

  // pivotGridDataSource = new PivotGridDataSource({
  //   store: new ArrayStore({
  //     data: [
  //       { foo: 'foo1', bar: 'bar1', val: 1 },
  //       { foo: 'foo2', bar: 'bar2', val: 2 },
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
  //       area: 'data'
  //     }
  //   ]
  // })
}
