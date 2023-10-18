import express from "express";
import {createCart, deleteCart, getCartByUser, getSingleCart, handleQuantity} from "./feedback.controller";

const router = express.Router();
//,

router.post("/", createCart);
router.post("/delete", deleteCart);
router.post("/handleQuantity", handleQuantity);
router.get("/:id", getCartByUser);
router.get("/", getSingleCart);

//
export const feedbackRoutes = router;
