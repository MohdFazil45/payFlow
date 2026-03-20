import "dotenv/config"
import express from "express"
import cors from "cors"
import userRouter from "./routes/user.route.ts"
import cookieParser from "cookie-parser"
const app = express()
const PORT = process.env.PORT!

app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))
app.use(express.json())
app.use(cookieParser())


app.use("/",userRouter)

app.listen(PORT,() => console.log(`Server is running on ${PORT}`))