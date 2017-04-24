import * as angular from "angular";

import {ChartTableComponent} from "./chart-table-component";
angular.module("app.chart-table", [])
  .component("chartTable", new ChartTableComponent());

