import { Router } from "express"
import { addUser, userLogin } from "../controllers/users.js"
import userrules from "../validations/user_validation.js"

const authRouter = Router()

authRouter.post("/login",userrules, userLogin)
authRouter.post("/signup", userrules, addUser)

export default authRouter
