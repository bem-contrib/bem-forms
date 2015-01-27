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

        /**
         * Get message value
         * @abstract
         */
        getVal : function() {
        },
        /**
         * Set message value
         * @param {*|String} val
         * @abstract
         */
        setVal : function() {
        }
    }));

});
