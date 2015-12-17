/**
 * @module validation_pattern
 */
modules.define('validation_pattern',
    function(provide) {

var DEFAULT_MESSAGE = 'Should match provided pattern "%s"';

provide(function(field) {
    if(!field.params.value) {
        return function () {
            return null;
        };
    }

    var re = new RegExp(field.params.value);
    return function(val) {
        return !val || re.test(val)?
            null :
            field.getValidationMessage('pattern') ||
            DEFAULT_MESSAGE.replace(/%s/g, field.params.value);
    };

});

});
