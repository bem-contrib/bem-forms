/**
 * @module form-field
 */
modules.define('form-field', ['checkbox'],
    function(provide, Checkbox, FormField) {
/**
 * Checkbox field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'type', modVal : 'checkbox' }, /** @lends form-field_type_checkbox.prototype */{
    /**
     * Returns field value if checked or empty string (?)
     * @returns {String}
     */
    getVal : function() {
        var control = this.getControl();
        return control.hasMod('checked')? control.getVal() : '';
    },
    /**
     * Sets checked on if value is true or off if false
     * @param {String} val значение
     */
    setVal : function(val) {
        this.__base.apply(this, arguments);
        this.getControl().setMod('checked', !!val);
    },
    _onControlChange : function(e, data) {
        /**
         * Input data change event
         *
         * @event FormField#change
         * @type {Object}
         */
        this._emit('change', data);
    }
}, /** @lends form-field_type_checkbox */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;
        ptp._controls['checkbox'] = Checkbox;

        this.__base();
        this._events(Checkbox)
            .on({ modName : 'checked', modVal : '*' }, ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
});

provide(FormField);

});
