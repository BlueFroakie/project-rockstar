var express = require('express');
var router = express.Router();
var {Game, Player} = require('../battleship');

var Battleship = new Game();
var p1 = Battleship.addPlayer('Garchop Martinez');
Battleship.addPlayer(p1);
for(let index = 0; index < 5; index++) {
  p1.addShip(`SS Anne #${index+1}`, Battleship);
};
Battleship.printMap();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    ships: Battleship.players[0].getShips(),
    size: Battleship.size
  });
});

router.post('/battleship/dropbomb/:x/:y', function(req, res, next) {
  Battleship.dropBomb(parseInt(req.params.x), parseInt(req.params.y));
  res.send('Ok.');
});

router.post('/battleship/reset', function(req, res, next) {
  var p1 = Battleship.addPlayer('Garchop Martinez');
  Battleship.addPlayer(p1);
  for(let index = 0; index < 5; index++) {
    p1.addShip(`SS Anne #${index+1}`, Battleship);
  };
  Battleship.printMap();
});

module.exports = router;
