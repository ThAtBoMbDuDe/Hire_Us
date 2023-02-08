import { Inquiry } from "../models/inquiryModel.js";

export const getInquiries = (req, res) => {
 Inquiry.findAll()
 .then((inquiries) => {
  res.status(200).send(inquiries)
 })
};

export const getInquiryById = (req, res) => {
  const id = parseInt(req.params.id);
  Inquiry.findByPk(id)
  .then((inquiry) => {
    res.status(200).send(inquiry || `Inquiry with id: ${id} not found!`)
  })
};

export const addInquiry = (req, res) => {
  Inquiry.create({name: req.body.name, email: req.body.email})
  .then(() => {
    res.status(201).send({message: "Created"})
  })
};

export const deleteInquiry = (req, res) => {
  const id = parseInt(req.params.id);
  Inquiry.destroy({where: {id: id}})
  .then(() => {
    res.status(204).send("Deleted")
  })
};
