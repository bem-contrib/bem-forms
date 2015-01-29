/**
 * @module form-field
 */
modules.define('form-field',
    ['validation', 'validation_required', 'validation_card'],
    function(provide, Validation, validate_required, validate_card, FormField) {

/**
 * Required form-field validation

 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'validate', modVal : 'card' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._status = null;

                this._validator = Validation.create();
                this._validator.push(validate_required('Поле обязательно!'));
                this._validator.push(validate_card());

                this.on('blur', this.validate);
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
