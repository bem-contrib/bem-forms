/**
 * @module form
 */
modules.define('form',
    function(provide, Form) {

/**
 * Field block
 */
Form.decl({ block : this.name, modName : 'has-validate', modVal : true }, /** @lends form.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.fields = this.getFields();

                this.bindTo('submit', function(e) {
                    this._onSubmit(e);
                });
            }
        }
    },

    _onSubmit : function(e) {
        if(this.validate()) {
            e.preventDefault();
        }
    },

    /**
     * Validate form
     * @public
     * @returns {Boolean}
     */
    validate : function() {
        var status;
        this._broken = [];

        for(var i = 0; i < this.fields.length - 1; i++) {
            status = this.fields[i].validate();
            status && this._broken.push(this.fields[i]);
        }

        this._updateStatus();

        return !!this._broken.length;
    },

    _updateStatus : function() {
        this.toggleMod('invalid', true, Boolean(this._broken));
        this._broken[0].getControl().setMod('focused');

        // Use it in your levels
    }
},
{
    live : false
});

provide(Form);

});
