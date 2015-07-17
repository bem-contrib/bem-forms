/**
 * @module message
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
                console.log('this is test');

                this._form = this.findBlockInside('form');

                this._form.on('submit', function(e, val) {
                    this._prepare(val);
                }.bind(this));
            }
        }
    },

    _prepare : function(val) {
        console.log(val);

        // exec validators
        this._form.validate();

        // get status
        // true - valid
        // false - invalid
        if(this._form.getStatus()) {
            console.log('valid');
        } else {
            console.log('invalid');
        }

    }

}));

});
