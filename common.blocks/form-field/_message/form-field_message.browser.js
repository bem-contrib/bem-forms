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
     * @public
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
    },
    /**
     * Update statuses on form-field and elements: message
     *
     * @protected
     */
    _updateStatus : function() {
        this.__base.apply(this, arguments);

        if(!this.hasMod('message')) {
            console.warn('Message modifier required for form-field', this); // jshint ignore:line
            return;
        }

        var status = this._status;
        this.getMessage().toggleMod('invalid', true, Boolean(status));
        if(status && status.message) this.setMessageVal(status.message);
    }
});

provide(FormField);

});
