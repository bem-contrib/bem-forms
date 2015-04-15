modules.define('spec', ['validation', 'validation_numbers'], function(provide, Validation, ValidationNumbers) {

    describe('validation_numbers', function() {

        var min = 20,
            max = 120,
            message = 'Should be a number and in the range from' + min + ' to ' + max,
            validators;

        beforeEach(function() {
            validators = Validation.create();
            validators.push(new ValidationNumbers({
                message : message,
                min : min,
                max : max
            }));
        });

        it('should be a number', function() {
            (validators.check('99') === null).should.be.true;
            (validators.check('99.9') === null).should.be.true;
            (validators.check('99.99') === null).should.be.true;
        });

        it('should be a number is less than range', function() {
            validators.check('10').should.equal(message);
        });

        it('should be a number has more range', function() {
            validators.check('999').should.equal(message);
        });

        it('should show validation message', function() {
            validators.check('-99').should.equal(message);
            (validators.check('ololo12.09') || '').should.equal(message);
            (validators.check('12.') || '').should.equal(message);
        });

    });

    provide();
});
