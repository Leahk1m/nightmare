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
}));

router.post('/', spotValidations.validateCreate, asyncHandler(async(req, res) => {
    const details = req.body;

    const spot = await Spot.create(details);
    res.json(spot)
    // return res.redirect('/');

}));

router.get('/:id', asyncHandler(async(req, res) => {
    const id = +req.params.id;
    const spot = await Spot.findByPk(id);
    return res.json(spot);

}));

router.put('/:id', spotValidations.validateUpdate, asyncHandler(async(req, res) => {
    const id = req.body.id;
    delete req.body.id;
    await Spot.update(req.body, {
        where: { id },
        returning: true,
        plain: true,
    });
    const spot = await Spot.findByPk(id);

    return res.json(spot);

}));


module.exports = router;
