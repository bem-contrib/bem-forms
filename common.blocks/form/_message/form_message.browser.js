/**
 * @module form
 */
modules.define('form',
    function(provide, Form) {
/**
 * Base form__message class
 *
 * @exports
 * @class form
 * @bem
 */
Form.decl({ block : this.name, modName : 'message' }, /** @lends form.prototype */{
    /**
     * Return instance of message block
     * @protected
     * @abstract
     */
    getMessage : function() {
        return this._message || (this._message = this.findBlockOn('message', 'message'));
    },
    /**
     * Return message value
     * @public
     * @abstract
     */
    getMessageVal : function() {
        return this.getMessage().getVal();
    },
    /**
     * Set message value
     * @public
     * @abstract
     */
    setMessageVal : function(val) {
        this.getMessage().setVal(val);
        this.emit('message-change');
        return this;
    }
});

provide(Form);

});
