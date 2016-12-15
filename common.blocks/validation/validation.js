/**
 * @module validation
 */
modules.define('validation',
    ['vow'],
    function (provide, Vow) {
/**
 * Validation container
 * @constructor
 */
function Validation() {
    this._stack = [];
}

var ptp = Validation.prototype;
ptp._stack = null;
/**
 * push validator to stack
 *
 * @param {Function} validator
 * @returns {Object}
 */
ptp.push = function (validator) {
    if(typeof validator !== 'function') {
        throw new Error('Expected function but instead saw ' + typeof validator);
    }
    this._stack.push(validator);
    return this;
};
/**
 * Runs all registered validators for a specified value
 * and returns the first error or null
 *
 * @param {*} value
 * @returns {Promise}
 */
ptp.check = function(value) {
    return Vow.all(this._stack.map(function(validationFunction) {
        return new Vow.Promise(function(resolve, reject) {
            var validation = Vow.resolve(validationFunction(value));
            return validation.then(function (res) {
                res !== null? reject(res) : resolve(null);
            });
        });
    }))
    .then(function () { return null; })
    .fail(function(error) { return error });
};

provide({
    /**
     * Static object creator
     *
     * @api
     * @returns {Object}
     */
    create : function() {
        var res = new Validation();
        if(arguments.length) {
            for(var i = 0, l = arguments.length; i < l; i++) {
                res.push(arguments[i]);
            }
        }
        return res;
    }
});

});
