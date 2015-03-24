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
         * Get form status
         * @public
         * @returns {String}
         */
        getStatus : function() {
            this._broken = [];

            for(var i = 0; i < this.fields.length; i++) {
                this._status = this.fields[i].getStatus();
            }

            return this._status;
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

            this._updateView();

            return !this._broken.length;
        },

        /**
        * This method can be overrided in project connected with bem-forms
        * @private
        */
        _updateView : function() {
            this.toggleMod('invalid', true, Boolean(this._broken));
            this._broken.length && this._broken[0].getControl().setMod('focused');
        }
    },
    {
        live : false
    });

provide(Form);

});
