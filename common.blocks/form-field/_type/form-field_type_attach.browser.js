/**
 * @module form-field
 */
modules.define('form-field', ['attach'],
    function(provide, Attach, FormField) {
/**
 * Attach field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'type', modVal : 'attach' }, {}, /** @lends form-field_type_attach */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;
        ptp._controls['attach'] = Attach;

        this.__base();
        this._events(Attach)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
});

provide(FormField);

});
