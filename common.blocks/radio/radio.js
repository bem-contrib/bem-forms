modules.define('radio', ['i-bem__dom'], function(provide, BEMDOM, Radio) {

    /**
     * @exports
     * @class radio
     * @augments control
     * @bem
     */
    provide(Radio.decl({
        _onChange : function() {
            this.__base.apply(this, arguments);
            this.emit('change');
        }
    }));

});
