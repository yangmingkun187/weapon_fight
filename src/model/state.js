var PoisonFireEffect = require('./poison-fire-effect');

function State() {
}

State.getPlayerStateText = function(player1, player2) {
    var result = '';
    if(player2.state === '中毒' || player2.state === '着火') {
        result = player1.weapon.effect.getPoisonFireEffectText(player1, player2);
    }
    return result;
};

module.exports = State;
