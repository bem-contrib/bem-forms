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

                this.hasMod('disabled') && this._toggleDisableFields('disabled');

                this._bindToFields('change', this._onFieldChange);
                this._bindToFields('focus', this._onFieldFocus);
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

        var btn = this.findBlockInside({ block : 'button', modName : 'type', modVal : 'submit' });
        btn && btn.setMod(modName, modVal);
    },
    /**
     * Bind to fields events
     */
    _bindToFields : function(eventName, fn) {
        this.getFields().forEach(function(field) {
            field.on(eventName, fn, this);
        }.bind(this));
    },
    /**
     * Returns all fields inside form
     * @type {FormField[]}
     */
    getFields : function() {
        return this.findBlocksInside('form-field');
    },
    /**
     * Returns field by name
     * Work only with simple names or with camelCase names
     * @type {FormField[]}
     */
    getFieldByName : function(name) {
        console.warn('Method `getFieldByName` work only with simple names or with camelCase names');
        return this.findBlockInside({ block : 'form-field', modName : 'name', modVal : name });
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

        this
            .getFields()
            .forEach(function(field) {
                field.setVal(val[field.getName()]);
            });

        this.nextTick(function() {
            if(!objects.isEmpty(storage)) this.emit('change', storage);
            this._changeStorage = null;
        });
    },
    /**
     * Field change event handler
     * @abstract
     * @private
     * @param {Event} event
     */
    _onFieldChange : function(event) {
        this.emit('change', this.getVal());
    },
    /**
     * Field focus event handler
     * @abstract
     * @private
     * @param {Event} event
     */
    _onFieldFocus : function(event) {
        this.emit('focus', this.getVal());
    }
}));

});
