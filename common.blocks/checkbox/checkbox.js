modules.define('checkbox', ['i-bem__dom'], function(provide, BEMDOM, Checkbox) {

    /**
     * @exports
     * @class checkbox
     * @augments control
     * @bem
     */
    provide(Checkbox.decl({
        _onChange : function() {
            this.__base.apply(this, arguments);
            this.emit('change');
        }
    }));

});
