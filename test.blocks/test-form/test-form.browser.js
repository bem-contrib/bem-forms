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

                this._form.setMod('disabled');

                this._form.on('submit', function(e, val) {
                    console.log(val);
                });
            }
        }
    }

}));

});
