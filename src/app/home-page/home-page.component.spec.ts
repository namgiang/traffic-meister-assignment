import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

import { TrafficDataService } from './traffic-data.service';
import { TrafficDataMockService } from './traffic-data-mock.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let service: TrafficDataMockService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatGridListModule,
        MatSnackBarModule
      ],
      providers: [
        { provide: TrafficDataService, useClass: TrafficDataMockService },
        TrafficDataMockService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TrafficDataMockService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should disable all the dropdowns when not running with async', () => {
    let compiled = fixture.debugElement.nativeElement;
    let typeDropdown = compiled.querySelector('#type-dropdown');
    let brandDropdown = compiled.querySelector('#brand-dropdown');
    let colorDropdown = compiled.querySelector('#color-dropdown');

    expect(typeDropdown.getAttribute('ng-reflect-disabled')).toBe('true');
    expect(brandDropdown.getAttribute('ng-reflect-disabled')).toBe('true');
    expect(colorDropdown.getAttribute('ng-reflect-disabled')).toBe('true');
  });

  it('should enable all the dropdowns when finish fetching data', fakeAsync(() => {
    component.getTypes();
    component.getBrands();
    component.getColors();
    tick();
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let typeDropdown = compiled.querySelector('#type-dropdown');
    let brandDropdown = compiled.querySelector('#brand-dropdown');
    let colorDropdown = compiled.querySelector('#color-dropdown');
    expect(typeDropdown.getAttribute('ng-reflect-disabled')).toBe('false');
    expect(brandDropdown.getAttribute('ng-reflect-disabled')).toBe('false');
    expect(colorDropdown.getAttribute('ng-reflect-disabled')).toBe('false');
  }));
});
