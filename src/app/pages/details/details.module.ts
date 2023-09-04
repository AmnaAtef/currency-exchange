import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsPageComponent } from './details-page/details-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistoricalRatesChartComponent } from './historical-rates-chart/historical-rates-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CurrencyNamePipe } from 'src/app/core/pipe/currency-name.pipe';


@NgModule({
  declarations: [
    DetailsPageComponent,
    HistoricalRatesChartComponent,
    CurrencyNamePipe,
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule,
    NgApexchartsModule,
  ]
})
export class DetailsModule { }
