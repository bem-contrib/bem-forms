/**
 * @module message
 */
modules.define('message', ['popup'],
    function(provide, Popup, Message) {
/**
 * Message type popup
 *
 * @exports
 * @class message
 * @bem
 */
Message.declMod({ modName : 'type', modVal : 'popup' }, /** @lends message.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.getPopup().setAnchor(this.domElem);
            }
        }
    },
    /**
     * Returns message val
     * @protected
     * @returns {BEM}
     */
    setAnchor : function(anchor) {
        this.getPopup().setAnchor(anchor);
    },
    /**
     * Returns reference to popup block (cached).
     * @returns {BEM}
     */
    getPopup : function() {
        return this._popup || (this._popup = this.findChildBlock(Popup));
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

        this.getPopup().setContent(this._val);
    },
    /**
     * Show message in popup
     */
    show : function() {
        this.__base.apply(this, arguments);

        this.getPopup().setMod('visible');
    },
    /**
     * Hide message in popup
     */
    hide : function() {
        this.__base.apply(this, arguments);

        this.getPopup().delMod('visible');
    },
    /**
     * Toggle message in popup
     */
    toggle : function() {
        this.__base.apply(this, arguments);

        this.getPopup().toggleMod('visible');
    }
});

provide(Message);

});
