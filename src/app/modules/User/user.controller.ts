
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserService } from "./user.service";



// Controller to handle retrieving a user profile
const findUser = catchAsync(async (req, res) => {
  if (!req.user) {
    // Handle case where req.user is undefined
    return sendResponse(res, {
      statusCode: StatusCodes.UNAUTHORIZED,
      success: false,
      message: "User not authenticated",
      data: null,
    });
  }

  try {
    const result = await UserService.findUserFromDB(req.user);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "User profile retrieved successfully",
      data: result,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      success: false,
      message: "Failed to retrieve user profile",
      data: null,
    });
  }
});

// Controller to handle updating a user profile
const updatedUser = catchAsync(async (req, res) => {
  if (!req.user) {
    // Handle case where req.user is undefined
    return sendResponse(res, {
      statusCode: StatusCodes.UNAUTHORIZED,
      success: false,
      message: "User not authenticated",
      data: null,
    });
  }

  try {
    const result = await UserService.updatedUserIntoDB(req.user, req.body);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Profile updated successfully",
      data: result,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      success: false,
      message: "Failed to update profile",
      data: null,
    });
  }
});

export const userControllers = {
 
  findUser,
  updatedUser,
};