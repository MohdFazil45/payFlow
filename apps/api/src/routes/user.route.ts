import express from "express"
import { register, signin, updateDetails, getUserByNumber } from "../controllers/user.controller.ts"
import { authMiddleware } from "../middlewares/user.middleware.ts"
const router = express.Router()

router.post("/register",register)
router.post("/signin",signin)

//* Authenticated Routes

router.put("/update",authMiddleware,updateDetails)
router.get("/bulk",getUserByNumber)

export default router
