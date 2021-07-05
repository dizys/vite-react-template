import {makeObservable, observable} from 'mobx';

export class CountService {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
    });
  }
}
