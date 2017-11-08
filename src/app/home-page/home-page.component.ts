import { Component, OnInit } from '@angular/core';
import { TrafficDataService } from './traffic-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  brands: string[];
  types: string[];
  colors: string[];
  colorSelectDisabled: boolean = true;
  brandSelectDisabled: boolean = true;
  typeSelectDisabled: boolean = true;

  constructor(private tdService: TrafficDataService) { }

  ngOnInit() {
    this.getColors();
    this.getBrands();
    this.getTypes();
  }

  getBrands() {
    this.tdService.fetchBrands().subscribe(
      (data: string[]) => {
        this.brands = data;
        this.brandSelectDisabled = false;
      },
      error => this.displayError(error)
    );
  }

  getTypes() {
    this.tdService.fetchTypes().subscribe(
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

  displayError(error: string){
    console.log(error);
  }

}
