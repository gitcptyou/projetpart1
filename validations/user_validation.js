import {body,check} from 'express-validator'
const userrules=[
    body(' nom').notEmpty().withMessage('Le nom de l'/'utilisateur ne  doit pas etre vide'),
    body('prenom').notEmpty().withMessage('Vous devez bien saisir le prenom de l'/'utilisateur'),
    check(' naissance',{delemeters:"-"}).isDate().withMessage('saisir le bon format de la date'),
    body('photo').notEmpty().withMessage('La photo de l'/'utilisateur ne  doit pas etre vide'),
    body('telephone').notEmpty().withMessage('Le numero  de l'/'utilisateur ne  doit pas etre vide'),
    body('email').notEmpty().withMessage('L'/'/email de l'/'utilisateur ne  doit pas etre vide'),
    body(' mot_de_passe').notEmpty().withMessage('Le mot de passe de l'/'utilisateur ne  doit pas etre vide')
]
export default userrules