import { DataTypes } from "sequelize"
import database from "../connexion.js"

//Modele de la table session
const SportUser = database.define(
  "sport_user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

export default SportUser
