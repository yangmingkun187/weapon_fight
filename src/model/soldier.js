var player = require('./player');
var State = require('./state');

function Soldier(profession, name, hp, attackPoint, state, weapon, armor) {
    player.call(this, profession, name, hp, attackPoint, state);
    this.weapon = weapon || {};
    this.armor = armor || {};
}

Soldier.prototype = Object.create(player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.attack = function(player) {
    return player.hp -= this.getSoldierAttackPoint();
};

Soldier.prototype.getSoldierAttackText = function(player) {
    var result = '';
    var text = '';
    var effect = this.weapon.effect;

    if(this.weapon.effect.isTrigger()) {
        var state = new State(effect.name, effect.damage, effect.effectRound);
        player.state = state.getPlayerState(player, effect);
        text = effect.getEffectState(player);
    }
    result += this.profession + this.name + '用' + this.weapon.name + '攻击了' +
        player.profession + player.name + ',' + player.name + '受到了' +
        this.getSoldierAttackPoint() + '点伤害,' + text +
        player.name + '剩余生命:' + player.hp + '\n';
    return result;
};

Soldier.prototype.getSoldierAttackPoint = function() {
    return this.attackPoint + this.weapon.attackPoint;
};

module.exports = Soldier;
