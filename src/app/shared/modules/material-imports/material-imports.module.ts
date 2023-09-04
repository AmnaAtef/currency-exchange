import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

const MATERIAL_IMPORTS = [
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatSnackBarModule,
  MatIconModule,
  MatNativeDateModule, 
  MatRippleModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL_IMPORTS
  ],
  exports: [
    ...MATERIAL_IMPORTS
  ]
})
export class MaterialImportsModule { }
