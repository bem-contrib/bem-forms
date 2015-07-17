/**
 * @module form-field
 */
modules.define('form-field',
['i-bem__dom', 'validation'],
function(provide, BEMDOM, Validation, FormField) {

/**
 * Field block
 */
FormField.decl({ block : this.name, modName : 'has-validation', modVal : true }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
            }
        }
    },
    /**
     * Extend by custom logic
     */
    _updateStatus : function() {
        this.__base.apply(this, arguments);

        if(this.getStatus() && this.getMessage()) {
            this.setMessageVal(this.getStatus());
            this.getMessage().show();
        }
    }
});

provide(FormField);

});
