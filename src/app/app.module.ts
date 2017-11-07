import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TrafficDataService } from './home-page/traffic-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TrafficDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
