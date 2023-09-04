import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/core/constants';
import { GeneralResponse } from 'src/app/core/models/general-response';
import { ApiService } from 'src/app/core/services/api.service';
import { IconverterData, IRates } from '../_models/home';

@Injectable({
  providedIn: 'root',
})
export class DataService extends ApiService {
  converterData!: IconverterData;

  constructor(http: HttpClient) {
    super(http);
  }

  currencyRates() {
    return this.getByModel<GeneralResponse<IRates>>(`${Constants.BASE_URL}`);
  }

  mostPopularCurrencies(fromCurrency: string, toCurrency: string, amount:number) {
    return this.getByModel<GeneralResponse<IRates>>(
      `${Constants.BASE_URL}?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
    );
  }

  setConverterData(data: any) {
    localStorage.setItem('currencyData', JSON.stringify(data));
    // this.converterData = data;
  }

  getConverterData() {
    const storedData = JSON.parse(localStorage.getItem('currencyData')!);
    // if (storedData) {
    //   this.converterData = JSON.parse(storedData);
    // }
    return storedData;
  }
}
