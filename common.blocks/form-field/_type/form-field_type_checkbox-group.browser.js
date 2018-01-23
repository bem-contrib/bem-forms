/**
 * @module form-field
 */
modules.define('form-field', ['checkbox-group'],
    function(provide, CheckboxGroup, FormField) {
/**
 * Checkbox-group field
 *
 * @exports
 * @class form-field
 * @bem
 */
provide(FormField.declMod({ modName : 'type', modVal : 'checkbox-group' }, {

    getControl : function() {
        return this._control || (this._control = this.findChildBlock(CheckboxGroup));
    }

}, /** @lends form-field_type_checkbox */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;

        this.__base();
        this._events(CheckboxGroup)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
}));

});
