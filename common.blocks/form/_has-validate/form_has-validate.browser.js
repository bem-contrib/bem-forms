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
            this.validate() && e.preventDefault();
        },

        /**
         * Validate form
         * @public
         * @returns {Boolean}
         */
        validate : function() {
            this._broken = [];

            for(var i = 0; i < this.fields.length; i++) {
                this._status = this.fields[i].validate();
                this._status && this._broken.push(this.fields[i]);
            }

            this._updateStatus();

            return !this._broken.length;
        },

        _updateStatus : function() {
            this.toggleMod('invalid', true, Boolean(this._broken));
            this._broken.length && this._broken[0].getControl().setMod('focused');

            // Use it in your levels
        }
    },
    {
        live : false
    });

provide(Form);

});
