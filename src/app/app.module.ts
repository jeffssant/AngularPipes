import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';


//PrimeNg

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,      
    SharedModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
