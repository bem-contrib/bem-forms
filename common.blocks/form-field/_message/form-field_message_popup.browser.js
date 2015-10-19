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
FormField.decl({ block : this.name, modName : 'message', modVal : 'popup' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                /* istanbul ignore else: no way to check, form-field throws without `type` */
                if(this.hasMod('type')) {
                    this.getMessage().setAnchor(this.getControl());
                }
            }
        }
    }

});

provide(FormField);

});
