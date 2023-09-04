import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../home/_services/home.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent {
 currencyFromName!:string
  constructor(
    private router: Router,
    private dataService: DataService){
    }

    ngOnInit(): void {
      this.currencyFromName = this.dataService.getConverterData().selectedCurrency.key;
    }

  backToHome(){
    this.router.navigate(['home'])
  }
  ngOnDestroy(){
    localStorage.clear()
  }
}
