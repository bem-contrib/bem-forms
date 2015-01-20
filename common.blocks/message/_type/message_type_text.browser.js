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
 * @class form-field
 * @bem
 */
Message.decl({ block : this.name, modName : 'type', modVal : 'text' }, /** @lends form-field.prototype */{

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
        this.domElem.text(messsage);
    }
});

provide(Message);

});
