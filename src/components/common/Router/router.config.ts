// import Group1NavbarRouter from 'app/groups/group1/router';
import Group10NavbarRouter from 'app/groups/group10/router';
import Group11NavbarRouter from 'app/groups/group11/router';
import Group12NavbarRouter from 'app/groups/group12/router';
import Group13NavbarRouter from 'app/groups/group13/router';
import Group14NavbarRouter from 'app/groups/group14/router';
import Group2NavbarRouter from 'app/groups/group2/router';
import Group3NavbarRouter from 'app/groups/group3/router';
import Group4NavbarRouter from 'app/groups/group4/router';
import Group5NavbarRouter from 'app/groups/group5/router';
import Group6NavbarRouter from 'app/groups/group6/router';
import Group7NavbarRouter from 'app/groups/group7/router';
import Group8NavbarRouter from 'app/groups/group8/router';
import Group9NavbarRouter from 'app/groups/group9/router';
import Group1NavbarRouter from 'app/groups/group1/router'
import LoadableComponent from '../Loadable/index';
// import
//Maybe dashboard
export interface IRouter {
  path: string,
  exact: boolean,
  name: string,
  permissions: string[],
  isAny: boolean,
  title: string,
  component: any,
  showInNavbar: string,
  hideWithoutPermission: boolean
}

export const userRouter: any = [
  {
    path: '/user',
    name: 'user',
    title: 'User',
    component: LoadableComponent(() => import('../Layout/AppLayout')),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: '/login',
    name: 'login',
    title: 'LogIn',
    component: LoadableComponent(() => import('app/shared/scenes/Login')),
    showInMenu: false,
  },
  {
    path: '/register',
    name: 'register',
    title: 'Đăng ký',
    component: LoadableComponent(() => import('app/shared/scenes/Register')),
    showInMenu: false,
  },
  {
    path: '/forget',
    name: 'forget',
    title: 'Quên mật khẩu',
    component: LoadableComponent(() => import('app/shared/scenes/ForgetPassword')),
    showInMenu: false,
  },
];

export const navRouters: Array<IRouter> =
// Group13NavbarRouter
Group13NavbarRouter
    .concat(Group2NavbarRouter)
    .concat(Group3NavbarRouter)
    .concat(Group4NavbarRouter)
    .concat(Group5NavbarRouter)
    .concat(Group6NavbarRouter)
    .concat(Group7NavbarRouter)
    .concat(Group8NavbarRouter)
    .concat(Group9NavbarRouter)
    .concat(Group10NavbarRouter)
    .concat(Group11NavbarRouter)
    .concat(Group12NavbarRouter)
    .concat(Group13NavbarRouter)
    .concat(Group14NavbarRouter)
    .concat(Group1NavbarRouter)


export const managementRouters: any = [
  {
    path: '/',
    exact: true,
    name: 'home',
    permissions: [],
    isAny: true,
    title: 'Home',
    icon: 'home',
    component: LoadableComponent(() => import('../Layout/AppLayout')),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: '/admin',
    name: 'admin',
    permissions: [],
    isAny: true,
    title: 'Dashboard',
    icon: 'home',
    showInMenu: true,
    component: LoadableComponent(() => import('../Layout/ManagementLayout')),

  },
  {
    path: '/admin/users',
    permissions: ['Pages.Users'],
    title: 'Users',
    name: 'user',
    icon: 'user',
    showInMenu: true,
    component: LoadableComponent(() => import('app/shared/scenes/Users'))
  },
  {
    path: '/admin/roles',
    permissions: ['Pages.Roles'],
    title: 'Roles',
    name: 'role',
    icon: 'tags',
    showInMenu: true,
    component: LoadableComponent(() => import('app/shared/scenes/Roles')),
  },
  {
    path: '/admin/tenants',
    permissions: ['Pages.Tenants'],
    title: 'Tenants',
    name: 'tenant',
    icon: 'appstore',
    showInMenu: true,
    component: LoadableComponent(() => import('app/shared/scenes/Tenants')),
  },
  {
    path: '/admin/about',
    permissions: [],
    isAny: true,
    title: 'About',
    name: 'about',
    icon: 'info-circle',
    showInMenu: true,
    component: LoadableComponent(() => import('app/shared/scenes/About')),
  },
  {
    path: '/logout',
    permissions: [],
    isAny: true,
    title: 'Logout',
    name: 'logout',
    icon: 'info-circle',
    showInMenu: false,
    component: LoadableComponent(() => import('../Logout')),
  },
  {
    path: '/exception?:type',
    permissions: [],
    isAny: true,
    title: 'exception',
    name: 'exception',
    icon: 'info-circle',
    showInMenu: false,
    component: LoadableComponent(() => import('app/shared/scenes/Exception')),
  },
];

export const routers = [...userRouter, ...managementRouters, ...navRouters];
