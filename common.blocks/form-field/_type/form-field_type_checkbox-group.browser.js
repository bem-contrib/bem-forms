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
FormField.declMod({ block : this.name, modName : 'type', modVal : 'checkbox-group' }, {}, /** @lends form-field_type_checkbox */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;

        this.__base();
        this._events(CheckboxGroup)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
});

provide(FormField);

});
