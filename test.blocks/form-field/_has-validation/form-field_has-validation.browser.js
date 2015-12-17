/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {
/**
 * Field block
 */
FormField.decl({ block : this.name, modName : 'has-validation', modVal : true }, /** @lends form-field.prototype */{

    onSetMod : {
        'focused' : {
            'true' : function() {
                this.__base.apply(this, arguments);

                this.hasMod('invalid') && this.getMessage().show();
            },
            '' : function() {
                this.__base.apply(this, arguments);

                this.getMessage().hide();
            }
        }
    }
});

provide(FormField);

});
