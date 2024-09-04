import { Model, Types } from 'mongoose';

// Guardian Type
export type TGuardian  = {
  fatherName: string;
  fatherEmail: string;
  fatherPhone: string;
  motherName: string;
  motherPhone: string;
  motherEmail: string;
  localGuardianName: string;
  localGuardianEmail: string;
  localGuardianPhone: string;
}

// Student Interface
export interface TStudent {
  name: string;
  user: Types.ObjectId;
  email: string;
  guardian: TGuardian;
  areaOfInterest: string[];
  phone: string;
  phoneCountryCode: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  profileImg: string;
  zip: string;
  institution: Types.ObjectId;
  class: string;
  courses: {
      course: string;
      batch: string;
      receipt: string;
  }[];
  devices: string[];
  executionMentors: string[];
  isDeleted: boolean;
}



//for creating static
export interface StudentModel extends Model<TStudent> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<TStudent | null>;
}
