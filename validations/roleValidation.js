import body from 'express-validator';

const rolerules=[
 body(" nom").notEmpty().withMessage("Veuilez saisir le role corectement")
]
export default rolerules