/**
 * @module form__field
 */
modules.define('form__field',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

/**
 * Field block
 */
provide(BEMDOM.decl({ block : 'form', elem : 'field' }, /** @lends form__field.prototype */{
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
    }
}, {
    live : true
}));

});
