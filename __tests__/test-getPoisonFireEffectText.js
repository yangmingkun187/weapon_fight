jest.dontMock('../src/model/poison-fire-effect');
jest.dontMock('../src/model/player');

describe('poison-fire-effect', function() {
    describe('getPoisonFireEffectText', function() {
        it('should return correct text', function() {
            var Player = require('../src/model/player');
            var PoisonFireEffect = require('../src/model/poison-fire-effect');

            var lisi = new Player('普通人', '李四', 1000, 200, '中毒');
            var poisonFireEffect = new PoisonFireEffect('毒性', 2);
            var text = poisonFireEffect.getPoisonFireEffectText(lisi);
            expect(text).toBe('李四受到2点毒性伤害,李四剩余生命:998');
        });
    });
});
