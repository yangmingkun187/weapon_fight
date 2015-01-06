var _ = require('lodash');

function Player(profession, name, hp, attackPoint, state) {
  this.profession = profession;
  this.name = name;
  this.hp = _.isUndefined(hp) ? 1000 : hp;
  this.attackPoint = _.isUndefined(attackPoint) ? 200 : attackPoint;
  this.state = state;
}

Player.prototype.getPlayerAttackText = function(soldier) {
  var result = '';
  result = this.profession + this.name + '攻击了' + soldier.profession + soldier.name +
      ',攻击了' + this.attackPoint + '点伤害,' + soldier.name + '的' + soldier.armor.name +
      '抵挡了' + soldier.armor.property + '点伤害,' + soldier.name + '还剩' +
      this.getDefenderHp(soldier) + '点血';
  return result;
};

Player.prototype.getDefenderHp = function(soldier) {
  return soldier.hp -= (this.attackPoint - soldier.armor.property);
};

Player.prototype.isDead = function() {
  return this.hp <= 0;
};

Player.prototype.injure = function(damage) {
  this.hp -= damage;
};

Player.prototype.attack = function(player) {
  player.injure(this.attackPoint);
};

Player.prototype.getState = function () {
  return this.state;
};

module.exports = Player;
