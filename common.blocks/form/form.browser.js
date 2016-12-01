/**
 * @module form
 */
modules.define('form',
    ['i-bem-dom', 'objects', 'form-field', 'button', 'vow', 'next-tick'],
    function(provide, bemDom, objects, FormField, Button, Vow, nextTick) {
/**
 * Form declaration
 */
provide(bemDom.declBlock(this.name, /** @lends form.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._changeStorage = null;
                this.hasMod('disabled') && this._toggleDisableFields('disabled');

                this._initVal = this.getVal();
                this._status = this.getStatus();
            }
        },

        'disabled' : this._toggleDisableFields
    },
    /**
     * Toggle all fields disabled mod
     */
    _toggleDisableFields : function(modName, modVal) {
        this.getFields().forEach(function(field) {
            field.setMod(modName, modVal);
        });

        var btn = this.findChildBlock({ block : Button, modName : 'type', modVal : 'submit' });
        btn && btn.setMod(modName, modVal);
    },
    /**
     * Bind to fields events
     */
    _bindToFields : function(eventName, fn) {
        this.getFields().forEach(function(field) {
            field._events().on(eventName, fn, this);
        }.bind(this));
    },
    /**
     * Returns all fields inside form
     * @type {Array}
     */
    getFields : function() {
        return this.findChildBlocks(FormField);
    },
    /**
     * Returns field by name
     * Work only with simple names or with camelCase names
     * @param {String} name
     * @returns {Object}
     */
    getFieldByName : function(name) {
        return this.domElem.find('[data-name=' + name + ']').bem(FormField);
    },
    /**
     * Returns serialized form data
     * @returns {Object}
     */
    getVal : function() {
        return this.getFields().reduce(function(res, field) {
            var name = field.getName();
            if(name) res[name] = field.getVal();
            return res;
        }, {});
    },
    /**
     * Fills form fields with passed data
     * @param {Object} [val] - data (params.fillData by default)
     */
    setVal : function(val) {
        var storage = this._changeStorage = {};

        this.getFields().forEach(function(field) {
            field.setVal(val[field.getName()]);
        });

        nextTick(function() {
            if(!objects.isEmpty(storage)) this._emit('change', storage);
            this._changeStorage = null;
        });
    },
    /**
     * Field change event handler
     * @abstract
     * @private
     * @param {Event} event
     */
    _onFieldChange : function() {
        this._emit('change', this.getVal());
    },
    /**
     * Field focus event handler
     * @abstract
     * @private
     * @param {Event} event
     */
    _onFieldFocus : function() {
        this._emit('focus', this.getVal());
    },
    /**
     * onSubmit event handler
     *
     * @private
     * @param {Event} e
     */
    _onSubmit : function(e) {
        e.preventDefault();
        this._emit('submit', this.getVal());
    },
    /**
     * Get all invalid form-fields
     *
     * @public
     * @returns {Promise}
     */
    getInvalidFields : function() {
        var currentFields = this.getFields(),
            invalid = [];

        return Vow.all(currentFields.map(function (field) {
            return field.getStatus();
        })).then(function(fieldsStatuses) {
            for(var i = 0, l = fieldsStatuses.length; i < l; i++) {
                fieldsStatuses[i] !== null && invalid.push(currentFields.get(i));
            }
            return invalid;
        });
    },
    /**
     * Get form status
     *
     * @public
     * @returns {String|Boolean}
     */
    getStatus : function() {
        return this._status;
    },
    /**
     * Set form status
     *
     * @public
     * @returns {String|Boolean}
     */
    setStatus : function(status) {
        this._status = status;
        this._updateStatus(status);
        return this._status;
    },
    /**
     * Check form validation state
     *
     * @public
     * @returns {Promise}
     */
    validate : function() {
        var currentFields = this.getFields();
        return Vow.all(currentFields.map(function(field) {
            return field.validate();
        })).then(function(fieldsStatuses) {
            this._updateStatus(fieldsStatuses);
            return fieldsStatuses;
        }.bind(this));
    },
    /**
     * Update form modifier `invalid` according to current validity state.
     *
     * @protected
     */
    _updateStatus : function(fieldsStatuses) {
        var st;
        if(fieldsStatuses.length) {
            st = this.checkFields(fieldsStatuses);
        } else {
            st = fieldsStatuses;
        }

        this.toggleMod('invalid', true, !st);
        this._status = st;
    },

    checkFields : function (fieldsStatuses) {
        var st = true;
        for(var i = 0, l = fieldsStatuses.length; i < l; i++) {
            if(fieldsStatuses[i] !== null) {
                st = false;
            }
        }

        return st;
    }
}, /** @lends form */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;
        this._domEvents().on('submit', ptp._onSubmit);
        this._events(FormField)
            .on('change', ptp._onFieldChange)
            .on('focus', ptp._onFieldFocus);
    }
}));

});
