import request from '@/utils/request';

export function fetchUser() {
  return request({
    method: 'GET',
    url: '/users',
  });
}
