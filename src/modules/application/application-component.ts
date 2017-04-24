class ApplicationController {
  private static $inject: Array<string> = [
    "$state"
  ];

  constructor(private $state: any) {
  }

  public $onChange(): void {
    let stateBar = this.$state;
  }

}

export class ApplicationComponent implements ng.IComponentOptions {
  public bindings: any = {};
  public template: string = require("./application-template.html");
  public controller: any = ApplicationController;
}
