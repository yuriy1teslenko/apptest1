import * as angular from "angular";

import {UserlistComponent} from "./userlist-component";
import {UserlistService} from "./userlist-service";
angular.module("app.application.userlist", [])
    .component("userList", new UserlistComponent())
    .service("app.application.userlist.service", UserlistService);
