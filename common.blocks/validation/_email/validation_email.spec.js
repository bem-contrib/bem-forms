modules.define('spec',
    ['validation', 'validation_email'],
    function(provide, Validation, ValidationEmail) {

describe('validation_email', function() {

    var message = 'Field requires email inside',
        validators;

    beforeEach(function() {
        validators = Validation.create();
        validators.push(new ValidationEmail({
            message : message
        }));
    });

    it.skip('should contain @', function() {
        (validators.check('test@test.test') === null).should.be.true;
    });

    it.skip('should show validation message', function() {
        (validators.check('ololo') || '').should.equal(message);
    });

});

provide();

});
