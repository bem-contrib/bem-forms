modules.define('spec',
    ['validation', 'validation_length'],
    function(provide, Validation, Length) {

describe('validation_length', function() {

    var validators;

    beforeEach(function() {
        validators = Validation.create();
    });

    it.skip('should check wrong length', function() {
        validators.push(new Length({
            message : 'error',
            length : 5
        }));

        validators.check('').should.equal('error');
        validators.check('1234').should.equal('error');
    });

    it.skip('should check right length', function() {
        validators.push(new Length({
            message : 'error',
            length : 5
        }));

        (validators.check('12345') === null).should.equal(true);
    });

    it.skip('should check null params', function() {
        validators.push(new Length());

        (validators.check('12345') === null).should.equal(true);
    });

});

provide();

});
