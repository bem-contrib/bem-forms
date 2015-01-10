/**
 * @module validation_pattern
 */

modules.define('validation_pattern',
    function (provide) {

    var DEFAULT_MESSAGE = 'Should match provided pattern "%s"';

    provide(function (message, params) {
        if(!params.value) {
            return function () {
                return null;
            };
        }

        message = message || DEFAULT_MESSAGE.replace(/%s/g, params.value);

        var re = new RegExp(params.value);

        return function (val) {
            return !val || re.test(val)? null : message;
        };

    });

});
