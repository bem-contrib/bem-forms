/**
 * @module form
 */
modules.define('form',
    function(provide, FormField) {
/**
 *
 * @exports
 * @class form
 * @bem
 */
FormField.decl({ block : this.name, modName : 'message', modVal : 'popup' }, /** @lends form.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this.getMessage().setAnchor(this);
            }
        }
    }

});

provide(FormField);

});
