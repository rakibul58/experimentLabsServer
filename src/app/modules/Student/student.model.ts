import { Schema, model } from 'mongoose';
import { StudentModel, TGuardian, TStudent } from './student.interface';

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherEmail: { type: String, required: true },
  fatherPhone: { type: String, required: true },
  motherName: { type: String, required: true },
  motherPhone: { type: String, required: true },
  motherEmail: { type: String, required: true },
  localGuardianName: { type: String },
  localGuardianEmail: { type: String },
  localGuardianPhone: { type: String },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    name: { type: String, required: true },
    guardian: guardianSchema,
    areaOfInterest: [{ type: String }],
    phone: { type: String, required: true },
    phoneCountryCode: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    address: { type: String },
    profileImg: { type: String },
    zip: { type: String },
    institution: {
      type: Schema.Types.ObjectId,
      ref: 'Institute',
      required: true,
    },
    class: { type: String },
    courses: [
      {
        course: { type: String },
        batch: { type: String },
        receipt: { type: String },
      },
    ],
    devices: [{ type: String }],
    executionMentors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

// Query Middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

//creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ user: id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
