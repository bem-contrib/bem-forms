/**
 * @module form
 */
modules.define('form',
    ['i-bem__dom', 'objects'],
    function(provide, BEMDOM, objects) {

/**
 * Form declaration
 */
provide(BEMDOM.decl(this.name, /** @lends form.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._changeStorage = null;
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
        return this.findBlocksInside('form-field');
    },

    /**
     * Return message block
     * @protected
     * @abstract
     */
    getMessage : function() {
        return this._message || (this._message = this.findBlockInside('message'));
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
    live : function () {
        this
            .liveInitOnBlockInsideEvent('change', 'form-field', function (e, data) {
                this._onFieldChange(e.target, e, data);
            })
            .liveInitOnBlockInsideEvent('focus', 'form-field', function (e, data) {
                this._onFieldFocus(e.target, e, data);
            })
            .liveInitOnBlockInsideEvent('blur', 'form-field', function (e, data) {
                this._onFieldBlur(e.target, e, data);
            });

        return this.__base.apply(this, arguments);
    }
}));

});
