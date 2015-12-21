modules.define('spec',
    ['validation', 'validation_pattern'],
    function(provide, Validation, ValidationPattern) {

describe('validation_pattern', function() {

    var validators;

    beforeEach(function() {
        validators = Validation.create();
        validators.push(new ValidationPattern({
            value : /asd/
        }));
    });

    it.skip('should match pattern');

});

provide();

});
