var Player = require('./model/player');
var Weapon = require('./model/weapon');
var Armor = require('./model/armor');
var Soldier = require('./model/soldier');
var Fight = require('./model/fight');
var Effects = require('./model/effects');
var PoisonFireEffect = require('./model/effect/poison-fire-effect');
var VertigoEffect = require('./model/effect/vertigoEffect');

function main() {
    var result = '';
    var armor = new Armor('阿克斯圣光盾', 7);
    var vertigoEffect = new VertigoEffect('眩晕', 2, 2, 100);
    var weapon = new Weapon('晕锤', 15, vertigoEffect);
    var zhang = new Player('普通人', '李四', 1000, 200, '');
    var lisi = new Soldier('战士', '张三', 1000, 200, '',weapon, armor);
    var fight = new Fight();

    console.log('战斗开始！！！');
    result += fight.start(lisi, zhang);
    console.log(result);
}

main();