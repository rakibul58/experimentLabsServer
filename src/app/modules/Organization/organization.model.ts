import { model, Schema } from 'mongoose';
import { IOrganization } from './organization.interface';
import { SERVICES } from './organization.constant';

const organizationSchema = new Schema<IOrganization>({
  orgName: { type: String, required: true },
  aboutOrg: { type: String, required: true },
  officialEmail: { type: String, required: true },
  orgLogo: { type: String, required: true },
  services: {
    type: [String],
    required: true,
    enum: Object.values(SERVICES), // Enforcing predefined services
  },
});

export const Organization = model<IOrganization>(
  'Organization',
  organizationSchema,
);
