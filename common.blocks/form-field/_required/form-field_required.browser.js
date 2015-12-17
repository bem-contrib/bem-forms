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
FormField.decl({ modName : 'required', modVal : true }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.setValidationMessages({ required : this.params.required });

                this.getValidator().push(validation_required(this));
            }
        }
    }

});

provide(FormField);

});
