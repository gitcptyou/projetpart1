//Importer la base de donnee pour creer les modeles
import database from "../connexion.js"

import { DataTypes } from "sequelize"

//Modele de la table coach
const Coach = database.define(
  "coach",
  {
    nom_coach: { type: DataTypes.STRING, allowNull: false },
    prenom_coach: { type: DataTypes.STRING, allowNull: false },
    naissance_coach: { type: DataTypes.DATE, allowNull: false },
  },
  {
    //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
    timestamps: false,
  }
)

export default Coach
