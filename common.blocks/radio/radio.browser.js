modules.define('radio', ['i-bem-dom'],
    function(provide, bemDom, Radio) {
/**
 * @exports
 * @class radio
 * @augments control
 * @bem
 */
provide(bemDom.declBlock(Radio, {
    /**
     * Emit change event
     * @private
     */
    _onChange : function() {
        this.__base.apply(this, arguments);
        this._emit('change');
    }
}));

});
