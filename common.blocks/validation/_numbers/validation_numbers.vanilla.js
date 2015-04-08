/**
 * @module validation_numbers
 */

modules.define('validation_numbers',
    ['objects'],
    function(provide, objects) {

    var DEFAULT_MESSAGE = 'Should be a number (e.g. 123.45)';
    var NUMBERS_RE = /^\d+(\.\d+)?$/;

    provide(function(params) {
        params = params || {};
        var message = params.message || DEFAULT_MESSAGE;

        if(objects.isEmpty(params)) {
            params = null;
        } else {
            if(params.min) {
                params.min = Number(params.min);
            }
            if(params.max) {
                params.max = Number(params.max);
            }
        }

        return function(val) {
            if(!val) {
                return null;
            }

            if(!NUMBERS_RE.test(val)) {
                return message;
            }

            if(!params) {
                return null;
            }

            val = Number(val);
            if(params.min && val < params.min) {
                return message;
            }
            if(params.max && val > params.max) {
                return message;
            }

            return null;
        };
    });

});
