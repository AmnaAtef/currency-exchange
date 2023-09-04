import { Component } from '@angular/core';
import { ChartOptions } from 'src/app/core/models/ChartOptions';
import { DataService } from '../../home/_services/home.service';
import { DetailsService } from '../_services/details.service';

@Component({
  selector: 'app-historical-rates-chart',
  templateUrl: './historical-rates-chart.component.html',
  styleUrls: ['./historical-rates-chart.component.scss']
})
export class HistoricalRatesChartComponent {
  lastDaysInPastYear: string[] = [];
  ratesList!:any
  chartOptions!: ChartOptions;

  constructor(
    private detailsService: DetailsService,
    private dataService: DataService
  ){}

  ngOnInit(): void {
    this.getCurrencies()
  }

   //  get Rates
   getCurrencies() {
    this.dataService.currencyRates().subscribe((data) => {
      if (data.success == true) {
        let result = Object.keys(data.rates).map((key) => {
          return {
            key: String(key),
            value: data.rates[key],
          };
        });

        this.ratesList = result;
        this.getReportData()
      }
    });
  }

  getReportData() {
    const pastYear = new Date().getFullYear() - 1;
    this.lastDaysInPastYear = this.detailsService.getLastDayOfMonthInPastYear(pastYear);
  
    var ChartData = {
      rates: this.ratesList.map((element:any) => element.value),
      months: this.lastDaysInPastYear
    }
 
    this.getChart(ChartData)
  }

  getChart(val: any) {

    const labelColor = '#3e4757';

    this.chartOptions = { 
      series: [
        {
          name: 'Rates',
          data: [...val.rates], 
        }
      ],
      chart: {
        type: 'bar',
        height: 550,
        stacked: true,
        toolbar: {
          show: true
        },
      },
      legend: {
        show: false
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: "top",
          }
        },
      },

      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return val.toFixed(2);
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
     
      xaxis: {
        type: "datetime",
        categories: [...val.months],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
        },

      },
      title: {
        text: "Historical Rates Chart",
        align: 'center',
        style: {
          fontSize: '18px',
          color: '#3e4757',
          fontFamily: "Roboto",
        },
      },
      yaxis: {
        show: true,
        showAlways: true,
        showForNullSeries: true,
        min: 0,
        max: 1000,
        tickAmount: 10,
        opposite: false,
        axisBorder: {
          show: true,
        },
        labels: {
          show: true,
          formatter: (value: number) => {
            return value.toFixed(0)
          },
        },

      },
      annotations: {
        yaxis: [
          {
            borderColor: '#f29200',
            label: {
              borderColor: '#fff',
              position: 'right',
              style: {
                color: '#f29200',
                background: '#fff'
              },
            }
          }
        ]
      },

      fill: {
        opacity: 1,
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        hover: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: '12px',
        },
      },
      colors: ['#6076b0'],
      grid: {
        // borderColor: borderColor,
        // strokeDashArray: 4,
        row: {
          colors: ['#e5e5e5', 'transparent'],
          opacity: 0.5
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    };
  }
}
