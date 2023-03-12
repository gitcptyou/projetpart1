import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import compression from "compression"

import dotenv from "dotenv"

import connexion from "./connexion.js"
import authRouter from "./routes/authentication.js"
import adminRouter from "./routes/admin.js"
import userRouter from "./routes/user.js"
import addRole from "./controllers/role.js"

connexion.sync()

//Importer les routes

const PORT = dotenv.config().parsed.PORT

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Utiliser les routes
app.use("/auth", authRouter)
app.use("/admin", adminRouter)
app.use(userRouter)

app.post("/role", addRole)

// Indiquer le port d'ecoute du serveur
app.listen(PORT, () => console.log(`Serveur running on port ${PORT}`))
