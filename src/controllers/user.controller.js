import asyncHandler from "../utils/asyncHandeller.js"
import apiError from "../utils/apiErrors.js"
import { User } from "../models/user.model.js"
import { upload } from '../middlewares/multer.middleware.js';
import { uploadFileOnCloudnary } from "../utils/cloudnary.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log(res.status())
  // res.status(200).json({
  // message: 'hello world'


  
  const { username, email, fullName, password } = req.body
  console.log("email", email)
  //});

  if ([username, email, fullName, password].find((items) => items?.trim() == "")) {
    throw new apiError(400, "Mandatory fields are not found")
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  })

  if (existedUser) {
    throw new apiError(409, "User/Email already exists")
  }

 const avatarLocalPath = req.files?.avatar[0]?.path

 const avatar = await uploadFileOnCloudnary(avatarLocalPath);


 const userRef = await User.create({
  fullName,
  avatar : avatar.url,
  email,
  password
 })
  
 const createUser  = await User.findById(userRef._id).select('-password -refreshToken')
 console.log("createUser", createUser);

 return res.status(201).json({createUser})

})

export { registerUser }
