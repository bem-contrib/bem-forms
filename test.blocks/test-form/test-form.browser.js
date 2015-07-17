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

                this.findBlockInside('form').on('submit', function(e, val) {
                    console.log(val);
                });
            }
        }
    }

}));

});
