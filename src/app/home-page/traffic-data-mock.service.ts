import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { TrafficDataService } from './traffic-data.service';

export class TrafficDataMockService implements TrafficDataService {
  getFetchDataObservable(): Observable<{}> {
    return new Observable();
  }

  fetchBrands(color: string, type: string): Observable<string[]> {
    let promise = Promise.resolve<any>(['Bugatti Veyron', 'Boeing 787 Dreamliner', 'USRA 0-6-6', 'Canadair North Star', 'Airbus A400M Atlas']);
    return Observable.fromPromise(promise);
  }

  fetchTypes(brand: string, color: string): Observable<{}[]> {
    let promise = Promise.resolve<any>(['car', 'airplane', 'train']);
    return Observable.fromPromise(promise);
  }

  fetchColors(): string[] {
    return ['black', 'blue', 'brown', 'green', 'grey', 'red', 'white', 'yellow'];
  }

  fetchFilteredColors(brand: string, type: string): Observable<{}[]> {
    let promise = Promise.resolve<any>(['black', 'green', 'yellow']);
    return Observable.fromPromise(promise);
  }

}
