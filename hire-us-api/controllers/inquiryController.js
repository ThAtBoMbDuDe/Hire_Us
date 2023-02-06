import { Inquiry } from "../models/inquiryModel.js";

export const getInquiries = (req, res) => {
 Inquiry.findAll()
 .then((students) => {
  res.status(200).send(students)
 })
};

export const getInquiryById = (req, res) => {
  const id = parseInt(req.params.id);
  Inquiry.findByPk(id)
  .then((student) => {
    res.status(200).send(student || `Inquiry with id: ${id} not found!`)
  })
};

export const addInquiry = (req, res) => {
  Inquiry.create({name: req.body.name, email: req.body.email})
  .then(() => {
    res.status(201).send({message: "Created"})
  })
};

export const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  Inquiry.destroy({where: {id: id}})
  .then(() => {
    res.status(204).send("Deleted")
  })
};
