/**
 * @module message
 */
modules.define('message',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

/**
 * Message block
 */
provide(BEMDOM.decl(this.name, /** @lends message.prototype */{

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
        return this._val = val;
    },
    /**
     * Show message
     */
    show : function() {
        this.setMod('visibility');
    },
    /**
     * Hide message
     */
    hide : function() {
        this.delMod('visibility');
    },
    /**
     * Toggle message visibility
     */
    toggle : function() {
        this.toggleMod('visibility');
    }
}));

});
