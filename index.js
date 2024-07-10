//import { configDotenv } from "dotenv"
import mongoose from "mongoose"
import 'dotenv/config'
import  {dbName}  from "./src/constant.js"
import express from 'express'
import connectDB from "./src/db/dbConnect.js"
const app = express()


// function connectMongo() {
//    new Promise((resolve, reject) => {
//     try {
//       mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`)
//       .then(() => {
//         console.log("Connected to MongoDB");
//         app.on("error",(err) => console.log("ERROR:",err))
//         app.listen(process.env.PORT, () => {
//           console.log(`App is listening on Port ${process.env.PORT}`);
//           resolve();
//         });
//       })
//       .catch(err => {
//         console.log("Error connecting to MongoDB:", err);
//         reject(err);
//       });
//     } catch (err) {
//       console.log("ERROR:", err);
//       reject(err);
//     }
//   });
// }

connectDB()