import mongoose from "mongoose"
import bcrypt from "bcrypt"
import 'dotenv/config'
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
  username: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.pre("save", async function (next) {
  if (!this.password.isModified("password")) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
 return jwt.sign({
    _id : this.id,
    email : this.email,
    username : this.username,
    fullName : this.fullName
  },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
usetSchema.methods.generateRefressToken = function () {
    return jwt.sign({
        _id : this.id,
        email : this.email,
        username : this.username,
        fullName : this.fullName
      },
        process.env.REFRESS_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESS_TOKEN_EXPIRY
        }
      )
}

export const User = mongoose.model("User", userSchema)
