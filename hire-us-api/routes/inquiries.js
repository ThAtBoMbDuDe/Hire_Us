import Router from "express";
import bodyParser from "body-parser";
import {
  addInquiry,
  deleteInquiry,
  getInquiryById,
  getInquiries,
} from "../controllers/inquiryController.js";

const router = Router();

router.get("/", (req, res) => getInquiries(req, res));

router.get("/:id", (req, res) => getInquiryById(req, res));

router.post("/", (req, res) => addInquiry(req, res));

router.delete("/:id", (req, res) => deleteInquiry(req, res));



export default router;
