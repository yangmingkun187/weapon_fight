jest.autoMockOff();

describe('fight', function() {
    describe('roundFight', function() {
        it('should return correct text', function() {
            var Soldier = require('../src/model/soldier');
            var Weapon = require('../src/model/weapon');
            var Player = require('../src/model/player');
            var Effect = require('../src/model/effect');
            var Fight = require('../src/model/fight');
            var Armor = require('../src/model/armor');

            var effect = new Effect('毒性', 2, 2, 100, '中毒');
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

        it('should return correct text', function() {
            var Soldier = require('../src/model/soldier');
            var Weapon = require('../src/model/weapon');
            var Player = require('../src/model/player');
            var Effect = require('../src/model/effect');
            var Fight = require('../src/model/fight');
            var Armor = require('../src/model/armor');

            var effect = new Effect('毒性', 2, 2, 0, '中毒');
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
