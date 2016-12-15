/**
 * @module validation_length
 */

modules.define('validation_length',
    function(provide) {

var DEFAULT_MESSAGE = 'Incorrect length';
provide(function(field) {
    var message = field.getValidationMessage('length') || DEFAULT_MESSAGE;

    if(field.params.equal) {
        field.params.min = Number(field.params.equal);
        field.params.max = Number(field.params.equal);
    }
    if(field.params.min && !field.params.equal) {
        field.params.min = Number(field.params.min);
    }
    if(field.params.max && !field.params.equal) {
        field.params.max = Number(field.params.max);
    }

    return function(val) {

        if(val.length < field.params.min) {
            return {
                field : field.getName() || field.getId(),
                message : message
            };
        }

        if(val.length > field.params.max) {
            return {
                field : field.getName() || field.getId(),
                message : message
            };
        }

        return null;
    };
});

});
