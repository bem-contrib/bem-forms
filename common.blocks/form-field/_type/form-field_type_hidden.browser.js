modules.define('form-field', function(provide, FormField) {

    provide(FormField.decl({ modName : 'type', modVal : 'hidden' }, {

        setVal : function(val) {
            this.params.value = val;
        },

        getVal : function() {
            return this.params.value || '';
        }

    }));
});
