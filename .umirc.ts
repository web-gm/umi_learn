import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { 
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/',
          component: '@/pages/discover/index'
        },
        {
          path: '/my',
          component: '@/pages/my/index'
        }
      ]
    },
    { path: '/home', component: '@/pages/home', name: '名称' },
  ],
});
