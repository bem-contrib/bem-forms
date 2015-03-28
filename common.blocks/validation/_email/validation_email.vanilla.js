/**
 * @module validation_email
 */

modules.define('validation_email',
    function(provide) {

    var DEFAULT_MESSAGE = 'Field requires email inside';

    // http://habrahabr.ru/post/175375/
    var EMAIL_RE = /.+@.+/;

    provide(function(params) {
        var message = params.message || DEFAULT_MESSAGE;

        return function(val) {
            return !val || EMAIL_RE.test(val)? null : message;
        };
    });

});
