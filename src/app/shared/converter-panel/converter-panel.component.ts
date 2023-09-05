import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRatesObject } from 'src/app/pages/home/_models/home';
import { DataService } from 'src/app/pages/home/_services/home.service';

@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss']
})
export class ConverterPanelComponent {
  converterForm!: FormGroup;
  ratesList!: IRatesObject[];
  result!: string;
  conversionInfoResult!:string;
  @Input() disableFromInput!:boolean;
  @Input() showDetailsBtn!:boolean;
  // predefine as default
  fromPreSelected!:number;
  toPreSelected!:number;
  convertedCurrencies:any[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createConverterForm();
    this.getCurrencies();
    let mostConverted = JSON.parse(localStorage.getItem('convertedCurrencies')!);
    if(mostConverted?.length > 0){
      this.convertedCurrencies= JSON.parse(localStorage.getItem('convertedCurrencies')!);
    }
  }

  createConverterForm() {
    this.converterForm = this.formBuilder.group({
      amountControl: [''],
      from: [null],
      to: [null],
    });
  }

  get c() {
    return this.converterForm.controls;
  }
  ngAfterViewInit(){
    if(!this.showDetailsBtn){
      const converterData = this.dataService.getConverterData();
      this.c['amountControl'].setValue(converterData.amountControl)
      this.c['from'].setValue(converterData.from)
      this.c['to'].setValue(converterData.to)
    }
  }

  //  get Currencies to fill From and To input
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
       
      }
    });
  }

  // To replace selection value
  changeExchangeInputValues(): void {
    const temp = this.c['from'].value;
    this.c['from'].setValue(this.c['to'].value);
    this.c['to'].setValue(temp);
  }

  // To disable Convert Button if input empty
  isSubmitDisabled(): boolean {
    return (!this.c['amountControl'].value ||!this.c['from'].value ||!this.c['to'].value);
  }
  convert() {
    this.result = this.calculateExchangeRate();
    this.conversionInfoResult = this.calculateConversionInfo();
  }

  calculateExchangeRate(): string {
       // get converter Form values to calculate Exchange Rate
    let covertVal = this.converterForm.getRawValue();
    let amountVal = covertVal.amountControl;
    let fromVal = covertVal.from;
    let toVal = covertVal.to;
    
    // get selected 'TO' Option Name
    const selectedOptionName = this.ratesList.find(option => option.value == toVal);

    return ((amountVal * toVal) / fromVal).toFixed(2) + ` ${selectedOptionName?.key}`;
  }

  calculateConversionInfo(): string{
    let covertVal = this.converterForm.getRawValue();
    let fromVal = covertVal.from;
    let toVal = covertVal.to;

    // get selected Options Name
    const selectedFromOptionName = this.ratesList.find(option => option.value == fromVal);
    const selectedToOptionName = this.ratesList.find(option => option.value == toVal);

    covertVal.selectedFromOptionName = selectedFromOptionName
    covertVal.selectedToOptionName = selectedToOptionName

    
    this.convertedCurrencies.unshift(covertVal);
    if(this.convertedCurrencies?.length<10){
     localStorage.setItem('convertedCurrencies', JSON.stringify(this.convertedCurrencies));
    }else{
     this.convertedCurrencies.shift();
     localStorage.setItem('convertedCurrencies', JSON.stringify(this.convertedCurrencies));
    }

    return `1.00 ${selectedFromOptionName?.key} =` + (toVal / fromVal).toFixed(2) +` ${selectedToOptionName?.key}`
  }

  navigateToDetails(){
    const converterData = this.converterForm.getRawValue();
    converterData.selectedCurrency = this.ratesList.find(option => option.value == converterData.from)
        this.dataService.setConverterData(converterData);
 
    this.router.navigate(['/details']);
     

  }

}
