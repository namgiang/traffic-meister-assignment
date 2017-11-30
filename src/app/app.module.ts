import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TrafficDataService } from './home-page/traffic-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatGridListModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [TrafficDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
