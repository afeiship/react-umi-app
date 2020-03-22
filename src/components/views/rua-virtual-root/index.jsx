import * as umi from 'umi';

export default () => {
  const store = umi.useStore();
  const app = umi.getDvaApp();
  const $ = inPath => {
    const models = nx.list2map(app._models, {
      key: 'namespace',
      value: (index, value) => {
        return value.state;
      },
    });
    return nx.get(models, inPath);
  };
  nx.ReactUmi.bootstrap(app, { $store: store, $, key: 'rua' });
  return null;
};
