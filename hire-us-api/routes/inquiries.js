import Router from "express";
import bodyParser from "body-parser";
import {
  addInquiry,
  deleteInquiry,
  getInquiryBycompanyName,
  getInquiries,
} from "../controllers/inquiryController.js";

const router = Router();

router.get("/", (req, res) => getInquiries(req, res));

router.get("/:companyName", (req, res) => getInquiryBycompanyName(req, res));

router.post("/", (req, res) => addInquiry(req, res));

router.delete("/:id", (req, res) => deleteInquiry(req, res));



export default router;
