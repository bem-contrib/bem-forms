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
         * Get all invalid form-fields
         * @public
         * @returns {Array}
         */
        getInvalidFields : function() {
            var invalid = [];

            for(var i = 0, l = this.fields.length; i < l; i++) {
                var f = this.fields[i];

                f.getStatus() || invalid.push(f);
            }

            return invalid;
        },

        /**
         * Get form status
         * @public
         * @returns {String}
         */
        getStatus : function() {
            this._status = true;

            for(var i = 0; i < this.fields.length; i++) {
                this._status = this.fields[i].getStatus();
                if(!this._status) break;
            }

            return this._status;
        },

        /**
         * Validate form
         * @public
         * @returns {Boolean}
         */
        validate : function() {
            for(var i = 0; i < this.fields.length; i++) {
                this.fields[i].validate();
            }

            this._updateView();
        },

        /**
        * This method can be overrided in project connected with bem-forms
        * @protected
        */
        _updateView : function() {
            this.toggleMod('invalid', true, Boolean(this.getStatus()));
        }
    },
    {
        live : false
    });

provide(Form);

});
