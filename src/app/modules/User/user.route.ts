/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { createStudentValidationSchema } from '../Student/student.validation';
import { USER_ROLE } from './user.constant';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

router.get(
  '/me',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.institute,
    USER_ROLE.student,
  ),
  UserControllers.getMe,
);

export const UserRoutes = router;
