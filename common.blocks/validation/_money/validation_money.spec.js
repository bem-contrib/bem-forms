modules.define('spec',
    ['validation', 'validation_money'],
    function(provide, Validation, ValidationMoney) {

describe('validation_money', function() {

    var message = 'Field should be filled with money amount',
        validators;

    beforeEach(function() {
        validators = Validation.create();
        validators.push(new ValidationMoney({
            message : message
        }));
    });

    it.skip('should be filled with money amount', function() {
        (validators.check('0') === null).should.be.true;
        (validators.check('10') === null).should.be.true;
        (validators.check('-10') === null).should.be.true;
        (validators.check('10.00') === null).should.be.true;
        (validators.check('-10.00') === null).should.be.true;
        (validators.check('10.0') === null).should.be.true;
        (validators.check('-10.0') === null).should.be.true;
    });

    it.skip('should show validation message', function() {
        validators.check('-1-0.00').should.equal(message);
        (validators.check('ololo12.09') || '').should.equal(message);
    });

});

provide();

});
