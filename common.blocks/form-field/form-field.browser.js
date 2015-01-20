/**
 * @module form-field
 */
modules.define('form-field',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

/**
 * Field block
 */
provide(BEMDOM.decl(this.name, /** @lends form-field.prototype */{
    /**
     * Returns field name
     * @returns {String}
     * @abstract
     */
    getName : function() {
        return '';
    },

    /**
     * Returns field value
     * @returns {String}
     * @abstract
     */
    getVal : function() {
        return '';
    },

    /**
     * Set value to field
     * @param {*|String} val
     * @abstract
     */
    setVal : function() {
    },

    /**
     * Return message of field
     * @protected
     * @abstract
     */
    getMessage : function() {
        return '';
    },

    /**
     * Set message of field
     * @param {*|String} message
     * @abstract
     */
    setMessage : function() {
    }
}, /** @lends form-field */{
    live : true
}));

});
