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
     widht = "300px"
     height = {height}
     id = "charts"
     primaryXAxis = {stackedPrimaryXAxis}
     primaryYAxis = {stackedPrimaryYAxis}
    chartArea = {{border : {width : 0}}}
    tooltip = {{enable:true}}
    LegendSettings = {{background : 'white'}}
     >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map ((item,index) => <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
};

export default Stacked;
