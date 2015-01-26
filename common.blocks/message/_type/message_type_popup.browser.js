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

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._popup = this.findBlockOn(this.elem('control'), 'popup');
                this._popup.setAnchor(this);
            }
        }
    },
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
        this._val = String(message);
        this._popup.setContent(this._val);

        this._popup.toggleMod('visible', true, Boolean(this._val));

        return this;
    }
});

provide(Message);

});
