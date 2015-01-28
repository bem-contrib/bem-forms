/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {

/**
 * Base form-field__message class
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'message' }, /** @lends form-field.prototype */{

    /**
     * Return instance of message block
     * @protected
     * @abstract
     */
    _getMessage : function() {
        return this._message || (this._message = this.findBlockInside('message'));
    },

    /**
     * Return message value
     * @public
     * @abstract
     */
    getMessageVal : function() {
        return this._getMessage().getVal();
    },

    /**
     * Set message value
     * @public
     * @abstract
     */
    setMessageVal : function(val) {
        this._getMessage().setVal(val);
        this.emit('message-change');
        return this;
    }
});

provide(FormField);

});
