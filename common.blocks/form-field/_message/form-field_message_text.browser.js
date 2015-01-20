/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {

/**
 * Message type text
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'message', modVal : 'text' }, /** @lends form-field.prototype */{

    /**
     * Returns text message of field
     * @protected
     * @returns {BEM}
     */
    getMessage : function() {
        return this.elem('message').text();
    },
    /**
     * Set text message of field
     * @protected
     * @returns {BEM}
     */
    setMessage : function(messsage) {
        return this.elem('message').text(messsage);
    }
});

provide(FormField);

});
