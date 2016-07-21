/**
 * @module form-field
 */
modules.define('form-field', ['radio'],
    function(provide, Radio, FormField) {
/**
 * Radio field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ block : this.name, modName : 'type', modVal : 'radio' }, {}, /** @lends form-field_type_radio */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;

        this.__base();
        this._events(Radio)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
});

provide(FormField);

});
