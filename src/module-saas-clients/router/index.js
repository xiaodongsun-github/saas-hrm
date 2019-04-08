/*
 * @Author: itcast 
 * @Description: xxx业务模块 
 * @Date: 2018-04-13 16:13:27 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-09-03 11:12:47
 */

import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/saas-clients',
    component: Layout,
    redirect: 'noredirect',
    name: 'saas-clients',
    meta: {
      title: 'SAAS企业',
      icon: 'component'
    },
    children: [
      {
        path: 'index',
        component: _import('saas-clients/pages/index'),
        name: 'saas-clients-index',
        meta: {title: 'SAAS企业列表', icon: 'component', noCache: true}
      },
      {
        path: 'details/:id',
        component: _import('saas-clients/pages/detail'),
        name: 'saas-clients-detail',
        meta: {title: 'SAAS企业详情', icon: 'component', noCache: true}
      }
    ]
  }
]