function Weapon(name, attackPoint, effect) {
    this.name = name;
    this.attackPoint = attackPoint;
    this.effect = effect || null;
}

module.exports = Weapon;
