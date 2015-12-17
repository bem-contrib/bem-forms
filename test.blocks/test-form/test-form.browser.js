/**
 * @module test-form
 */
modules.define('test-form',
    ['i-bem__dom'],
    function(provide, BEMDOM) {
/**
 * test-form block
 */
provide(BEMDOM.decl(this.name, /** @lends test-form.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._form = this.findBlockInside('form');
                this._form.on('submit', function(e, val) {
                    this._form.validate();
                    /* true - valid; false - invalid */
                    if(this._form.getStatus()) {
                        this._form.getMessage().hide();
                        console.log(val);
                    } else {
                        this._form.getMessage().show();
                        this._form.getInvalidFields()[0].getControl().elem('control').focus();
                    }
                }.bind(this));

                console.log(this.findBlockInside('select').getVal().length);

                // You can bind to other form events
                // this._form.on('change', function(e, data) {
                //     console.log('changed form', data);
                // });

                // this._form.on('focus', function(e, data) {
                //     console.log('focused form', data);
                // });
            }
        }
    }

}));

});
