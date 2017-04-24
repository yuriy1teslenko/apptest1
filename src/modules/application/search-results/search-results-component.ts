import * as _ from "lodash";

class SearchResultsController {
  private static $inject: Array<string> = [
    "app.resource",
    "$stateParams",
    "$q"
  ];

  public albumsDefs: any;
  public postsDefs: any;
  private userId: any;
  private searchQuery: any;
  private dataTree: any;
  private displayData: any;

  constructor(private AppResource: any,
              private $stateParams: any,
              private $q: any) {
  }

  public $onInit(): void {
    this.userId = this.$stateParams.id;
    this.searchQuery = this.$stateParams.query;
    this.setDisplayDefs();
    this.getData();
  }

  public getData(): void {
    this.$q.all([
      this.AppResource.entities("albums", this.userId ? `?userId=${this.userId}` : "").query().$promise,
      this.AppResource.entities("posts", this.userId ? `?userId=${this.userId}` : "").query().$promise
    ])
      .then((data) => {
        this.dataTree = {
          albums: data[0],
          posts: data[1]
        };
        this.displayData = this.parseData(this.dataTree);
      });
  }

  public parseData(dataTree: any): any {
    return {
      albums: _.filter(dataTree.albums, (o) => {
        return o.title.includes(this.searchQuery);
      }),
      posts: _.filter(dataTree.posts, (o) => {
        return o.title.includes(this.searchQuery) || o.body.includes(this.searchQuery);
      })
    };
  }

  public setDisplayDefs(): void {
    this.albumsDefs = {
      tableName: `Appearance of ${this.searchQuery} in albums`,
      columns: this.userId ? ["title"] : ["userId", "title"]
    };
    this.postsDefs = {
      tableName: `Appearance of ${this.searchQuery} in posts`,
      columns: this.userId ? ["title", "body"] : ["userId", "title", "body"]
    };
  }

}

export class SearchResultsComponent {
  public bindings: any = {};
  public template: string = require("./search-results-template.html");
  public controller: any = SearchResultsController;
}