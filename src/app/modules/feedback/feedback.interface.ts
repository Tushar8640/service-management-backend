import {Model} from "mongoose";

export type IFeedback = {
  email: string;
  rating: number;
  comments: string;
};

export type FeedbackModel = Model<IFeedback, Record<string, unknown>>;
