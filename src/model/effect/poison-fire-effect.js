var effects = require('./../effects');
var Player = require('./../player');
var _ = require('lodash');

function PoisonFireEffect(name, damage, effectRound, odds) {
    effects.call(this, name, damage, effectRound, odds);
}

PoisonFireEffect.prototype = Object.create(effects.prototype);
PoisonFireEffect.prototype.constructor = PoisonFireEffect;

PoisonFireEffect.prototype.getEffectState = function(player) {
    var result = '';
    if(this.name === '火焰') {
        result += player.name + '着火了,';
    }
    if(this.name === '毒性') {
        result += player.name + '中毒了,';
    }
    return result;
};

module.exports = PoisonFireEffect;


