modules.define('spec', ['validation', 'validation_card'], function(provide, Validation, ValidationCard) {

    describe('validation_card', function() {

        var message = 'incorrect',
            validators;

        beforeEach(function() {
            validators = Validation.create();
            validators.push(new ValidationCard(message));
        });

        it('should allow 16 digits', function() {
            // (validators.check('1111222233334444') || '').should.not.equal(message);

            validators.check('111122223333444').should.equal(message);
            validators.check('1111 2222 3333 4444').should.equal(message);
            validators.check('111122223333444g').should.equal(message);
        });

        it('should allow 18 digits', function() {
            // (validators.check('111122223333444455') || '').should.not.equal(wrong_length);

            validators.check('11112222333344445').should.equal(message);
            validators.check('1111 2222 3333 444455').should.equal(message);
        });

        it('should perform luhn validation', function() {
            // (validators.check('4556476864401221') || '').should.not.equal(message);
            // (validators.check('6706708844149056') || '').should.not.equal(message);

            validators.check('4556476864401222').should.equal(message);
            validators.check('111122223333444455').should.equal(message);
        });

        it('should check card type', function() {
            // valid card number, but not visa, mastercard or maestro
            validators.check('3337947503486698').should.equal(message);
            validators.check('6706708844149056').should.equal(message);

            // MasterCard
            (validators.check('5193785732641552') || '').should.not.equal(message);

            // Visa
            (validators.check('4511492137529676') || '').should.not.equal(message);

            // Visa Electron
            (validators.check('4026578163466581') || '').should.not.equal(message);

            // Maestro
            (validators.check('6759926535993220') || '').should.not.equal(message);
        });
    });

    provide();
});
