//Importer la base de donnee pour creer les modeles
import database from "../connexion.js"

import { DataTypes } from "sequelize"

//Modele de la table session
const Session = database.define(
  "session",
  {
    date_debut: { type: DataTypes.DATE, allowNull: false },
    date_fin: { type: DataTypes.DATE, allowNull: false },
  },
  {
    //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
    timestamps: false,
  }
)

export default Session
