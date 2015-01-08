jest.autoMockOff();

describe('poison-fire-effect', function() {
    describe('#getEffectState', function() {
        it('should return correct 李四中毒了', function() {
            var PoisonFireEffect = require('../src/model/effect/poison-fire-effect');
            var Player = require('../src/model/player');

            var effect = new PoisonFireEffect('毒性', 2, 2, 100, '中毒');
            var lisi = new Player('普通人', '李四', 1000, 200, '');

            var text = effect.getEffectState(lisi);
            expect(text).toBe('李四中毒了,');
        });

        it('should return correct 李四着火了', function() {
            var PoisonFireEffect = require('../src/model/effect/poison-fire-effect');
            var Player = require('../src/model/player');

            var effect = new PoisonFireEffect('火焰', 2, 2, 100, '中毒');
            var lisi = new Player('普通人', '李四', 1000, 200, '');

            var text = effect.getEffectState(lisi);
            expect(text).toBe('李四着火了,');
        });
    });
});
