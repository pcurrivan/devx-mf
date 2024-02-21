# Repo to Demo issues with DevExtreme DataSources and Module Federation

Requires Node 18+

Run with:
- `nx serve host --skipRemotes=remote1`
- `nx serve remote1`

The host app will be served from localhost:4200

Comment or uncomment the host app's use of grids and datasources to see how module federation (mis)handles both the host and remote apps using these classes.

related DevExtreme issue: https://supportcenter.devexpress.com/ticket/details/t1218203/problems-with-devextreme-datasource-pivotgriddatasource-and-module-federation
