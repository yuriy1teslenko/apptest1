class SearchController {
  private static $inject: Array<string> = [
    "$state"
  ];

  public searchQuery: any;
  private userId: any;

  constructor(private $state: any) {
  }

  public $onInit(): void {
    this.searchQuery = this.$state.params.query ? this.$state.params.query : "";
  }

  public doSearch(): void {
    this.userId = this.$state.params.id;
    this.$state.go("search", {
      id: this.userId,
      query: this.searchQuery
    });
  }

}

export class SearchComponent {
  public bindings: any = {};
  public template: string = require("./search-template.html");
  public controller: any = SearchController;
}