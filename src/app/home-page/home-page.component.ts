import { Component, OnInit } from '@angular/core';
import { TrafficDataService } from './traffic-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private tdService: TrafficDataService) { }

  ngOnInit() {
    this.tdService.getBrands().subscribe((data) => {
      console.log(data);
    });
  }

}
