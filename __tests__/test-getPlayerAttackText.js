jest.dontMock('../src/model/player');
jest.dontMock('../src/model/soldier');
jest.dontMock('../src/model/armor');

describe('player', function() {
    describe('#getPlayerAttackText', function() {
        it('should return correct text', function() {
            var Soldier = require('../src/model/soldier');
            var Player = require('../src/model/player');
            var Armor = require('../src/model/armor');

            var armor = new Armor('阿克斯圣光盾', 7);
            var lisi = new Player('普通人', '李四', 1000, 200, '中毒');
            var zhang = new Soldier('战士', '张三', 1000, 200, '', {}, armor);

            var text = lisi.getPlayerAttackText(zhang);
            expect(text).toBe('普通人李四攻击了战士张三,攻击了200点伤害,张三的阿克斯圣光盾抵挡了7点伤害,张三还剩1000点血\n');
        });
    });
});
