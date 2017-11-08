import { Component, OnInit } from '@angular/core';
import { TrafficDataService } from './traffic-data.service';
import { MatSnackBar } from '@angular/material';

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
  colorSelectDisabled: boolean = true;
  brandSelectDisabled: boolean = true;
  typeSelectDisabled: boolean = true;

  constructor(
    public tdService: TrafficDataService,
    public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getColors();
    this.getBrands();
    this.getTypes();
  }

  getBrands(color?: string, type?: string) {
    this.tdService.fetchBrands(color, type).subscribe(
      (data: string[]) => {
        this.brands = data;
        this.brandSelectDisabled = false;
      },
      error => this.displayError(error)
    );
  }

  getTypes(brand?: string, color?: string) {
    this.tdService.fetchTypes(brand, color).subscribe(
      (data: string[]) => {
        this.types = data;
        this.typeSelectDisabled = false;
      },
      error => this.displayError(error)
    );
  }

  getColors() {
    this.colors = this.tdService.fetchColors();
    this.colorSelectDisabled = false;
  }

  filterColors(brand: string, type: string) {
    this.tdService.fetchFilteredColors(brand, type).subscribe(
      (data: string[]) => {
      this.colors = data;
      this.colorSelectDisabled = false;
    },
    error => this.displayError(error))
  }

  displayError(error: string){
    this.snackBar.open(error, 'OK', {
      duration: 6000,
    });
  }

  onTypeChange(type) {
    this.getBrands(this.selectedColor, type);
    this.filterColors(this.selectedBrand, type);
  }

  onBrandChange(brand) {
    this.getTypes(brand, this.selectedColor);
    this.filterColors(brand, this.selectedType);
  }

  onColorChange(color) {
    this.getBrands(color, this.selectedType);
    this.getTypes(this.selectedBrand, color);
  }

}
