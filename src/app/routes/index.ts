import { Router } from 'express';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { StudentRoutes } from '../modules/Student/student.route';
// import { UserRoutes } from '../modules/User/user.route';

const router = Router();

const moduleRoutes = [
  // {
  //   path: '/users',
  //   route: UserRoutes,
  // },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
