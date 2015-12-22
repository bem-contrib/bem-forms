modules.define('checkbox',
    function(provide, Checkbox) {
/**
 * @exports
 * @class checkbox
 * @augments control
 * @bem
 */
provide(Checkbox.decl({
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
