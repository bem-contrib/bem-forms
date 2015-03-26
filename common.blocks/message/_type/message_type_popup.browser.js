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
                this.__base.apply(this, arguments);

                this._popup = this.findBlockInside('popup');

                this._popup.setAnchor(this);
            }
        }
    },

    /**
     * Returns message val
     * @protected
     * @returns {BEM}
     */
    setAnchor : function(anchor) {
        this._popup.setAnchor(anchor);
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
    setVal : function() {
        this.__base.apply(this, arguments);

        this._popup.setContent(this._val);
    },
    /**
     * Show message in popup
     */
    show : function() {
        this.__base.apply(this, arguments);

        this._popup.setMod('visible');
    },
    /**
     * Hide message in popup
     */
    hide : function() {
        this.__base.apply(this, arguments);

        this._popup.delMod('visible');
    },
    /**
     * Toggle message in popup
     */
    toggle : function() {
        this.__base.apply(this, arguments);

        this._popup.toggleMod('visible');
    }
});

provide(Message);

});
