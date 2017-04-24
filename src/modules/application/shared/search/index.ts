import * as angular from "angular";

import {SearchComponent} from "./search-component";
angular.module("app.search", [])
  .component("searchSection", new SearchComponent());

