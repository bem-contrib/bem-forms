/**
 * @module validation_money
 */

modules.define('validation_money',
    function (provide) {

    var DEFAULT_MESSAGE = 'Field should be filled with money amount';
    var MONEY_RE = /^-?\d+(\.\d{1,2})?$/;

    provide(function (message) {
        message = message || DEFAULT_MESSAGE;

        return function (val) {
            return !val || MONEY_RE.test(val)? null : message;
        };
    });

});
