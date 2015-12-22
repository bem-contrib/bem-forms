modules.define('radio',
    function(provide, Radio) {
/**
 * @exports
 * @class radio
 * @augments control
 * @bem
 */
provide(Radio.decl({
    /**
     * Emit change event
     * @private
     */
    _onChange : function() {
        this.__base.apply(this, arguments);
        this.emit('change');
    }
}));

});
