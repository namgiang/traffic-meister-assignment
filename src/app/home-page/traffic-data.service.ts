import { Injectable } from '@angular/core';
import { trafficMeister } from '../../assets/traffic-meister';
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

  getFetchDataObservable(): Observable<{}> {
    return Observable.bindNodeCallback(trafficMeister.fetchData)();
  }

  fetchBrands(color: string, type: string): Observable<string[]> {
    return this.getFetchDataObservable().map((data) => {
      if (typeof data === 'string') throw {data};
      let list = Array.prototype.slice.call(data, null);
      if (color) {
        list = list.filter(item => item.colors.includes(color));
      }
      if (type) {
        list = list.filter(item => item.type === type);
      }
      return list.map(item => item.brand);
    });
  }

  fetchTypes(brand: string, color: string): Observable<{}[]> {
    return this.getFetchDataObservable().map((data) => {
      if (typeof data === 'string') throw {data};
      let list = Array.prototype.slice.call(data, null);
      if (color) {
        list = list.filter(item => item.colors.includes(color));
      }
      if (brand) {
        list = list.filter(item => item.brand === brand);
      }
      let types = new Set(list.map(item => item.type));
      return Array.from(types);
    })
  }

  fetchColors(): string[] {
    return ['black', 'blue', 'brown', 'green', 'grey', 'red', 'white', 'yellow'];
  }

  fetchFilteredColors(brand: string, type: string): Observable<{}[]> {
    return this.getFetchDataObservable().map((data) => {
      if (typeof data === 'string') throw {data};
      let list = Array.prototype.slice.call(data, null);
      if (brand) {
        list = list.filter(item => item.brand === brand);
      }
      if (type) {
        list = list.filter(item => item.type === type);
      }
      let colors = list.reduce((arr, item) => arr.concat(...item.colors), []);
      return Array.from(new Set(colors));
    });
  }

}
