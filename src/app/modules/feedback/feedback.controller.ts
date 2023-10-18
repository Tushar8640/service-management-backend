import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {Request, Response} from "express";
import { IFeedback } from "./feedback.interface";
import { addFeedbackService, deleteFeedbackService, getAllfeedbackService, getSingleFeedbackService } from "./feedback.service";


//create feedback
export const createFeedback = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const feedback = await addFeedbackService(data);
  sendResponse<IFeedback>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Feedback created successfully!",
    data: feedback,
  });
});

//get a single feedback
export const getSingleFeedback = catchAsync(async (req: Request, res: Response) => {
  const {feedbackId} = req.body;
  const feedback = await getSingleFeedbackService(feedbackId);
  sendResponse<IFeedback>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart retrieved successfully!",
    data: feedback,
  });
});


//get all feedback 
export const getAllFeedback = catchAsync(async (req: Request, res: Response) => {
  const feedback = await getAllfeedbackService();
  sendResponse<IFeedback[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Feedbacks retrieved successfully!",
    data: feedback,
  });
});


//delete feedback
export const deleteFeedback = catchAsync(async (req: Request, res: Response) => {
  const {feedbackId} = req.body;
  const feedback = await deleteFeedbackService(feedbackId);
  sendResponse<IFeedback>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Feedback deleted successfully!",
    data: feedback,
  });
});
