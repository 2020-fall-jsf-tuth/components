import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { ServiceSelectComponent } from './service-select/service-select.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TipCalculatorComponent } from './tip-calculator/tip-calculator.component';
import { TimeComponent } from './time/time.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TjsSubtractionComponent } from './tjs-subtraction/tjs-subtraction.component';
import { SpecialRequestComponent } from './special-request/special-request.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    TipCalculatorComponent,
    TimeComponent,
    ServiceSelectComponent,
    TjsSubtractionComponent,
    SpecialRequestComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatCheckboxModule
    , MatButtonModule
    , MatSelectModule
    , MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
