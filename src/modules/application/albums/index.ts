import * as angular from "angular";

import {AlbumsComponent} from "./albums-component";
angular.module("app.application.albums", [])
    .component("albums", new AlbumsComponent());
