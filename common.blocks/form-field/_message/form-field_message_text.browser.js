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
        var elem = this._messsage || (this._message = this.elem('message'));
        return elem.text();
    },
    /**
     * Set text message of field
     * @protected
     * @returns {BEM}
     */
    setMessage : function(msg) {
        var elem = this._messsage || (this._message = this.elem('message'));
        return elem.text(msg);
    }
});

provide(FormField);

});
