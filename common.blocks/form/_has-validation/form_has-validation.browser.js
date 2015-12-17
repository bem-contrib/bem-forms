/**
 * @module form
 */
modules.define('form',
    function(provide, Form) {
/**
 * Form block
 */
Form.decl({ block : this.name, modName : 'has-validation', modVal : true }, /** @lends form.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.bindTo('submit', function(e) {
                    this._onSubmit(e);
                });

                this._initVal = this.getVal();
                this._status = this.getStatus();
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
        this.emit('submit', this.getVal());
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
     * @returns {String|Boolean}
     */
    getStatus : function() {
        var currentFields = this.getFields();

        for(var i = 0, l = currentFields.length; i < l; i++) {
            if(currentFields[i].getStatus()) return false;
        }

        return true;
    },
    /**
     * Set form status
     *
     * @public
     * @returns {String|Boolean}
     */
    setStatus : function(status) {
        this._status = status;
        this._updateStatus();
        return this._status;
    },
    /**
     * Check form validation state
     *
     * @public
     * @returns {Boolean}
     */
    validate : function() {
        var currentFields = this.getFields();

        for(var i = 0, l = currentFields.length; i < l; i++) {
            currentFields[i].validate();
        }

        this._status = this.getStatus();
        this._updateStatus();
    },

    /**
     * Update form modifier `invalid` according to current validity state.
     * This method can be override in projects based on `bem-forms`
     *
     * @protected
     */
    _updateStatus : function() {
        this.toggleMod('invalid', true, !this.getStatus());
        this.setMessageVal(this._status);
    }

}, {
    live : false
});

provide(Form);

});
