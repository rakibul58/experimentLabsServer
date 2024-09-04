/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { OrganizationController } from './organization.controller';

const router = express.Router();

router
  .route('/')
  .get(auth(USER_ROLE.superAdmin), OrganizationController.getAllOrganization);

export const OrganizationRoutes = router;
