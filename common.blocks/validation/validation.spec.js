modules.define('spec',
    ['validation', 'chai'],
    function(provide, Validation, chai) {

var expect = chai.expect;

describe('validation', function() {

    it.skip('run should returns null by default', function() {
        expect(Validation.create().check('anything')).to.be.null;
    });

    it.skip('run should returns error', function() {
        Validation
            .create(function (val) { return val === '5'? null : 'Ouch!'; })
            .check('not 5')
            .should.be.eq('Ouch!');
    });
});

provide();

});
