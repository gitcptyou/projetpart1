import  Coach  from "../models/coach.js"

// Ajouter un etudiant
export const addCoach = async (req, res) => {

    const { nom_coach, prenom_coach, naissance_coach,sportId } = req.body
    const newCoach = { nom_coach, prenom_coach, naissance_coach,sportId}

    try {
        const result = await Coach.create(newCoach)
        res.status(201).json({ data: result, message: 'le coach a ete ajouter au sport avec succes ' })
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}

export const DeleteCoach = async (req, res) => {
    const { id } = req.body
    if (!id) res.status(404).json({ error: true, message: "Lle id de coach est requis" })
    try {
      const result = await Coach.destroy({  where:{id} })
      res.status(200).json({ data: result, message: "Coach Deleted successfuly" })
    } catch (error) {
      res.status(404).json({ error: true, message: error.message })
    }
  }
