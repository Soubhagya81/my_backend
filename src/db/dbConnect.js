import mongoose from "mongoose";
import {dbName} from '../constant.js'
import 'dotenv/config'

function connectDB () {
  return  new Promise((resolve, reject) => {
        try {
            mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`)
            .then((connectionInstance) => { console.log(`Connected to DB : ${dbName}`); return resolve()})
            .catch(err => {
                console.error("ERROR connecting to DB:", err)
                return reject(err)
            })
        }
        catch (err) {
            console.error("ERROR:",err)
           return reject(err)
        }
    })
}

export default connectDB;