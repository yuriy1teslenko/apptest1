import * as angular from "angular";
import "angular-resource";
import "angular-ui-grid";

import {ApplicationComponent} from "./application-component";
import {AppResource} from "./application-resource";
import "./search-results/index";
import "./shared/search/index";
import "./shared/results-table/index";
import "./shared/chart-table/index";
import "./userlist/index";
import "./albums/index";
import "./posts/index";

angular.module("app.application", [
  "ui.grid",
  "ngResource",
  "app.search.results",
  "app.search",
  "app.results-table",
  "app.chart-table",
  "app.application.userlist",
  "app.application.albums",
  "app.application.posts"
])
  .component("adminApplication", new ApplicationComponent)
  .service("app.resource", AppResource);
