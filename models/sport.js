//Importer la base de donnee pour creer les modeles
import database from "../connexion.js"

import { DataTypes } from "sequelize"

//Modele de la table sport
const Sport = database.define(
  "sport",
  {
    nom_sport: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    nb_semaine: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
    timestamps: false,
  }
)

export default Sport
