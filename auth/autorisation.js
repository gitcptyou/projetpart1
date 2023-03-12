//Definir les autorisations pour les utilisateurs connectes
import jwt from "jsonwebtoken"
import { User, Role } from "../models/index.js"

//Verifier la presence du token et envoyer l'id de l'utilisateur aux middlewares suivants
export const verifierToken = (req, res, next) => {
  //Extraire le token de la requete
  const bearerToken = req.headers.authorization
  const token = bearerToken.split(" ")[1]

  //Verifier que le token est bien present sinon retourner un message d'erreur
  if (!token) return res.status(403).json({ message: "Pas autorise a voir ces donnees" })

  //Verifierque le token est bien pour cet utilisateur
  jwt.verify(token, process.env.TOKEN_SECRET, (error, payload) => {
    if (error) return res.status(401).json({ message: error.message })

    //Mettre l'id de l'utilisateur pour passer aux callbacks suivants
    req.userId = payload.id
    next()
  })
}

// Verifier si quelqu'un a le droit admin
export const isAdmin = async (req, res, next) => {
  //Extraire le userId de la requete precedente
  const userId = req.userId

  //Retourner ce message si pas de userId
  if (!userId) return res.status(403).json({ message: "Pas d'utilisateur" })

  try {
    const user = await User.findByPk(userId)

    //Si pas de user, retourner ce message
    if (!user) return res.status(404).json({ message: "utilisateur non existant" })

    try {
      //Extraire les roles de l'utilisateur de la base de donnee
     
      const roleid = user.dataValues.roleId
      const rolesql = await Role.findByPk(roleid)
      if(!rolesql){
       return  res.status(404).json({message:'l utilisateur n a aucun role'})
      }
      const role = rolesql.dataValues.nom
      if (role != "admin") return res.status(404).json({ message: "vous n avez pas l acces" })
      else next()
    } catch (error) {
      return res.status(403).json({ message: error.message })
    }
  } catch (error) {
    return res.status(403).json({ message: error.message })
  }
}
