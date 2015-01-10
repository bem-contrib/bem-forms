/**
 * @module validation_required
 */

modules.define('validation_required',
    function (provide) {

    var DEFAULT_MESSAGE = 'Required field';

    provide(function (message) {
        message = message || DEFAULT_MESSAGE;

        return function (val) {
            return val? null : message;
        };
    });

});
