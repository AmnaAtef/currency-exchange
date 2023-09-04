import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportsModule } from './modules/material-imports/material-imports.module';
import { ConverterPanelComponent } from './converter-panel/converter-panel.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConverterPanelComponent,
  ],
  imports: [
    CommonModule,
    MaterialImportsModule,
    ReactiveFormsModule
  ],
  exports: [
    ConverterPanelComponent,
    MaterialImportsModule,
  ]
})
export class SharedModule { }
