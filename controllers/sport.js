import { Sport } from "../models/index.js"

// Ajouter un etudiant
export const addSport = async (req, res) => {
  const { nom_sport, description, nb_semaine } = req.body
  const newSport = { nom_sport, description, nb_semaine }

  try {
    const result = await Sport.create(newSport)
    res.status(201).json({ data: result, message: "le sport cree avec succes" })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export const getAllSports = async (req, res) => {
  try {
    const result = await Sport.findAll()
    res.status(200).json({ data: result, message: "Tous les sports recus" })
  } catch (error) {
    res.status(404).json({ error: true, message: error.message })
  }
}
export const DeleteSport = async (req, res) => {
  const { id } = req.body
  if (!id) res.status(404).json({ error: true, message: "L'id du sport est requis" })
  try {
    const result = await Sport.destroy({  where:{id} })
    res.status(200).json({ data: result, message: "Sport Deleted successfuly" })
  } catch (error) {
    res.status(404).json({ error: true, message: error.message })
  }
}
