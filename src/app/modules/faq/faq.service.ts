import httpStatus from "http-status";
import {ApiError} from "../../../handleErrors/ApiError";
import { Faq } from "./faq.model";
import { IFaq } from "./faq.interface";


//add cart
export const addFaqService = async (payload: IFaq): Promise<IFaq | null> => {
  const newFaq = await Faq.create(payload);
  if (!newFaq) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create newFaq!");
  }
  return newFaq;
};

//get cart
export const getSingleFaqService = async (faqId: string): Promise<IFaq | null> => {
  const faq = await Faq.findOne({faqId});
  return faq;
};

//get all feedback by user
export const getAllFaqService = async (): Promise<IFaq[]> => {
  const faq = await Faq.find({});
  return faq;
};


//delete cart
export const deleteFaqService = async (feedbackId: string): Promise<IFaq | null> => {
  const faq = await Faq.findOneAndDelete({});
  if (!faq) {
    throw new ApiError(httpStatus.BAD_REQUEST, "faq couldn't be deleted!");
  }
  return faq;
};
