const express = require('express');
const asyncHandler = require('express-async-handler');

//require models
const { Spot } = require('../../db/models')

const spotValidations = require('../validations/spot');

const router = express.Router();

router.get("/spots", asyncHandler(async(_req, res) => {
    const spots = await Spot.findAll();
    console.log('spots', spots);
    return res.json(spots);
}))


module.exports = router;
