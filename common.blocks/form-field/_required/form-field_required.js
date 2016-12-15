/**
 * @module form-field
 */
modules.define('form-field',
    ['validation_required'],
    function(provide, validation_required, FormField) {
/**
 * Required form-field
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'required', modVal : true }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.params.required && this.setValidationMessages({
                    required : this.params.required.message
                });

                this.getValidator().push(validation_required(this));
            }
        }
    }

});

provide(FormField);

});
