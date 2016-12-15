/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {
/**
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'message', modVal : 'popup' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.setMessageAnchor(this.getControl());
            }
        }
    },

    setMessageAnchor : function (anchor) {
        this.getMessage().setAnchor(anchor);
    }

});

provide(FormField);

});
