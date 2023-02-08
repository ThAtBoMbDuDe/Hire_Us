import express from "express";
import router from "./routes/inquiries.js";
import bodyParser from "body-parser";
import { db } from "./models/inquiryModel.js";


const app = express();
const port = process.env.PORT || 3002;




app.use(bodyParser.json());

app.use("/api/inquiries", router);
app.get("/api", (req, res) => {
  res.send("Welcome! Your search for new employees has finally come to an end!");
});
app.get("*", (req, res) =>
  res.status(404).send("There is no content at this route.")
);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;