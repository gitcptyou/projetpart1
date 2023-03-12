import  session  from "../models/session.js"

// Ajouter un etudiant
export const addSession = async (req, res) => {

    const { date_debut,date_fin,sportId} = req.body
    const newSession = { date_debut,date_fin ,sportId}

    try {
        const result = await session.create(newSession)
        res.status(201).json({ data: result, message: 'la session cree avec succes' })
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}
export const DeleteSession = async (req, res) => {
    const { id } = req.body
    if (!id) res.status(404).json({ error: true, message: "Lle id de session est requis" })
    try {
      const result = await session.destroy({  where:{id} })
      res.status(200).json({ data: result, message: "Session Deleted successfuly" })
    } catch (error) {
      res.status(404).json({ error: true, message: error.message })
    }
  }
