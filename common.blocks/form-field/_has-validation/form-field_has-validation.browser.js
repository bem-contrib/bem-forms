/**
 * @module form-field
 */
modules.define('form-field',
    ['i-bem__dom', 'validation', 'vow'],
    function(provide, BEMDOM, Validation, Vow, FormField) {

/**
 * Field block
 */
FormField.decl({ block : this.name, modName : 'has-validation', modVal : true }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this._state(this.__self.STATE_UNVERIFIED);
                this.on('change', function() {
                    this._state(this.__self.STATE_UNVERIFIED);
                });
            }
        },
        'state' : function(k, v) {
            this.__base.apply(this, arguments);

            this.getControl()
                .setMod(k, v)
                .toggleMod('invalid', true, v === this.__self.STATE_INVALID); // deprecated?

            // TODO: move it out, we don't know about getMessage here,
            // we should listen to 'state' in form-field_message
            this.getMessage()
                .setMod(k, v)
                .toggleMod('invalid', true, v === this.__self.STATE_INVALID);
        }
    },

    /**
     * Helper for work with validation state modifier
     *
     * @private
     */
    _state : function(value) {
        return arguments.length === 0?
            this.getMod('state')
            : this.setMod('state', value);
    },

    /** @type {Validation} Validator instance */
    _validator : null,

    /**
     * Get form-field validator instance
     *
     * @public ?
     * @returns {Object}
     */
    getValidator : function() {
        return this._validator || (this._validator = Validation.create());
    },

    /**
     * Get current form-field status
     *
     * @public
     * @returns {String}
     */
    isValid : function() {
        return this._state() === this.__self.STATE_VALID;
    },

    /** @type {Boolean} Whether checking in progress */
    _inProgress : false,

    /**
     * Validate form-field
     *
     * @public
     * @returns {Boolean}
     */
    checkValidity : function() {
        // prevent parallel checks
        if(this._inProgress) {
            return null;
        }

        return Vow.when(this.getValidator().check(this.getVal()))
            .always(function () {
                this._inProgress = false;
            }, this);
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

        var dfd = Vow.defer(),
            _this = this;

        this._state(this.__self.STATE_INPROGRESS);
        this.checkValidity()
            .then(function(res) {
                _this._state(_this.__self.STATE_VALID);
                dfd.resolve(res);
            })
            .fail(function(err) {
                _this._state(_this.__self.STATE_INVALID);
                dfd.reject(err);
                _this.emit('invalid', err);
            });

        return dfd.promise();
    }

}, {
    STATE_UNVERIFIED : 'unverified',
    STATE_VALID : 'valid',
    STATE_INPROGRESS : 'in-progress',
    STATE_INVALID : 'invalid'
});

provide(FormField);

});
