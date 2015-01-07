var effect = require('./effect');
var Player = require('./player');

function PoisonFireEffect(name, damage, effectRound, odds, result) {
    effect.call(this, name, damage, effectRound, odds);
    this.result = result;
    this.times = 0;
}

PoisonFireEffect.prototype = Object.create(effect.prototype);
PoisonFireEffect.prototype.constructor = PoisonFireEffect;

PoisonFireEffect.getPoisonFireEffectText = function(player1, player2) {
    var result = '';
    result += player2.name + '受到' + player1.weapon.effect.damage + '点' +
    player1.weapon.effect.name + '伤害,' + player2.name + '剩余生命:' +
    PoisonFireEffect.getEffectDamage(player1, player2) + '\n';
    return result;
};

PoisonFireEffect.getEffectDamage = function(player1, player2) {
    return player2.hp -= player1.weapon.effect.damage;
};

module.exports = PoisonFireEffect;


