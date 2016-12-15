/**
 * @module validation_numbers
 */
modules.define('validation_numbers',
    function(provide) {

var DEFAULT_MESSAGE = 'Should be a number (e.g. 123.45)',
    NUMBERS_RE = /^\d+(\.\d+)?$/;

provide(function(field) {
    var message = field.getValidationMessage('numbers') || DEFAULT_MESSAGE;

    if(field.params.min) {
        field.params.min = Number(field.params.min);
    }
    if(field.params.max) {
        field.params.max = Number(field.params.max);
    }

    return function(val) {
        if(!val) {
            return null;
        }

        if(!NUMBERS_RE.test(val)) {
            return {
                field : field.getName() || field.getId(),
                message : message
            };
        }

        if(!field.params) {
            return null;
        }

        val = Number(val);
        if(field.params.min && val < field.params.min) {
            return {
                field : field.getName() || field.getId(),
                message : message
            };
        }
        if(field.params.max && val > field.params.max) {
            return {
                field : field.getName() || field.getId(),
                message : message
            };
        }

        return null;
    };
});

});
