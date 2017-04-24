import * as angular from "angular";

import {SearchResultsComponent} from "./search-results-component";
angular.module("app.search.results", [])
  .component("searchResults", new SearchResultsComponent());

