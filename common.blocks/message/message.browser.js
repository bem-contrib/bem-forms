/**
 * @module message
 */
modules.define('message',
    ['i-bem__dom', 'control'],
    function(provide, BEMDOM, Control) {

    /**
     * Message block
     */
    provide(BEMDOM.decl({ block : this.name, baseBlock : Control }, /** @lends message.prototype */{

        /**
         * Set message value
         * @param {*|String} val
         * @abstract
         */
        setVal : function() {
        }
    }));

});
