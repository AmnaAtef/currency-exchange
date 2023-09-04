import { Component } from '@angular/core';
import { DataService } from '../_services/home.service';

@Component({
  selector: 'app-most-popular-currencies',
  templateUrl: './most-popular-currencies.component.html',
  styleUrls: ['./most-popular-currencies.component.scss'],
})
export class MostPopularCurrenciesComponent {
  result:any[]= [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
   
  }

  ngDoCheck(){
    this.result = JSON.parse(localStorage.getItem('convertedCurrencies')!);
  }

}
