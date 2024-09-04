import { Model, Types } from 'mongoose';

export type TAdmin = {
  user: Types.ObjectId;
  email: string;
  name: string;
  phone: string;
  phoneCountryCode: string;
  profileImg?: string;
  isDeleted: boolean;
};

export interface AdminModel extends Model<TAdmin> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(user: string | null): Promise<TAdmin | null>;
}
