import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './core/services/loader.service';
import { interceptorProviders } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    LoaderService,
    interceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
