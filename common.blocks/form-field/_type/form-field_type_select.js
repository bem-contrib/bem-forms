/**
 * @module form-field
 */
modules.define('form-field', ['select'],
    function(provide, Select, FormField) {
/**
 * Select field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'type', modVal : 'select' }, {}, /** @lends form-field_type_checkbox */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;
        ptp._controls['select'] = Select;

        this.__base();
        this._events(Select)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
});

provide(FormField);

});
