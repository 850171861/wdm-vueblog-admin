import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'

// 路由配置
const options = {
  routes: [{
    path: '/login',
    name: '登录页',
    component: () => import('@/pages/login')
  },
 
 
  {
    path: '/',
    name: '首页',
    component: TabsView,
    redirect: '/login',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      meta: {
        icon: 'dashboard'
      },
      component: BlankView,
      children: [{
        path: 'workplace',
        name: '工作台',
        meta: {
          page: {
            closable: false
          }
        },
        component: () => import('@/pages/dashboard/workplace')
      }
      ]
    },
    {
      path: 'category',
      name: '分类管理',
      component: () => import('@/pages/category'),
      meta: {
        icon: 'form'
      }
    },
    {
      path: 'tag',
      name: '标签管理',
      component: () => import('@/pages/tag'),
      meta: {
        icon: 'form'
      }
    },
    {
      path: 'comment',
      name: '评论管理',
      component: () => import('@/pages/comment'),
      meta: {
        icon: 'form'
      }
    },
    {
      path: 'warehouse',
      name: '仓库管理',
      component: () => import('@/pages/warehouse'),
      meta: {
        icon: 'form'
      }
    },
    {
      path: 'article',
      name: '文章管理',
      component: () => import('@/pages/article'),
      meta: {
        icon: 'form'
      }
    },
    {
      path: 'errorLog',
      name: '错误收集',
      component: () => import('@/pages/errorLog'),
      meta: {
        icon: 'form'
      }
    },
    {
      name: '使用文档',
      path: 'document',
      meta: {
        icon: 'file-word',
        link: 'https://iczer.gitee.io/vue-antd-admin-docs/'
      }
    }
    ]
  }
  ]
}

export default options
