import { Sequelize } from "sequelize";
import { sequelize } from "../../hire-us-mongodb/index.js";


export const Inquiry = sequelize.define("inquiries", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
    }, 
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 

    email: { 
        type: Sequelize.STRING,
        allowNull: false
    }
})