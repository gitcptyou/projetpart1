import {body,check} from 'express-validator'
const sportrules=[
    body('nom_sport').notEmpty().withMessage('Le nom du sport ne  doit pas etre vide'),
    body('description').notEmpty().withMessage('Vous devez faire une description detaille du sport'),
    body(' nb_semaine').notEmpty().withMessage('Vous devez saisir le nombre de semaine'),
    
]
export default sportrules