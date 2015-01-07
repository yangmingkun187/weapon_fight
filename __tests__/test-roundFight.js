jest.autoMockOff();

describe('fight', function() {
    var Soldier;
    var Weapon;
    var Player;
    var Fight;
    var Armor;
    var PoisonFireEffect;
    beforeEach(function() {
        Soldier = require('../src/model/soldier');
        Weapon = require('../src/model/weapon');
        Player = require('../src/model/player');
        Fight = require('../src/model/fight');
        Armor = require('../src/model/armor');
        PoisonFireEffect = require('../src/model/poison-fire-effect');
    });
    describe('roundFight', function() {
        it('should return correct text1', function() {
            var effect = new PoisonFireEffect('毒性', 2, 2, 100, '中毒');
            var armor = new Armor('阿克斯圣光盾', 7);
            var weapon = new Weapon('毒剑', 15, effect);
            var lisi = new Player('普通人', '李四', 1000, 200, '');
            var zhang = new Soldier('战士', '张三', 1000, 200, '', weapon, armor);
            var fight = new Fight();

            var text = fight.roundFight(zhang, lisi);
            expect(text).toBe( '战士张三用毒剑攻击了普通人李四,李四受到了215点伤害,李四中毒了,李四剩余生命:1000\n' +
            '李四受到2点毒性伤害,李四剩余生命:998\n' +
            '普通人李四攻击了战士张三,攻击了200点伤害,张三的阿克斯圣光盾抵挡了7点伤害,张三还剩1000点血\n');
        });

        it('should return correct text2', function() {
            var effect = new PoisonFireEffect('毒性', 2, 2, 0, '中毒');
            var armor = new Armor('阿克斯圣光盾', 7);
            var weapon = new Weapon('毒剑', 15, effect);
            var lisi = new Player('普通人', '李四', 1000, 200, '');
            var zhang = new Soldier('战士', '张三', 1000, 200, '', weapon, armor);
            var fight = new Fight();

            var text = fight.roundFight(zhang, lisi);
            expect(text).toBe( '战士张三用毒剑攻击了普通人李四,李四受到了215点伤害,李四剩余生命:1000\n' +
            '普通人李四攻击了战士张三,攻击了200点伤害,张三的阿克斯圣光盾抵挡了7点伤害,张三还剩1000点血\n');
        });
    });
});
