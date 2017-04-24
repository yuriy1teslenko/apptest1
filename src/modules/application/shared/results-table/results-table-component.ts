class ResultsTableController {
  private static $inject: Array<string> = [
    "$state"
  ];

  public sectionData: any;
  public sectionDefs: any;
  public gridOptions: any;
  public tableName: any;
  public showTable: any;

  constructor(private $state: any) {
  }

  public $onInit(): void {
    this.tableName = this.sectionDefs.tableName;
    this.showTable = false;
    this.gridOptions = this.getGridOptions(this.sectionDefs, this);
  }

  public $onChanges(): void {
    if (!this.gridOptions) {
      this.gridOptions = {};
    }
    if (this.sectionData.length) {
      this.gridOptions.data = this.sectionData;
      this.showTable = true;
    }
  }

  public doRedirect(userId: string, column: string): void {
    this.$state.go(column, {id: userId});
    return;
  }

  public getGridOptions(data: any, ctrl: any): any  {
    return {
      appScopeProvider: ctrl,
      enableRowHeaderSelection: false,
      //rowHeight: 46,
      enableRowSelection: false,
      enableColumnResizing: true,
      enableHorizontalScrollbar: 0,
      enableColumnMenus: false,
      enableSorting: true,
      columnDefs: this.setColumnDefs(data)
    };
  }

  private setColumnDefs(tableColumns: any): any {
    return tableColumns.columns.map((key: string) => {
      let cellObj: any = {
        name: key,
        displayName: key,
        sortDirectionCycle: ["asc", "desc"]
      };
      if (tableColumns.links && tableColumns.links.indexOf(key) !== -1) {
        cellObj.cellTemplate = require("./table-templates/aCellTemplate.html");
      }
      if (tableColumns.main && tableColumns.main === key) {
        cellObj.sort =  {
          direction: "asc",
          priority: 0
        };
      }
      return cellObj;
    });
  }
}

export class ResultsTableComponent {
  public bindings: any = {
    sectionDefs: "<",
    sectionData: "<?"
  };
  public template: string = require("./results-table-template.html");
  public controller: any = ResultsTableController;
}