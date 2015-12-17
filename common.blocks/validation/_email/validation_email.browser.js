/**
 * @module validation_email
 */
modules.define('validation_email',
    function(provide) {

var DEFAULT_MESSAGE = 'Field requires email inside',
    EMAIL_RE = /^([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/;

provide(function(field) {
    return function(val) {
        return !val || EMAIL_RE.test(val)? null : {
            field : field.getName() || field.getId(),
            message : field.getValidationMessage('email') || DEFAULT_MESSAGE
        };
    };
});

});
