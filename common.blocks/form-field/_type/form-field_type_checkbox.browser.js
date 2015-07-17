/**
 * @module form-field
 */
modules.define('form-field',
function(provide, FormField) {

/**
 * Field type checkbox (flag)
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'type', modVal : 'checkbox' }, /** @lends form-field_type_checkbox.prototype */{

    /**
     * Returns field value if checked or empty string (?)
     * @returns {String}
     */
    getVal : function() {
        var control = this.getControl();
        return control.hasMod('checked')? control.getVal() : '';
    },

    /**
     * Sets checked on if value is truthy or off if falsy
     * @param {String} val значение
     */
    setVal : function(val) {
        this.getControl().setMod('checked', !!val);
    },

    _onControlChange : function(e, data) {
        /**
         * Input data change event
         *
         * @event FormField#change
         * @type {Object}
         */
        this.emit('change', data);
    }
}, /** @lends form-field_type_checkbox */{
    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockInsideEvent({ modName : 'checked', modVal : '*' }, 'checkbox', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'checkbox', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'checkbox', ptp._onControlBlur);
    }
});

provide(FormField);

});
