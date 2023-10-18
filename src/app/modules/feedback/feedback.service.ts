import httpStatus from "http-status";
import {ApiError} from "../../../handleErrors/ApiError";
import { Feedback } from "./feedback.model";
import { IFeedback } from "./feedback.interface";


//add cart
export const addFeedbackService = async (payload: IFeedback): Promise<IFeedback | null> => {
  const newFeedback = await Feedback.create(payload);
  if (!newFeedback) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create feedback!");
  }
  return newFeedback;
};

//get cart
export const getSingleFeedbackService = async (feedbackId: string): Promise<IFeedback | null> => {
  const feedback = await Feedback.findOne({feedbackId});
  return feedback;
};

//get all feedback by user
export const getAllfeedbackService = async (): Promise<IFeedback[]> => {
  const feedback = await Feedback.find({});
  return feedback;
};


//delete cart
export const deleteFeedbackService = async (feedbackId: string): Promise<IFeedback | null> => {
  const feedback = await Feedback.findOneAndDelete({});
  if (!feedback) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Feedback couldn't be deleted!");
  }
  return feedback;
};
