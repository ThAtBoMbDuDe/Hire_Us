import { Inquiry } from "../models/inquiryModel.js";

export const getInquiries = (req, res) => {
 Inquiry.find()
 .then((inquiries) => {
  res.status(200).send(inquiries)
 })
};

export const getInquiryBycompanyName = (req, res) => {
  const cName = req.params.companyName;
  Inquiry.findOne({companyName: cName})
  .then((inquiry) => {
    res.status(200).send(inquiry || `The company ${cName.toUpperCase([0])} has never inquired.`)
  })
};





export const addInquiry = (req, res) => {
  const newInquiry = new Inquiry({
    companyName: req.body.companyName, 
    fullName:req.body.fullName, 
    companyEmail: req.body.companyEmail, 
    jobTitle: req.body.jobTitle, 
    contactNum: req.body.contactNum, 
    personalEmail: req.body.personalEmail})
  newInquiry.save((err,inquiry) => {
    if(err) {
      res.send({ message: err});
    } else {
      res.status(201).json(inquiry);
    }
  })
};

export const deleteInquiry = (req, res) => {
  const id = parseInt(req.params.id);
  Inquiry.destroy({where: {id: id}})
  .then(() => {
    res.status(204).send("Deleted")
  })
};
