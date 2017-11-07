import { Injectable } from '@angular/core';
import * as trafficMeister from '../../assets/traffic-meister';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindNodeCallback';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

interface ITrafficData {
    id: number,
    type: string,
    brand: string,
    colors: string[],
    img: string
}

@Injectable()
export class TrafficDataService {

  constructor() {
  }

  getFetchDataObservable(): Observable<ITrafficData[]> {
    return Observable.bindNodeCallback(trafficMeister.fetchData)();
  }

  getBrands() {
    return this.getFetchDataObservable().map((data) => {
      return Array.prototype.map.call(data, item => item.brand);
    });
  }

}
