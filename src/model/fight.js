var Soldier = require('./soldier');
var player = require('./player');
var _ = require('lodash');

function Fight() {
    effectTimes = 0;
}

Fight.prototype.start = function (player1, player2) {
    var result = '';
    while (true) {
        result += player1.getSoldierAttackText(player2);
        if (player2.isDead()) {
            result += player1.profession + player1.name + '使用最后一击， 把' + player2.name + '打死了';
            break;
        }
        result += player2.getPlayerAttackText(player1);
        if (player1.isDead()) {
            result += player2.profession + player2.name + '使用最后一击， 把' + player1.name + '打死了';
            break;
        }
    }
    return result;
};

module.exports = Fight;