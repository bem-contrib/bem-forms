modules.define(
    'test',
    ['i-bem-dom', 'form'],
    function(provide, bemDom, Form) {
provide(bemDom.declBlock(this.name, /** @lends app.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._form = this.findChildBlock(Form);
            }
        }
    }
}));

});
