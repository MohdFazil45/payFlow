import express from "express"
import { checkBalance, transfer } from "../controllers/account.controller.ts"
import { authMiddleware } from "../middlewares/user.middleware.ts"
const route = express.Router()

route.get("/balance",authMiddleware,checkBalance)
route.post("/transfer",authMiddleware,transfer)

export default route