//require("dotenv").config();

import dotev from "dotenv";
import express from "express";
const app = express();
import connetDb from "./db/db.js";

dotev.config({
    path: "./.env"
});

connetDb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
.catch((err) => {
    console.error("Error connecting to the database", err);
});



});




















































/*
(async ()=> {
    try {
        await mongoose.connect(`process.env.MONGO_URL/${DB_Name}`)
        
        app.on("error",()=>{
            console.log("Error", error);
            throw error;
        })

        app.listen(process.env.PORT || 8000,()=>{
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        })

        console.log("Connected to the database successfully");

    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }
})()
*/
