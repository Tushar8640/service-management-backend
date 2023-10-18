import express from "express";
import {
  createFeedback,
  deleteFeedback,
  getAllFeedback,
  getSingleFeedback,
} from "./feedback.controller";

const router = express.Router();
//,

router.post("/", createFeedback);
router.post("/delete", deleteFeedback);

router.get("/:id", getSingleFeedback);
router.get("/", getAllFeedback);

//
export const feedbackRoutes = router;
