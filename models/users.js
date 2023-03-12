//Importer la base de donnee pour creer les modeles
import database from "../connexion.js"

import { DataTypes } from "sequelize"

//Modele de la table users
const User = database.define(
  "user",
  {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    naissance: { type: DataTypes.DATE, allowNull: false },
    photo: { type: DataTypes.STRING, allowNull: false },
    telephone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    mot_de_passe: { type: DataTypes.STRING, allowNull: false },
  },
  {
    //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
    timestamps: false,
  }
)

export default User
