/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {
/**
 * Field block
 */
FormField.decl(this.name, /** @lends form-field.prototype */{

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
    },
    /**
     * debug override
     * @returns {Promise}
     */
    validate : function() {
        return this.__base.apply(this, arguments).then(function(error) {
            error && console.warn(error);
            return error;
        });
    }
});

provide(FormField);

});
