jest.autoMockOff();

describe('vertigoState', function() {
    describe('#getStateText', function() {
        it('should return 李四眩晕了', function() {
            var VertigoState = require('../src/model/state/vertigoState');
            var Player = require('../src/model/player');

            var effect = new VertigoState('眩晕', 0, 2, 1);
            var lisi = new Player('普通人', '李四', 1000, 200, '');
            var text = effect.getStateText(lisi);
            expect(text).toBe('李四眩晕了,无法攻击,眩晕还剩:1轮\n');
        });
    });
});
