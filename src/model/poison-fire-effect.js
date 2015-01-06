function PoisonFireEffect(damage) {
    this.damage = damage;
}

PoisonFireEffect.prototype.getPoisonFireEffectText = function(player) {
    var result = '';
    result = player.name + '受到' + this.damage + 
        李四受到2点毒性伤害, 李四剩余生命：10

    return result;
};

module.exports = PoisonFireEffect;
