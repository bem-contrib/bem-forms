/**
 * @module validation_pattern
 */

modules.define('validation_pattern',
    function(provide) {

var DEFAULT_MESSAGE = 'Should match provided pattern "%s"';

provide(function(params) {
    params = params || {};

    if(!params.value) {
        return function () {
            return null;
        };
    }

    var message = params.message || DEFAULT_MESSAGE.replace(/%s/g, params.value),
        re = new RegExp(params.value);

    return function(val) {
        return !val || re.test(val)? null : message;
    };

});

});
