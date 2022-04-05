const express = require('express')
const Recipes = require('../recipes/recipes-model')

const router = express.Router()


router.get('/', (req, res, next) => {
    Recipes.getAll()
        .then((recipe) => {
        res.status(200).json(recipe)
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Recipes.getById(req.params.recipe_id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(next)
})



module.exports = router