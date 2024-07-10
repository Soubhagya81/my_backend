import mongoose from "mongoose";
import {dbName} from '../constant.js'
import 'dotenv/config'

function connectDB () {
    new Promise((resolve, reject) => {
        try {
            mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`)
            .then((connectionInstance) => { console.log(`Connected to ${dbName} \n ${console.log(connectionInstance.connection)}`); resolve()})
            .catch(err => {
                console.error("ERROR connecting to DB:", err)
                reject(err)
            })
        }
        catch (err) {
            console.error("ERROR:",err)
            reject(err)
        }
    })
}

export default connectDB;