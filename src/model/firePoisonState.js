var State = require('./state');

function FirePoisonState(name, damage, effectRound) {
    State.call(this, name, damage, effectRound);
    this.times = 1;
}

FirePoisonState.prototype = Object.create(State.prototype);
FirePoisonState.prototype.constructor = FirePoisonState;

FirePoisonState.prototype.getStateText = function(player) {
    var result;
    this.effectRound--;

    player.hp -= this.damage * this.times;
    result = player.name + '受到' + this.getStateDamage() +
    '点' + this.name + '伤害,' + player.name + '剩余生命:' + player.hp + '\n';
    this.judgeTimes();
    return result;
};

FirePoisonState.prototype.judgeTimes = function() {
    if(this.times > 1) {
        this.times--;
    }
};

FirePoisonState.prototype.getStateDamage = function() {
    return this.damage * this.times;
};

FirePoisonState.prototype.judgeState = function() {
    return this.effectRound > 0 ? false : '';
};

FirePoisonState.prototype.judgeStateEffect = function(player) {
    if(this.effectRound < 0) {
        player.state = {};
    }
};

module.exports = FirePoisonState;





