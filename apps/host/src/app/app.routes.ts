import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('remote1/Module').then((m) => m.RemoteEntryModule),
  },
];
