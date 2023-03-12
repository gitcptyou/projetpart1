import { Router } from "express"
import { isAdmin, verifierToken } from "../auth/autorisation.js"
import { addSport } from "../controllers/sport.js"
import{addCoach} from '../controllers/coach.js'
import{addSession} from '../controllers/session.js'
import { DeleteSport } from "../controllers/sport.js"
import { DeleteSession } from "../controllers/session.js"
import { DeleteCoach } from "../controllers/coach.js"
import sportrules from "../validations/sport_validation.js"
import coachrules from "../validations/CoachValidation.js"
import sessionrule from "../validations/sessionValidation.js"

const adminRouter = Router()

// Admin routes
adminRouter.post("/sport", sportrules,verifierToken, isAdmin, addSport)
adminRouter.post("/coach",  coachrules, verifierToken, isAdmin, addCoach)
adminRouter.post("/session",sessionrule, verifierToken, isAdmin, addSession)
adminRouter.delete("/suppsport", verifierToken, isAdmin, DeleteSport)
adminRouter.delete("/deletecoach", verifierToken, isAdmin, DeleteCoach)
adminRouter.delete("/deletesession", verifierToken, isAdmin, DeleteSession)

export default adminRouter
