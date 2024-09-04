import { z } from 'zod';

// Zod Validation Schema
const userValidationSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password cannot be more than 20 characters' })
    .optional(),
  needsPasswordChange: z.boolean().optional(),
  role: z.enum(['superAdmin', 'student', 'faculty', 'admin']).optional(),
  googleId: z.string().nullable().optional(),
  passwordChangedAt: z.date().optional(),
  isDeleted: z.boolean().optional(),
  organization: z.string().nullable().optional(),
});

export const UserValidation = {
  userValidationSchema,
};
