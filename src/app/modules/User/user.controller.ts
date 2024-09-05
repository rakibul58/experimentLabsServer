import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createStudent = catchAsync(async (req, res) => {
  // const { password, student: studentData } = req.body;

  const result = await UserServices
    .createStudentIntoDB
    // req.file,
    // password,
    // studentData,
    ();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

const createInstitute = catchAsync(async (req, res) => {
  // const { password, faculty: facultyData } = req.body;

  const result = await UserServices
    .createFacultyIntoDB
    // req.file,
    // password,
    // facultyData,
    ();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is created successfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const result = await UserServices.createAdminIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin is created successfully',
    data: result,
  });
});

const getMe = catchAsync(async (req, res) => {
  // const { userId, role } = req.user;
  // const result = await UserServices.getMe(userId, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved successfully',
    data: {},
  });
});

export const UserControllers = {
  createStudent,
  createInstitute,
  createAdmin,
  getMe,
};
