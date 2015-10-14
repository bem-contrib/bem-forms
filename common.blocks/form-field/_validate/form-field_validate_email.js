/**
 * @module form-field
 */
modules.define('form-field',
    ['validation_email', 'objects'],
    function(provide, validateEmail, objects, FormField) {

/**
 * E-mail form-field validation

 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ modName : 'validate', modVal : 'email' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.getValidator().push(validateEmail(this.params.email));
            }
        }
    }

});

provide(FormField);

});
