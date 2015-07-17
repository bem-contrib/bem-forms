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
    onSetMod : {
        'js' : {
            'inited' : function() {
                !this.hasMod('type') && console.warn('Type modifier required for form-field', this);
                !this.hasMod('name') && console.warn('Name required for form-field', this);
            }
        }
    },
    /**
     * Returns field name
     * @returns {String}
     * @public
     */
    getName : function() {
        return this.getMod('name');
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
}, /** @lends form-field */{
    live : true
}));

});
