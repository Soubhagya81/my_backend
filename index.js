//import { configDotenv } from "dotenv"
import mongoose from "mongoose"
import 'dotenv/config'
import  {dbName}  from "./src/constant.js"
import express from 'express'
import connectDB from "./src/db/dbConnect.js"
import app from "./src/app.js"


connectDB() 
.then(()=> {
        app.on("error",(err) => console.log("ERROR:",err))
        app.listen(process.env.PORT, () => {
          console.log(`App is listening on Port ${process.env.PORT}`)});
      }
    )
    .catch((err) => {
        console.error("ERROR", err)
        reject(err)
      })
