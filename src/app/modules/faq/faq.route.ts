import express from "express";
import { createFaq, deleteFaq, getAllFaq, getSingleFaq } from "./faq.controller";

const router = express.Router();
//,

router.post("/", createFaq);
router.post("/delete", deleteFaq);

router.get("/:id", getSingleFaq);
router.get("/", getAllFaq);

//
export const faqRoutes = router;
