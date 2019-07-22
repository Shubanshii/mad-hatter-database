const mongoose = require('mongoose');
const {
  User
} = require('./User')

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The game name is required'],
    minlength: 1
  },
  playerCount: {
    type: Number
  },
  handIndex: {
    type: Number
  },
  saved: {
    type: Boolean
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  playerInfo: {
    type: Array,
  }
  // area: {
  //   type: Number,
  // },
  // description: {
  //   type: String,
  // },
});

gameSchema.pre('find', function (next) {
  this.populate('owner');
  next();
});

gameSchema.pre('findOne', function (next) {
  this.populate('owner');
  next();
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;