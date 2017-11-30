import { Injectable } from '@angular/core';
import { trafficMeister } from '../../assets/traffic-meister';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindNodeCallback';
import 'rxjs/add/operator/map';

import { Vehicle } from './vehicle.model';

interface ITrafficData {
  id: number,
  type: string,
  brand: string,
  colors: string[],
  img: string
}

@Injectable()
export class TrafficDataService {

  getFetchDataObservable(): Observable<{}> {
    return Observable.bindNodeCallback(trafficMeister.fetchData)();
  }

  fetchData(brand:string, color: string, type: string): Observable<Vehicle[]> {
    return this.getFetchDataObservable().map((data) => {
      if (typeof data === 'string') throw {data};
      let list = Array.prototype.slice.call(data, null);
      if (brand) {
        list = list.filter(item => item.brand === brand);
      }
      if (color) {
        list = list.filter(item => item.colors.includes(color));
      }
      if (type) {
        list = list.filter(item => item.type === type);
      }
      return list;
    });
  }

  fetchColors(): string[] {
    return ['black', 'blue', 'brown', 'green', 'grey', 'red', 'white', 'yellow'];
  }
}
