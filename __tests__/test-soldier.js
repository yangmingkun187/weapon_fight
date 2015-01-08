jest.autoMockOff();

describe('Soldier', function() {
    var Soldier;
    var Weapon;
    var Player;
    var PoisonFireEffect

    beforeEach(function() {
        Soldier = require('../src/model/soldier');
        Weapon = require('../src/model/weapon');
        Player = require('../src/model/player');
        PoisonFireEffect = require('../src/model/effect/poison-fire-effect');
    });
    describe('getSoldierAttackText', function() {
        it('should return correct text', function() {
            var effect = new PoisonFireEffect('毒性', 2, 2, 100, '中毒');
            var weapon = new Weapon('毒剑', 10, effect);
            var lisi = new Player('普通人', '李四', 1000, 200, '中毒');
            var zhang = new Soldier('战士', '张三', 1000, 200, '', weapon);

            var text = zhang.getSoldierAttackText(lisi);
            expect(text).toBe('战士张三用毒剑攻击了普通人李四,李四受到了210点伤害,李四中毒了,李四剩余生命:1000\n');
        });
    });

    describe('#attack', function() {
        it('should return correct object', function() {
            var effect = new PoisonFireEffect('毒性', 2, 2, 100, '中毒');
            var weapon = new Weapon('毒剑', 10, effect);
            var lisi = new Player('普通人', '李四', 1000, 200, '中毒');
            var zhang = new Soldier('战士', '张三', 1000, 200, '', weapon);

            var result = zhang.attack(lisi);
            expect(result).toBe(790);
        });
    });
});