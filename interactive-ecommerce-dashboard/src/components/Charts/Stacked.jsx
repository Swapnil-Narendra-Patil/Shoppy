import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  stackingColumnseires,
  Tooltip,
  StackingColumnSeries,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

const Stacked = ({width , height }) => {
  return(
    <ChartComponent
     widht = {width}
     height = {height}
     id = "stack chart"
     primaryXAxis = {stackedPrimaryXAxis}
     primaryYAxis = {stackedPrimaryYAxis}>
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
    </ChartComponent>
  )
};

export default Stacked;
