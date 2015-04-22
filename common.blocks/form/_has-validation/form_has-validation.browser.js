/**
 * @module form
 */
modules.define('form',
    ['vow'],
    function(provide, Vow, Form) {

/**
 * Field block
 */
Form.decl({ block : this.name, modName : 'has-validation', modVal : true }, /** @lends form.prototype */{

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
        e.preventDefault();
        var _this = this;
        this.checkValidity()
            .then(function () {
                _this.domElem.submit();
            });
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
            var f = currentFields[i];

            if(f.getStatus()) invalid.push(f);
        }

        return invalid;
    },

    /**
     * Get form status
     *
     * @public
     * @returns {Boolean}
     */
    getState : function() {
        var currentFields = this.getFields();

        for(var i = 0, l = currentFields.length; i < l; i++) {
            if(currentFields[i].getStatus()) return false;
        }

        return true;
    },

    /**
     * Check form validaty state
     *
     * @public
     * @returns {Promise}
     */
    checkValidity : function() {
        var fields = this.getFields();

        return Vow.all(fields.map(function(field) {
                return field.checkValidity();
            }));
        // this._updateView();
    },

    /**
     * Update form modifier `invalid` according to current validity state.
     * This method can be overriden in projects based on `bem-forms`
     *
     * @protected
     */
    _updateView : function() {
        this.toggleMod('validity-state', 'invalid', Boolean(this.getStatus()));
    }

}, {
    live : false
});

provide(Form);

});
