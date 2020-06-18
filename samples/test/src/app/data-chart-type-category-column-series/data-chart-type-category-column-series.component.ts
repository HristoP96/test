import { Component } from "@angular/core";

@Component({
  selector: "app-data-chart-type-category-column-series",
  templateUrl: "./data-chart-type-category-column-series.component.html",
  styleUrls: ["./data-chart-type-category-column-series.component.scss"]
})
export class DataChartTypeCategoryColumnSeriesComponent {

    public data = [

        {Year: "1996", USA: 148, CHN: 110, RUS: 95},
        {Year: "2000", USA: 142, CHN: 115, RUS: 91}
    ];

    constructor() { }
}
