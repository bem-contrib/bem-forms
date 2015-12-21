modules.define('spec', ['validation', 'validation_minlength'], function(provide, Validation, MinLength) {

    describe('validation_MinLength', function() {

        var validators;

        beforeEach(function() {
            validators = Validation.create();
        });

        it('should check wrong length', function() {
            validators.push(new MinLength({
                message: 'error',
                length: 5
            }));

            validators.check('').should.equal('error');
            validators.check('1234').should.equal('error');
        });

        it('should check right length', function() {
            validators.push(new MinLength({
                message: 'error',
                length: 5
            }));

            (validators.check('12345') === null).should.equal(true);
        });

        it('should check null params', function() {
            validators.push(new MinLength());

            (validators.check('12345') === null).should.equal(true);
        });

    });

    provide();
});
