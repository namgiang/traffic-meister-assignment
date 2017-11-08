import { Injectable } from '@angular/core';
import * as trafficMeister from '../../assets/traffic-meister';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindNodeCallback';
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

  constructor() {}

  getFetchDataObservable(): Observable<ITrafficData[]> {
    return Observable.bindNodeCallback(trafficMeister.fetchData)();
  }

  fetchBrands(): Observable<string[]> {
    return this.getFetchDataObservable().map((data) => {
      if (typeof data === 'string') throw {data};
      return Array.prototype.map.call(data, item => item.brand);
    });
  }

  fetchTypes(): Observable<string[]> {
    return this.getFetchDataObservable().map((data) => {
      if (typeof data === 'string') throw {data};
      let types = new Set(Array.prototype.map.call(data, item => item.type));
      return Array.from(types);
    })
  }

  fetchColors(): string[] {
    return ['black', 'blue', 'brown', 'green', 'grey', 'red', 'white', 'yellow'];
  }

}
