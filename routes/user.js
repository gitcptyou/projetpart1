import { Router } from "express"
import { getAllSports } from "../controllers/sport.js"
import { verifierToken } from "../auth/autorisation.js"
import { addSportUser } from "../controllers/sport_user.js"
import { getSportUser } from "../controllers/sport_user.js"
import { DeleteSportUser } from "../controllers/sport_user.js"

const userRouter = Router()

// User routes
userRouter.get("/sportdispo", verifierToken, getAllSports)
userRouter.post("/insicriresport", verifierToken, addSportUser)
userRouter.get("/sportinsicrit", verifierToken, getSportUser)
userRouter.delete("/quitersport", verifierToken, DeleteSportUser)


export default userRouter
