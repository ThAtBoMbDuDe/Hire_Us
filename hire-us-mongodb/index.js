import { Sequelize } from "sequelize";

let db;

if(process.env.NODE_ENV !== "test") {
  db = "inquiry_db";
} else {
  db = "test_inquiry_db";
}

export const sequelize = new Sequelize(db, "root", "nology0809", {
  dialect: "mysql",
  host: "localhost",
});