modules.define('checkbox', ['i-bem-dom'],
    function(provide, bemDom, Checkbox) {
/**
 * @exports
 * @class checkbox
 * @augments control
 * @bem
 */
provide(bemDom.declBlock(Checkbox, {
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
