import {entrance} from 'utils/entrance';

import {createBrowserHistory, History} from 'history';
import {CountService} from 'services';

export class Entrances {
  readonly servicesReady = Promise.all([]);

  @entrance
  get history(): History {
    return createBrowserHistory();
  }

  @entrance
  get countService(): CountService {
    return new CountService();
  }
}
