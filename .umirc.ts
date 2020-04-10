import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '云音乐',
  routes: [
    {
      path: '/',
      exact: true,
      redirect: '/discover/push',
    },
    { 
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/discover',
          component: '@/pages/discover/index',
          routes: [
            {
              path: '/discover/push',
              component: '@/pages/discover/push',
              title: '推荐'
            },
            {
              path: '/discover/toplist',
              component: '@/pages/discover/toplist',
              title: '排行榜'
            },
            {
              path: '/discover/playlist',
              component: '@/pages/discover/playlist',
              title: '歌单'
            },
            {
              path: '/discover/djradio',
              component: '@/pages/discover/djradio',
              title: '主播电台'
            },
            {
              path: '/discover/artist',
              component: '@/pages/discover/artist',
              title: '歌手'
            },
            {
              path: '/discover/album',
              component: '@/pages/discover/album',
              title: '新碟上架'
            }
          ]
        },
        {
          path: '/my',
          component: '@/pages/my/index'
        }
      ]
    },
    { path: '/home',exact: true, component: '@/pages/home', name: '名称' },
  ],
});
