var effect = require('./effect');
var Player = require('./player');
var _ = require('lodash');

function PoisonFireEffect(name, damage, effectRound, odds, result) {
    effect.call(this, name, damage, effectRound, odds);
    this.result = result;
    this.times = 0;
}

PoisonFireEffect.prototype = Object.create(effect.prototype);
PoisonFireEffect.prototype.constructor = PoisonFireEffect;

PoisonFireEffect.addTimes = function () {
    return this.times = this.times
}

PoisonFireEffect.prototype.getEffectState = function(player) {
    var result = '';
    result += player.name + this.result + '了,';
    return result;
};

PoisonFireEffect.prototype.getPoisonFireEffectText = function(player1, player2) {
    var result = '';
    result += player2.name + '受到' + player1.weapon.effect.damage + '点' +
    player1.weapon.effect.name + '伤害,' + player2.name + '剩余生命:' +
    this.getEffectDamage(player1, player2) + '\n';
    return result;
};

PoisonFireEffect.prototype.isTrigger = function() {
    var odd = _.random(0, 100);
    return odd < this.odds;
};

PoisonFireEffect.prototype.getEffectDamage = function(player1, player2) {
    return player2.hp -= player1.weapon.effect.damage;
};

module.exports = PoisonFireEffect;


