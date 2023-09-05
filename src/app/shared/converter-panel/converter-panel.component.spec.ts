import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/pages/home/_services/home.service';

import { ConverterPanelComponent } from './converter-panel.component';

describe('ConverterPanelComponent', () => {
  let component: ConverterPanelComponent;
  let fixture: ComponentFixture<ConverterPanelComponent>;
  let dataService: jasmine.SpyObj<DataService>; // Create a spy object for DataService

  beforeEach(() => {
    const dataServiceSpy = jasmine.createSpyObj('DataService', ['currencyRates']);
    
    TestBed.configureTestingModule({
      declarations: [ConverterPanelComponent], // Add your component to declarations
      providers: [{ provide: DataService, useValue: dataServiceSpy }] // Provide the spy object
    });
    
    fixture = TestBed.createComponent(ConverterPanelComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>; // Inject the spy object
  });

  it('should set ratesList when dataService returns success', () => {
    const mockData = {
      success: true,
      rates: {
        USD: 1.23,
        EUR: 0.89,
        GBP: 0.77,
        // Add more currency rates as needed for your test case
      }
    };

    // Set up the data service to return the mock data when currencyRates is called
    dataService.currencyRates.and.returnValue(of(mockData));

    // Call the method to test
    component.getCurrencies();

    // Use fixture.detectChanges() if the component relies on change detection

    // Assert that ratesList has been set correctly
    expect(component.ratesList).toEqual([
      { key: 'USD', value: 1.23 },
      { key: 'EUR', value: 0.89 },
      { key: 'GBP', value: 0.77 },
      // Add more expectations for other currency rates
    ]);
  });
});
