// 视图组件
const view = {
  tabs: () => import('@/layouts/tabs'),
  blank: () => import('@/layouts/BlankView'),
  page: () => import('@/layouts/PageView')
}

// 路由组件注册
const routerMap = {
  login: {
    authority: '*',
    path: '/login',
    component: () => import('@/pages/login')
  },
  root: {
    path: '/',
    name: '首页',
    redirect: '/login',
    component: view.tabs
  },
  dashboard: {
    name: 'Dashboard',
    component: view.blank
  },
  workplace: {
    name: '工作台',
    component: () => import('@/pages/dashboard/workplace')
  },
  analysis: {
    name: '分析页',
    component: () => import('@/pages/dashboard/analysis')
  },
  form: {
    name: '表单页',
    icon: 'form',
    component: view.page
  },
  basicForm: {
    path: 'basic',
    name: '基础表单',
    component: () => import('@/pages/form/basic')
  },
  stepForm: {
    path: 'step',
    name: '分步表单',
    component: () => import('@/pages/form/step')
  },
  advanceForm: {
    path: 'advance',
    name: '高级表单',
    component: () => import('@/pages/form/advance')
  },
  list: {
    name: '列表页',
    icon: 'table',
    component: view.page
  },

  
 
  
  
  components: {
    name: '小组件',
    icon: 'appstore-o',
    component: view.page
  },
  taskCard: {
    name: '任务卡片',
    component: () => import('@/pages/components/TaskCard')
  },
  palette: {
    name: '颜色复选框',
    component: () => import('@/pages/components/Palette')
  }
}
export default routerMap

