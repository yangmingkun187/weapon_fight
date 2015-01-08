function FirePoisonState(name, damage, effectRound, times) {
    this.name = name;
    this.damage = damage;
    this.effectRound = effectRound;
    this.times = times;
}

FirePoisonState.prototype.getStateText = function(player) {
    var result;
    this.effectRound--;
    player.hp -= this.getStateDamage();
    result = player.name + '受到' + this.getStateDamage() +
    '点' + this.name + '伤害,' + player.name + '剩余生命:' + player.hp + '\n';
    this.judgeTimes();
    return result;
};

FirePoisonState.prototype.getStateDamage = function() {
    return this.damage * this.times;
};

FirePoisonState.prototype.judgeTimes = function() {
    if(this.times > 1) {
        this.times--;
    }
};

module.exports = FirePoisonState;





