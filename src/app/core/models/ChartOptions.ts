import { 
    ApexAnnotations,
    ApexAxisChartSeries, 
    ApexChart, 
    ApexDataLabels,
    ApexFill, 
    ApexGrid, 
    ApexLegend, 
    ApexPlotOptions, 
    ApexResponsive,
    ApexStates,
    ApexTitleSubtitle,
    ApexTooltip,
    ApexXAxis, 
    ApexYAxis} from "ng-apexcharts";

export type ChartOptions ={
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive?: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis:ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
  annotations?:ApexAnnotations;
  states:ApexStates;
  tooltip:ApexTooltip;
  grid:ApexGrid;
  title:ApexTitleSubtitle;
  colors:string[];
}