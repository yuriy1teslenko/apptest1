import * as angular from "angular";

import {PostsComponent} from "./posts-component";
angular.module("app.application.posts", [])
    .component("posts", new PostsComponent());
