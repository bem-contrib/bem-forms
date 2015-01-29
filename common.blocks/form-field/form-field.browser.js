/**
 * @module form-field
 */
modules.define('form-field',
    ['i-bem__dom', 'validation'],
    function(provide, BEMDOM, Validation) {

/**
 * Field block
 */
provide(BEMDOM.decl(this.name, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._status = null;
                this._validator = Validation.create();

                this.on('blur', this.validate);
            }
        }
    },

    /**
     * Validate form-field
     * @public
     * @returns {Boolean}
     */
    validate : function() {
        this._status = this._validator.check(this.getVal());
        this._updateStatus();

        return !Boolean(this._status);
    },

    _updateStatus : function() {
        this.toggleMod('invalid', true, Boolean(this._status));

        this.hasMod('message') && this.setMessageVal(this._status);
    },

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
}, /** @lends form-field */{
    live : true
}));

});
