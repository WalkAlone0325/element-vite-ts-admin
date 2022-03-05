/_ {
path: '/',
redirect: '/dashboard',
component: PageLayout,
name: 'Home',
children: [
{
path: 'dashboard',
component: () => import('@/views/dashboard/index.vue'),
meta: { title: '首页', icon: '', affix: true },
},
],
},
{
path: '/system',
component: PageLayout,
name: 'System',
meta: { title: '系统管理', icon: '' },
children: [
{
path: 'user',
name: 'User',
component: () => import('@/views/system/user/index.vue'),
meta: { title: '用户管理', icon: '' },
},
{
path: 'role',
name: 'Role',
component: () => import('@/views/system/role/index.vue'),
meta: { title: '角色管理', icon: '' },
},
{
path: 'log',
name: 'Log',
// component: () => import('@/views/system/role/index.vue'),
component: BlankLayout,
meta: { title: '日志管理', icon: '' },
children: [
{
path: 'operlog',
name: 'Operlog',
component: () => import('@/views/system/monitor/operlog/index.vue'),
meta: { title: '操作日志', icon: '' },
},
{
path: 'logininfor',
name: 'Logininfor',
component: () =>
import('@/views/system/monitor/loginfor/index.vue'),
meta: { title: '登录日志', icon: '' },
},
],
},
],
},
{
path: '/document',
component: PageLayout,
name: 'Document',
children: [
{
path: 'index',
component: () => import('@/views/document/index.vue'),
meta: { title: '文档管理', icon: '', affix: true },
},
],
}, _/
