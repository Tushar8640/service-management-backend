import httpStatus from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { IFaq } from "./faq.interface";
import { addFaqService, deleteFaqService, getAllFaqService, getSingleFaqService } from "./faq.service";

//create feedback
export const createFaq = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const faq = await addFaqService(data);
  sendResponse<IFaq>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faq created successfully!",
    data: faq,
  });
});

//get a single feedback
export const getSingleFaq = catchAsync(async (req: Request, res: Response) => {
  const { faqId } = req.body;
  const faq = await getSingleFaqService(faqId);
  sendResponse<IFaq>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faq retrieved successfully!",
    data: faq,
  });
});

//get all feedback
export const getAllFaq = catchAsync(async (req: Request, res: Response) => {
  const faq = await getAllFaqService();
  sendResponse<IFaq[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faqs retrieved successfully!",
    data: faq,
  });
});

//delete feedback
export const deleteFaq = catchAsync(async (req: Request, res: Response) => {
  const { faqId } = req.body;
  const faq = await deleteFaqService(faqId);
  sendResponse<IFaq>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faq deleted successfully!",
    data: faq,
  });
});
