jest.autoMockOff();

describe('vertigoEffect', function() {
    describe('#getEffectState', function() {
        it('should return 李四晕倒了', function() {
            var VertigoEffect = require('../src/model/effect/vertigoEffect');
            var Player = require('../src/model/player');

            var effect = new VertigoEffect('眩晕', 2, 2, 100);
            var lisi = new Player('普通人', '李四', 1000, 200, '');

            var text = effect.getEffectState(lisi);
            expect(text).toBe('李四晕倒了,');
        });
    });
});


