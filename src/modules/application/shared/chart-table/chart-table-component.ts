class ChartTableController {
  private static $inject: Array<string> = [
    "$state"
  ];

  public sectionData: any;
  public sectionDefs: any;
  public showGraph: boolean;
  public gridOptions: any;
  public chartConfig: any;

  constructor() {
  }

  public $onInit(): void {
    if (this.sectionData) {
      this.setChartConfig();
      this.showGraph = true;
    }
  }

  public $onChanges(): void {
    if (this.sectionData) {
      this.setChartConfig();
      this.showGraph = true;
    }
  }

  private setChartConfig(): void {
    let series: Array<any> = this.sectionDefs.series.map((seriesName) => {
      return {
        data: [],
        name: seriesName
      };
    });
    let categories: Array<any> = this.sectionData.map((item) => {
      series.forEach((seriesObj) => {
        seriesObj.data.push(item[seriesObj.name]);
      });
      return item[this.sectionDefs.main];
    });
    this.chartConfig = {
      chart: {
        type: "bar"
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        title: {
          text: null
        }
      },
      series: series,
      title: {
        text: this.sectionDefs.graphTitle
      }
    };
  }
}

export class ChartTableComponent {
  public bindings: any = {
    sectionDefs: "<",
    sectionData: "<?"
  };
  public template: string = require("./chart-table-template.html");
  public controller: any = ChartTableController;
}