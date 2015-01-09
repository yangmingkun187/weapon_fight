var FirePoisonState = require('./state/firePoisonState');

function State(name, damage, effectRound) {
    this.name = name;
    this.damage = damage;
    this.effectRound = effectRound;
    this.times = 1;
}
State.prototype.getStateText = function() {

};

State.prototype.getPlayerState = function(player) {
    var result;

    if(this.name === '毒性' || this.name === '火焰') {
        result = this.getFirePoisonState(player);
    }
    return result;
};

State.prototype.getFirePoisonState = function (player) {
    var effect;
    if((player.state.name === '毒性' || player.state.name === '火焰') && player.state !== '') {
        player.state.times ++;
        player.state.effectRound = this.effectRound;
        effect = player.state;
    } else {
        effect = new FirePoisonState(this.name, this.damage, this.effectRound, this.times);
    }
    return effect;
};

module.exports = State;
