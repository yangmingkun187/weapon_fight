var _ = require('lodash');

function Player(profession, name, hp, attackPoint, state) {
  this.profession = profession;
  this.name = name;
  this.hp = _.isUndefined(hp) ? 1000 : hp;
  this.attackPoint = _.isUndefined(attackPoint) ? 200 : attackPoint;
  this.state = _.isUndefined(state) ? '' : state;
}

Player.prototype.getPlayerAttackText = function(soldier) {
  var result = '';
  if(this.state !== '' && this.state.judgeState() === true) {
      result += this.state.getStateText(this);
      this.state.judgeStateEffect(this);
  } else if(this.state !== '' && this.state.judgeState() === false) {
      result += this.state.getStateText(this);
      this.attack(soldier);
      result += this.getStrings(soldier);
      this.state.judgeStateEffect(this);
  } else {
      this.attack(soldier);
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
