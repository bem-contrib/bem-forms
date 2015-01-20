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
         * Return message value
         * @returns {String}
         * @abstract
         */
        getVal : function() {
            return '';
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
