export default {
  // 支持值为 Object 和 Array
  'GET /api/users': {
    id: 1,
    username: 'ABC',
    avatar: '',
  },

  'GET /api/profile': {
    id: 1,
    username: 'ABC',
    avatar: '',
  },

  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};
