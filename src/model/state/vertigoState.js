function VertigoState(name, damage, effectRound, times) {
    this.name = name;
    this.damage = damage;
    this.effectRound = effectRound;
    this.times = times;
}

VertigoState.prototype.getStateText = function(player) {
    var result = '';
    this.effectRound--;
    result += player.name + this.name + '了,无法攻击,' + this.name + '还剩:' + this.effectRound + '轮\n';
    return result;
};

module.exports = VertigoState;
