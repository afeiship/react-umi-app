// 这里是全局的数据，所有组件和page都能获取到

import * as services from '@/services/user';

export default {
  namespace: 'index',
  state: {},
  subscriptions: {
    setup({ dispatch }) {
      console.log('index setup!');
    },
  },
};
