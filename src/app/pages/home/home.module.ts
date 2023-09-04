import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MostPopularCurrenciesComponent } from './most-popular-currencies/most-popular-currencies.component';


@NgModule({
  declarations: [
    HomeComponent,
    MostPopularCurrenciesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
