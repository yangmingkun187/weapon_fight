jest.dontMock('../src/model/soldier');
jest.dontMock('../src/model/weapon');
jest.dontMock('../src/model/player');

describe('Soldier', function() {
    describe('getSoldierAttackText', function() {
        it('should return correct text', function() {
            var Soldier = require('../src/model/soldier');
            var Weapon = require('../src/model/weapon');
            var Player = require('../src/model/player');
            var weapon = new Weapon('毒剑', 10);
            var lisi = new Player('普通人', '李四', 1000, 200, '中毒');
            var zhang = new Soldier('战士', '张三', 1000, 200, '', weapon);

            var text = zhang.getSoldierAttackText(lisi);
            expect(text).toBe('战士张三用毒剑攻击了普通人李四,李四受到了210点伤害,李四中毒了,李四剩余生命:790\n');
        });
    });

    describe('#getAttackText', function() {
        it('should return correct text', function() {
            var Soldier = require('../src/model/soldier');
            var Weapon = require('../src/model/weapon');
            var Player = require('../src/model/player');
            var weapon = new Weapon('毒剑', 10);
            var lisi = new Player('普通人', '李四', 1000, 200, '中毒');
            var zhang = new Soldier('战士', '张三', 1000, 200, '', weapon);

            var text = zhang.getAttackText(lisi);
            expect(text).toBe('战士张三用毒剑攻击了普通人李四,李四受到了210点伤害,李四剩余生命:790\n');

        });
    });
});