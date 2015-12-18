/**
 * @module form-field
 */
modules.define('form-field',
    ['i-bem__dom', 'validation'],
    function(provide, BEMDOM, Validation) {
/**
 * Field block
 */
provide(BEMDOM.decl(this.name, /** @lends form-field.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                !this.hasMod('type') && console.warn('Type modifier required for form-field', this);
                !this.hasMod('name') && console.warn('Name required for form-field', this);
                !this.hasMod('message') && console.warn('Message modifier required for form-field', this);

                this._messages = {};

                this.requireDirty();
                this._initVal = this.getVal();
                this._status = this.getStatus();
            }
        },

        'disabled' : function(modName, modVal) {
            this.findBlockInside('label').setMod(modName, modVal);
            this.getControl().setMod(modName, modVal);
        }
    },
    /**
     * Returns field name
     * @returns {String}
     * @public
     */
    getName : function() {
        return this.getMod('name');
    },
    /**
     * Returns field id
     * @returns {String}
     * @public
     */
    getId : function() {
        return this.params.id;
    },
    /**
     * Returns field value
     * @returns {String}
     * @abstract
     */
    getVal : function() {
        return '';
    },
    /**
     * Get form-field validator instance
     *
     * @public
     * @returns {Object}
     */
    getValidator : function() {
        return this._validator || (this._validator = Validation.create());
    },
    /**
     * Get current form-field status
     *
     * @public
     * @returns {Promise}
     */
    getStatus : function() {
        return this.getValidator().check(String(this.getVal()));
    },
    /**
     * Set current form-field status
     *
     * @public
     * @param status
     * @returns {String|Boolean}
     */
    setStatus : function(status) {
        this._status = status;
        this._updateStatus(status);
        return this._status;
    },
    /**
     * Set validation messages in runtime
     * @param messages
     */
    setValidationMessages : function (messages) {
        Object.keys(messages).forEach(function (validator) {
            this.setValidationMessage(validator, messages[validator]);
        }.bind(this));
    },
    setValidationMessage : function (validator, message) {
        this._messages[validator] = this._messages[validator] || {};
        this._messages[validator] = message;
    },
    /**
     * Get validation messages
     * @returns {Object}
     */
    getValidationMessages : function () {
        var msgs = {};
        Object.keys(this._messages).forEach(function (validator) {
            msgs[validator] = validator;
        });
        return msgs;
    },
    getValidationMessage : function (validator) {
        return this._messages[validator]? this._messages[validator] : null;
    },
    /**
     * Require dirty mechanic
     */
    requireDirty : function () {
        this.on('blur', function() {
            this._dirty = this._dirty || (this.getVal() !== this._initVal);
            this.toggleMod('dirty', true, this._dirty);
            this._dirty && this.validate();
        }.bind(this));
    },
    /**
     * Get all dirty fields
     * @returns {Array}
     */
    getDirty : function() {
        return !!this._dirty;
    },
    /**
     * Validate form-field
     * catch field with message
     *
     * @public
     * @returns {Promise}
     */
    validate : function() {
        return this.getStatus().then(function(error) {
            this._updateStatus(error);
            return error;
        }.bind(this));
    },
    /**
     * Update statuses on form-field and elements: control, message
     *
     * @protected
     */
    _updateStatus : function(status) {
        var st = status === null? status : status.message;
        this.toggleMod('invalid', true, Boolean(st));
        this.getControl().toggleMod('invalid', true, Boolean(st));
        this.getMessage().toggleMod('invalid', true, Boolean(st));

        this.setMessageVal(st);
        this._status = status;
    }
}, /** @lends form-field */{
    live : true
}));

});
