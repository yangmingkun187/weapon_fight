var Player = require('./model/player');
var Weapon = require('./model/weapon');
var Armor = require('./model/armor');
var Soldier = require('./model/soldier');
var Fight = require('./model/fight');
var Effect = require('./model/effect');
var PoisonFireEffect = require('./model/poison-fire-effect');

function main() {
    var result = '';
    var poisonFireEffect = new PoisonFireEffect('火焰', 2, 2, 100, '着火');
    var armor = new Armor('阿克斯圣光盾', 7);
    var weapon = new Weapon('烈焰剑', 15, poisonFireEffect);
    var zhang = new Player('普通人', '李四', 1000, 200, '');
    var lisi = new Soldier('战士', '张三', 1000, 200, '',weapon, armor);
    var fight = new Fight();

    console.log('战斗开始！！！');

    result += fight.start(lisi, zhang);
    console.log(result);
}

main();