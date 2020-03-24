import { defineConfig } from 'umi';
import { join } from 'path';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/home' },
    { path: '/about', component: '@/pages/about' },
    { path: '/user', component: '@/pages/user' },
  ],
  chainWebpack: (memo, { env, webpack, createCSSRule }) => {
    // 设置 alias
    memo.resolve.alias.set('images', join(__dirname, 'src/assets/images'));
    memo.resolve.alias.set('views', join(__dirname, 'src/components/views'));
  },
  dynamicImport: {
    loading: '@/components/views/rua-loading',
  },
  sass: {
    implementation: require('node-sass'),
  },
  plugins: [`./plugins/plugin-nxi`],
  nxi: 'nxi',
});
