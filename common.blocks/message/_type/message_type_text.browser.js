/**
 * @module message
 */
modules.define('message',
    ['jquery'],
    function(provide, $, Message) {

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
    setVal : function(messsage) {
        messsage = String(messsage);

        this.domElem.text(messsage);

        return this;
    }
});

provide(Message);

});
