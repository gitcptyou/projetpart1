import { User } from "../models/index.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const userLogin = async (req, res) => {
  const { email, mot_de_passe } = req.body
  if (email) {
    try {
      const user = await User.findOne({ where: { email } })

      if (!user) res.status(404).json({ message: "No such user exists" })

      //Verification en comparant les mots de passe
      const verifyPassword = await bcrypt.compare(mot_de_passe, user.mot_de_passe)

      //Si les mots de passe sont identiques
      if (verifyPassword) {
        let payload = { id: user.id }
        let token = jwt.sign(payload, process.env.TOKEN_SECRET)
        res.status(200).json({ data: { user, token } })
      } else {
        res.status(401).json({ message: "Le mot de passe est incorrect" })
      }
    } catch (error) {
      res.status(401).json({ message: error.message })
    }
  } else {
    res.status(401).json({ message: "entrer un email valide" })
  }
}

export const addUser = async (req, res) => {
  const { nom, prenom, naissance, photo, telephone, email, mot_de_passe, roleId } = req.body

  //hachage du mot de passe
  const hashedPassword = await bcrypt.hash(mot_de_passe, 10)

  const newUser = { nom, prenom, naissance, photo, telephone, email, mot_de_passe: hashedPassword, roleId }

  try {
    const result = await User.create(newUser)
    res.status(201).json({ data: result, message: "Utilisateur cree avec succes" })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const result = await users.findAll({ include: "Roles" })
    res.status(200).json({ data: result, message: "Tous les utilisateurs recus" })
  } catch (error) {
    res.status(404).json({ error: true, message: error.message })
  }
}
