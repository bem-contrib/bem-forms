/**
 * @module form-field
 */
modules.define('form-field', ['i-bem-dom'],
    function(provide, bemDom, FormField) {
/**
 * Field block
 */
provide(bemDom.declBlock(FormField, /** @lends form-field.prototype */{

    onSetMod : {
        'focused' : {
            'true' : function() {
                this.__base.apply(this, arguments);

                this.hasMod('invalid') && this.getMessage().show();
            },
            '' : function() {
                this.__base.apply(this, arguments);

                this.getMessage() && this.getMessage().hide();
            }
        }
    },
    /**
     * debug override
     * @returns {Promise}
     */
    validate : function() {
        return this.__base.apply(this, arguments).then(function(error) {
            error && console.warn(error); // jshint ignore:line
            return error;
        });
    }
}));

});
