import { Component, EnvironmentInjector, Injector, OnInit, ViewChild, ViewContainerRef, createNgModule, runInInjectionContext } from '@angular/core';
import { loadRemoteModule } from '@nx/angular/mf';

// comment/uncomment these imports:

import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
// import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

@Component({
  selector: 'devx-mf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef | undefined;

  ngOnInit(): void {
    loadRemoteModule('remote1', './Module').then(x => {
      this.anchor?.createComponent(x.RemoteEntryModule.getEntryComponent());
    })
  }
  
  // comment/uncomment this statement:

  dataSource = new DataSource({
    store: new ArrayStore({
      data: [
        { foo: 'foo1', bar: 'bar1' },
        { foo: 'foo2', bar: 'bar2' },
      ]
    })
  });



  // comment/uncomment this statement:

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
  //       area: 'data',
  //       dataType: 'number',
  //       summaryType: 'sum',
  //     }
  //   ]
  // })
}
