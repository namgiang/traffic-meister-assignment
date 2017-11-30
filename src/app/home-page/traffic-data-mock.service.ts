import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { TrafficDataService } from './traffic-data.service';
import { Vehicle } from './vehicle.model'

export class TrafficDataMockService implements TrafficDataService {
  getFetchDataObservable(): Observable<{}> {
    return new Observable();
  }

  fetchData(color: string, type: string): Observable<Vehicle[]> {
    let promise = Promise.resolve<any>(['Bugatti Veyron', 'Boeing 787 Dreamliner', 'USRA 0-6-6', 'Canadair North Star', 'Airbus A400M Atlas']);
    return Observable.fromPromise(promise);
  }

  fetchColors(): string[] {
    return ['black', 'blue', 'brown', 'green', 'grey', 'red', 'white', 'yellow'];
  }
}
