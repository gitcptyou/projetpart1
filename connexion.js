import { Sequelize } from "sequelize"
import dotenv from "dotenv"

const ENV = dotenv.config().parsed

const connexion = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
  host: ENV.DB_HOST,
  dialect: ENV.DB_DIALECT,
})

connexion
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err)
  })

export default connexion
