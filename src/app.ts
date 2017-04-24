import * as angular from "angular";
import "./modules/application/index";
import "angular-ui-router";
import "highcharts-ng";

// load our default (non specific) css
//import "highcharts-ng/highcharts-ng.css";
import "angular-ui-grid/ui-grid.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";

angular.module("app", [
  "highcharts-ng",
  "ui.router",
  "app.application"
])
  .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", ($stateProvider, $locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state({
        name: "app",
        redirectTo: "userlist",
        url: "/"
      })
      .state({
        name: "userlist",
        template: "<user-list></user-list>",
        url: "/userlist"
      })
      .state({
        name: "posts",
        template: "<posts></posts>",
        url: "/posts?id"
      })
      .state({
        name: "albums",
        template: "<albums></albums>",
        url: "/albums?id"
      })
      .state({
        name: "search",
        template: "<search-results></search-results>",
        url: "/search?id&query"
      });
  }]);

angular.bootstrap(document, ["app"], {
  strictDi: true
});
