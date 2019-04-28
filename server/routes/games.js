const express = require('express');
const Game = require('../models/Game')
const { isLoggedIn } = require('../middlewares')

const router = express.Router();

// Route to get all games
router.get('/', (req, res, next) => {
  Game.find()
    .then(games => {
      res.json(games);
    })
    .catch(err => next(err))
});

// route to get A game
router.get('/:id', (req, res, next) => {
  Game.findById(req.params.id)
    .then(game => {
      res.json(game);
    })
    .catch(err => next(err))
});
// Route to add a Game
router.post('/', isLoggedIn, (req, res, next) => {
  let { playerCount, playerInfo, name } = req.body;

  console.log(req.body, req.user);
  Game.create({ playerCount, playerInfo, name, owner: req.user._id })
    .then(game => {
      res.json({
        success: true,
        game
      });
    })
    .catch(err => next(err))
});

module.exports = router;
