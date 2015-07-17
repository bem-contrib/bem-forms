/**
 * @module message
 */
modules.define('message',
function(provide, Message) {

/**
 * Message type text
 *
 * @exports
 * @class message
 * @bem
 */
Message.decl({ block : this.name, modName : 'type', modVal : 'text' }, /** @lends message.prototype */{

    /**
     * Set message val
     * @protected
     * @returns {BEM}
     */
    setVal : function() {
        this.__base.apply(this, arguments);

        this.domElem.text(this._val);

        return this;
    }
});

provide(Message);

});
