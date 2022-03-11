const express = require('express');
const asyncHandler = require('express-async-handler');

const { Favorite } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const favorites = await Favorite.findAll();
    return res.json(favorites);

}));


module.exports = router;
