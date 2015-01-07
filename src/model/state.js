var PoisonFireEffect = require('./poison-fire-effect');

function State(name) {
    this.name = name;
}

State.getPlayerStateText = function(player1, player2) {
    var result = '';
    if(player2.state === '中毒' || player2.state === '着火') {
        result = PoisonFireEffect.getPoisonFireEffectText(player1, player2);
    }
    return result;
};

module.exports = State;
