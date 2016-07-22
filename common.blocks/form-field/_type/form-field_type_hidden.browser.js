modules.define('form-field',
    function(provide, FormField) {

provide(FormField.declMod({ modName : 'type', modVal : 'hidden' }, {

    onSetMod : {
        'disabled' : function(modName, modVal) {
            this.getControl().prop('disabled', modVal);
        }
    },

    setVal : function(val) {
        this.getControl().val(val);
    },

    getVal : function() {
        return this.getControl().val();
    },

    getControl : function() {
        return this._control || (this._control = this.domElem.find('input'));
    }

}));

});
