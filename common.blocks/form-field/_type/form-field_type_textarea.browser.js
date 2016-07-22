/**
 * @module form-field
 */
modules.define('form-field', ['textarea'],
    function(provide, Textarea, FormField) {
/**
 * Textarea field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'type', modVal : 'textarea' }, {}, /** @lends form-field_type_textarea */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;
        ptp._controls['textarea'] = Textarea;

        this.__base();
        this._events(Textarea)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
});

provide(FormField);

});
