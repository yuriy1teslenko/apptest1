class UserlistController {
  private static $inject: Array<string> = [
    "app.resource",
    "app.application.userlist.service",
    "$state",
    "$q"
  ];

  public displayData: any;
  public displayDefs: any;

  constructor(private AppResource: any,
              private UserlistService: any,
              private $state: any,
              private $q: any) {
  }

  public $onInit(): void {
    this.setDisplayDefs();
    this.getData();
  }

  public setDisplayDefs(): void {
    this.displayDefs = {
      tableName: "Users",
      columns: ["username", "name", "albums", "posts"],
      links: ["albums", "posts"],
      series: ["albums", "posts", "sum"],
      main: "username",
      graphTitle: "Posts and Albums per User"
    };
  }

  public getData(): void {
    this.$q.all([
      this.AppResource.entities("users").query().$promise,
      this.AppResource.entities("albums").query().$promise,
      this.AppResource.entities("posts").query().$promise
    ]).then(
      (response) => {
        this.displayData = this.UserlistService.parseData(response);
      });
  }
}

export class UserlistComponent implements ng.IComponentOptions {
  public bindings: any = {};

  public template: string = require("./userlist-template.html");
  public controller: any = UserlistController;
}