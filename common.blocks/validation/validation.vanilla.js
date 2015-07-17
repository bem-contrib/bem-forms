/**
 * @module validation
 */

modules.define(
'validation',
function (provide) {

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
 * @returns {BEM}
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
 *   and returns the first error or null
 *
 * @param {*} value
 * @? param {?function(?String)} fn
 * @returns {?String} - filled with an error or null if all is fine
 */
ptp.check = function(value) {
    for(var i = 0, l = this._stack.length; i < l; i++) {
        var res = this._stack[i](value);
        if(res !== null) {
            return res;
        }
    }
    return null;
};    

provide({
    /**
     * Static object creator
     *
     * @api
     * @returns {Validator}
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
