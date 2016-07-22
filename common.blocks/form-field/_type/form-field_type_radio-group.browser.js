/**
 * @module form-field
 */
modules.define('form-field', ['radio-group'],
    function(provide, RadioGroup, FormField) {
/**
 * Radio-group field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'type', modVal : 'radio-group' }, {}, /** @lends form-field_type_radio-group */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;
        ptp._controls['radio-group'] = RadioGroup;

        this.__base();
        this._events(RadioGroup)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
});

provide(FormField);

});
