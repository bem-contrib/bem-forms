modules.define('spec',
    ['validation', 'validation_required'],
    function(provide, Validation, ValidationRequired) {

describe('validation_required', function() {

    var validators;

    beforeEach(function() {
        validators = Validation.create();
        validators.push(new ValidationRequired());
    });

    it.skip('should detect empty value');

});

provide();

});
