/**
 * @module form-field
 */
modules.define('form-field',
    ['validation', 'validation_required'],
    function(provide, Validation, validation_required, FormField) {

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

                this._validator.push(validation_required());
            }
        }
    }

});

provide(FormField);

});
