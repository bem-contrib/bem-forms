/**
 * @module form
 */
modules.define('form',
    function(provide, Form) {
/**
 *
 * @exports
 * @class form
 * @bem
 */
Form.declMod({ modName : 'message', modVal : 'popup' }, /** @lends form.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.setMessageAnchor(this);
            }
        }
    },

    setMessageAnchor : function (anchor) {
        this.getMessage().setAnchor(anchor);
    }

});

provide(Form);

});
