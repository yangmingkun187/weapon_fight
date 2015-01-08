var effects = require('./../effects');

function VertigoEffect(name, damage, effectRound, odds) {
    effects.call(this, name, damage, effectRound, odds);
}

VertigoEffect.prototype = Object.create(effects.prototype);
VertigoEffect.prototype.constructor = VertigoEffect;

VertigoEffect.prototype.getEffectState = function(player) {
    return player.name + '晕倒了,';
};

module.exports = VertigoEffect;