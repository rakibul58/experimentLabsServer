import { SERVICES } from './organization.constant';

export type TServices = keyof typeof SERVICES;

export interface IOrganization {
  orgName: string;
  aboutOrg: string;
  officialEmail: string;
  orgLogo: string;
  services: TServices[]
}
