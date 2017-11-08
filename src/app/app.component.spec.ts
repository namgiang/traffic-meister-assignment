import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import { TrafficDataService } from './home-page/traffic-data.service';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomePageComponent
      ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatGridListModule,
        MatSnackBarModule
      ],
      providers: [
        TrafficDataService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
