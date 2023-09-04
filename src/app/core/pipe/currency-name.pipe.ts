import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyName'
})
export class CurrencyNamePipe implements PipeTransform {

  private currencyMap:any = {
    ALL: 'Albanian Lek',
    USD: 'United States Dollar',
    EUR: 'Euro',
    GBP: 'British Pound Sterling',
    BYN: 'Belarus Ruble',
    BAM:  'Bosnia Mark',
    BGN: 'Bulgaria Lev',
    HRK: 'Croatia kuna',
    CZK: 'Czech Koruna',
    DKK: 'Denmark Krone',
    HUF: 'Hungary Forint',
    ISK: 'Iceland krona',
    CHF: 'Switzerland Franc',
    MDL: 'Moldova Leu',
    MKD: 'Macedonia Denar',
    AFN: 'Afghanistan Afghani',
    AOA: 'Angola Kwanza',
    AED: 'United Arab Emirates Dirham',
    AMD: 'Armenia Dram',
    ANG: 'NL Antilles Guilder',
    ARS: 'Argentina Peso',
    AUD: 'Australia Dollar',
    AWG: 'Aruba Florin',
    AZN: 'Azerbaijan New Manat',
    EGP: 'Egypt Pound'
  };

  transform(currencyAbbreviation: string): string {
    return this.currencyMap[currencyAbbreviation] || '';
  }

}
