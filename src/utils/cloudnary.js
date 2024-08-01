var cloudinary = require('cloudinary').v2;
import fs from 'fs'
import 'dotenv/config'
import fs from 'fs'


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
  });

const uploadFileOnCloudnary = async (file_path) => {
  try {
    if (!file_path) return "File Path not declared"
    await cloudinary.uploader
    .upload(file_path, {
        resource_type : "auto"
    })
    .then(result=>console.log(result));
  } catch (err) {
    console.log("error:",err)
    fs.unlinkSync(file_path)
    return null
  }
} 


export {uploadFileOnCloudnary}