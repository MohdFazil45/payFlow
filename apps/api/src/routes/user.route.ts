import express from "express"
import { register, signin, updateDetails, getUserByNumber, user, me } from "../controllers/user.controller.ts"
import { authMiddleware } from "../middlewares/user.middleware.ts"
const router = express.Router()

router.post("/register",register)
router.post("/signin",signin)

//* Authenticated Routes

router.put("/update",authMiddleware,updateDetails)
router.get("/user",authMiddleware,user)
router.get("/bulk",authMiddleware,getUserByNumber)
router.get("/me",me)

export default router
