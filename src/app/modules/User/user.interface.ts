/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { USER_ROLE } from './user.constant';
import { IOrganization } from '../Organization/organization.interface';
import { TAdmin } from '../Admin/admin.interface';

export interface TUser {
  email: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'superAdmin' | 'admin' | 'student' | 'institute';
  googleId: string | null;
  passwordChangedAt?: Date;
  isDeleted: boolean;
  organization: Types.ObjectId | IOrganization;
}

export interface ICreateAdmin {
  user: TUser;
  admin: TAdmin;
}

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmailAndOrganization(
    email: string,
    organization: string,
  ): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
