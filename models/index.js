// Importer tous les modeles dans le meme fichier pour eviter les problemes d'associations
import Coach from "./coach.js"
import SportUser from "./sport_user.js"
import Role from "./role.js"
import User from "./users.js"
import Sport from "./sport.js"
import Session from "./session.js"

// many to many
Sport.belongsToMany(User, { through: SportUser,onDelete: 'CASCADE' })
User.belongsToMany(Sport, { through: SportUser,onDelete: 'CASCADE' })

// one to many
Role.hasMany(User)
User.belongsTo(Role)

Sport.hasMany(Coach, {onDelete: 'CASCADE'})
Coach.belongsTo(Sport)

Sport.hasMany(Session , {onDelete: 'CASCADE'})
Session.belongsTo(Sport)

export { Sport, User, Coach, Session, SportUser, Role }
