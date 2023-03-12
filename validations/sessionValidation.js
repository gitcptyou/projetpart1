import {check} from 'express-validator'
const sessionrules=[
    check(' date_debut',{delemeters:"-"}).isDate().withMessage('saisir le bon format de la date'),
    check('date_fin',{delemeters:"-"}).isDate().withMessage('saisir le bon format de la date')
]
export default sessionrules