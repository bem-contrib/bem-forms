/**
 * @module form-field
 */
modules.define('form-field',
    ['validation'],
    function(provide, Validation, FormField) {

/**
 * form-field_validate_*

 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'validate' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._status = null;
                this._validator = Validation.create();
            }
        }
    },

    /**
     * Returns control of field
     * @public
     * @returns {Boolean}
     */
    validate : function() {
        this._status = this._validator.check(this.getVal());
        this._updateStatus();
    },

    _updateStatus : function() {
        this.toggleMod('invalid', true, Boolean(this._status));

        this.hasMod('message') && this.setMessageVal(this._status);
    }

});

provide(FormField);

});
