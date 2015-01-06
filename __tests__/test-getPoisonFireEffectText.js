jest.dontMock('../src/model/soldier');
jest.dontMock('../src/model/weapon');
jest.dontMock('../src/model/player');

describe('poison-fire-effect', function() {
    describe('getPoisonFireEffectText', function() {
        it('should return correct text', function() {
            var Soldier = require('../src/model/soldier');
            var Weapon = require('../src/model/weapon');
            var Player = require('../src/model/player');

            var text = getPoisonFireEffectText();
            expect(text).toBe('李四受到2点毒性伤害, 李四剩余生命：998');
        });
    });
});
