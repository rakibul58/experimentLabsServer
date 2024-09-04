import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrganizationServices } from './organization.service';

const getAllOrganization = catchAsync(async (req, res) => {
  const result = await OrganizationServices.getAllOrganizationFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Organizations retrieved successfully',
    data: result,
  });
});

export const OrganizationController = {
  getAllOrganization,
};
