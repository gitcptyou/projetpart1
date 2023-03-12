import {body,check} from 'express-validator'
const coachrules=[
    body('nom_coach').notEmpty().withMessage('Le nom du coach ne  doit pas etre vide'),
    body('prenom_coach').notEmpty().withMessage('Vous devez bien saisir le prenom dj coach'),
    check('naissance_coach',{delemeters:"-"}).isDate().withMessage('saisir le bon format de la date')
]
export default coachrules