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
                this.bindTo('submit', this._onSubmit);
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
        this.reportValidity()
            .then(function() {
                _this.domElem.submit();
            });
    },

    /**
     * Update form modifier `invalid` according to current validity state.
     * This method can be overriden in projects based on `bem-forms`
     *
     * @protected
     */
    _updateView : function() {
        this.toggleMod('validity-state', 'invalid', Boolean(this.getStatus()));
    },

    /**
     * Get all invalid form-fields
     *
     * @public
     * @returns {Array.<FormField>}
     */
    getInvalidFields : function() {
        return this.getFields()
            .reduce(function(res, field) {
                if(!field.isValid()) res.push(field);
            }, []);
    },

    /**
     * Returns true if all fields are valid
     *
     * @public
     * @returns {Boolean}
     */
    isValid : function() {
        return this.getFields()
            .every(function(field) {
                return field.isValid();
            });
    },

    /** @type {Boolean} Whether checking in progress */
    _inProgress : false,

    /**
     * Check form validity state
     *
     * @public
     * @returns {Promise}
     */
    checkValidity : function() {
        // prevent parallel checks
        if(this._inProgress) {
            return null;
        }

        var dfd = Vow.defer();

        // uhm... wtf? need specs on this!
        Vow.all(this.getFields().map(function(field) {
                return field.checkValidity()
                    .fail(function(e) {
                        return { error : e };
                    })
                    .always(function() {
                        dfd.notify();
                    });
            }))
            .always(function() {
                this._inProgress = false;
                dfd.resolve();
            }, this);

        return dfd.promise();
    },

    /**
     * Checks form field and reports problems to the user.
     *
     * Returns resolved promise if the field satisfy their validation constraints.
     * Or rejects promise with an error, cancelable invalid events are fired for field
     * and validation problems are reported to the user.
     *
     * @return {Promise}
     */
    reportValidity : function() {
        // prevent parallel reports
        if(this._state() === this.__self.STATE_INPROGRESS) {
            return null;
        }

        var dfr = Vow.defer(),
            _this = this;

        this._state(this.__self.STATE_INPROGRESS);
        this.reportValidity()
            .then(function(res) {
                _this._state(_this.__self.STATE_VALID);
                dfr.resolve(res);
            })
            .fail(function(err) {
                _this._state(_this.__self.STATE_INVALID);
                dfr.reject(err);
            });

        return dfr.promise();
    }

}, {
    live : false
});

provide(Form);

});
