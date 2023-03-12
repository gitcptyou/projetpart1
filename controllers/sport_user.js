import  SportUser  from "../models/sport_user.js"

// Ajouter un etudiant
export const addSportUser = async (req, res) => {

    const { userId, sportId } = req.body
    const newSportUser = { userId,sportId}

    try {
        const result = await SportUser.create(newSportUser)
        res.status(201).json({ data: result, message: 'lutilisateur a insicrit au sport avec succes' })
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}

export const getSportUser= async (req, res) => {
    const userId=req.body.userId
    try {
        const result = await SportUser.findAll({ where:{userId} })
        res.status(200).json({ data: result, message: "Tous les sports insicit  recus" })

    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}
export const DeleteSportUser= async (req, res) => {
    const { id } = req.body
    if (!id) res.status(404).json({ error: true, message: "L'id du sport est requis" })
    try {
        const result = await SportUser.destroy({   where:{id}  })
        res.status(200).json({ data: result, message: "Sport Deleted successfuly" })

    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}