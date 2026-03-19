import "dotenv/config"
import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.route.ts"
const app = express()
const PORT = process.env.PORT!
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))

app.use("/",authRouter)

app.listen(PORT,() => console.log(`Server is running on ${PORT}`))