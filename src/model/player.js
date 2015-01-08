var _ = require('lodash');

function Player(profession, name, hp, attackPoint, state) {
  this.profession = profession;
  this.name = name;
  this.hp = _.isUndefined(hp) ? 1000 : hp;
  this.attackPoint = _.isUndefined(attackPoint) ? 200 : attackPoint;
  this.state = _.isUndefined(state) ? '' : state;
}

Player.prototype.judgeStateEffect = function() {
    return this.state.effectRound > 0 ? 'noJump' : '';
};

Player.prototype.judgeState = function(player) {
    if(this.state.effectRound <= 0) {
        player.state = '';
    }
};

Player.prototype.getPlayerAttackText = function(soldier) {
  var result = '';

  if(this.state !== '' && this.judgeStateEffect() === 'noJump') {
      result += this.state.getStateText(this);
      result += this.getStrings(soldier);
      this.judgeState(this);
  } else {
      result += this.getStrings(soldier);
  }
  return result;
};

Player.prototype.getStrings = function(soldier) {
    return this.profession + this.name + '攻击了' + soldier.profession + soldier.name +
        ',攻击了' + this.attackPoint + '点伤害,' + soldier.name + '的' + soldier.armor.name +
        '抵挡了' + soldier.armor.property + '点伤害,' + soldier.name + '还剩' +
        soldier.hp + '点血\n';
};

Player.prototype.attack = function(soldier) {
  return soldier.hp -= (this.attackPoint - soldier.armor.property);
};

Player.prototype.isDead = function() {
  return this.hp <= 0;
};

module.exports = Player;
