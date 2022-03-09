const express = require('express');
const asyncHandler = require('express-async-handler');

const { Spot } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const spotValidations = require('../../validations/spot');

router.get('/', asyncHandler(async(_req, res) => {
    const spots = await Spot.findAll();
    return res.json(spots);
}))

router.post('/', spotValidations.validateCreate, asyncHandler(async(req, res) => {
    const details = req.body;

    const spot = await Spot.create(details);
    // return res.redirect('/');

}))


module.exports = router;
