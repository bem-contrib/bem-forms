/**
 * @module validation_email
 */

modules.define('validation_email',
    function (provide) {

    var DEFAULT_MESSAGE = 'Field requires email inside';

    // http://habrahabr.ru/post/175375/
    // или так? http://www.ex-parrot.com/pdw/Mail-RFC822-Address.html
    // в идеале проверка на a/mx
    var EMAIL_RE = /.+@.+/;

    provide(function (message) {
        message = message || DEFAULT_MESSAGE;

        return function (val) {
            return !val || EMAIL_RE.test(val)? null : message;
        };
    });

});
