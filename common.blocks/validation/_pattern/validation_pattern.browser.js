/**
 * @module validation_pattern
 */
modules.define('validation_pattern',
    function(provide) {

var DEFAULT_MESSAGE = 'Should match provided pattern "%s"';
provide(function(field) {
    if(!field.params.pattern && !field.params.pattern.value) {
        return function () {
            return null;
        };
    }

    var re = new RegExp(field.params.value);
    return function(val) {
        return !val || re.test(val)? null : {
            field : field.getName() || field.getId(),
            message : field.getValidationMessage('pattern') || DEFAULT_MESSAGE.replace(/%s/g, field.params.value)
        };
    };

});

});
