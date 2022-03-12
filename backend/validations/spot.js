const { check } = require('express-validator');
const { handleValidationErrors } = require('../utils/validation');

const id = check('id')
    .notEmpty()
    .withMessage('id cannot be empty')
    .isInt({ min: 0 });
const userId = check('userId')
    .notEmpty()
    .withMessage('userId cannot be empty')
    .isInt({ min: 0 });
const address = check('address')
    .notEmpty()
    .withMessage('Address cannot be empty')
    .isLength({ min: 10, max: 100 })
    .withMessage('Address must have a minimum of 10 characters');
const city = check('city')
    .notEmpty()
    .withMessage('City cannot be empty')
    .isLength({ min: 5, max: 20 })
    .withMessage('City must have a minimum of 5 characters');
const state = check('state')
    .notEmpty()
    .withMessage('State cannot be empty')
    .isLength({ min: 4, max: 20 })
    .withMessage('State must have a minimum of 4 characters');
const country = check('country')
    .notEmpty()
    .withMessage('Country cannot be empty')
    .isLength({ min: 5, max: 20 })
    .withMessage('Country must have a minimum of 5 characters');
const name = check('name')
    .notEmpty()
    .withMessage('Name cannot be empty')
    .isLength({ min: 5, max: 50 })
    .withMessage('Name must have a minimum of 5 characters');
const price = check('price')
    .notEmpty()
    .withMessage('Price cannot be empty')
    .isInt();
const imageUrl = check('imageUrl')
    .notEmpty()
    .withMessage('ImageUrl cannot be empty')
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please input a proper url');


exports.validateCreate = [
    userId,
    address,
    city,
    state,
    country,
    name,
    price,
    imageUrl,
    handleValidationErrors
];


exports.validateUpdate = [
    id,
    userId,
    address,
    city,
    state,
    country,
    name,
    price,
    imageUrl,
    handleValidationErrors
];
