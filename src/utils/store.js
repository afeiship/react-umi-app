import NxStore from '@feizheng/next-store';
import Singleton from '@feizheng/singleton';

class Store extends Singleton {
  constructor() {
    const store = new NxStore({ prefix: 'sawb', purify: true });
    return store;
  }
}

export default Store.getInstance();
