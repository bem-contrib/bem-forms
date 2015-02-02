/**
 * @module form-field
 */
modules.define('form-field',
    ['validation_card'],
    function(provide, validate_card, FormField) {

/**
 * Card form-field validation

 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ modName : 'validate', modVal : 'card' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this._validator.push(validate_card());
            }
        }
    }

});

provide(FormField);

});
