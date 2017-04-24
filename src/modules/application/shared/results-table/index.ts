import * as angular from "angular";

import {ResultsTableComponent} from "./results-table-component";
angular.module("app.results-table", [])
  .component("resultsTable", new ResultsTableComponent());
