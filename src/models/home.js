// 这里是全局的数据，所有组件和page都能获取到

import * as services from '@/services/user';

export default {
  namespace: 'home',
  state: {
    users: [],
  },

  reducers: {
    setUser(state, { data }) {
      return {
        ...state,
        users: data,
      };
    },
  },

  // 此处是一些有副作用的操作
  effects: {
    *fetchUser({ payload }, { call, put }) {
      const { data } = yield call(services.fetchUser);
      yield put({
        type: 'setUser',
        data,
      });
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      // console.log('home setup!');
      // dispatch({
      //   type: 'fetchUser',
      // });
    },
  },
};
