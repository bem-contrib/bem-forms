/**
 * @module form
 */
modules.define('form', ['message'],
    function(provide, Message, Form) {
/**
 * Base form__message class
 *
 * @exports
 * @class form
 * @bem
 */
Form.declMod({ modName : 'message', modVal : '*' }, /** @lends form.prototype */{
    /**
     * Return instance of message block
     * @protected
     * @abstract
     */
    getMessage : function() {
        return this._message || (this._message = this.findChildElem('message').findMixedBlock(Message));
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
        this._emit('message-change');
        return this;
    },

    _updateStatus : function(fieldsStatuses) {
        this.__base.apply(this, arguments);

        if(!this.hasMod('message')) {
            console.warn('Message modifier required for form', this); // jshint ignore:line
            return;
        }

        var status = this._status;
        this.getMessage().toggleMod('invalid', true, Boolean(status));
        if(status && status.message) this.setMessageVal(status.message);
    },
});

provide(Form);

});
