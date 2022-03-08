const express = require('express');
const asyncHandler = require('express-async-handler');

const { Spot } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

router.get('/', asyncHandler(async(_req, res) => {
    const spots = await Spot.findAll();
    return res.json(spots);
}))


module.exports = router;
