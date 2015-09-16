/**
 * @module validation_email
 */

modules.define('validation_email',
function(provide) {

var DEFAULT_MESSAGE = 'Field requires email inside',

    EMAIL_RE = /^([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/;

provide(function(params) {
    params = params || {};
    var message = params.message || DEFAULT_MESSAGE;

    return function(val) {
        return !val || EMAIL_RE.test(val)? null : message;
    };
});

});
