import { Home, AdminPage } from '../pages';

const routes = [
  {
    path: '/adminPage',
    component: AdminPage,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
