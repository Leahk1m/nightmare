const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors } = require('../../utils/validation');
const { Favorite } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const favorites = await Favorite.findAll();
    return res.json(favorites);

}));

router.post('/', handleValidationErrors, asyncHandler(async(req, res) => {
    const details = req.body;
    const favorite = await Favorite.create(details);
    res.json(favorite)

}));

router.delete('/:id', handleValidationErrors, asyncHandler(async(req, res) => {
    const fav = Favorite.findByPk(req.params.id);
    if(!fav) throw new Error('Cannot find favorite spot');

    await Favorite.destroy({ where: {id: fav.id}});
    return res.json({ id: fav.id}) //sending the id of the fav to frontend bc it requires a favId to delete
}));


module.exports = router;
