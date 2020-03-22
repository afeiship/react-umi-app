import * as umi from 'umi';

export default () => {
  const store = umi.useStore();
  const app = umi.getDvaApp();
  nx.ReactUmi.bootstrap(app, { $store: store, key: 'rua' });
  return null;
};
