import { Schema, model } from "mongoose";
import { FeedbackModel, IFeedback } from "./feedback.interface";

const FeedbackSchema = new Schema<IFeedback, FeedbackModel>(
  {
    email: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
//create model
export const Feedback = model<IFeedback, FeedbackModel>("Feedback", FeedbackSchema);
