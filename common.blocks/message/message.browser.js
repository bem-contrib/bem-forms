/**
 * @module message
 */
modules.define('message',
    ['i-bem-dom'],
    function(provide, bemDom) {
/**
 * Message block
 */
provide(bemDom.declBlock(this.name, /** @lends message.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._val = '';
            }
        }
    },
    /**
     * Get message value
     * @abstract
     */
    getVal : function() {
        return this._val;
    },
    /**
     * Set message value
     * @param {*|String} val
     * @abstract
     */
    setVal : function(val) {
        this._val = val;
    },
    /**
     * Show message
     */
    show : function() {
        this.setMod('showed');
    },
    /**
     * Hide message
     */
    hide : function() {
        this.delMod('showed');
    },
    /**
     * Toggle message visibility
     */
    toggle : function() {
        this.toggleMod('showed');
    }
}));

});
