/**
 * @module form
 */
modules.define('form',
    ['i-bem__dom', 'form__field', 'objects'],
    function(provide, BEMDOM, FormField, objects) {

/**
 * Form declaration
 */
provide(BEMDOM.decl(this.name, /** @lends form.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                var _this = this;
                this._changeStorage = null;

                this.getFields().forEach(function(field) {
                    field
                        .on('change', _this._onFieldChange.bind(_this, field))
                        .on('focus', _this._onFieldFocus.bind(_this, field))
                        .on('blur', _this._onFieldBlur.bind(_this, field));
                });
            }
        },

        'disabled' : function(modName, modVal) {
            this.getFields().forEach(function(field) {
                field.setMod(modName, modVal);
            });
        }
    },

    /**
     * Returns all fields inside form
     * @type {FormField[]}
     */
    getFields : function() {
        return this.elemInstances('field');
    },

    /**
     * Returns serialized form data
     * @returns {Object}
     */
    getVal : function() {
        return this.getFields().reduce(function(res, field) {
            var name = field.getName();
            name && (res[name] = field.getVal());
            return res;
        }, {});
    },

    /**
     * Fills form fields with passed data
     * @param {Object} [val] - data (params.fillData by default)
     */
    setVal : function(val) {
        var storage = this._changeStorage = {};

        this
            .getFields()
            .forEach(function(field) {
                field.setVal(val[field.getName()]);
            });

        this.nextTick(function() {
            objects.isEmpty(storage) || this.emit('change', storage);
            this._changeStorage = null;
        });
    },

    /**
     * Field change event handler
     * @abstract
     * @private
     * @param {FormField} field
     * @param {Event} event
     * @param {Object} [data]
     */
    _onFieldChange : function(field, event, data) {
        var storage = this._changeStorage || {},
            name = field.getName();

        // Just skip if there is no name
        if(!name) return;

        storage[name] = { event : event, data : data };
        this._changeStorage || this.emit('change', storage);
    },

    /**
     * Field focus event handler
     * @abstract
     * @private
     * @param {FormField} field
     * @param {Event} event
     * @param {Object} [data]
     */
    _onFieldFocus : function() {
        // dummy
    },

    /**
     * Field blur event handler
     * @abstract
     * @private
     * @param {FormField} field
     * @param {Event} event
     * @param {Object} [data]
     */
    _onFieldBlur : function() {
        // dummy
    }
}, /** @lends form */{
    live : true
}));

});
