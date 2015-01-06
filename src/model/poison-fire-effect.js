function PoisonFireEffect(name, damage) {
    this.name = name;
    this.damage = damage;
}

PoisonFireEffect.prototype.getPoisonFireEffectText = function(player) {
    var result = '';
    result = player.name + '受到' + this.damage + '点' + this.name + '伤害,' +
        player.name + '剩余生命:' + this.getEffectDamage(player);
    return result;
};

PoisonFireEffect.prototype.getEffectDamage = function(player) {
    return player.hp -= this.damage;
};

module.exports = PoisonFireEffect;


