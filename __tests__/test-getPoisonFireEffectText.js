jest.dontMock('../src/model/poison-fire-effect');
jest.dontMock('../src/model/effect');
jest.dontMock('../src/model/player');
jest.dontMock('../src/model/weapon');
jest.dontMock('../src/model/soldier');

describe('poison-fire-effect', function() {
    describe('.getPoisonFireEffectText', function() {
        it('should return correct text', function() {
            var PoisonFireEffect = require('../src/model/poison-fire-effect');
            var Soldier = require('../src/model/soldier');
            var Weapon = require('../src/model/weapon');
            var Player = require('../src/model/player');
            var Effect = require('../src/model/effect');

            var effect = new Effect('毒性', 2, 2, 100, '中毒');
            var weapon = new Weapon('毒剑', 10, effect);
            var zhang = new Soldier('战士', '张三', 1000, 200, '', weapon);
            var lisi = new Player('普通人', '李四', 1000, 200, '');

            var text = PoisonFireEffect.getPoisonFireEffectText(zhang, lisi);
            expect(text).toBe('李四受到2点毒性伤害,李四剩余生命:998\n');
        });
    });
});
