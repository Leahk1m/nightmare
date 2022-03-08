const { check } = require('express-validator');
const { handleValidationErrors } = require('../utils/validation');

const id = check('id')
    .notEmpty()
    .withMessage('cannot be empty')
    .isInt({ min: 0 });
const userId = check('userId')
    .notEmpty()
    .withMessage('cannot be empty')
    .isInt({ min: 0 });
const address = check('address')
    .notEmpty()
    .withMessage('Address cannot be empty')
    .isLength({ min: 10, max: 100 });
const city = check('city')
    .notEmpty()
    .withMessage('City cannot be empty')
    .isLength({ min: 5, max: 50 });
const state = check('state')
    .notEmpty()
    .withMessage('State cannot be empty')
    .isLength({ min: 5, max: 50 });
const country = check('country')
    .notEmpty()
    .withMessage('Country cannot be empty')
    .isLength({ min: 5, max: 50 });
const name = check('name')
    .notEmpty()
    .withMessage('Name cannot be empty')
    .isLength({ min: 5, max: 50 });
const price = check('price')
    .notEmpty()
    .withMessage('City cannot be empty')
    .isInt();
const imageUrl = check('imageUrl')
    .notEmpty()
    .withMessage('ImageUrl cannot be empty')
    .isURL({ require_protocol: false, require_host: false });
