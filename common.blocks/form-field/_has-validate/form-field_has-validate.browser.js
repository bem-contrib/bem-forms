/**
 * @module form-field
 */
modules.define('form-field',
    ['i-bem__dom', 'validation'],
    function(provide, BEMDOM, Validation, FormField) {

/**
 * Field block
 */
FormField.decl({ block : this.name, modName : 'has-validate', modVal : true }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._status = null;
                this.on('blur', this.validate);
            }
        }
    },

    getValidator : function() {
        return this._validator || (this._validator = Validation.create());
    },

    /**
     * Validate form-field
     * @public
     * @returns {Boolean}
     */
    validate : function() {
        this._status = this.getValidator().check(this.getVal());
        this._updateStatus();

        return this._status;
    },

    _updateStatus : function() {
        this.toggleMod('invalid', true, Boolean(this._status));

        this.getControl().toggleMod('invalid', true, Boolean(this._status));

        // Use it in your levels
        // this.hasMod('message') && this.setMessageVal(this._status);
    }
});

provide(FormField);

});
