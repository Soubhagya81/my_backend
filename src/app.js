import express from "express"
import { Router } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors())

app.use(
  express.json({
    limit: "14kb",
  })
)

app.use(
  express.urlencoded({
    extended: true,
  })
)

import userRouter from './routes/user.routes.js'

app.use("/api/v1/users", userRouter)

app.use(express.static("public"))

app.use(cookieParser())

export default app
