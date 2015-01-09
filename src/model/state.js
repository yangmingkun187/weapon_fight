var FirePoisonState = require('./state/firePoisonState');
var VertigoState = require('./state/vertigoState');

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
    if(this.name === '眩晕') {
        result = this.getVertigoState(player);
    }
    return result;
};

State.prototype.getVertigoState = function(player) {
    var state;
    if(player.state !== '' && player.state.name === '眩晕') {
        player.state.effectRound += this.effectRound;
        state = player.state;
    } else {
        state = new VertigoState(this.name, this.damage, this.effectRound, this.times);
    }
    return state;
};

State.prototype.getFirePoisonState = function (player) {
    var state;
    if((player.state.name === '毒性' || player.state.name === '火焰') && player.state !== '') {
        player.state.times ++;
        player.state.effectRound = this.effectRound;
        state = player.state;
    } else {
        state = new FirePoisonState(this.name, this.damage, this.effectRound, this.times);
    }
    return state;
};

module.exports = State;
