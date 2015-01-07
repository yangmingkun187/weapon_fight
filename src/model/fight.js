var Soldier = require('./soldier');
var player = require('./player');
var _ = require('lodash');
var State = require('./state');

function Fight() {
    effectTimes = 0;
}

Fight.prototype.start = function (player1, player2) {
    var result = '';
    while (true) {
        player1.attack(player2);
        player2.attack(player1);
        if (player1.isDead()) {
            result += player2.profession + player2.name + '使用最后一击， 把' + player1.name + '打死了';
            break;
        }
        if (player2.isDead()) {
            result += player1.profession + player1.name + '使用最后一击， 把' + player2.name + '打死了';
            break;
        }
        result += this.roundFight(player1, player2);
    }
    return result;
};

Fight.prototype.roundFight = function(player1, player2) {
    var result = '';
    result += player1.getSoldierAttackText(player2);
    result += State.getPlayerStateText(player1, player2);
    result += player2.getPlayerAttackText(player1);
    return result;
};

module.exports = Fight;