class AlbumsController {
  private static $inject: Array<string> = [
    "app.resource",
    "$stateParams",
    "$q"
  ];

  public displayData: any;
  public displayDefs: any;
  public stateId: any;

  constructor(private AppResource: any,
              private $stateParams: any,
              private $q: any) {
  }

  public $onInit(): void {
    this.stateId = this.$stateParams.id;
    this.setDisplayDefs();
    this.getData();
  }

  public setDisplayDefs(): void {
    this.displayDefs = {
      tableName: "Albums of the user",
      columns: ["title", "photos"],
      series: ["photos"],
      main: "title",
      graphTitle: "Photos per Album"
    };
  }

  public getData(): void {
    this.$q.all([
      this.AppResource.entities("albums", `?userId=${this.stateId}`).query().$promise,
      this.AppResource.entities("photos").query().$promise
    ]).then(
      (response) => {
        this.displayData = this.parseData(response);
      });
  }

  public parseData (data: any): any {
    return data[0].map((element) => {
      let photos: number = data[1].filter((i) => i.albumId === element.id).length;
      return {
        id: element.id,
        title: element.title,
        photos: photos
      };
    });
  }
}

export class AlbumsComponent implements ng.IComponentOptions {
  public bindings: any = {};
  public template: string = require("./albums-template.html");
  public controller: any = AlbumsController;
}