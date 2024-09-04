import QueryBuilder from '../../builder/QueryBuilder';
import { OrganizationSearchableFields } from './organization.constant';
import { Organization } from './organization.model';

const getAllOrganizationFromDB = async (query: Record<string, unknown>) => {
  const organizationQuery = new QueryBuilder(Organization.find(), query)
    .search(OrganizationSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await organizationQuery.modelQuery;
  const meta = await organizationQuery.countTotal();

  return {
    meta,
    result,
  };
};

export const OrganizationServices = {
  getAllOrganizationFromDB,
};
