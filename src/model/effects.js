var _ = require('lodash');

function Effects(name, damage, effectRound, odds) {
    this.name = name;
    this.damage = damage;
    this.effectRound = effectRound;
    this.odds = odds;
}

Effects.prototype.isTrigger = function() {
    var odd = _.random(0, 100);
    return odd < this.odds;
};

module.exports = Effects;

