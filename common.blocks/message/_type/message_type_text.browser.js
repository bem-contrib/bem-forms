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
     * Returns message val
     * @protected
     * @returns {BEM}
     */
    getVal : function() {
        return this.domElem.text();
    },
    /**
     * Set message val
     * @protected
     * @returns {BEM}
     */
    setVal : function(message) {
        this.domElem.text(message);

        return this;
    }
});

provide(Message);

});
