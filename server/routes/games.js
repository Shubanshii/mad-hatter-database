const express = require('express');
const Game = require('../models/Game')
const { isLoggedIn } = require('../middlewares')

const router = express.Router();

console.log('serversidegames.jsisloggedin', isLoggedIn)

// Route to get all games
router.get('/', isLoggedIn, (req, res, next) => {
  Game.find({ owner: req.user._id })
    .then(games => {
      res.json(games);
    })
    .catch(err => next(err))
});

// route to get A game
router.get('/:id', isLoggedIn, (req, res, next) => {
  Game.findById(req.params.id)
    .then(game => {
      // console.log('game from within componentdidmount', game);
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

router.patch('/:id', isLoggedIn, (req, res, next) => {
  let { playerCount, playerInfo, name } = req.body;
  // console.log(req.body, req.user);
  console.log('name server', name)
  Game.findByIdAndUpdate(req.params.id, { playerCount, playerInfo, name, owner: req.user._id })
    .then(game => {
      res.json({
        success: true,
        game
      });
    })
    .catch(err => next(err))
});

module.exports = router;
