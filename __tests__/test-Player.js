jest.dontMock('../src/model/player');
jest.dontMock('../src/model/soldier');
jest.dontMock('../src/model/armor');

describe('player', function() {
    var Soldier;
    var Player;
    var Armor;
    beforeEach(function() {
        Soldier = require('../src/model/soldier');
        Player = require('../src/model/player');
        Armor = require('../src/model/armor');
    });
    describe('#getPlayerAttackText', function() {
        it('should return correct text', function() {
            var armor = new Armor('阿克斯圣光盾', 7);
            var lisi = new Player('普通人', '李四', 1000, 200, '中毒');
            var zhang = new Soldier('战士', '张三', 1000, 200, '', {}, armor);

            var text = lisi.getPlayerAttackText(zhang);
            expect(text).toBe('普通人李四攻击了战士张三,攻击了200点伤害,张三的阿克斯圣光盾抵挡了7点伤害,张三还剩1000点血\n');
        });
    });

    describe('#attack', function() {
        it('should return correct object', function() {
            var armor = new Armor('阿克斯圣光盾', 10);
            var lisi = new Player('普通人', '李四', 1000, 200, '中毒');
            var zhang = new Soldier('战士', '张三', 1000, 200, '', {}, armor);

            var result = lisi.attack(zhang);
            expect(result).toBe(810);
        });
    });
});
