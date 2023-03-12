import role from "../models/role.js";


const addRole = async (req, res) => {

    const { nom } = req.body
    const newrole = { nom }

    try {
        const result = await role.create(newrole)
        res.status(201).json({ data: result, message: 'role cree avec succes' })
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}
export default addRole




export const getRoleUser = async (req, res) => {
    const roleId = req.params.id
    if (!roleId) res.status(404).json({ error: true, message: error.message })

    try {
        const currentRole = await role.findByPk(roleId)
        const result = await currentRole.getUsers()
        res.status(200).json({ data: result, message: 'Roles retournes' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}