modules.define(
    'test',
    ['i-bem__dom'],
    function(provide, BEMDOM) {
provide(BEMDOM.decl(this.name, /** @lends app.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._form = this.findBlockInside('form');
            }
        }
    }
}));

});
