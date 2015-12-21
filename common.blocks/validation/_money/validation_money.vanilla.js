/**
 * @module validation_money
 */
modules.define('validation_money',
    function(provide) {

var DEFAULT_MESSAGE = 'Field should be filled with money amount',
    MONEY_RE = /^-?\d+(\.\d{1,2})?$/;

provide(function(field) {
    return function(val) {
        return !val || MONEY_RE.test(val)? null : {
            field : field.getName() || field.getId(),
            message : field.getValidationMessage('money') || DEFAULT_MESSAGE
        };
    };
});

});
