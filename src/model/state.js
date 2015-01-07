var FirePoisonState = require('./poison-fire-effect');

function State(name, damage, effectRound) {
    this.name = name;
    this.damage = damage;
    this.effectRound = effectRound;
}

State.prototype.getPlayerState = function(player, effect) {
    var result;
    if(effect.name === '中毒' || effect.name === '着火') {
        result = this.getFirePoisonState(player, effect);
    }
    return result;
};

State.prototype.getFirePoisonState = function (player, effect) {
    var result;
    if(player.state.name === '中毒' || player.state.name === '着火') {
        player.state.times ++;
        player.state.effectRound = effect.effectRound;
        result = player;
    } else {
        result = new FirePoisonState(effect.name, effect.damage, effect.effectRound);
    }
    return result;
};

module.exports = State;
