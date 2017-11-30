import { Component, OnInit } from '@angular/core';
import { TrafficDataService } from './traffic-data.service';
import { MatSnackBar } from '@angular/material';

import { Vehicle } from './vehicle.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  brands: string[];
  types: string[];
  colors: string[];
  selectedType: string;
  selectedBrand: string;
  selectedColor: string;
  dropDownDisabled: boolean = true;
  vehicles: Vehicle[] = [];

  constructor(
    public tdService: TrafficDataService,
    public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getData();
    this.colors = this.tdService.fetchColors();
  }

  getData(brand?: string, color?: string, type?: string) {
    this.tdService.fetchData(brand, color, type).subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;

        this.brands = data.map(item => item.brand);

        let types = new Set(data.map(item => item.type));
        this.types = Array.from(types);

        if (this.colors.length !== 0) {
          let colors = data.reduce((arr, item) => arr.concat(...item.colors), []);
          this.colors =  Array.from(new Set(colors));
        }
        this.dropDownDisabled = false;
      },
      error => this.displayError(error)
    );
  }

  displayError(error: string){
    this.snackBar.open(error, 'OK', {
      duration: 6000,
    });
  }

  onFilterChange() {
    this.dropDownDisabled = true;
    this.getData(this.selectedBrand, this.selectedColor, this.selectedType);
  }

}
