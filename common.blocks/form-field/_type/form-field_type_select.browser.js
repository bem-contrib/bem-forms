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
provide(FormField.declMod({ modName : 'type', modVal : 'select' }, {

    getControl : function() {
        return this._control || (this._control = this.findChildBlock(Select));
    }

}, /** @lends form-field_type_checkbox */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;

        this.__base();
        this._events(Select)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
}));

});
