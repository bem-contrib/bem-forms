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
                    this.bindTo('submit', function(e) {
                        this._onSubmit(e);
                    });
                }
            }
        },

        /**
         * onSubmit event handler
         *
         * @private
         * @param {Event}
         */
        _onSubmit : function(e) {
            if(this.validate()) e.preventDefault();
        },

        /**
         * Get all invalid form-fields
         *
         * @public
         * @returns {Array}
         */
        getInvalidFields : function() {
            var currentFields = this.getFields(),
                invalid = [];

            for(var i = 0, l = currentFields.length; i < l; i++) {
                var f = this.currentFields[i];

                if(!f.getStatus()) invalid.push(f);
            }

            return invalid;
        },

        /**
         * Get form status
         *
         * @public
         * @returns {String}
         */
        getStatus : function() {
            var currentFields = this.getFields();

            for(var i = 0, l = currentFields.length; i < l; i++) {
                if(!currentFields[i].getStatus()) return false;
            }

            return true;
        },

        /**
         * Check form validaty state
         *
         * @public
         * @returns {Boolean}
         */
        validate : function() {
            var currentFields = this.getFields();

            for(var i = 0, l = currentFields.length; i < l; i++) {
                currentFields[i].validate();
            }

            this._updateView();
        },

        /**
         * Update form modifier `invalid` according to current validity state.
         * This method can be overriden in projects based on `bem-forms`
         *
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
