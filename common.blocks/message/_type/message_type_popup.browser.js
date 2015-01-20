/**
 * @module message
 */
modules.define('message',
    function(provide, Message) {

/**
 * Message type popup
 *
 * @exports
 * @class message
 * @bem
 */
Message.decl({ block : this.name, modName : 'type', modVal : 'popup' }, /** @lends message.prototype */{

    /**
     * Returns message val
     * @protected
     * @returns {BEM}
     */
    getVal : function() {
        return this._val;
    },
    /**
     * Set message val
     * @protected
     * @returns {BEM}
     */
    setVal : function(message) {
        message = String(message);

        var popup = this.findBlockOn(this.elem('control'), 'popup');
        popup.setAnchor(this);
        popup.setContent(message);
        this._val = message;

        message && this._val?
            popup.setMod('visible') :
            popup.delMod('visible');

        return this;
    }
});

provide(Message);

});
